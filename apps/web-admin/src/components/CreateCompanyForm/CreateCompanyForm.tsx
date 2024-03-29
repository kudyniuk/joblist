import { Stack, Input, Button, Skeleton, Box } from '@mui/joy';
import {
  useGetUserCompanyQuery,
  useUpdateUserCompanyMutation,
} from '../../store';
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';

type FormValues = {
  name: string;
  address: string;
};

export const CreateCompanyForm: React.FC = () => {
  const { data, isLoading } = useGetUserCompanyQuery();

  if (isLoading) {
    return <Box>
      <Skeleton sx={{ mb: 1 }} width={1} height={36} variant="rectangular" />
      <Skeleton sx={{ mb: 1 }} width={1} height={36} variant="rectangular" />
      <Skeleton width={1} height={36} variant="rectangular" />
    </Box>
  }

  return <Form defaultValues={data} />;
};

export const Form: React.FC<{ defaultValues?: FormValues }> = ({
  defaultValues,
}) => {
  const [updateUserCompany, result] = useUpdateUserCompanyMutation();

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    updateUserCompany(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1}>
        <Input placeholder="Company Name" required {...register('name')} />
        <Input
          placeholder="Company Address"
          required
          {...register('address')}
        />
        <Button type="submit" loading={result.isLoading}>
          Save
        </Button>
      </Stack>
    </form>
  );
};
