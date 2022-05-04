import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import {
  Button,
  Checkbox,
  Select,
  SelectOption,
  SelectOptionObject,
  SelectVariant,
  Split,
  SplitItem,
  Toolbar,
  ToolbarChip,
  ToolbarChipGroup,
  ToolbarContent,
  ToolbarFilter,
  ToolbarGroup,
  ToolbarItem,
  Tooltip,
} from '@patternfly/react-core';
import { ColumnsIcon, ExclamationTriangleIcon } from '@patternfly/react-icons';
import {
  ExpandableRowContent,
  ISortBy,
  TableComposable,
  Tbody,
  Td,
  Th,
  Thead,
  ThProps,
  Tr,
} from '@patternfly/react-table';
import warningColor from '@patternfly/react-tokens/dist/esm/global_warning_color_100';
import * as React from 'react';
import { ColumnManagementModal } from '../console-components/column-management-modal';
import { DateFormat, dateToFormat } from '../date-utils';
import {
  isStreamsResult,
  QueryRangeResponse,
  StreamLogData,
} from '../logs.types';
import { Severity, severityFromString } from '../severity';
import { LogDetail } from './log-detail';
import './logs-table.css';
import { TogglePlay } from './toggle-play';

interface LogsTableProps {
  logsData?: QueryRangeResponse;
  isStreaming?: boolean;
  severityFilter?: Set<Severity>;
  isLoading?: boolean;
  onStreamingToggle?: (e: React.MouseEvent) => void;
  onSeverityChange?: (severityFilter: Set<Severity>) => void;
}

type Resource = {
  type: string;
  id: string;
  link: string;
};

type TableCellValue = string | number | Resource | Array<Resource>;

type LogsTableColumn = {
  title: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  sort?: <T extends TableCellValue>(
    a: T,
    b: T,
    directionMultiplier: number,
  ) => number;
  value: (row: LogTableData) => TableCellValue;
};

type LogTableData = {
  time: string;
  timestamp: number;
  severity: string;
  namespace?: Resource;
  resources?: Array<Resource>;
  message: string;
  data: Record<string, string>;
};

type LogRowProps = {
  data: LogTableData;
  title: string;
  showResources: boolean;
};

const streamToTableData = (value: StreamLogData): LogTableData => {
  const values = value.values[0];
  const message = String(values?.[1]);
  const timestamp = parseFloat(String(values?.[0]));
  const time = timestamp / 1e6;
  const formattedTime = dateToFormat(time, DateFormat.Full);

  return {
    time: formattedTime,
    timestamp,
    message,
    severity: severityFromString(value.stream.level),
    data: value.stream,
  };
};

const aggregateStreamLogData = (
  response?: QueryRangeResponse,
): Array<LogTableData> => {
  // TODO check timestamp aggregation for streams
  // TODO check if display matrix data is required
  if (isStreamsResult(response?.data)) {
    return response.data.result.map(streamToTableData);
  }

  return [];
};

const getSeverityClass = (severity: string) => {
  return severity ? `co-logs-table__severity-${severity}` : '';
};

const fixedColumns: Array<LogsTableColumn> = [
  {
    title: 'Date',
    isDisabled: true,
    isSelected: true,
    value: (row: LogTableData) => row.timestamp,
    // sort with an appropriate numeric comparator for big floats
    sort: (a, b, directionMultiplier) =>
      (a < b ? -1 : a > b ? 1 : 0) * directionMultiplier,
  },
  {
    title: 'Message',
    isDisabled: true,
    isSelected: true,
    value: (row: LogTableData) => row.message,
  },
];

const defaultAdditionalColumns: Array<LogsTableColumn> = [
  {
    title: 'Resources',
    isDisabled: false,
    isSelected: false,
    value: (row: LogTableData) =>
      row.resources.map((resource) => resource.id).join('_'),
    sort: (a, b, directionMultiplier) =>
      a.toString().localeCompare(b.toString()) * directionMultiplier,
  },
  {
    title: 'Namespace',
    isDisabled: false,
    isSelected: false,
    value: (row: LogTableData) => row.namespace.id,
    sort: (a, b, directionMultiplier) =>
      a.toString().localeCompare(b.toString()) * directionMultiplier,
  },
];

const getRowClassName = (index: number): string => {
  switch (index) {
    case 0:
      return 'co-logs-table__time';
    case 1:
      return 'co-logs-table__message';
  }

  return '';
};

