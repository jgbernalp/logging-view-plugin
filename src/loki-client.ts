import { QueryRangeResponse } from './logs.types';
import { Severity, severityAbbreviations } from './severity';
import { durationFromTimestamp, notEmptyString } from './value-utils';

const LOKI_ENDPOINT = '/api/proxy/plugin/logging-view-plugin/backend/';

type QueryRangeParams = {
  query: string;
  start: number;
  end: number;
  severity?: Set<Severity>;
  limit?: number;
};

type HistogramQuerParams = {
  query: string;
  start: number;
  end: number;
  interval: number;
  severity?: Set<Severity>;
};

const getSeverityFilter = (severity: Set<Severity>): string => {
  const severityFilters = Array.from(severity).map((group: Severity) => {
    if (group === 'unknown') {
      return '^$';
    }

    return severityAbbreviations[group].join('|');
  });

  return `level=~"${severityFilters.join('|')}"`;
};

class TimeoutError extends Error {
  constructor(url: string, ms: number) {
    super(`Request: ${url} timed out after ${ms}ms.`);
  }
}

type CancellableFetch<T> = { request: () => Promise<T>; abort: () => void };

const cancellableFetch = <T>(
  input: RequestInfo,
  init?: RequestInit & { timeout: number },
): CancellableFetch<T> => {
  const abortController = new AbortController();
  const abort = () => abortController.abort();

  const fetchPromise = fetch(input, {
    ...init,
    headers: { Accept: 'application/json' },
    signal: abortController.signal,
  }).then((response) => response.json());

  const timeout = init?.timeout ?? 30 * 1000;

  if (timeout <= 0) {
    return { request: () => fetchPromise, abort };
  }

  const timeoutPromise = new Promise<T>((_resolve, reject) => {
    setTimeout(
      () => reject(new TimeoutError(input.toString(), timeout)),
      timeout,
    );
  });

  const request = () => Promise.race([fetchPromise, timeoutPromise]);

  return { request, abort };
};

export const executeQueryRange = ({
  query,
  start,
  end,
  severity,
  limit = 200,
}: QueryRangeParams): CancellableFetch<QueryRangeResponse> => {
  const severityFilterExpression =
    severity.size > 0 ? getSeverityFilter(severity) : '';

  const pipelineArray = ['json', severityFilterExpression].filter(
    notEmptyString,
  );
  const pipeline =
    pipelineArray.length > 0 ? `| ${pipelineArray.join(' | ')}` : '';
  const queryWithFilters = `${query} ${pipeline}`;

  const params = {
    query: queryWithFilters,
    start: String(start * 1000000),
    end: String(end * 1000000),
    limit: String(limit),
  };

  return cancellableFetch<QueryRangeResponse>(
    `${LOKI_ENDPOINT}loki/api/v1/query_range?${new URLSearchParams(params)}`,
  );
};

export const executeHistogramQuery = ({
  query,
  start,
  end,
  interval,
  severity,
}: HistogramQuerParams): CancellableFetch<QueryRangeResponse> => {
  const intervalString = durationFromTimestamp(interval);
  const severityFilterExpression =
    severity.size > 0 ? `${getSeverityFilter(severity)}` : '';

  // TODO parse query to adjust intervals and clean pipeline
  // TODO remove intentionally skip formatting errors
  const pipelineArray = [severityFilterExpression].filter(notEmptyString);
  const pipeline =
    pipelineArray.length > 0 ? `| ${pipelineArray.join(' | ')}` : '';

  const histogramQuery = `sum by (level) (count_over_time(${query} ${pipeline} [${intervalString}]))`;

  const params = {
    query: histogramQuery,
    start: String(start * 1000000),
    end: String(end * 1000000),
    step: intervalString,
  };

  return cancellableFetch<QueryRangeResponse>(
    `${LOKI_ENDPOINT}loki/api/v1/query_range?${new URLSearchParams(params)}`,
  );
};
