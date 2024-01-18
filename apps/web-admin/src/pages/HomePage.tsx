import { FC } from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { useGetUserJobOffersQuery } from '../store';
import { Table } from '@mui/joy';

export const HomePage: FC = () => {
  const { data } = useGetUserJobOffersQuery();

  return (
    <PageTemplate header="Home">
      <Table variant="outlined" stripe="odd">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((jobOffer) => (
            <tr key={jobOffer.id}>
              <td>{jobOffer.id}</td>
              <td>{jobOffer.name}</td>
              <td>{jobOffer.type}</td>
              <td>{jobOffer.description}</td>
              <td>
                ${jobOffer.salaryFrom} - ${jobOffer.salaryTo}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageTemplate>
  );
};
