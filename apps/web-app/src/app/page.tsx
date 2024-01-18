import { Button, CategoryCard, FactCard, Input, JobOfferCard, RegisterNow } from "@kudyniuk/components"
import { JobOffer } from "@kudyniuk/shared-types"
import Image from "next/image"

import { ContentLimiter } from "@/components/ContentLimiter"

const getData = async (): Promise<JobOffer[]> => {
  const res = await fetch("http://localhost:3001/jobOffers", {
    next: { revalidate: 10 },
  })
  return await res.json()
}

export default async function Test() {
  const jobOffers = await getData()

  return (
    <>
      {/* Navigation */}
      <nav className="bg-gray-50">
        <ContentLimiter className="flex justify-between  text-sm text-gray-600">
          <ul className="flex gap-6">
            {/* TODO: Fix active button */}
            <li className="py-[14px] text-blue-500 font-medium" style={{ boxShadow: "0px -2px 0px 0px #0A65CC inset" }}>
              Home
            </li>
            <li className="py-[14px]">Find Job</li>
            <li className="py-[14px]">Employers</li>
            <li className="py-[14px]">Candidates</li>
            <li className="py-[14px]">Pricing Plans</li>
            <li className="py-[14px]">Customer Supports</li>
          </ul>
          <div className="flex gap-6 py-[14px]">
            <div>+0-000-000-0000</div>
            <div>English</div>
          </div>
        </ContentLimiter>
      </nav>

      <ContentLimiter className="flex justify-between items-center py-8">
        <div className="flex gap-8 items-center basis-full max-w-[600px]">
          <div className="text-2xl font-semibold">Joblist</div>
          <Input className="basis-full" placeholder="Job tittle, keyword, company" />
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Sign In</Button>
          <Button>Post a Jobs</Button>
        </div>
      </ContentLimiter>

      {/* Search */}
      <div className="bg-gray-50 py-24 ">
        <ContentLimiter>
          <div className="flex justify-between gap-8 mb-24">
            <div className="max-w-[680px]">
              <h1 className="text-[56px] font-bold mb-6 max-w-[650px]">Find a job that suits your interest & skills.</h1>
              <h2 className="text-lg text-gray-600 max-w-[540px] mb-8">
                Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </h2>
              <Input className="w-full mb-6" />
              <p className="text-sm ">
                <span className="text-gray-400">Suggestion: </span>
                <span>Designer, </span>
                <span>Programing, </span>
                <span className="text-blue-500">Digital Marketing, </span>
                <span>Video, </span>
                <span>Animation.</span>
              </p>
            </div>
            <Image src={"/illustration.svg"} alt="Man with computer" height={382} width={492} />
          </div>
          <div className="flex gap-5 flex-grow">
            <FactCard className="basis-full" title="1,750,324" description="Live Job" />
            <FactCard className="basis-full" title="97,354" description="Companies" />
            <FactCard className="basis-full" title="38,470" description="Candidates" />
            <FactCard className="basis-full" title="7,353" description="New Jobs" />
          </div>
        </ContentLimiter>
      </div>

      {/* Most Popular Vacancies */}
      <ContentLimiter className="py-24">
        <h2 className="text-4xl font-medium mb-[50px] ">Most Popular Vacancies</h2>
        <ul className="grid grid-cols-4 gap-8 flex-wrap">
          <li>
            <h4 className="text-lg font-medium">Anesthesiologists</h4>
            <div>45,904 Open Positions</div>
          </li>
          <li>
            <h4 className="text-lg font-medium">Surgeons</h4>
            <div>50,364 Open Positions</div>
          </li>
          <li>
            <h4 className="text-lg font-medium">Obstetricians-Gynecologists</h4>
            <div>4,339 Open Positions</div>
          </li>
          <li>
            <h4 className="text-lg font-medium">Maxillofacial Surgeons</h4>
            <div>45,904 Open Positions</div>
          </li>

          <li>
            <h4 className="text-lg font-medium">Software Developer</h4>
            <div>5,364 Open Positions</div>
          </li>
          <li>
            <h4 className="text-lg font-medium">Psychiatrists</h4>
            <div>4,339 Open Positions</div>
          </li>
          <li>
            <h4 className="text-lg font-medium">Financial Manager</h4>
            <div>45,904 Open Positions</div>
          </li>

          <li>
            <h4 className="text-lg font-medium">Management Analysis</h4>
            <div>5,364 Open Positions</div>
          </li>
          <li className="text-lg font-medium">
            <h4>IT Manager</h4>
            <div>41,339 Open Positions</div>
          </li>
          <li>
            <h4 className="text-lg font-medium">Obstetricians-Gynecologists</h4>
            <div>4,339 Open Positions</div>
          </li>
          <li>
            <h4 className="text-lg font-medium">Maxillofacial Surgeons</h4>
            <div>45,904 Open Positions</div>
          </li>
          <li>
            <h4 className="text-lg font-medium">Maxillofacial Surgeons</h4>
            <div>45,904 Open Positions</div>
          </li>
        </ul>
      </ContentLimiter>

      {/* How it work */}

      <div className="bg-gray-50 py-24 mb-12">
        <ContentLimiter>
          <h2 className="text-center text-4xl font-medium mb-[50px]">How job list work</h2>
          <div className="flex text-center gap-6">
            <div>
              <div className="text-lg font-medium mb-3">Create account</div>
              <p className="text-sm text-gray-500">Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
            </div>

            <div>
              <div className="text-lg font-medium mb-3">Upload CV/Resume</div>
              <p className="text-sm text-gray-500">Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
            </div>

            <div>
              <div className="text-lg font-medium mb-3">Find suitable job</div>
              <p className="text-sm text-gray-500">Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
            </div>

            <div>
              <div className="text-lg font-medium mb-3">Apply job</div>
              <p className="text-sm text-gray-500">Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
            </div>
          </div>
        </ContentLimiter>
      </div>

      {/* Popular category */}
      <ContentLimiter className="py-24">
        <h2 className="text-4xl font-medium mb-[50px] ">Popular category</h2>
        <div className="grid grid-cols-4 gap-3 flex-wrap">
          <CategoryCard title="Graphics & Design" description="357 Open position" />
          <CategoryCard title="Code & Programing" description="312 Open position" />
          <CategoryCard title="Digital Marketing" description="297 Open position" />
          <CategoryCard title="Video & Animation" description="125 Open position" />

          <CategoryCard title="Music & Audio" description="204 Open position" />
          <CategoryCard title="Account & Finance" description="168 Open position" />
          <CategoryCard title="Health & Care" description="199 Open position" />
          <CategoryCard title="Data & Science" description="321 Open position" />
        </div>
      </ContentLimiter>

      <ContentLimiter className="mb-24">
        <h2 className="text-4xl font-medium mb-[50px] ">Featured job</h2>
        <div className="grid grid-cols-3 gap-5">
          {jobOffers.map((jobOffer) => (
            <JobOfferCard
              key={jobOffer.id}
              name={jobOffer.name}
              type={jobOffer.type}
              salaryFrom={jobOffer.salaryFrom}
              salaryTo={jobOffer.salaryTo}
              company={jobOffer.company}
              className="grow"
            />
          ))}
        </div>
      </ContentLimiter>

      <ContentLimiter className="flex gap-6 mb-24">
        <RegisterNow
          className="basis-full bg-[url('/candidates.png')]"
          title="Become a Candidate"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur."
        />
        <RegisterNow
          className="basis-full bg-[url('/employers.png')] bg-cover"
          title="Become a Employers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur."
        />
      </ContentLimiter>

      <footer className="bg-gray-900">
        <ContentLimiter className="text-gray-400 pt-24 pb-20 flex gap-8">
          <div>
            <h3 className="text-2xl text-white font-semibold mb-6">Job List</h3>
            <div className="text-lg mb-3">
              <span>Call now: </span>
              <span className="text-white font-medium">+0-000-000-0000</span>
            </div>
            <div className="text-sm max-w-[312px]">6391 Elgin St. Celina, Delaware 10299, New York, United States of America</div>
          </div>
          <div className="flex grow gap-6 justify-between m-auto max-w-[700px]">
            <ul className="flex flex-col gap-4">
              <li className="text-white text-xl font-medium">Quick Link</li>
              <li>About</li>
              <li>Contact</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-white text-xl font-medium">Quick Link</li>
              <li>About</li>
              <li>Contact</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-white text-xl font-medium">Quick Link</li>
              <li>About</li>
              <li>Contact</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-white text-xl font-medium">Quick Link</li>
              <li>About</li>
              <li>Contact</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
        </ContentLimiter>

        <div style={{ boxShadow: "0px 1px 0px 0px #2F3338 inset" }}>
          <ContentLimiter className="text-gray-500 flex justify-between py-6">
            <div>@ 2023 JobList - Job Portal. All rights Rserved</div>
            <div>Social Icons</div>
          </ContentLimiter>
        </div>
      </footer>
    </>
  )
}
