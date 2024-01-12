import { JobOffer } from "shared-types";
import {JobOfferCard} from "@kudyniuk/components"
import '@kudyniuk/components/style'

const getData = async (): Promise<JobOffer[]> => {
  const res = await fetch('http://localhost:3001/jobOffers', {next: {revalidate: 10}});
  return await res.json();
};

export default async function Test() {
  const jobOffers = await getData();

  return (
    <>
      <h1>Featured job</h1>
      <div className="flex gap-5 max-w-[1200px] m-auto flex-wrap">
        {jobOffers.map((jobOffer) => <JobOfferCard key={jobOffer.id} name={jobOffer.name} type={jobOffer.type} salaryFrom={jobOffer.salaryFrom} salaryTo={jobOffer.salaryTo} company={jobOffer.company} className="grow"/>)}
      </div>
    </>
  );
}
