import './button.scss';

type Props = {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  variant = 'primary',
}) => {
  return <button className={`button ${variant}`}> Hello world!</button>;
};

export default Button;
