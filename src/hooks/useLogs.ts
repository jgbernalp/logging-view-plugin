import * as React from 'react';
import { QueryRangeResponse, TimeRange } from '../logs.types';
import { executeHistogramQuery, executeQueryRange } from '../loki-client';
import { Severity } from '../severity';
import { timeRangeOptions } from '../time-range-options';

const DEFAULT_TIME_RANGE = '1h';

type State = {
  timeSpan: number;
  isLoadingHistogramData: boolean;
  histogramData?: QueryRangeResponse;
  histogramError?: unknown;
  isLoadingLogsData: boolean;
  logsData?: QueryRangeResponse;
  logsError?: unknown;
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
      type: 'logsResponse';
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
      };
    case 'logsResponse':
      return {
        ...state,
        isLoadingLogsData: false,
        logsData: action.payload.logsData,
      };
    case 'logsError':
      return {
        ...state,
        isLoadingLogsData: false,
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
  const [error, setError] = React.useState<unknown>();
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
    },
    dispatch,
  ] = React.useReducer(reducer, {
    timeSpan: initialTimeSpan,
    isLoadingHistogramData: false,
    isLoadingLogsData: false,
  });

  const getLogs = async () => {
    try {
      const { start, end } = timeRangeFromSpan(localTimeSpan);

      dispatch({ type: 'logsRequest' });
      setError(null);

      if (logsAbort.current) {
        logsAbort.current();
      }

      const { request, abort } = executeQueryRange({
        query,
        start,
        end,
        severity: severityFilter,
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
    error,
    query,
    severityFilter,
    logsData,
    isLoadingLogsData,
    isStreaming,
    histogramData,
    isLoadingHistogramData,
    timeSpan,
    setQuery,
    setSeverityFilter,
    setTimeSpan,
    setIsStreaming,
    getLogs,
    getHistogram,
    timeRange: timeRangeFromSpan(timeSpan),
    interval: intervalFromSpan(timeSpan),
  };
};
