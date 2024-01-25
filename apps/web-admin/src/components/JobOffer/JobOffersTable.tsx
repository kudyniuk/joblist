import { useCallback } from 'react';
import { useGetUserJobOffersQuery } from '../../store';
import { Button, Skeleton, Table } from '@mui/joy';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { DeleteAction } from './DeleteAction';

export const JobOffersTable = () => {
    const { data, isLoading } = useGetUserJobOffersQuery();
    const navigate = useNavigate()


    const onCreateClick = useCallback(() => {
        navigate("create")
    }, [navigate])

    if (isLoading) {
        return <>
            <Skeleton sx={{ mb: 1 }} variant="rectangular" width={1} height={120} />
            <Skeleton sx={{ float: 'right' }} variant="rectangular" width={120} height={36} />
        </>
    }

    return <>
        <Table variant="outlined" stripe="odd" sx={{ mb: 1 }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Salary</th>
                    <th>Actions</th>
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
                        <td>
                            <IconButton color="primary">
                                <EditIcon />
                            </IconButton>
                            <DeleteAction id={jobOffer.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Button sx={{ float: 'right' }} onClick={onCreateClick}>Create new</Button>
    </>
}
