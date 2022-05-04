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
import { Severity } from 'src/severity';
import { QueryRangeResponse, TimeRange } from '../logs.types';
import { executeHistogramQuery, executeQueryRange } from '../loki-client';
import { LogsHistogram } from './logs-histogram';
import { LogsQueryInput } from './logs-query-input';
import { LogsTable } from './logs-table';

const DEFAULT_TIME_RANGE = '1h';

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
  {
    key: '5m',
    name: 'Last 5 minutes',
    span: 5 * 60 * 1000,
    interval: 60 * 1000,
  },
  {
    key: '15m',
    name: 'Last 15 minutes',
    span: 15 * 60 * 1000,
    interval: 60 * 1000,
  },
  {
    key: '30m',
    name: 'Last 30 minutes',
    span: 30 * 60 * 1000,
    interval: 60 * 1000,
  },
  { key: '1h', name: 'Last 1 hour', span: 60 * 60 * 1000, interval: 60 * 1000 },
  {
    key: '2h',
    name: 'Last 2 hours',
    span: 2 * 60 * 60 * 1000,
    interval: 60 * 1000,
  },
  {
    key: '6h',
    name: 'Last 6 hours',
    span: 6 * 60 * 60 * 1000,
    interval: 60 * 1000,
  },
  {
    key: '12h',
    name: 'Last 12 hours',
    span: 12 * 60 * 60 * 1000,
    interval: 60 * 1000,
  },
  {
    key: '1d',
    name: 'Last 1 day',
    span: 24 * 60 * 60 * 1000,
    interval: 60 * 60 * 1000,
  },
  {
    key: '2d',
    name: 'Last 2 days',
    span: 2 * 24 * 60 * 60 * 1000,
    interval: 60 * 60 * 1000,
  },
  {
    key: '1w',
    name: 'Last 1 week',
    span: 7 * 24 * 60 * 60 * 1000,
    interval: 60 * 60 * 1000,
  },
  {
    key: '2w',
    name: 'Last 2 weeks',
    span: 14 * 24 * 60 * 60 * 1000,
    interval: 60 * 60 * 1000,
  },
];

const defaultTimeSpan = (): number => {
  const defaultSpan = timeRangeOptions.find(
    (item) => item.key === DEFAULT_TIME_RANGE,
  ).span;
  return defaultSpan;
};

const timeRangeFromSpan = (span: number): TimeRange => ({
  start: Date.now() - span,
  end: Date.now(),
});

const intervalFromSpan = (timeSpan: number): number => {
  return (
    timeRangeOptions.find((option) => option.span === timeSpan).interval ??
    60 * 1000
  );
};

interface TimeRangeDropdownProps {
  initialValue?: string;
  onChange?: (offset: number) => void;
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

    const span = timeRangeOptions[index].span;
    onChange?.(span);
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
  const [isLoading, setIsLoading] = React.useState(false);
  const [isStreaming, setIsStreaming] = React.useState(false);
  const [timeSpan, setTimeSpan] = React.useState<number>(defaultTimeSpan);
  const [query, setQuery] = React.useState<string | undefined>(
    '{filename=~".+"}',
  );
  const [severityFilter, setSeverityFilter] = React.useState<Set<Severity>>(
    new Set(),
  );
  const [error, setError] = React.useState<unknown>();
  const [logsData, setLogsData] = React.useState<
    QueryRangeResponse | undefined
  >();
  const [histogramData, setHistogramData] = React.useState<
    QueryRangeResponse | undefined
  >();

  const handleToggleStreaming = () => {
    setIsStreaming(!isStreaming);
  };

  const handleSeverityChange = (severity: Set<Severity>) => {
    setSeverityFilter(severity);
  };

  const handleTimeRangeChange = (span: number) => {
    setTimeSpan(span);
  };

  const runQuery = async () => {
    try {
      const { start, end } = timeRangeFromSpan(timeSpan);

      setIsLoading(true);
      setError(null);

      const queryResponse = await executeQueryRange({
        query,
        start,
        end,
        severity: severityFilter,
      });

      setLogsData(queryResponse);

      const histogramResponse = await executeHistogramQuery({
        query,
        start,
        end,
        severity: severityFilter,
        interval: intervalFromSpan(timeSpan),
      });

      setHistogramData(histogramResponse);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    runQuery();
  }, [timeSpan, severityFilter]);

  return (
    <PageSection>
      <Grid hasGutter>
        <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
          <Title headingLevel="h1" size="lg">
            Logs
          </Title>
          <Flex>
            <TimeRangeDropdown
              initialValue={DEFAULT_TIME_RANGE}
              onChange={handleTimeRangeChange}
            />
            <RefreshIntervalDropdown onRefresh={runQuery} />
            <Tooltip content={<div>Refresh</div>}>
              <Button onClick={runQuery} aria-label="Refresh" variant="primary">
                <SyncAltIcon />
              </Button>
            </Tooltip>
          </Flex>
        </Flex>

        {error && (
          <Alert isInline title="Error" variant="danger">
            {(error as Error).message || String(error)}
          </Alert>
        )}

        <LogsHistogram
          histogramData={histogramData}
          timeRange={timeRangeFromSpan(timeSpan)}
          interval={intervalFromSpan(timeSpan)}
          isLoading={isLoading}
        />

        <LogsTable
          logsData={logsData}
          isStreaming={isStreaming}
          severityFilter={severityFilter}
          onStreamingToggle={handleToggleStreaming}
          onSeverityChange={handleSeverityChange}
          isLoading={isLoading}
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
