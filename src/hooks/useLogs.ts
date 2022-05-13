import * as React from 'react';
import {
  isMatrixResult,
  isStreamsResult,
  QueryRangeResponse,
  TimeRange,
} from '../logs.types';
import { executeHistogramQuery, executeQueryRange } from '../loki-client';
import { Severity } from '../severity';
import { timeRangeOptions } from '../time-range-options';

const DEFAULT_TIME_RANGE = '1h';
const DEFAULT_LOGS_LIMIT = 200;

type State = {
  timeSpan: number;
  isLoadingHistogramData: boolean;
  histogramData?: QueryRangeResponse;
  histogramError?: unknown;
  isLoadingLogsData: boolean;
  isLoadingMoreLogsData: boolean;
  logsData?: QueryRangeResponse;
  logsError?: unknown;
  hasMoreLogsData?: boolean;
};

type Action =
  | {
      type: 'histogramRequest';
    }
  | {
      type: 'histogramResponse';
      payload: {
        histogramData: QueryRangeResponse;
        timeSpan: number;
      };
    }
  | {
      type: 'logsRequest';
    }
  | {
      type: 'moreLogsRequest';
    }
  | {
      type: 'logsResponse';
      payload: {
        logsData: QueryRangeResponse;
      };
    }
  | {
      type: 'moreLogsResponse';
      payload: {
        logsData: QueryRangeResponse;
      };
    }
  | {
      type: 'logsError';
      payload: {
        error: unknown;
      };
    }
  | {
      type: 'histogramError';
      payload: {
        error: unknown;
      };
    };

const appendData = (
  response?: QueryRangeResponse,
  nextResponse?: QueryRangeResponse,
): QueryRangeResponse => {
  if (
    response &&
    nextResponse &&
    ((isMatrixResult(response.data) && isMatrixResult(nextResponse.data)) ||
      (isStreamsResult(response.data) && isStreamsResult(nextResponse.data)))
  ) {
    return {
      ...response,
      data: {
        ...response.data,
        result: [...response.data.result, ...nextResponse.data.result],
      } as QueryRangeResponse['data'],
    };
  }

  return response;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'histogramRequest':
      return {
        ...state,
        isLoadingHistogramData: true,
        histogramData: undefined,
        histogramError: undefined,
      };

    case 'histogramResponse':
      return {
        ...state,
        timeSpan: action.payload.timeSpan,
        isLoadingHistogramData: false,
        histogramData: action.payload.histogramData,
      };
    case 'histogramError':
      return {
        ...state,
        isLoadingHistogramData: false,
        histogramError: action.payload.error,
      };
    case 'logsRequest':
      return {
        ...state,
        isLoadingLogsData: true,
        logsData: undefined,
        logsError: undefined,
        hasMoreLogsData: false,
      };
    case 'moreLogsRequest':
      return {
        ...state,
        isLoadingMoreLogsData: true,
        logsError: undefined,
      };
    case 'logsResponse':
      return {
        ...state,
        isLoadingLogsData: false,
        logsData: action.payload.logsData,
        hasMoreLogsData:
          Math.max(
            ...action.payload.logsData.data.result.map(
              (result) => result.values.length,
            ),
          ) >= DEFAULT_LOGS_LIMIT,
      };
    case 'moreLogsResponse':
      return {
        ...state,
        isLoadingMoreLogsData: false,
        logsData: appendData(state.logsData, action.payload.logsData),
        hasMoreLogsData:
          Math.max(
            ...action.payload.logsData.data.result.map(
              (result) => result.values.length,
            ),
          ) >= DEFAULT_LOGS_LIMIT,
      };
    case 'logsError':
      return {
        ...state,
        isLoadingLogsData: false,
        isLoadingMoreLogsData: false,
        logsError: action.payload.error,
      };

    default:
      return state;
  }
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

const defaultTimeSpan = (): number => {
  const defaultSpan = timeRangeOptions.find(
    (item) => item.key === DEFAULT_TIME_RANGE,
  ).span;
  return defaultSpan;
};

