import { FC } from "react";
import { PageTemplate } from "../components/PageTemplate";
import { CreateCompanyForm } from "../components/CreateCompanyForm";

export const CompanyProfilePage: FC = () => {
    return <PageTemplate header="Company Profile">
        <CreateCompanyForm />
    </PageTemplate>
}