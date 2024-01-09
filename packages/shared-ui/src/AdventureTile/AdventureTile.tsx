import { Adventure } from 'shared-types';
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid';

export const AdventureTile: React.FC<Adventure> = ({
  name,
  destination,
  price,
}) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden">
      <img src="https://placehold.co/400" alt="Preview" />
      <div className="px-4 py-6 bg-white">
        <p className="font-bold text-h3 mb-3">{name}</p>
        <div className="flex justify-between items-center">
          <p className="text-secondary flex">
            <GlobeAsiaAustraliaIcon className="h-6 w-6 mr-1" />
            {destination}
          </p>
          <p className="font-bold bg-orange-100 text-orange-500 py-1 px-2 rounded-lg">
            {price} zł
          </p>
        </div>
      </div>
    </div>
  );
};