export const useLogs = ({
  initialQuery,
  initialTimeSpan = defaultTimeSpan(),
}: {
  initialQuery: string;
  initialTimeSpan?: number;
}) => {
  const [query, setQuery] = React.useState(initialQuery);
  const [isStreaming, setIsStreaming] = React.useState<boolean>(false);
  const [localTimeSpan, setTimeSpan] = React.useState<number>(initialTimeSpan);
  const logsAbort = React.useRef<() => void | undefined>();
  const histogramAbort = React.useRef<() => void | undefined>();
  const [severityFilter, setSeverityFilter] = React.useState<Set<Severity>>(
    new Set<Severity>(),
  );
  const [
    {
      logsData,
      histogramData,
      timeSpan,
      isLoadingHistogramData,
      isLoadingLogsData,
      isLoadingMoreLogsData,
      histogramError,
      logsError,
      hasMoreLogsData,
    },
    dispatch,
  ] = React.useReducer(reducer, {
    timeSpan: initialTimeSpan,
    isLoadingHistogramData: false,
    isLoadingLogsData: false,
    isLoadingMoreLogsData: false,
    hasMoreLogsData: false,
  });

  const getMoreLogs = async (lastTimestamp: number) => {
    try {
      const { start } = timeRangeFromSpan(localTimeSpan);

      dispatch({ type: 'moreLogsRequest' });

      if (logsAbort.current) {
        logsAbort.current();
      }

      const { request, abort } = executeQueryRange({
        query,
        start,
        end: lastTimestamp,
        severity: severityFilter,
        limit: DEFAULT_LOGS_LIMIT,
      });

      logsAbort.current = abort;

      const queryResponse = await request();

      dispatch({
        type: 'moreLogsResponse',
        payload: { logsData: queryResponse },
      });
    } catch (error) {
      if (error.name !== 'AbortError') {
        dispatch({ type: 'logsError', payload: { error } });
      }
    }
  };

  const getLogs = async () => {
    try {
      const { start, end } = timeRangeFromSpan(localTimeSpan);

      dispatch({ type: 'logsRequest' });

      if (logsAbort.current) {
        logsAbort.current();
      }

      const { request, abort } = executeQueryRange({
        query,
        start,
        end,
        severity: severityFilter,
        limit: DEFAULT_LOGS_LIMIT,
      });

      logsAbort.current = abort;

      const queryResponse = await request();

      dispatch({ type: 'logsResponse', payload: { logsData: queryResponse } });
    } catch (error) {
      if (error.name !== 'AbortError') {
        dispatch({ type: 'logsError', payload: { error } });
      }
    }
  };

  const getHistogram = async () => {
    try {
      // TODO split on multiple/parallel queries for long timespans and concat results
      const { start, end } = timeRangeFromSpan(localTimeSpan);

      dispatch({ type: 'histogramRequest' });

      if (histogramAbort.current) {
        histogramAbort.current();
      }

      const { request, abort } = executeHistogramQuery({
        query,
        start,
        end,
        severity: severityFilter,
        interval: intervalFromSpan(localTimeSpan),
      });

      histogramAbort.current = abort;

      const histogramResponse = await request();

      dispatch({
        type: 'histogramResponse',
        payload: { histogramData: histogramResponse, timeSpan: localTimeSpan },
      });
    } catch (error) {
      if (error.name !== 'AbortError') {
        dispatch({ type: 'histogramError', payload: { error } });
      }
    }
  };

  React.useEffect(() => {
    getLogs();
    getHistogram();

    return () => {
      if (histogramAbort.current) {
        histogramAbort.current();
      }

      if (logsAbort.current) {
        logsAbort.current();
      }
    };
  }, [severityFilter, localTimeSpan]);

  return {
    query,
    severityFilter,
    logsData,
    isLoadingLogsData,
    isLoadingMoreLogsData,
    isStreaming,
    histogramData,
    isLoadingHistogramData,
    timeSpan,
    setQuery,
    setSeverityFilter,
    setTimeSpan,
    setIsStreaming,
    getLogs,
    getMoreLogs,
    hasMoreLogsData,
    logsError,
    getHistogram,
    histogramError,
    timeRange: timeRangeFromSpan(timeSpan),
    interval: intervalFromSpan(timeSpan),
  };
};
