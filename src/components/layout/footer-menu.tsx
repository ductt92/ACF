import { LogoutOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { RenderFunction } from 'antd/lib/tooltip';
import React from 'react';

interface IFooterLayoutProps {
  renderPopupSetting: React.ReactNode | RenderFunction;
  isVisible?: boolean;
  onVisibleChange?: () => void;
}

export const FooterLayout = ({
  renderPopupSetting,
  isVisible,
  onVisibleChange,
}: IFooterLayoutProps) => {
  return (
    <div className='-translate-y-6 cursor-pointer self-center '>
      <Popover
        content={renderPopupSetting}
        title='Tùy chỉnh'
        placement='topLeft'
        trigger='click'
        visible={isVisible}
        onVisibleChange={onVisibleChange}
      >
        <LogoutOutlined className='-translate-y-0.5 text-2xl' />
      </Popover>
    </div>
  );
};
