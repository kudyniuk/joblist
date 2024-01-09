import './accordion.scss';

type Props = {
  variant?: 'primary' | 'secondary';
};

export const Accordion: React.FC<React.PropsWithChildren<Props>> = ({
  variant = 'primary',
}) => {
  return <button className={`accordion ${variant}`}> Hello world!</button>;
};
