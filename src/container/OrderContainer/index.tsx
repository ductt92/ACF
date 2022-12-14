/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownloadOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input, notification, Spin, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { debounce } from 'lodash';
import moment from 'moment';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { MYBOOKING_COLUMNS } from '@/contants/columns/my-booking.columns';
import { QueryParams3 } from '@/contants/common.constants';
import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import { IMyBooking } from '@/contants/types';
import {
  fetchBookingAdmin,
  generateExcelBooking,
} from '@/services/booking.services';

import ModalViewDetailsBooking from './ModalViewDetailsBooking';

const QUERY_PARAMS: QueryParams3 = {
  page: 1,
  pageSize: 20,
  search: '',
  status: undefined,
  createBookingFrom: undefined,
  createBookingTo: undefined,
  isHandle: undefined,
};

const statusPending: ColumnsType<IMyBooking> = [
  {
    title: 'TT Xử lý',
    dataIndex: 'is_handle',
    key: 'is_handle',
    align: 'center',
    width: 100,
    render: (isHandle: string) => (
      <p className={isHandle ? 'text-green-500	' : 'text-red-500'}>
        {isHandle ? 'Đã xử lý' : 'Chưa xử lý'}
      </p>
    ),
  },
];
const { RangePicker } = DatePicker;
const OrderDetails = () => {
  const [queries, setQueries] = useState<QueryParams3>(QUERY_PARAMS);
  const [isViewBooking, setIsViewBooking] = useState<boolean>(false);
  const [idBooking, setIdbooking] = useState<string | undefined>();
  const queryClient = useQueryClient();
  const { mutate: generateExcel } = useMutation(generateExcelBooking, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_BOOKING.GET_BOOKING]);
      notification.success({
        message: 'Tải xuống thành công',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'Tải xuống thất bại',
        placement: 'top',
      });
    },
  });
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

  const handlePagination = (pagination: { current?: number }) => {
    setQueries((prev) => ({
      ...prev,
      page: pagination.current,
    }));
  };

  const handleChangeDateFilter = (value: any) => {
    setQueries((prev) => ({
      ...prev,
      createBookingFrom: moment(value?.[0]).format('YYYY-MM-DD'),
      createBookingTo: moment(value?.[1]).format('YYYY-MM-DD'),
    }));
  };

  const handleGenerateExcelBooking = () => {
    generateExcel({
      createBookingFrom: queries.createBookingFrom,
      createBookingTo: queries.createBookingTo,
    });
  };

  const handleChangeIsHandle = (value: boolean) => {
    setQueries((prev) => ({
      ...prev,
      isHandle: value,
    }));
  };
  return (
    <div>
      <div className='flex flex-row gap-4 px-6'>
        <Input
          placeholder='Tìm kiếm đơn hàng...'
          prefix={<SearchOutlined />}
          className='mb-4 mr-4 h-8 w-[350px]'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleSearch(event.target.value)
          }
        />

        <RangePicker
          format='DD-MM-YYYY'
          onChange={handleChangeDateFilter}
          className='h-8'
          placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
        />

        <Button
          icon={<DownloadOutlined />}
          type='primary'
          className='h-8'
          onClick={handleGenerateExcelBooking}
        >
          Xuất excel
        </Button>
        <Button
          type='primary'
          className='h-8'
          onClick={() => handleChangeIsHandle(true)}
        >
          Đã xử lý
        </Button>
        <Button
          type='primary'
          className='h-8'
          onClick={() => handleChangeIsHandle(false)}
          danger
        >
          Chưa xử lý
        </Button>
      </div>
      <Spin spinning={isLoading || isFetching}>
        <Table
          columns={statusPending.concat(MYBOOKING_COLUMNS)}
          rowKey='key'
          onChange={handlePagination}
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
          scroll={{ y: 700, x: 800 }}
        />
      </Spin>
      {isViewBooking && (
        <ModalViewDetailsBooking
          id={idBooking}
          onClose={() => setIsViewBooking(false)}
        />
      )}
    </div>
  );
};

export default OrderDetails;
