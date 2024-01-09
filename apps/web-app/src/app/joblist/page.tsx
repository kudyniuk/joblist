import { JobOffer } from "shared-types";

const getData = async (): Promise<JobOffer[]> => {
  const res = await fetch('http://localhost:3001/jobOffers');
  return await res.json();
};

export default async function Test() {
  const jobOffers = await getData();

  return (
    <>
      <h1>Job List</h1>
      <div>
        {jobOffers.map((jobOffer) => <div key={jobOffer.id} style={{paddingTop: '20px'}}>
          <h3>{jobOffer.name}</h3>
          <h4>{jobOffer.company.name}</h4>
          <p>{jobOffer.description}</p>
          </div>)}
      </div>
    </>
  );
}
