import {
  Chart,
  ChartAxis,
  ChartBar,
  ChartLegendTooltip,
  ChartLegendTooltipProps,
  ChartStack,
  ChartVoronoiContainer,
  getResizeObserver,
} from '@patternfly/react-charts';
import { Card, CardBody, Flex, FlexItem } from '@patternfly/react-core';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import warningColor from '@patternfly/react-tokens/dist/esm/global_warning_color_100';
import * as React from 'react';
import { DateFormat, dateToFormat } from '../date-utils';
import {
  isMatrixResult,
  MetricValue,
  QueryRangeResponse,
  TimeRange,
} from '../logs.types';
import { getSeverityColor, Severity, severityAbbreviations } from '../severity';
import { valueWithScalePrefix } from '../value-utils';
import './logs-histogram.css';

const GRAPH_HEIGHT = 130;
const LEFT_PADDING = 50;
const START_DOMAIN_PADDING = 8;
const END_DOMAIN_PADDING = 8;
const BOTTOM_PADDING = 50;
const TOP_PADDING = 10;

const SORTED_CHART_GROUPS: Array<Severity> = [
  'unknown',
  'trace',
  'info',
  'debug',
  'warning',
  'error',
  'critical',
];

type ChartData = {
  x: number;
  y: number;
  name: string;
  label: string;
};

type HistogramChartData = Record<Severity, Array<ChartData>>;
type HistogramData = Record<Severity, Array<MetricValue>>;

interface LogHistogramProps {
  histogramData?: QueryRangeResponse;
  timeRange: TimeRange;
  interval?: number;
  isLoading?: boolean;
}

const resultHasAbreviation = (
  result: Record<string, string>,
  abbreviation: Array<string>,
): boolean => result.level && abbreviation.includes(result.level);

const aggregateMetricsLogData = (
  response?: QueryRangeResponse,
): HistogramData => {
  const histogramData: HistogramData = {
    critical: [],
    error: [],
    warning: [],
    info: [],
    debug: [],
    trace: [],
    unknown: [],
  };

  if (isMatrixResult(response?.data)) {
    for (const logData of response.data.result) {
      let logDataIngroup = false;
      for (const [group, abbreviations] of Object.entries(
        severityAbbreviations,
      )) {
        if (resultHasAbreviation(logData.metric, abbreviations)) {
          histogramData[group as Severity].push(...logData.values);
          logDataIngroup = true;
          break;
        }
      }

      if (!logDataIngroup) {
        histogramData.unknown.push(...logData.values);
      }
    }
  }

  return histogramData;
};

const metricValueToChartData = (
  group: Severity,
  value: Array<MetricValue>,
): Array<ChartData> =>
  value.map((metric) => {
    const time = parseFloat(String(metric[0])) * 1000;
    const formattedTime = dateToFormat(time, DateFormat.TimeShort);

    return {
      x: time,
      y: parseInt(String(metric[1]), 10),
      name: group,
      label: `${formattedTime} ${group}: ${metric[1]}`,
    };
  });

const getChartsData = (data: HistogramData): HistogramChartData => {
  const charts: HistogramChartData = {} as HistogramChartData;

  Object.keys(data).forEach((group: Severity) => {
    charts[group] = metricValueToChartData(group, data[group]);
  });

  return charts;
};

const getTicksFromTimeRange = (
  timeRange: TimeRange,
  interval: number,
): Array<number> => {
  const units = Math.floor((timeRange.end - timeRange.start) / interval);

  const ticksArray = Array.from({ length: units + 1 })
    .fill('')
    .map((_, index) => timeRange.start + index * interval);

  return ticksArray;
};

