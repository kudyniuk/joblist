import { Stack, Input, Button } from '@mui/joy';
import {
  useCreateUserJobOfferMutation,
} from '../../store';
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import { ICreateJobOffer, IJobOffer } from '@kudyniuk/shared-types'

type FormValues = ICreateJobOffer

export const UpdateJobOfferForm: React.FC<{ jobOffer: IJobOffer }> = ({ jobOffer }) => {
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

    const fixedValues: FormValues = {
      ...data,
      salaryFrom: Number(data.salaryFrom),
      salaryTo: Number(data.salaryTo)
    }


    updateUserJobOffer(fixedValues);
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
          type="number"
          placeholder="Job Offer Salary From"
          required
          {...register('salaryFrom')}
        />
        <Input
          type="number"
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
