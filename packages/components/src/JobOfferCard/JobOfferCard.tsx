type Props = {
    name: string;
    type: string;
    salaryFrom: number;
    salaryTo: number;
}



export const JobOfferCard: React.FC<Props> = ({name, type, salaryFrom, salaryTo}) => {
    return <div className="p-6 rounded-lg shadow-md border border-solid border-gray-100">
        <div className='text-lg font-medium'>{name}</div>
        <div className="flex gap-2 mb-5">
            <span className="py-1 px-2 text-xs font-semibold leading-3 rounded-md uppercase bg-orange-50 text-orange-500">{type}</span>
            <span className="text-gray-500 text-sm">Salary: ${salaryFrom} - ${salaryTo}</span>
        </div>
        <div className="flex gap-[10px]">
            <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
            <div>
                <div className="font-medium mb-1">Google Inc.</div>
                <div className="text-sm text-gray-500">Dhaka, Bangladesh</div>
            </div>
        </div>
    </div>
}