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
import { ColumnsIcon } from '@patternfly/react-icons';
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
import * as React from 'react';
import { ColumnManagementModal } from '../console-components/column-management-modal';
import { DateFormat, dateToFormat } from '../date-utils';
import { MetricValue, QueryRangeResponse } from '../logs.types';
import { LogDetail } from './log-detail';
import './logs-table.css';
import { TogglePlay } from './toggle-play';

type LogsTableProps = {
  logsData?: QueryRangeResponse;
  isStreaming?: boolean;
  onToggleStreaming?: (e: React.MouseEvent) => void;
};

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
  value: (row: LogData) => TableCellValue;
};

type LogData = {
  time: string;
  timestamp: number;
  severity: string;
  namespace: Resource;
  resources: Array<Resource>;
  message: string;
};

const parseValueData = (value: MetricValue, index: number): LogData => {
  const timestamp = parseFloat(String(value[0]));
  const time = timestamp / 1e6;
  const formattedTime = dateToFormat(time, DateFormat.Full);

  return {
    time: formattedTime,
    timestamp,
    severity: ['error', 'info', 'warning', ''][index % 3],
    namespace: {
      type: 'Pod',
      id: ['default', 'openshift-console', 'openshift-monitoring', ''][
        index % 3
      ],
      // TODO: resource link builder
      link: '/k8s/ns/openshift-gitops/pods/cluster-autoscaler-6b8b8f66c7-k4v9q',
    },
    resources: [
      {
        type: 'Pod',
        id: [
          'cluster-autoscaler-6b8b8f66c7-k4v9q',
          'other-f66c6b8b87-9qk4v',
          'a_other-f66c6b8b87-9qk4v',
          'b_other-f66c6b8b87-9qk4v',
          'z_other-f66c6b8b87-9qk4v',
        ][index % 5],
        // TODO: resource link builder
        link: '/k8s/ns/openshift-gitops/pods/cluster-autoscaler-6b8b8f66c7-k4v9q',
      },
      {
        type: 'Container',
        id: ['cluster-autoscaler', 'other', 'a_other', 'b_other', 'z_other'][
          index % 5
        ],
        // TODO: resource link builder
        link: 'k8s/ns/openshift-gitops/pods/cluster-autoscaler-6b8b8f66c7-k4v9q/containers/cluster-autoscaler',
      },
    ],
    message: String(value[1]),
  };
};

const aggregateStreamLogData = (response?: QueryRangeResponse) => {
  // TODO merge based on timestamp
  // Handle matrix response
  const data = response?.data.result ?? [];

  const aggregatedValues =
    data.length === 1
      ? data[0].values
      : data.flatMap((stream) => stream.values);

  return aggregatedValues.map(parseValueData);
};

const getSeverityClass = (severity: string) => {
  return severity ? `co-logs-table__severity-${severity}` : '';
};

const fixedColumns: Array<LogsTableColumn> = [
  {
    title: 'Date',
    isDisabled: true,
    isSelected: true,
    value: (row: LogData) => row.timestamp,
    // sort with an appropriate numeric comparator for big floats
    sort: (a, b, directionMultiplier) =>
      (a < b ? -1 : a > b ? 1 : 0) * directionMultiplier,
  },
  {
    title: 'Message',
    isDisabled: true,
    isSelected: true,
    value: (row: LogData) => row.message,
  },
];

const defaultAdditionalColumns: Array<LogsTableColumn> = [
  {
    title: 'Resources',
    isDisabled: false,
    isSelected: false,
    value: (row: LogData) =>
      row.resources.map((resource) => resource.id).join('_'),
    sort: (a, b, directionMultiplier) =>
      a.toString().localeCompare(b.toString()) * directionMultiplier,
  },
  {
    title: 'Namespace',
    isDisabled: false,
    isSelected: false,
    value: (row: LogData) => row.namespace.id,
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

type LogRowProps = {
  data: LogData;
  title: string;
  showResources: boolean;
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

export const LogsTable: React.FC<LogsTableProps> = ({
  logsData,
  isStreaming,
  onToggleStreaming,
  children,
}) => {
  const [expandedItems, setExpandedItems] = React.useState<Set<number>>(
    new Set(),
  );
  const [showResources, setShowResources] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSeverityExpanded, setIsSeverityExpanded] = React.useState(false);
  const [severityFilter, setSeverityFilter] = React.useState<Set<string>>(
    new Set(),
  );
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
    severityFilter.delete(chip.toString());
    setSeverityFilter(new Set(severityFilter));
  };

  const onDeleteSeverityGroup = () => {
    setSeverityFilter(new Set());
  };

  const onSeverityToggle = () => {
    setIsSeverityExpanded(!isSeverityExpanded);
  };

  const onSeveritySelect = (
    _: React.MouseEvent | React.ChangeEvent,
    value: string | SelectOptionObject,
  ) => {
    if (severityFilter.has(value.toString())) {
      severityFilter.delete(value.toString());
      setSeverityFilter(new Set(severityFilter));
    } else {
      setSeverityFilter(new Set(severityFilter.add(value.toString())));
    }
  };

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
                  {[
                    <SelectOption key="error" value="Error" />,
                    <SelectOption key="warning" value="Warning" />,
                    <SelectOption key="debug" value="Debug" />,
                    <SelectOption key="info" value="Info" />,
                    <SelectOption key="other" value="Other" />,
                  ]}
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
              <TogglePlay active={isStreaming} onClick={onToggleStreaming} />
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

          {isStreaming && (
            <Tbody>
              <Tr>
                <Td
                  colSpan={visibleColumns.length + 2}
                  key="col-streaming-row"
                  className="co-logs-table__row-streaming"
                >
                  Streaming Logs...
                </Td>
              </Tr>
            </Tbody>
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
                    <LogDetail />
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
        </TableComposable>
      </div>
    </>
  );
};