const LogRow: React.FC<LogRowProps> = ({ data, title, showResources }) => {
  switch (title) {
    case 'Date':
      return <>{data.time}</>;
    case 'Message':
      return (
        <>
          <div className="co-logs-table__message">{data.message}</div>
          {showResources && (
            <Split className="co-logs-table__resources" hasGutter>
              {data.resources.map((resource) => (
                <SplitItem key={resource.id}>
                  <ResourceLink kind={resource.type} name={resource.id} />
                </SplitItem>
              ))}
            </Split>
          )}
        </>
      );
    case 'Resources':
      return (
        <>
          {data.resources.map((resource) => (
            <ResourceLink
              key={resource.id}
              kind={resource.type}
              name={resource.id}
            />
          ))}
        </>
      );
    case 'Namespace': {
      const namespace = data.namespace;
      return (
        <ResourceLink key={namespace.id} kind="Namespace" name={namespace.id} />
      );
    }
  }

  return null;
};

const availableSeverityFilters: Array<Severity> = [
  'critical',
  'error',
  'warning',
  'debug',
  'info',
  'trace',
  'unknown',
];

export const LogsTable: React.FC<LogsTableProps> = ({
  logsData,
  isStreaming,
  onStreamingToggle,
  severityFilter,
  onSeverityChange,
  isLoading,
  children,
}) => {
  const [expandedItems, setExpandedItems] = React.useState<Set<number>>(
    new Set(),
  );
  const [showResources, setShowResources] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSeverityExpanded, setIsSeverityExpanded] = React.useState(false);
  const [sortBy, setSortBy] = React.useState<ISortBy>({
    index: 0,
    direction: 'desc',
  });
  const [additionalColumns, setAdditionalColumns] = React.useState(
    defaultAdditionalColumns,
  );

  const tableData = React.useMemo(
    () => aggregateStreamLogData(logsData),
    [logsData],
  );

  const handleRowToggle = (_event: React.MouseEvent, rowIndex: number) => {
    if (expandedItems.has(rowIndex)) {
      expandedItems.delete(rowIndex);
      setExpandedItems(new Set(expandedItems));
    } else {
      setExpandedItems(new Set(expandedItems.add(rowIndex)));
    }
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleColumnsSelected = (columns: Array<LogsTableColumn>) => {
    setIsModalOpen(false);
    setSortBy({ index: 0, direction: 'desc' });
    setAdditionalColumns(columns);
  };

  const visibleColumns = React.useMemo(
    () =>
      fixedColumns.concat(
        additionalColumns.filter((column) => column.isSelected),
      ),
    [additionalColumns],
  );

  const getSortParams = (columnIndex: number): ThProps['sort'] => ({
    sortBy,
    onSort: (_event, index, direction) => {
      setExpandedItems(new Set());
      setSortBy({ index, direction, defaultDirection: 'desc' });
    },
    columnIndex,
  });

  const sortedData = React.useMemo(() => {
    if (sortBy.index !== undefined && visibleColumns[sortBy.index]) {
      const { sort, value } = visibleColumns[sortBy.index];
      if (sort) {
        return tableData.sort((a, b) =>
          sort(value(a), value(b), sortBy.direction === 'asc' ? 1 : -1),
        );
      }
    }

    return tableData;
  }, [tableData, visibleColumns, sortBy]);

  const onDeleteSeverityFilter = (
    _category: string | ToolbarChipGroup,
    chip: string | ToolbarChip,
  ) => {
    severityFilter.delete(chip.toString() as Severity);
    onSeverityChange?.(new Set(severityFilter));
  };

  const onDeleteSeverityGroup = () => {
    onSeverityChange(new Set());
  };

  const onSeverityToggle = () => {
    setIsSeverityExpanded(!isSeverityExpanded);
  };

  const onSeveritySelect = (
    _: React.MouseEvent | React.ChangeEvent,
    value: string | SelectOptionObject,
  ) => {
    const severityValue = value.toString() as Severity;
    if (severityFilter.has(severityValue)) {
      severityFilter.delete(severityValue);
    } else {
      severityFilter.add(severityValue);
    }

    onSeverityChange?.(new Set(severityFilter));
  };

  const dataIsEmpty = sortedData.length === 0;
  const hasMoreData = sortedData.length >= 200;

  let rowIndex = 0;

  return (
    <>
      {/* TODO: use ColumnManagementModal from console project */}
      <ColumnManagementModal
        columns={fixedColumns.concat(additionalColumns)}
        isModalOpen={isModalOpen}
        onModalToggle={handleModalToggle}
        onColumnsSelected={handleColumnsSelected}
      />
      <div>
        <Toolbar isSticky clearAllFilters={onDeleteSeverityGroup}>
          <ToolbarContent>
            <ToolbarGroup alignment={{ default: 'alignLeft' }}>
              <ToolbarItem>{children}</ToolbarItem>
            </ToolbarGroup>

            <ToolbarGroup variant="filter-group">
              <ToolbarFilter
                chips={Array.from(severityFilter)}
                deleteChip={onDeleteSeverityFilter}
                deleteChipGroup={onDeleteSeverityGroup}
                categoryName="Severity"
              >
                <Select
                  variant={SelectVariant.checkbox}
                  aria-label="Severity"
                  onToggle={onSeverityToggle}
                  onSelect={onSeveritySelect}
                  selections={Array.from(severityFilter)}
                  isOpen={isSeverityExpanded}
                  placeholderText="Severity"
                >
                  {availableSeverityFilters.map((severity) => (
                    <SelectOption key={severity} value={severity} />
                  ))}
                </Select>
              </ToolbarFilter>
            </ToolbarGroup>

            <ToolbarGroup variant="icon-button-group">
              <ToolbarItem>
                <Tooltip content="Manage columns">
                  <Button
                    variant="plain"
                    aria-label="edit"
                    onClick={handleModalToggle}
                  >
                    <ColumnsIcon />
                  </Button>
                </Tooltip>
              </ToolbarItem>
              <ToolbarItem>
                <Checkbox
                  label="Show Resources"
                  isChecked={showResources}
                  onChange={setShowResources}
                  aria-label="checkbox for showing resources names"
                  id="showResourcesCheckbox"
                />
              </ToolbarItem>
            </ToolbarGroup>

            <ToolbarGroup alignment={{ default: 'alignRight' }}>
              <TogglePlay active={isStreaming} onClick={onStreamingToggle} />
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>

        <TableComposable
          aria-label="Logs Table"
          variant="compact"
          className="co-logs-table"
          isStriped
          isExpandable
        >
          <Thead>
            <Tr>
              <Th></Th>
              <Th></Th>
              {visibleColumns.map((column, index) => (
                <Th
                  sort={column.sort ? getSortParams(index) : undefined}
                  key={column.title}
                >
                  {column.title}
                </Th>
              ))}
            </Tr>
          </Thead>

          {isStreaming ? (
            <Tbody>
              <Tr className="co-logs-table__row-info co-logs-table__row-streaming">
                <Td colSpan={visibleColumns.length + 2} key="streaming-row">
                  Streaming Logs...
                </Td>
              </Tr>
            </Tbody>
          ) : isLoading ? (
            <Tbody>
              <Tr className="co-logs-table__row-info">
                <Td colSpan={visibleColumns.length + 2} key="loading-row">
                  Loading...
                </Td>
              </Tr>
            </Tbody>
          ) : (
            dataIsEmpty && (
              <Tbody>
                <Tr className="co-logs-table__row-info">
                  <Td colSpan={visibleColumns.length + 2} key="data-empty-row">
                    <ExclamationTriangleIcon
                      color={warningColor.value}
                      title="No datapoints found"
                    />{' '}
                    No datapoints found
                  </Td>
                </Tr>
              </Tbody>
            )
          )}

          {sortedData.map((value, index) => {
            const isExpanded = expandedItems.has(rowIndex);
            const severityClass = getSeverityClass(value.severity);

            const parentRow = (
              <Tr
                key={`${value.timestamp}-${rowIndex}`}
                className={`co-logs-table__row ${severityClass} ${
                  isExpanded ? 'co-logs-table__row-parent-expanded' : ''
                }`}
              >
                <Td
                  expand={{ isExpanded, onToggle: handleRowToggle, rowIndex }}
                />

                {visibleColumns.map((column, index) => {
                  const content = (
                    <LogRow
                      data={value}
                      title={column.title}
                      showResources={showResources}
                    />
                  );

                  return content ? (
                    <Td
                      key={`col-${column.title}-row-${index}`}
                      className={getRowClassName(index)}
                    >
                      {content}
                    </Td>
                  ) : null;
                })}
              </Tr>
            );

            const childRow = isExpanded ? (
              <Tr
                className={`co-logs-table__row ${severityClass} co-logs-table__row-child-expanded`}
                isExpanded={true}
                key={`${value.timestamp}-${rowIndex}-child`}
              >
                <Td colSpan={visibleColumns.length + 2}>
                  <ExpandableRowContent>
                    <LogDetail data={value.data} />
                  </ExpandableRowContent>
                </Td>
              </Tr>
            ) : null;

            // Expanded elements create an additional row in the table
            rowIndex += isExpanded ? 2 : 1;

            return (
              <Tbody isExpanded={isExpanded} key={index}>
                {parentRow}
                {childRow}
              </Tbody>
            );
          })}
          {hasMoreData && (
            <Tbody>
              <Tr className="co-logs-table__row-info">
                <Td colSpan={visibleColumns.length + 2} key="more-data-row">
                  More data available
                </Td>
              </Tr>
            </Tbody>
          )}
        </TableComposable>
      </div>
    </>
  );
};
