import { SearchOutlined } from '@ant-design/icons';
import { Input, Spin, Table } from 'antd';
import { debounce } from 'lodash';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import {
  BOOKING_DETAILS,
  MYBOOKING_COLUMNS,
} from '@/contants/columns/my-booking.columns';
import { QueryParams } from '@/contants/common.constants';
import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import { withPrivateRouteUser } from '@/routes/withPrivateRouteUser';
import { fetchBooking, fetchUser } from '@/services/booking.services';

import ModalCreateBooking from './components/ModalCreateBooking';

const QUERY_PARAMS: QueryParams = {
  page: 1,
  pageSize: 20,
  search: '',
};
const ManageContainer = () => {
  const [queries, setQueries] = useState<QueryParams>(QUERY_PARAMS);
  const [isCreateBooking, setIsCreateBooking] = useState<boolean>(false);
  const { data, isLoading, isFetching } = useQuery(
    [QUERY_BOOKING.GET_BOOKING, queries],
    () => fetchBooking({ ...queries })
  );
  const { data: userData } = useQuery(['getuser', queries], () => fetchUser());

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
    <div className='mb-20'>
      <div className='gap-4'>
        <div className='px-6'>
          <Input
            placeholder='Tìm kiếm đơn hàng...'
            prefix={<SearchOutlined />}
            className='mb-4 mr-4 w-[350px]'
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleSearch(event.target.value)
            }
          />
          {/* <Button onClick={() => setIsCreateBooking(true)} type='primary'>
            Tạo mới đơn hàng
          </Button> */}
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
            expandable={{
              defaultExpandAllRows: false,
              expandedRowRender: (record) => (
                <Table
                  bordered
                  columns={BOOKING_DETAILS}
                  dataSource={record.bookingDetail.map((v, key) => ({
                    ...v,
                    key,
                  }))}
                  pagination={false}
                  rowKey='key'
                />
              ),
              rowExpandable: (record) => record.bookingDetail.length > 0,
            }}
            scroll={{ y: 700, x: 800 }}
          />
        </Spin>
        {isCreateBooking && (
          <ModalCreateBooking
            isOpen={isCreateBooking}
            dataUser={userData}
            onClose={() => setIsCreateBooking(false)}
          />
        )}
      </div>
    </div>
  );
};

export default withPrivateRouteUser(ManageContainer);
