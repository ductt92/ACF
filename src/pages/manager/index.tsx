import {
  LogoutOutlined,
  SettingOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Button, Modal, Popover } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

import ManageContainer from '@/container/MangerContainer';

import { USER } from '@/contants/Storage';
import BlankLayout from '@/layout/BlankLayout';
import storage from '@/utils/storage';

const ManagePage = () => {
  const { getItem, removeAll } = storage();
  const user = getItem(USER);
  const { username } = user && JSON.parse(user);
  const router = useRouter();

  const handleOpenLogout = () => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <WarningOutlined className='text-red-700' />,
      content: 'Bạn có chắc chắn muốn đăng xuất tài khoản',
      okText: 'Đồng ý',
      cancelText: 'Không',
      onOk: handleLogout,
    });
  };
  const handleLogout = async () => {
    removeAll();
    await router.push('/administrator/login');
  };
  return (
    <div>
      <div className='flex justify-end gap-6 px-6'>
        <Popover
          className='cursor-pointer'
          placement='bottomRight'
          content={
            <div className='flex flex-col gap-y-4 '>
              <Button
                onClick={handleOpenLogout}
                className='border-transparent text-left'
                icon={<LogoutOutlined className='-translate-y-0.5' />}
              >
                Đăng xuất
              </Button>
            </div>
          }
          title={`Xin chào, ${username && username}`}
        >
          <SettingOutlined className='-translate-y-0.5 cursor-pointer text-xl' />
        </Popover>
      </div>
      <ManageContainer />
    </div>
  );
};

const LayoutNew = () => {
  return (
    <div className='h-screen flex-1 flex-col overflow-y-auto'>
      <div className='h-full rounded-md bg-white px-6'>
        <ManagePage />
      </div>
    </div>
  );
};

LayoutNew.Layout = BlankLayout;
export default LayoutNew;
