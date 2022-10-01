import {
  AppstoreOutlined,
  LeftOutlined,
  LogoutOutlined,
  RightOutlined,
  SettingOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Button, Menu, MenuProps, Modal, Popover } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';

import HeaderMenu from '@/components/layout/header-menu';

import storage from '@/utils/storage';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const itemsManager: MenuItem[] = [
  getItem('Booking', 'sub2', <AppstoreOutlined />, [
    getItem('Quản lý booking', 'booking'),
    getItem('Tạo booking', 'create-booking'),
    // getItem('Option 10', '10'),
    // getItem('Submenu', 'sub3', null, [
    //   getItem('Option 11', '11'),
    //   getItem('Option 12', '12'),
    // ]),
  ]),
];

const MenuUserContainer = () => {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { removeAll } = storage();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleRedirect: MenuProps['onClick'] = (e) => {
    router.push(`/manager/${e.key}`);
  };

  const handleLogout = async () => {
    removeAll();
    await router.push('/');
  };

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

  const defaultSelectKey = [router.asPath];
  const DEFAULT_CLASS = 'mt-[10px] flex h-[40px] flex-row pl-5';
  const COLLAPSE_CLASS = 'flex h-[40px]  items-end justify-center';

  return (
    <div className='flex h-full flex-col bg-white pt-9'>
      <div className='flex-1'>
        <Menu
          onClick={handleRedirect}
          defaultSelectedKeys={defaultSelectKey}
          mode='inline'
          defaultOpenKeys={defaultSelectKey}
          inlineCollapsed={collapsed}
          className='b border-none'
          items={itemsManager}
        />
        <Popover
          className='cursor-pointer'
          placement='right'
          content={
            <div className='flex flex-col gap-y-4'>
              <Button
                onClick={handleOpenLogout}
                className='border-transparent text-left'
                icon={<LogoutOutlined className='-translate-y-0.5' />}
              >
                Đăng xuất
              </Button>
            </div>
          }
          title='Xin chào'
        >
          <div className={!collapsed ? DEFAULT_CLASS : COLLAPSE_CLASS}>
            <SettingOutlined className='-translate-y-0.5 cursor-pointer text-xl' />
            {!collapsed && <p className='ml-[12px]'>Setting</p>}
          </div>
        </Popover>
      </div>
      <div className='w-full border-t-[1px] border-gray-400 py-1'>
        <HeaderMenu collapsed={collapsed} onHandleClick={toggleCollapsed}>
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </HeaderMenu>
      </div>
    </div>
  );
};

export default MenuUserContainer;
