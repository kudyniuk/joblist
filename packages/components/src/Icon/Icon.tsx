import { FC } from "react"
import * as Icons from './svgs'



export type IconName = keyof typeof Icons

type Props = {
    name: IconName
    className?: string
}


export const Icon: FC<Props> = ({ name, className }) => {
    const IconComponent = Icons[name]
    return <div className={className}>
        <IconComponent />
    </div>
}