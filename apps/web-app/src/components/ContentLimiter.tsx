import classNames from "classnames"
import { createElement, FC, PropsWithChildren } from "react"

type Props = {
  as?: string
  className?: string
}

export const ContentLimiter: FC<PropsWithChildren<Props>> = ({ children, className, as = "div" }) => {
  return createElement(as, { className: classNames(className, "px-4 max-w-[1280px] m-auto") }, children)
}
