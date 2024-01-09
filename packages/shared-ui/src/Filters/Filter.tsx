import { TruckIcon } from '@heroicons/react/24/solid';

export const Filter: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex flex-col items-center text-secondary hover:text-primary cursor-pointer pb-4 mb-4 border-b-2 border-transparent hover:border-green-400 ">
      <TruckIcon className="h-8 w-8 mb-2" />
      <span className="text-xl">{name}</span>
    </div>
  );
};
