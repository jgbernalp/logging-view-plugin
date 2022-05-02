import { QueryRangeResponse } from './logs.types';

// const LOKI_FRONT_END_ENDPOINT = '/api/proxy/logging-view-plugin/loki';
const LOKI_FRONT_END_ENDPOINT = 'http://localhost';
const LOKI_FRONT_END_PORT = 3200;
const ONE_HOUR = 60 * 60 * 1000;

export const executeQueryRange = async ({
  query,
  start = Date.now() - ONE_HOUR,
  end = Date.now(),
}: {
  query: string;
  start?: number;
  end?: number;
}): Promise<QueryRangeResponse> => {
  const params = {
    query,
    start: String(start * 1000000),
    end: String(end * 1000000),
  };

  const serviceUrl = `${LOKI_FRONT_END_ENDPOINT}${
    LOKI_FRONT_END_PORT ? `:${String(LOKI_FRONT_END_PORT)}` : ''
  }`;

  const queryRequest = await fetch(
    `${serviceUrl}/loki/api/v1/query_range?${new URLSearchParams(params)}`,
    { headers: { Accept: 'application/json' } },
  );
  return queryRequest.json();
};

export const executeHistogramQuery = async ({
  query,
  interval = '1m',
  step = '1m',
  start = Date.now() - ONE_HOUR,
  end = Date.now(),
}: {
  query: string;
  interval?: string;
  step?: string;
  start?: number;
  end?: number;
}): Promise<QueryRangeResponse> => {
  // TODO parse query to adjust intervals
  // TODO remove intentionally skip formatting errors
  const histogramQuery = `sum by (level) (count_over_time(${query} | logfmt | __error__!="LogfmtParserErr" [${interval}])) `;

  const params = {
    query: histogramQuery,
    start: String(start * 1000000),
    end: String(end * 1000000),
    step,
  };

  const serviceUrl = `${LOKI_FRONT_END_ENDPOINT}${
    LOKI_FRONT_END_PORT ? `:${String(LOKI_FRONT_END_PORT)}` : ''
  }`;

  const queryRequest = await fetch(
    `${serviceUrl}/loki/api/v1/query_range?${new URLSearchParams(params)}`,
    { headers: { Accept: 'application/json' } },
  );
  return queryRequest.json();
};
