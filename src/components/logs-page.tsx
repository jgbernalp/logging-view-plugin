import {
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
import { useLogs } from '../hooks/useLogs';
import { timeRangeOptions } from '../time-range-options';
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

  const restartTimer = (callRefreshImmediately = true) => {
    clearTimer();

    if (delay !== 0) {
      if (callRefreshImmediately) {
        onRefresh?.();
      }
      timer.current = setInterval(() => onRefresh?.(), delay);
    }

    return () => clearTimer();
  };

  React.useEffect(() => restartTimer(), [delay]);

  // Avoid calling refresh immediately when onRefresh callback has changed
  React.useEffect(() => restartTimer(false), [onRefresh]);

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
  const {
    query,
    histogramData,
    histogramError,
    isLoadingLogsData,
    isLoadingMoreLogsData,
    isLoadingHistogramData,
    isStreaming,
    logsData,
    logsError,
    getLogs,
    getMoreLogs,
    hasMoreLogsData,
    getHistogram,
    setQuery,
    severityFilter,
    setSeverityFilter,
    setTimeSpan,
    setIsStreaming,
    timeRange,
    interval,
  } = useLogs({ initialQuery: '{ job =~ ".+" }' });

  const handleToggleStreaming = () => {
    setIsStreaming(!isStreaming);
  };

  const handleLoadMoreData = (lastTimestamp: number) => {
    if (!isLoadingMoreLogsData) {
      getMoreLogs(lastTimestamp);
    }
  };

  const runQuery = () => {
    getLogs();
    getHistogram();
  };

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
              onChange={setTimeSpan}
            />
            <RefreshIntervalDropdown onRefresh={runQuery} />
            <Tooltip content={<div>Refresh</div>}>
              <Button onClick={runQuery} aria-label="Refresh" variant="primary">
                <SyncAltIcon />
              </Button>
            </Tooltip>
          </Flex>
        </Flex>

        <LogsHistogram
          histogramData={histogramData}
          timeRange={timeRange}
          interval={interval}
          isLoading={isLoadingHistogramData}
          error={histogramError}
        />

        <LogsTable
          logsData={logsData}
          isStreaming={isStreaming}
          severityFilter={severityFilter}
          onStreamingToggle={handleToggleStreaming}
          onSeverityChange={setSeverityFilter}
          onLoadMore={handleLoadMoreData}
          isLoading={isLoadingLogsData}
          isLoadingMore={isLoadingMoreLogsData}
          hasMoreLogsData={hasMoreLogsData}
          error={logsError}
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
