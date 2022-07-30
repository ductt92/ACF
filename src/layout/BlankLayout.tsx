import { ReactElement, ReactNode } from 'react';

type DEFAULT_LAYOUT_TYPE = {
  children?: ReactNode | JSX.Element | ReactElement;
};
const BlankLayout = ({ children }: DEFAULT_LAYOUT_TYPE) => {
  return children;
};

export default BlankLayout;
