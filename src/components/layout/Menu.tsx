import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { routes } from '@/routes/routes';

import HeaderMenu from './header-menu';

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

const MenuContainer = () => {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleRedirect: MenuProps['onClick'] = (e) => {
    router.push(`/${e.key}`);
  };
  const items: MenuItem[] = routes.map((v) =>
    getItem(v.title, v.path, v.icons)
  );

  const defaultSelectKey = [router.asPath];

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
