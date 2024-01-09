import { Adventure } from 'shared-types';
import { AdventureTile } from '../AdventureTile';

type Props = {
  data: Adventure[];
};

export const AdventureList: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex gap-8">
      {data.map(({ id, ...rest }) => {
        return <AdventureTile key={id} id={id} {...rest} />;
      })}
    </div>
  );
};