const HistogramTooltip: React.FC<ChartLegendTooltipProps> = ({ ...props }) => {
  const {
    center: { x },
    height,
  } = props;

  if (x === undefined && height === undefined) {
    return null;
  }

  return (
    <>
      <ChartLegendTooltip
        {...props}
        title={(datum: ChartData) =>
          dateToFormat(datum.x, DateFormat.TimeShort)
        }
        constrainToVisibleArea
      />
      <line
        className="co-logs-histogram__tooltip-line"
        x1={x}
        x2={x}
        y1={TOP_PADDING}
        y2={height - BOTTOM_PADDING}
      />
    </>
  );
};

const CenteredContainer: React.FC = ({ children }) => {
  return (
    <Flex
      justifyContent={{ default: 'justifyContentCenter' }}
      alignContent={{ default: 'alignContentCenter' }}
      style={{ height: '100%' }}
    >
      <FlexItem>{children}</FlexItem>
    </Flex>
  );
};

export const LogsHistogram: React.FC<LogHistogramProps> = ({
  histogramData,
  timeRange,
  isLoading,
  interval = 60 * 1000,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = React.useState<number>(0);

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
    if (!histogramData || histogramData.data.result.length === 0) {
      return { ticks: [], charts: null, availableGroups: [] };
    }

    const data = aggregateMetricsLogData(histogramData);
    const chartsData = getChartsData(data);

    const ticks: Array<number> = getTicksFromTimeRange(timeRange, interval);

    const availableGroups = SORTED_CHART_GROUPS.filter(
      (group: Severity) =>
        chartsData && chartsData[group] && chartsData[group].length > 0,
    );

    const charts = availableGroups.map((group: Severity, index: number) => (
      <ChartBar
        key={`${group}-${index}`}
        data={chartsData[group]}
        name={group}
        barWidth={(width / ticks.length) * 0.8}
        style={{ data: { fill: getSeverityColor(group) } }}
        labelComponent={<g />}
      />
    ));

    return {
      ticks,
      charts,
      availableGroups,
    };
  }, [histogramData, timeRange, interval, width]);

  const legendData = React.useMemo(
    () =>
      groupsCharts.availableGroups.map((group) => ({
        name: group,
        childName: group,
        symbol: { fill: getSeverityColor(group) },
      })),
    [groupsCharts.availableGroups],
  );

  const dataIsEmpty = histogramData?.data.result.length === 0;

  return (
    <Card>
      <CardBody>
        <div ref={containerRef} style={{ height: GRAPH_HEIGHT }}>
          {isLoading ? (
            <CenteredContainer>Loading...</CenteredContainer>
          ) : dataIsEmpty ? (
            <CenteredContainer>
              <ExclamationTriangleIcon
                color={warningColor.value}
                title="No datapoints found"
              />{' '}
              No datapoints found
            </CenteredContainer>
          ) : histogramData ? (
            <Chart
              height={GRAPH_HEIGHT}
              padding={{
                top: TOP_PADDING,
                bottom: BOTTOM_PADDING,
                left: LEFT_PADDING,
                right: 20,
              }}
              domain={{ x: [timeRange.start, timeRange.end] }}
              scale={{ x: 'time', y: 'linear' }}
              containerComponent={
                <ChartVoronoiContainer
                  activateData={false}
                  labels={({ datum }: { datum: ChartData }) =>
                    `${datum.y !== null ? datum.y : 'no data'}`
                  }
                  labelComponent={<HistogramTooltip legendData={legendData} />}
                  voronoiDimension="x"
                  voronoiPadding={0}
                />
              }
              width={width}
              domainPadding={10}
            >
              <ChartAxis
                tickValues={groupsCharts.ticks}
                fixLabelOverlap
                tickFormat={(tick: number) =>
                  dateToFormat(tick, DateFormat.TimeShort)
                }
              />
              <ChartAxis
                tickCount={2}
                dependentAxis
                tickFormat={valueWithScalePrefix}
              />
              <ChartStack
                domainPadding={{
                  x: [START_DOMAIN_PADDING, END_DOMAIN_PADDING],
                }}
              >
                {groupsCharts.charts}
              </ChartStack>
            </Chart>
          ) : (
            <div>No data</div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
