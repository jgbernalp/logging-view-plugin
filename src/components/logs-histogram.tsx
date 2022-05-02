import {
  Chart,
  ChartAxis,
  ChartBar,
  ChartStack,
  ChartTooltip,
  getResizeObserver,
} from '@patternfly/react-charts';
import { Card, CardBody } from '@patternfly/react-core';
import chartGrayColor from '@patternfly/react-tokens/dist/esm/chart_color_black_200';
import chartBlueColor from '@patternfly/react-tokens/dist/esm/chart_color_blue_200';
import chartCyanColor from '@patternfly/react-tokens/dist/esm/chart_color_cyan_200';
import chartYellowColor from '@patternfly/react-tokens/dist/esm/chart_color_gold_200';
import chartGreenColor from '@patternfly/react-tokens/dist/esm/chart_color_green_200';
import chartPurpleColor from '@patternfly/react-tokens/dist/esm/chart_color_purple_200';
import chartRedColor from '@patternfly/react-tokens/dist/esm/chart_color_red_200';
import * as React from 'react';
import { DateFormat, dateToFormat } from '../date-utils';
import { useDebounce } from '../hooks/useDebounce';
import { isMatrixResult, MetricValue, QueryRangeResponse } from '../logs.types';

interface LogHistogramProps {
  histogramData?: QueryRangeResponse;
  ariaDesc?: string;
  ariaTitle?: string;
}

type HistogramGroup =
  | 'critical'
  | 'error'
  | 'warning'
  | 'info'
  | 'debug'
  | 'trace'
  | 'unknown';

type HistogramData = Record<HistogramGroup, Array<MetricValue>>;

const criticalAbbreviations = ['emerg', 'fatal', 'alert', 'crit', 'critical'];
const errorAbbreviations = ['err', 'error', 'eror'];
const warningAbbreviations = ['warn', 'warning'];
const infoAbbreviations = ['inf', 'info', 'information', 'notice'];
const debugAbbreviations = ['debug', 'dbug'];
const traceAbbreviations = ['trace'];

const aggregateMetricsLogData = (
  response?: QueryRangeResponse,
): { data: HistogramData; groupsCount: number } => {
  const critical: Array<MetricValue> = [];
  const error: Array<MetricValue> = [];
  const warning: Array<MetricValue> = [];
  const info: Array<MetricValue> = [];
  const debug: Array<MetricValue> = [];
  const trace: Array<MetricValue> = [];
  const unknown: Array<MetricValue> = [];

  const resultHasAbreviation = (
    result: Record<string, string>,
    abbreviation: Array<string>,
  ): boolean => result.level && abbreviation.includes(result.level);

  if (isMatrixResult(response?.data)) {
    for (const logData of response.data.result) {
      if (resultHasAbreviation(logData.metric, criticalAbbreviations)) {
        critical.push(...logData.values);
      } else if (resultHasAbreviation(logData.metric, errorAbbreviations)) {
        error.push(...logData.values);
      } else if (resultHasAbreviation(logData.metric, warningAbbreviations)) {
        warning.push(...logData.values);
      } else if (resultHasAbreviation(logData.metric, infoAbbreviations)) {
        info.push(...logData.values);
      } else if (resultHasAbreviation(logData.metric, debugAbbreviations)) {
        debug.push(...logData.values);
      } else if (resultHasAbreviation(logData.metric, traceAbbreviations)) {
        trace.push(...logData.values);
      } else {
        unknown.push(...logData.values);
      }
    }
  }

  const numberOfGroups = Math.max(
    critical.length,
    error.length,
    warning.length,
    info.length,
    debug.length,
    trace.length,
    unknown.length,
  );

  return {
    data: { critical, error, warning, info, debug, trace, unknown },
    groupsCount: numberOfGroups,
  };
};

type ChartData = {
  x: string;
  y: number;
  name: string;
  label: string;
};

type HistogramChart = Record<HistogramGroup, Array<ChartData>>;

const metricValueToChartData = (
  group: HistogramGroup,
  value: Array<MetricValue>,
): Array<ChartData> =>
  value.map((metric) => {
    const time = parseFloat(String(metric[0]));
    const formattedTime = dateToFormat(time * 1000, DateFormat.TimeShort);

    return {
      x: formattedTime,
      y: parseInt(String(metric[1]), 10),
      name: group,
      label: `${formattedTime} ${group}: ${metric[1]}`,
    };
  });

