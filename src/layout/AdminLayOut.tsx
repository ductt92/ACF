import React, { ReactElement, ReactNode } from 'react';

type DEFAULT_LAYOUT_TYPE = {
  children?: ReactNode | JSX.Element | ReactElement;
};
const AdminLayOut = ({ children }: DEFAULT_LAYOUT_TYPE) => {
  return <main>{children}</main>;
};

export default AdminLayOut;
