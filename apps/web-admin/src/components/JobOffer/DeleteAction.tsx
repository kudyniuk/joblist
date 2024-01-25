import { Button, IconButton, Modal, Stack, Typography } from "@mui/joy"
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from "react"
import { SxProps } from "@mui/joy/styles/types"

type Props = {
    id: number
}

const styles: SxProps = {
    position: 'absolute',
    top: '30%',
    left: '40%',
    transform: 'translate(30%, 40%)',
    bgcolor: 'background.body',
    p: 4,
    borderRadius: 8,

}

export const DeleteAction: React.FC<Props> = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return <>
        <IconButton color="danger" onClick={handleOpen}>
            <DeleteIcon />
        </IconButton>
        <Modal open={open} onClose={handleClose}>
            <Stack spacing={1} sx={styles}>
                <Typography level="h3" color="danger">Danger!</Typography>
                <Typography>Are you sure, you want to delete job offer?</Typography>
                <Stack spacing={1} direction="row">
                    <Button color="danger">Delete</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </Stack>
            </Stack>
        </Modal>
    </>
}