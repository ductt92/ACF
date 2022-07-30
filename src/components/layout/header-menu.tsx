import { Button } from 'antd';
import React, { ReactChild, ReactElement, ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

type HeaderMenuProps = {
  onHandleClick?: () => void;
  children?: ReactNode | JSX.Element | ReactChild | ReactElement;
  collapsed?: boolean;
};

const HeaderMenu = ({
  onHandleClick,
  children,
  collapsed,
}: HeaderMenuProps) => {
  return (
    <div
      className={clsxm(
        'flex h-[40px] w-full items-center justify-end divide-y-8',
        collapsed && 'justify-center'
      )}
    >
      <div className={clsxm(collapsed && 'text-center')}>
        <Button
          className='border-transparent'
          style={{ width: '100%' }}
          onClick={onHandleClick}
        >
          {children}
        </Button>
      </div>
    </div>
  );
};
export default HeaderMenu;
