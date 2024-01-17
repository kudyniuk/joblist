import { FC } from "react"
import classNames from 'classnames';

type Props = {
    title: string
    description: string
    className?: string
}

export const FactCard: FC<Props> = ({ title, description, className }) => {
    return <div className={classNames("p-5 flex gap-5 items-center rounded-lg", className)} style={{ boxShadow: '0px 12px 48px 0px rgba(0, 44, 109, 0.10)' }}>
        <div className="bg-blue-500 w-[72px] h-[72px]">
            {/* icon */}
        </div>
        <div>
            <div className="text-2xl leading-8 font-medium mb-[6px] ">{title}</div>
            <div className="leading-6 text-gray-500">{description}</div>
        </div>
    </div>
}