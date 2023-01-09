/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from 'antd';
import React from 'react';

import { renderStatis } from '@/utils/contants/columns.contants';

const ItemPanel = ({ values }: { values: Array<any> }) => {
  return (
    <div>
      <Table
        columns={renderStatis()}
        dataSource={values || []}
        pagination={false}
      />
    </div>
  );
};

export default ItemPanel;
