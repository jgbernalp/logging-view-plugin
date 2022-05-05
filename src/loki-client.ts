import { QueryRangeResponse } from './logs.types';
import { Severity, severityAbbreviations } from './severity';
import { durationFromTimestamp, notEmptyString } from './value-utils';

// const LOKI_FRONT_END_ENDPOINT = '/api/proxy/logging-view-plugin/loki';
const LOKI_FRONT_END_ENDPOINT = 'http://localhost';
const LOKI_FRONT_END_PORT = 3200;

type QueryRangeParams = {
  query: string;
  start: number;
  end: number;
  severity?: Set<Severity>;
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

export const executeQueryRange = ({
  query,
  start,
  end,
  severity,
}: QueryRangeParams): {
  request: () => Promise<QueryRangeResponse>;
  abort: AbortController['abort'];
} => {
  const abortController = new AbortController();
  const severityFilterExpression =
    severity.size > 0 ? getSeverityFilter(severity) : '';

  const pipeline = [
    'label_format level=lvl',
    'logfmt',
    severityFilterExpression,
  ]
    .filter(notEmptyString)
    .join(' | ');

  const queryWithFilters = `${query} | ${pipeline}`;

  const params = {
    query: queryWithFilters,
    start: String(start * 1000000),
    end: String(end * 1000000),
    limit: '200',
  };

  const serviceUrl = `${LOKI_FRONT_END_ENDPOINT}${
    LOKI_FRONT_END_PORT ? `:${String(LOKI_FRONT_END_PORT)}` : ''
  }`;

  const request = () =>
    fetch(
      `${serviceUrl}/loki/api/v1/query_range?${new URLSearchParams(params)}`,
      {
        headers: { Accept: 'application/json' },
        signal: abortController.signal,
      },
    ).then((response) => response.json());

  return { request, abort: () => abortController.abort() };
};

export const executeHistogramQuery = ({
  query,
  start,
  end,
  interval,
  severity,
}: HistogramQuerParams): {
  request: () => Promise<QueryRangeResponse>;
  abort: AbortController['abort'];
} => {
  const abortController = new AbortController();
  const intervalString = durationFromTimestamp(interval);
  const severityFilterExpression =
    severity.size > 0 ? `${getSeverityFilter(severity)}` : '';

  // TODO parse query to adjust intervals and clean pipeline
  // TODO remove intentionally skip formatting errors
  const pipeline = [
    'label_format level=lvl',
    'logfmt',
    severityFilterExpression,
    '__error__!="LogfmtParserErr"',
  ]
    .filter(notEmptyString)
    .join(' | ');
  const histogramQuery = `sum by (level) (count_over_time(${query} | ${pipeline} [${intervalString}]))`;

  const params = {
    query: histogramQuery,
    start: String(start * 1000000),
    end: String(end * 1000000),
    step: intervalString,
  };

  const serviceUrl = `${LOKI_FRONT_END_ENDPOINT}${
    LOKI_FRONT_END_PORT ? `:${String(LOKI_FRONT_END_PORT)}` : ''
  }`;

  const request = () =>
    fetch(
      `${serviceUrl}/loki/api/v1/query_range?${new URLSearchParams(params)}`,
      {
        headers: { Accept: 'application/json' },
        signal: abortController.signal,
      },
    ).then((response) => response.json());

  return { request, abort: () => abortController.abort() };
};