const getChartsData = (data: HistogramData): HistogramChart => {
  const charts: HistogramChart = {} as HistogramChart;

  Object.keys(data).forEach((group: HistogramGroup) => {
    charts[group] = metricValueToChartData(group, data[group]);
  });

  return charts;
};

const getGroupColor = (group: HistogramGroup): string => {
  switch (group) {
    case 'critical':
      return chartPurpleColor.value;
      break;
    case 'error':
      return chartRedColor.value;
      break;
    case 'warning':
      return chartYellowColor.value;
      break;
    case 'info':
      return chartGreenColor.value;
      break;
    case 'debug':
      return chartBlueColor.value;
      break;
    case 'trace':
      return chartCyanColor.value;
      break;
    default:
      return chartGrayColor.value;
  }
};

const GRAPH_HEIGHT = 150;
const LEFT_PADDING = 60;
const START_DOMAIN_PADDING = 8;
const END_DOMAIN_PADDING = 8;

const SORTED_CHART_GROUPS: Array<HistogramGroup> = [
  'unknown',
  'trace',
  'info',
  'debug',
  'warning',
  'error',
  'critical',
];

export const LogsHistogram: React.FC<LogHistogramProps> = ({
  histogramData,
  ariaDesc = 'Logs Histogram',
  ariaTitle = 'Logs Historgam',
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = React.useState(0);
  const debouncedWidth = useDebounce(width);

  const handleResize = () => {
    if (containerRef.current?.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  React.useEffect(() => {
    const observer = containerRef.current
      ? getResizeObserver(containerRef.current, handleResize)
      : undefined;
    return () => observer?.();
  }, []);

  const groupsCharts = React.useMemo(() => {
    const { data, groupsCount } = aggregateMetricsLogData(histogramData);
    const chartsData = getChartsData(data);

    console.log({ chartsData });

    // TODO Calculate ticks based on selected range
    const ticksArray: Array<string> = Object.keys(chartsData).flatMap(
      (key: HistogramGroup) => chartsData[key].map((it) => it.x),
    );

    const ticks = Array.from(new Set(ticksArray));

    const graphWidth =
      debouncedWidth - LEFT_PADDING - START_DOMAIN_PADDING - END_DOMAIN_PADDING;

    const availableGroups = SORTED_CHART_GROUPS.filter(
      (group: HistogramGroup) =>
        chartsData && chartsData[group] && chartsData[group].length > 0,
    );

    const barWidth = Math.min(50, graphWidth / groupsCount - 4);

    const charts = availableGroups.map(
      (group: HistogramGroup, index: number) => (
        <ChartBar
          key={`${group}-${index}`}
          barWidth={barWidth}
          data={chartsData[group]}
          style={{ data: { fill: getGroupColor(group) } }}
          labelComponent={<ChartTooltip constrainToVisibleArea />}
        />
      ),
    );

    return {
      ticks,
      charts,
      availableGroups,
    };
  }, [histogramData, debouncedWidth]);

  return (
    <Card>
      <CardBody>
        <div ref={containerRef} style={{ height: GRAPH_HEIGHT }}>
          <Chart
            ariaDesc={ariaDesc}
            ariaTitle={ariaTitle}
            height={GRAPH_HEIGHT}
            padding={{
              bottom: 70,
              left: LEFT_PADDING,
              right: 20,
              top: 20,
            }}
            width={width}
            legendData={groupsCharts.availableGroups.map((group) => ({
              name: group,
              symbol: { fill: getGroupColor(group) },
            }))}
            legendPosition="bottom"
          >
            <ChartAxis tickValues={groupsCharts.ticks} fixLabelOverlap />
            <ChartAxis tickCount={3} dependentAxis showGrid />
            <ChartStack
              domainPadding={{ x: [START_DOMAIN_PADDING, END_DOMAIN_PADDING] }}
            >
              {groupsCharts.charts}
            </ChartStack>
          </Chart>
        </div>
      </CardBody>
    </Card>
  );
};
