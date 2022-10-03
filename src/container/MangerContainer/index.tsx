import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Spin, Table } from 'antd';
import { debounce } from 'lodash';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { MYBOOKING_COLUMNS } from '@/contants/columns/my-booking.columns';
import { QueryParams } from '@/contants/common.constants';
import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import { BookingStatusPost } from '@/contants/types';
import { withPrivateRouteUser } from '@/routes/withPrivateRouteUser';
import { fetchBooking } from '@/services/booking.services';

const QUERY_PARAMS: QueryParams = {
  page: 1,
  pageSize: 20,
  search: '',
  status: undefined,
};
const ManageContainer = () => {
  const [queries, setQueries] = useState<QueryParams>(QUERY_PARAMS);

  const { data, isLoading, isFetching } = useQuery(
    [QUERY_BOOKING.GET_BOOKING, queries],
    () => fetchBooking({ ...queries })
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

  const handleSetStatus = debounce((value: BookingStatusPost) => {
    setQueries((prev) => ({ ...prev, status: value }));
  }, 500);

  return (
    <div className='mb-20'>
      <div className='gap-4'>
        <div className='gap-4 px-6'>
          <Input
            placeholder='Tìm kiếm đơn hàng...'
            prefix={<SearchOutlined />}
            className='mb-4 mr-4 w-[350px]'
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleSearch(event.target.value)
            }
          />
          <Button
            onClick={() =>
              handleSetStatus(BookingStatusPost.NOT_YET_HANDED_OVER)
            }
          >
            Chưa xác nhận
          </Button>
          <Button
            onClick={() => handleSetStatus(BookingStatusPost.HANDED_OVER)}
          >
            Đã xác nhận
          </Button>
          <Button onClick={() => handleSetStatus(BookingStatusPost.DONE)}>
            Đã lấy hàng
          </Button>
          <Button onClick={() => handleSetStatus(BookingStatusPost.CANCEL)}>
            Đã hủy
          </Button>
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
            bordered
            scroll={{ y: 700, x: 800 }}
          />
        </Spin>
      </div>
    </div>
  );
};

export default withPrivateRouteUser(ManageContainer);
