import { TeamOutlined } from '@ant-design/icons';

interface IRoutes {
  path: string;
  icons?: React.ReactNode;
  title: string;
}

export const routes: IRoutes[] = [
  {
    title: 'Nhân viên',
    path: `/employee`,
    icons: <TeamOutlined className='-translate-x-1 text-xl' />,
  },
  {
    title: 'Khách hàng',
    path: `/customer`,
    icons: <TeamOutlined className='-translate-x-1 text-xl' />,
  },
];
