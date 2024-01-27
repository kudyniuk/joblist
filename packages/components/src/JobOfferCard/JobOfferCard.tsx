import { IJobOffer } from "@kudyniuk/shared-types"
import classNames from "classnames"
import { FC } from "react"

type Props = {
  className?: string
} & Omit<IJobOffer, "description" | "id">

export const JobOfferCard: FC<Props> = ({ name, type, salaryFrom, salaryTo, company, className }) => {
  return (
    <div className={classNames("p-6 rounded-lg shadow-md border border-solid border-gray-100 ", className)}>
      <div className="text-lg font-medium">{name}</div>
      <div className="flex gap-2 mb-5">
        <span className="py-1 px-2 text-xs font-semibold leading-3 rounded-md uppercase bg-orange-50 text-orange-500">{type}</span>
        <span className="text-gray-500 text-sm">
          Salary: ${salaryFrom} - ${salaryTo}
        </span>
      </div>
      <div className="flex gap-[10px]">
        <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
        <div>
          <div className="font-medium mb-1">{company.name}</div>
          <div className="text-sm text-gray-500">{company.address}</div>
        </div>
      </div>
    </div>
  )
}
