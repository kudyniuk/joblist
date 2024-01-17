import { FC } from "react"
import classNames from 'classnames';
import { Icon } from "..";

type Props = {
    title: string
    description: string
    className?: string
}

export const CategoryCard: FC<Props> = ({ title, description, className }) => {
    return <div className={classNames("p-6 flex items-center gap-[16px] rounded-lg", className)}>
        <div className="bg-blue-500 w-[68px] h-[68px] rounded flex justify-center items-center">
            <Icon name="Buildings" />
        </div>
        <div>
            <div className="text-lg font-medium mb-2">{title}</div>
            <div className="text-sm text-gray-600">{description}</div>
        </div>
    </div>
}