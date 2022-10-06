/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input, Spin, Table } from 'antd';
import { debounce } from 'lodash';
import moment from 'moment';
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

const { RangePicker } = DatePicker;

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

  const handleFilterDate = (_: any, value: string[]) => {
    setQueries((prev) => ({
      ...prev,
      createBookingFrom: value[0] ? moment(value[0]).format('YYYY/MM/DD') : '',
      createBookingTo: value[1] ? moment(value[1]).format('YYYY/MM/DD') : '',
    }));
  };

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
        <div className='mb-4 w-full px-6'>
          <RangePicker
            onChange={handleFilterDate}
            placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
            className='w-[300px]'
            format='DD/MM/YYYY'
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
            bordered
            scroll={{ y: 650, x: 800 }}
          />
        </Spin>
      </div>
    </div>
  );
};

export default withPrivateRouteUser(ManageContainer);
