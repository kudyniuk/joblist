import { FC, PropsWithChildren, createElement } from 'react'
import classNames from 'classnames';

type Props = {
    as?: string;
    className?: string;
}

export const ContentLimiter: FC<PropsWithChildren<Props>> = ({ children, className, as = 'div' }) => {
    return createElement(as, { className: classNames(className, 'px-4 max-w-[1280px] m-auto') }, children)
}