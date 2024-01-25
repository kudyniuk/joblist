import { FC } from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { CreateJobOfferForm } from '../components';

export const CreateJobOfferPage: FC = () => {

  return (
    <PageTemplate header="Create Job Offer">
      <CreateJobOfferForm />
    </PageTemplate>
  );
};
