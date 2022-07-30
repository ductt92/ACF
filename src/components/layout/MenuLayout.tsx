import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { withPrivateRoute } from '@/routes/withPrivateRoute';

import MenuContainer from './Menu';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const breadcrumbNameMap: any = {
  '/items': 'Items',
  '/vps': 'Vps',
  '/orders': 'Orders',
  '/employee': 'Employee',
  '/niche': 'Niche',
  '/email': 'Email',
  '/co': 'Co',
  '/filter': 'Filter',
};

function MenuLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathSnippets = router.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link href={url} passHref>
          <div>{breadcrumbNameMap[url]}</div>
        </Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key='home'>
      <Link href='/'>Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div className='flex h-screen flex-col'>
      {/* <CardHeaderMain /> */}
      <div className='flex flex-1 flex-row'>
        <MenuContainer />
        <div className='flex-1 flex-col overflow-y-auto px-6'>
          <div className='py-4 '>
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
          </div>
          <div className='rounded-md bg-white p-6'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default withPrivateRoute(MenuLayout);
