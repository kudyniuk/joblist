import { PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = {
  variant?: 'primary' | 'secondary';
  className?: string;
};

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  variant = 'primary',
  ...props
}) => {
  if (variant === 'primary') {
    return <Primary {...props} />;
  }

  return <Secondary {...props} />;
};

const Primary: React.FC<PropsWithChildren<Omit<Props, 'variant'>>> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        'text-white bg-orange-500 hover:bg-orange-400 py-3 px-6 font-bold rounded-md',
        className,
      )}
      {...props}
    />
  );
};

const Secondary: React.FC<PropsWithChildren<Omit<Props, 'variant'>>> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        'text-orange-500 border-solid border-orange-500 border-2 py-3 px-6 font-bold rounded-md hover:bg-orange-100',
        className,
      )}
      {...props}
    />
  );
};
