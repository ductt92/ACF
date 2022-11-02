import { SearchOutlined } from '@ant-design/icons';
import { Input, Spin, Table } from 'antd';
import { debounce } from 'lodash';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { MYBOOKING_COLUMNS } from '@/contants/columns/my-booking.columns';
import { QueryParams3 } from '@/contants/common.constants';
import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import { fetchBookingAdmin } from '@/services/booking.services';

import ModalViewBooking from '../MangerContainer/components/ModalViewBooking';

const QUERY_PARAMS: QueryParams3 = {
  page: 1,
  pageSize: 20,
  search: '',
  status: undefined,
  createBookingFrom: undefined,
  createBookingTo: undefined,
};
const OrderDetails = () => {
  const [queries, setQueries] = useState<QueryParams3>(QUERY_PARAMS);
  const [isViewBooking, setIsViewBooking] = useState<boolean>(false);
  const [idBooking, setIdbooking] = useState();

  const { data, isLoading, isFetching } = useQuery(
    [QUERY_BOOKING.GET_BOOKING, queries],
    () => fetchBookingAdmin({ ...queries })
  );

  const handleSearch = debounce((value: string) => {
    setQueries((prev) => ({ ...prev, search: value }));
  }, 500);

  const dataTable = useMemo(() => {
    return data?.data?.map((v, k) => ({
      ...v,
      key: k,
    }));
  }, [data?.data]);

  return (
    <div>
      <div className='gap-4 px-6'>
        <Input
          placeholder='Tìm kiếm đơn hàng...'
          prefix={<SearchOutlined />}
          className='mb-4 mr-4 w-[350px]'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleSearch(event.target.value)
          }
        />
      </div>
      <Spin spinning={isLoading || isFetching}>
        <Table
          columns={MYBOOKING_COLUMNS}
          rowKey='key'
          className='cursor-pointer px-6'
          dataSource={dataTable || []}
          pagination={{
            current: data?.pagination?.currentPage,
            total: data?.pagination?.totalCount,
            showSizeChanger: false,
            defaultPageSize: QUERY_PARAMS.pageSize,
          }}
          onRow={(record) => {
            return {
              onClick: () => {
                setIsViewBooking(true);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //  @ts-ignore
                setIdbooking(record.booking_id);
              },
            };
          }}
          bordered
          scroll={{ y: 450, x: 800 }}
        />
      </Spin>
      {isViewBooking && (
        <ModalViewBooking
          id={idBooking}
          onClose={() => setIsViewBooking(false)}
        />
      )}
    </div>
  );
};

export default OrderDetails;
