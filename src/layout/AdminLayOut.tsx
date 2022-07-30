import React, { ReactElement, ReactNode } from 'react';

import MenuLayout from '@/components/layout/MenuLayout';

type DEFAULT_LAYOUT_TYPE = {
  children?: ReactNode | JSX.Element | ReactElement;
};
const AdminLayOut = ({ children }: DEFAULT_LAYOUT_TYPE) => {
  return (
    <main>
      <MenuLayout>{children}</MenuLayout>
    </main>
  );
};

export default AdminLayOut;
