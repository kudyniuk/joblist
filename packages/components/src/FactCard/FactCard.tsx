import classNames from "classnames"
import { FC } from "react"

import { Icon, IconName } from ".."

type Props = {
  title: string
  description: string
  className?: string
  icon?: IconName
}

export const FactCard: FC<Props> = ({ title, description, className }) => {
  return (
    <div className={classNames("p-5 flex gap-5 items-center rounded-lg", className)} style={{ boxShadow: "0px 12px 48px 0px rgba(0, 44, 109, 0.10)" }}>
      <div className="bg-blue-50 w-[72px] h-[72px] rounded items-center flex justify-center">
        <Icon name="Briefcase" />
      </div>
      <div>
        <div className="text-2xl leading-8 font-medium mb-[6px] ">{title}</div>
        <div className="leading-6 text-gray-500">{description}</div>
      </div>
    </div>
  )
}
