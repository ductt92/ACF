import {
  FilterOutlined,
  ForkOutlined,
  FormOutlined,
  InboxOutlined,
  MailOutlined,
  PushpinOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
} from '@ant-design/icons';

interface IRoutes {
  path: string;
  icons?: React.ReactNode;
  title: string;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    title: 'Đơn hàng',
    icons: <ShoppingCartOutlined className='-translate-x-1 text-xl' />,
  },
  {
    title: 'Quản lý item',
    path: '/items',
    icons: <FormOutlined className='-translate-x-1 text-xl' />,
  },
  {
    title: 'VPS',
    path: '/vps',
    icons: <PushpinOutlined className='-translate-x-1 text-xl' />,
  },
  {
    title: 'Nhân viên',
    path: '/employee',
    icons: <TeamOutlined className='-translate-x-1 text-xl' />,
  },
  {
    title: 'Nghách',
    path: '/niche',
    icons: <ForkOutlined className='-translate-x-1 text-xl' />,
  },
  {
    title: 'Email',
    path: '/email',
    icons: <MailOutlined className='-translate-x-1 text-xl' />,
  },
  {
    title: 'Co',
    path: '/co',
    icons: <InboxOutlined className='-translate-x-1 text-xl' />,
  },
  {
    title: 'Filter',
    path: '/filter',
    icons: <FilterOutlined className='-translate-x-1 text-xl' />,
  },
];
