/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Collapse } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';

import { QUERY_KEY } from '@/utils/contants/query-key';
import { getStatisticalDelivery } from '@/utils/contants/services';

import ItemPanel from './ItemPanel';

const OperateStatisContainer = () => {
  const { data: dataStatic } = useQuery([QUERY_KEY.statisticalDelivery], () =>
    getStatisticalDelivery()
  );

  const router = useRouter();

  const { Panel } = Collapse;
  const renderHeader = (v: any) => {
    return (
      <div className='flex w-full flex-row justify-between'>
        <div className='flex w-full flex-row items-end justify-between'>
          <p className='m-0 p-0'>{v?.name}</p>
          <p className='m-0 p-0'>{`Số lượng bill: ${v?.totalBill}`}</p>
          <p className='m-0 p-0'>{`Số lượng hàng: ${v?.totalCommodity}`}</p>
          <p className='m-0 p-0'>{`Số lượng hàng: ${v?.totalLicense}`}</p>
        </div>
        {v?.id && (
          <div className='w-[120px] text-center'>
            <Button
              className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
              onClick={() => router.push(`connect/${v.id}`)}
            >
              Tiếp
            </Button>
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      <Collapse bordered={true} expandIconPosition='right'>
        {dataStatic?.map((v: any, index: number) => (
          <Panel header={renderHeader(v)} key={index}>
            <ItemPanel
              values={v.details as Array<any>}
              isSum={v.name === 'Tổng'}
            />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default OperateStatisContainer;
