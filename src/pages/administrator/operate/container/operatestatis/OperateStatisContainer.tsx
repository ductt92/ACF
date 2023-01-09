/* eslint-disable @typescript-eslint/no-explicit-any */
import { Collapse } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';

import { QUERY_KEY } from '@/utils/contants/query-key';
import { getStatisticalDelivery } from '@/utils/contants/services';

import ItemPanel from './ItemPanel';

const OperateStatisContainer = () => {
  const { data: dataStatic } = useQuery([QUERY_KEY.statisticalDelivery], () =>
    getStatisticalDelivery()
  );

  const { Panel } = Collapse;
  const renderHeader = (v: any) => {
    return (
      <div className='flex w-full flex-row items-end justify-between'>
        <p className='m-0 p-0'>{v.name}</p>
        <p className='m-0 p-0'>{`Số lượng bill: ${v.totalBill}`}</p>
        <p className='m-0 p-0'>{`Số lượng hàng: ${v.totalCommodity}`}</p>
        <p className='m-0 p-0'>{`Số lượng hàng: ${v.totalLicense}`}</p>
      </div>
    );
  };
  return (
    <div>
      <Collapse bordered={true} expandIconPosition='right'>
        {dataStatic?.map((v: any, index: number) => (
          <Panel header={renderHeader(v)} key={index}>
            <ItemPanel values={v.details as Array<any>} />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default OperateStatisContainer;
