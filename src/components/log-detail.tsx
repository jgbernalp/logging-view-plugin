import {
  Button,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';
import * as React from 'react';

export const LogDetail: React.FC = () => (
  <DescriptionList isAutoFit>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription>
        <a href="#">openshift-monitoring</a>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Labels</DescriptionListTerm>
      <DescriptionListDescription>example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Pod selector</DescriptionListTerm>
      <DescriptionListDescription>
        <Button variant="link" isInline icon={<PlusCircleIcon />}>
          app=MyApp
        </Button>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Annotation</DescriptionListTerm>
      <DescriptionListDescription>2 Annotations</DescriptionListDescription>
    </DescriptionListGroup>
  </DescriptionList>
);
