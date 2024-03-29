import classNames from "classnames"
import { FC } from "react"

type Props = {
  placeholder?: string
  className?: string
}

export const Input: FC<Props> = ({ className, placeholder }) => {
  return <input className={classNames("border border-gray-100 rounded-md py-2 px-6", className)} placeholder={placeholder} />
}
