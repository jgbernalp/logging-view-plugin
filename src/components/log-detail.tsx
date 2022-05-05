import {
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
} from '@patternfly/react-core';
import * as React from 'react';

interface LogDetailProps {
  data: Record<string, string>;
}

export const LogDetail: React.FC<LogDetailProps> = ({ data }) => (
  <DescriptionList isAutoFit isHorizontal isCompact isFluid>
    {Object.keys(data)
      .filter((key) => key !== '_')
      .map((key) => (
        <DescriptionListGroup key={key}>
          <DescriptionListTerm>{key}</DescriptionListTerm>
          <DescriptionListDescription>{data[key]}</DescriptionListDescription>
        </DescriptionListGroup>
      ))}
  </DescriptionList>
);
