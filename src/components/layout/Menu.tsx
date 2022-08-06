import {
  LeftOutlined,
  LogoutOutlined,
  RightOutlined,
  SettingOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Button, Menu, MenuProps, Modal, Popover } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { ADMINISTATOR } from '@/contants/endpoint';
import { routes } from '@/routes/routes';
import storage from '@/utils/storage';

import HeaderMenu from './header-menu';

type MenuItem = Required<MenuProps>['items'][number];

function getMenuItems(
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

const MenuContainer = () => {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { removeAll } = storage();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleRedirect: MenuProps['onClick'] = (e) => {
    router.push(`${ADMINISTATOR}/${e.key}`);
  };
  const items: MenuItem[] = routes.map((v) =>
    getMenuItems(v.title, v.path, v.icons)
  );

  const handleLogout = async () => {
    removeAll();
    await router.push('/administrator/login');
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
  // const user = getItem(USER);

  // const { fullName } = JSON.parse(user);

  return (
    <div className='flex flex-col bg-white pt-9'>
      <div className='flex-1'>
        <Menu
          onClick={handleRedirect}
          defaultSelectedKeys={defaultSelectKey}
          mode='inline'
          defaultOpenKeys={defaultSelectKey}
          inlineCollapsed={collapsed}
          className='border-none'
          items={items}
        />
        <Popover
          className='cursor-pointer'
          placement='right'
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

export default MenuContainer;
