import {
  Modal,
  ModalVariant,
  Button,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCheck,
  DataListItemCells,
  DataListCell,
} from '@patternfly/react-core';
import * as React from 'react';

interface ColumnManagementModalProps {
  columns: Array<any>;
  isModalOpen: boolean;
  onModalToggle: () => void;
  onColumnsSelected: (newColumns: Array<any>) => void;
}

export const ColumnManagementModal: React.FC<ColumnManagementModalProps> = ({
  isModalOpen,
  onModalToggle,
  columns,
  onColumnsSelected,
}) => {
  const [currentColumns, setCurrentColumns] = React.useState(columns);

  const handleColumnsSelected = () => {
    onColumnsSelected(currentColumns.filter((column) => !column.isDisabled));
  };

  const handleColumnToggle = (columnName: string) => () => {
    const newColumns = currentColumns.map((column) => {
      if (column.title === columnName) {
        return { ...column, isSelected: !column.isSelected };
      }

      return column;
    });

    setCurrentColumns(newColumns);
  };

  return (
    <Modal
      variant={ModalVariant.small}
      title="Manage columns"
      description="Selected columns will appear in the table."
      isOpen={isModalOpen}
      onClose={onModalToggle}
      actions={[
        <Button
          key="create"
          variant="primary"
          form="modal-with-form-form"
          onClick={handleColumnsSelected}
        >
          Save
        </Button>,
        <Button key="cancel" variant="link" onClick={onModalToggle}>
          Cancel
        </Button>,
      ]}
    >
      <DataList aria-label="Simple data list example" isCompact>
        {currentColumns.map((column) => (
          <DataListItem
            key={column.title}
            aria-labelledby={`column-${column.title}`}
          >
            <DataListItemRow>
              <DataListCheck
                aria-labelledby={`column-${column.title}`}
                isDisabled={!!column.isDisabled}
                checked={!!column.isSelected}
                onChange={handleColumnToggle(column.title)}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <span id={`column-${column.title}`}>{column.title}</span>
                  </DataListCell>,
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        ))}
      </DataList>
    </Modal>
  );
};
