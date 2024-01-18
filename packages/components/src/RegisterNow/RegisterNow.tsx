import classNames from "classnames"
import { FC } from "react"

import { Button } from ".."

type Props = {
  title: string
  description: string
  className?: string
}

export const RegisterNow: FC<Props> = ({ title, description, className }) => {
  return (
    <div className={classNames("p-12 rounded-xl", className)}>
      <h3 className="text-3xl font-medium mb-4">{title}</h3>
      <p className="mb-6 text-sm text-gray-600 max-w-[320px]">{description}</p>
      <Button variant="secondary">Register Now</Button>
    </div>
  )
}
