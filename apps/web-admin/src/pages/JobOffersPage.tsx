import { FC } from 'react';
import { PageTemplate } from '../components/PageTemplate';

import { JobOffersTable } from '../components';


export const JobOffersPage: FC = () => {

  return (
    <PageTemplate header="Job Offers">
      <JobOffersTable />
    </PageTemplate>
  );
};
