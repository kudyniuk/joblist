import { Filter } from './Filter';

const types = ['Wyspa', 'Przygoda', 'Domki na drzewie', 'Niesamowite'];

export const Filters: React.FC = () => {
  return (
    <div className="flex gap-7">
      {types.map((type) => (
        <Filter key={type} name={type} />
      ))}
    </div>
  );
};
