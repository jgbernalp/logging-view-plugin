import { Grid, PageSection } from '@patternfly/react-core';
import * as React from 'react';
import { useParams } from 'react-router';
import { LogsQueryInput } from '../components/logs-query-input';
import { LogsTable } from '../components/logs-table';
import { useLogs } from '../hooks/useLogs';

const LogsDetailPage: React.FunctionComponent = () => {
  const { name: podname } = useParams<{ name: string }>();

  const {
    query,
    isLoadingLogsData,
    isLoadingMoreLogsData,
    isStreaming,
    logsData,
    logsError,
    getLogs,
    getMoreLogs,
    hasMoreLogsData,
    setQuery,
    severityFilter,
    setSeverityFilter,
    toggleStreaming,
  } = useLogs({ initialQuery: `{ kubernetes_pod_name = "${podname}" }` });

  const handleToggleStreaming = () => {
    toggleStreaming();
  };

  const handleLoadMoreData = (lastTimestamp: number) => {
    if (!isLoadingMoreLogsData) {
      getMoreLogs(lastTimestamp);
    }
  };

  const runQuery = () => {
    getLogs();
  };

  return (
    <PageSection>
      <Grid hasGutter>
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

export default LogsDetailPage;
