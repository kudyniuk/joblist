import { Stack, Input, Button } from '@mui/joy';
import {
  useCreateUserJobOfferMutation,
} from '../../store';
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import { CreateJobOffer, JobOffer } from '@kudyniuk/shared-types'

type FormValues = CreateJobOffer

export const UpdateJobOfferForm: React.FC<{ jobOffer: JobOffer }> = ({ jobOffer }) => {
  return <CreateJobOfferForm defaultValues={jobOffer} />;
};

export const CreateJobOfferForm: React.FC<{ defaultValues?: FormValues }> = ({
  defaultValues,
}) => {
  const [updateUserJobOffer, result] = useCreateUserJobOfferMutation();

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    updateUserJobOffer(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {JSON.stringify(defaultValues)}
      <Stack spacing={1}>
        <Input placeholder="Job Offer Name" required {...register('name')} />
        <Input
          placeholder="Job Offer Description"
          required
          {...register('description')}
        />
        <Input
          placeholder="Type"
          required
          {...register('type')}
        />
        <Input
          placeholder="Job Offer Salary From"
          required
          {...register('salaryFrom')}
        />
        <Input
          placeholder="Job Offer Salary To"
          required
          {...register('salaryTo')}
        />
        <Button type="submit" loading={result.isLoading}>
          Save
        </Button>
      </Stack>
    </form>
  );
};
