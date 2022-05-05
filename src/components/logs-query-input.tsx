import { Button, SearchInput } from '@patternfly/react-core';
import * as React from 'react';
import { useDebounce } from '../hooks/useDebounce';
import './logs-query-input.css';

interface LogsQueryInputProps {
  initialValue?: string;
  onChange?: (expression: string | undefined) => void;
  onRun?: (expression: string | undefined) => void;
}

export const LogsQueryInput: React.FC<LogsQueryInputProps> = ({
  initialValue,
  onChange,
  onRun,
}) => {
  const [searchValue, setSearchValue] = React.useState(initialValue);
  const debounceValue = useDebounce(searchValue);

  React.useEffect(() => {
    if (debounceValue !== initialValue) {
      onChange?.(debounceValue);
    }
  }, [debounceValue]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchClear = () => {
    setSearchValue('');
  };

  const handleRunQuery = () => {
    onRun?.(searchValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onRun?.(searchValue);
    }
  };

  return (
    <div className="co-logs-expression-input">
      <SearchInput
        className="co-logs-expression-input__searchInput"
        placeholder="LogQL Query"
        value={searchValue}
        onChange={handleSearchChange}
        onClear={handleSearchClear}
        onKeyDown={handleKeyDown}
      />
      {onRun && (
        <Button variant="primary" onClick={handleRunQuery}>
          Run Query
        </Button>
      )}
    </div>
  );
};
