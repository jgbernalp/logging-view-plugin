import {
  Alert,
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  Flex,
  FormGroup,
  Grid,
  PageSection,
  Title,
  Tooltip,
} from '@patternfly/react-core';
import { SyncAltIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { QueryRangeResponse } from '../logs.types';
import { executeHistogramQuery, executeQueryRange } from '../loki-client';
import { LogsQueryInput } from './logs-query-input';
import { LogsHistogram } from './logs-histogram';
import { LogsTable } from './logs-table';

const refreshIntervalOptions = [
  { key: 'OFF_KEY', name: 'Refresh off', delay: 0 },
  { key: '15s', name: '15 seconds', delay: 15 * 1000 },
  { key: '30s', name: '30 seconds', delay: 30 * 1000 },
  { key: '1m', name: '1 minute', delay: 60 * 1000 },
  { key: '5m', name: '5 minutes', delay: 5 * 60 * 1000 },
  { key: '15m', name: '15 minutes', delay: 15 * 60 * 1000 },
  { key: '30m', name: '30 minutes', delay: 30 * 60 * 1000 },
  { key: '1h', name: '1 hour', delay: 60 * 60 * 1000 },
  { key: '2h', name: '2 hours', delay: 2 * 60 * 60 * 1000 },
  { key: '1d', name: '1 day', delay: 24 * 60 * 60 * 1000 },
];

interface RefreshIntervalDropdownProps {
  onRefresh?: () => void;
}

const RefreshIntervalDropdown: React.FC<RefreshIntervalDropdownProps> = ({
  onRefresh,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [delay, setDelay] = React.useState<number>(0);
  const timer = React.useRef<NodeJS.Timer | null>(null);

  const clearTimer = () => {
    if (timer) {
      clearInterval(timer.current);
    }
  };

  const handleSelectedValue = (index: number) => () => {
    setIsOpen(false);
    setSelectedIndex(index);
    const selectedDelay = refreshIntervalOptions[index].delay;
    setDelay(selectedDelay);
  };

  React.useEffect(() => {
    clearTimer();

    if (delay !== 0) {
      onRefresh?.();
      timer.current = setInterval(() => onRefresh?.(), delay);
    }

    return () => clearTimer();
  }, [delay]);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FormGroup fieldId="logs-refresh-interval">
      <Dropdown
        dropdownItems={refreshIntervalOptions.map(({ key, name }, index) => (
          <DropdownItem
            componentID={key}
            onClick={handleSelectedValue(index)}
            key={key}
          >
            {name}
          </DropdownItem>
        ))}
        isOpen={isOpen}
        toggle={
          <DropdownToggle onToggle={toggleIsOpen}>
            {refreshIntervalOptions[selectedIndex].name}
          </DropdownToggle>
        }
      />
    </FormGroup>
  );
};

const timeRangeOptions = [
  // TODO allow custom time range with calendar selector
  // { key: 'CUSTOM', name: 'Custom time range' },
  { key: '5m', name: 'Last 5 minutes', difference: 5 * 60 * 1000 },
  { key: '15m', name: 'Last 15 minutes', difference: 15 * 60 * 1000 },
  { key: '30m', name: 'Last 30 minutes', difference: 30 * 60 * 1000 },
  { key: '1h', name: 'Last 1 hour', difference: 60 * 60 * 1000 },
  { key: '2h', name: 'Last 2 hours', difference: 2 * 60 * 60 * 1000 },
  { key: '6h', name: 'Last 6 hours', difference: 6 * 60 * 60 * 1000 },
  { key: '12h', name: 'Last 12 hours', difference: 12 * 60 * 60 * 1000 },
  { key: '1d', name: 'Last 1 day', difference: 24 * 60 * 60 * 1000 },
  { key: '2d', name: 'Last 2 days', difference: 2 * 24 * 60 * 60 * 1000 },
  { key: '1w', name: 'Last 1 week', difference: 7 * 24 * 60 * 60 * 1000 },
  { key: '2w', name: 'Last 2 weeks', difference: 7 * 24 * 60 * 60 * 1000 },
];

type TimeRange = { start: number; end: number };

interface TimeRangeDropdownProps {
  initialValue?: string;
  onChange?: (timeRange: TimeRange) => void;
}

const TimeRangeDropdown: React.FC<TimeRangeDropdownProps> = ({
  onChange,
  initialValue,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(
    timeRangeOptions.findIndex((option) => option.key === initialValue) ?? 1,
  );

  const handleSelectedValue = (index: number) => () => {
    setIsOpen(false);
    setSelectedIndex(index);

    const startDifference = timeRangeOptions[index].difference;

    onChange?.({ start: Date.now() - startDifference, end: Date.now() });
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FormGroup fieldId="logs-time-range">
      <Dropdown
        dropdownItems={timeRangeOptions.map(({ key, name }, index) => (
          <DropdownItem
            componentID={key}
            onClick={handleSelectedValue(index)}
            key={key}
          >
            {name}
          </DropdownItem>
        ))}
        isOpen={isOpen}
        toggle={
          <DropdownToggle onToggle={toggleIsOpen}>
            {timeRangeOptions[selectedIndex].name}
          </DropdownToggle>
        }
      />
    </FormGroup>
  );
};

const LogsPage: React.FunctionComponent = () => {
  const [isStreaming, setIsStreaming] = React.useState(false);
  const [timeRange, setTimeRange] = React.useState<TimeRange | undefined>();
  const [query, setQuery] = React.useState<string | undefined>(
    '{filename=~".+"}',
  );
  const [error, setError] = React.useState<any>();
  const [logsData, setLogsData] = React.useState<
    QueryRangeResponse | undefined
  >();
  const [histogramData, setHistogramData] = React.useState<
    QueryRangeResponse | undefined
  >();

  const handleToggleStreaming = () => {
    setIsStreaming(!isStreaming);
  };

  const runQuery = () => {
    // TODO display errors
    executeQueryRange({ query, start: timeRange?.start, end: timeRange?.end })
      .then((queryResponse) => {
        setLogsData(queryResponse);

        executeHistogramQuery({
          query,
          start: timeRange?.start,
          end: timeRange?.end,
        })
          .then((response) => setHistogramData(response))
          .catch((err) => console.error('Histogram query error', err));
      })
      .catch((err) => setError(err));
  };

  // TODO: Include severity filters
  React.useEffect(() => runQuery(), [timeRange, query]);

  return (
    <PageSection>
      <Grid hasGutter>
        <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
          <Title headingLevel="h1" size="lg">
            Logs
          </Title>
          <Flex>
            <TimeRangeDropdown initialValue="30m" onChange={setTimeRange} />
            <RefreshIntervalDropdown onRefresh={runQuery} />
            <Tooltip content={<div>Refresh</div>}>
              <Button onClick={runQuery} aria-label="Refresh" variant="primary">
                <SyncAltIcon />
              </Button>
            </Tooltip>
          </Flex>
        </Flex>

        {error && (
          <Alert title="Error" variant="danger">
            {error.message}
          </Alert>
        )}

        <LogsHistogram histogramData={histogramData} />

        <LogsTable
          logsData={logsData}
          isStreaming={isStreaming}
          onToggleStreaming={handleToggleStreaming}
        >
          <LogsQueryInput
            initialValue={query}
            onRun={runQuery}
            onChange={setQuery}
          />
        </LogsTable>
      </Grid>
    </PageSection>
  );
};

export default LogsPage;
