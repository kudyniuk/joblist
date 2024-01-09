import './text.styles.scss';

export const Text: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <span className="text">{children}</span>;
};

export default Text;
