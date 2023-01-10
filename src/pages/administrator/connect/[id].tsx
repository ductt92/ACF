import { Table } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';

import AdminLayOut from '@/layout/AdminLayOut';
import { QUERY_KEY } from '@/utils/contants/query-key';
import { connectPartner } from '@/utils/contants/services';

const ConnectContainerById = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: dataStatic } = useQuery(
    [QUERY_KEY.statisticalDelivery, id],
    () => connectPartner(id as string)
  );

  console.log(dataStatic);

  return (
    <div>
      <Table dataSource={dataStatic} columns={[]} pagination={false} />
    </div>
  );
};

ConnectContainerById.Layout = AdminLayOut;
export default ConnectContainerById;
