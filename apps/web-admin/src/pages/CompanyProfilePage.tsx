import { FC } from "react";
import { PageTemplate } from "../components/PageTemplate";
import { CreateCompany } from "../components/CreateCompany";

export const CompanyProfilePage: FC = () => {
    return <PageTemplate header="Company Profile">
        <CreateCompany />
    </PageTemplate>
}