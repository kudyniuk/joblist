import classNames from "classnames"
import { FC } from "react"

type Props = {
  variant?: "primary" | "secondary"
  children?: string
  className?: string
}

const PRIMARY_CSS = "bg-blue-500 text-white"
const SECONDARY_CSS = "border bg-white border-blue-100 text-blue-500"

export const Button: FC<Props> = ({ variant = "primary", children = "Click me", className }) => {
  return (
    <button
      className={classNames(
        "py-3 px-6 rounded  font-semibold leading-6",
        {
          [PRIMARY_CSS]: variant === "primary",
          [SECONDARY_CSS]: variant === "secondary",
        },
        className,
      )}
    >
      {children}
    </button>
  )
}
