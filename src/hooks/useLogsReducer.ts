import * as React from 'react';
import { executeHistogramQuery, executeQueryRange } from '../loki-client';
import { QueryRangeResponse, TimeRange } from '../logs.types';
import { Severity } from '../severity';

type State = {
  timeSpan: number;
  logsData?: QueryRangeResponse;
  histogramData?: QueryRangeResponse;
};

type Action =
  | {
      type: 'logsResponse';
      payload: { logsData: QueryRangeResponse };
    }
  | {
      type: 'histogramResponse';
      payload: { histogramData: QueryRangeResponse; timeSpan: number };
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'logsResponse':
      return {
        ...state,
        logsData: action.payload.logsData,
      };
    case 'histogramResponse':
      return {
        ...state,
        timeSpan: action.payload.timeSpan,
        histogramData: action.payload.histogramData,
      };
    default:
      return state;
  }
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
    interval: 5 * 60 * 1000,
  },
  {
    key: '12h',
    name: 'Last 12 hours',
    span: 12 * 60 * 60 * 1000,
    interval: 10 * 60 * 1000,
  },
  {
    key: '1d',
    name: 'Last 1 day',
    span: 24 * 60 * 60 * 1000,
    interval: 15 * 60 * 1000,
  },
  {
    key: '2d',
    name: 'Last 2 days',
    span: 2 * 24 * 60 * 60 * 1000,
    interval: 30 * 60 * 1000,
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

export const useLogsReducer = ({
  initialQuery,
  initialTimeSpan,
}: {
  initialQuery: string;
  initialTimeSpan: number;
}) => {
  const [query, setQuery] = React.useState(initialQuery);
  const [error, setError] = React.useState<unknown>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [localTimeSpan, setTimeSpan] = React.useState<number>(initialTimeSpan);
  const [severityFilter, setSeverityFilter] = React.useState<Set<Severity>>(
    new Set<Severity>(),
  );
  const [{ histogramData, logsData, timeSpan }, dispatch] = React.useReducer(
    reducer,
    { timeSpan: initialTimeSpan },
  );

  const runQuery = async () => {
    try {
      const { start, end } = timeRangeFromSpan(localTimeSpan);

      setIsLoading(true);
      setError(null);

      const queryResponse = await executeQueryRange({
        query,
        start,
        end,
        severity: severityFilter,
      });

      dispatch({ type: 'logsResponse', payload: { logsData: queryResponse } });

      const histogramResponse = await executeHistogramQuery({
        query,
        start,
        end,
        severity: severityFilter,
        interval: intervalFromSpan(localTimeSpan),
      });

      dispatch({
        type: 'histogramResponse',
        payload: { histogramData: histogramResponse, timeSpan: localTimeSpan },
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    runQuery();
  }, [timeSpan, severityFilter]);

  return {
    error,
    isLoading,
    histogramData,
    logsData,
    timeSpan,
    setQuery,
    setSeverityFilter,
    setTimeSpan,
    runQuery,
  };
};
