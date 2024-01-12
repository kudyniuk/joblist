import { Stack, Input, Button } from "@mui/joy"

export const CreateCompany: React.FC = () => {

    return <form>
            <Stack spacing={1}>
                <Input placeholder="Company Name" required/>
                <Input placeholder="Company Address" required/>
                <Button type="submit">Save</Button>
            </Stack>
        </form>
}