/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input, notification, Spin, Table } from 'antd';
import dayjs from 'dayjs';
import { debounce } from 'lodash';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import ExcelIcon from '@/components/Icon/ExcelIcon';

import { MYBOOKING_COLUMNS } from '@/contants/columns/my-booking.columns';
import { QueryParams3 } from '@/contants/common.constants';
import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import { BookingStatusPost } from '@/contants/types';
import { withPrivateRouteUser } from '@/routes/withPrivateRouteUser';
import {
  fetchBooking,
  generateExcelBooking,
} from '@/services/booking.services';

import ModalViewBooking from './components/ModalViewBooking';

const QUERY_PARAMS: QueryParams3 = {
  page: 1,
  pageSize: 20,
  search: '',
  status: undefined,
  createBookingFrom: undefined,
  createBookingTo: undefined,
};

// const { RangePicker } = DatePicker;

const ManageContainer = () => {
  const [queries, setQueries] = useState<QueryParams3>(QUERY_PARAMS);
  const [idBooking, setIdbooking] = useState();
  const [isViewBooking, setIsViewBooking] = useState<boolean>(false);
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

  const handleFilterDate = (name: string, value: any) => {
    setQueries((prev) => ({
      ...prev,
      [name]: value ? dayjs(value).format('YYYY-MM-DD') : undefined,
    }));
  };
  const handlePagination = (pagination: { current?: number }) => {
    setQueries((prev) => ({
      ...prev,
      page: pagination.current,
    }));
  };

  const handleGenerateExcelBooking = () => {
    generateExcel({
      createBookingFrom: queries.createBookingFrom,
      createBookingTo: queries.createBookingTo,
    });
  };

  return (
    <div className='flex flex-row py-4'>
      <div className='w-[236px]'>
        <div className='h-full w-full border-[1px] border-[#000]'>
          <div className='flex h-8 items-center justify-center bg-[#FBE51D] text-center text-[16px] text-[#fff]'>
            Theo trạng thái đơn hàng
          </div>
          <div className='flex flex-col gap-2 border-b-[1px] border-[#000] p-4'>
            <Button
              className='w-full border-[#000] bg-[#CCCCCC]'
              onClick={() =>
                handleSetStatus(BookingStatusPost.NOT_YET_HANDED_OVER)
              }
            >
              Chưa xác nhận
            </Button>
            <Button
              className='w-full border-[#000] bg-[#CCCCCC]'
              onClick={() => handleSetStatus(BookingStatusPost.HANDED_OVER)}
            >
              Đã xác nhận
            </Button>
            <Button
              className='w-full border-[#000] bg-[#CCCCCC]'
              onClick={() => handleSetStatus(BookingStatusPost.DONE)}
            >
              Đã lấy hàng
            </Button>
            <Button
              className='w-full border-[#000] bg-[#CCCCCC]'
              onClick={() => handleSetStatus(BookingStatusPost.CANCEL)}
            >
              Đã hủy
            </Button>
          </div>

          <div className='flex h-8 items-center justify-center bg-[#FBE51D] text-center text-[16px] text-[#fff]'>
            Theo thời gian tạo Booking
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='text-center'>Từ ngày</div>
            <DatePicker
              format='DD-MM-YYYY'
              className='w-[200px]'
              placeholder='Chọn ngày'
              onChange={(e) => handleFilterDate('createBookingFrom', e)}
            />
            <div className='text-center'>Đến ngày</div>
            <DatePicker
              format='DD-MM-YYYY'
              className='w-[200px]'
              placeholder='Chọn ngày'
              onChange={(e) => handleFilterDate('createBookingTo', e)}
            />
            <Button
              className='mt-9 w-[125px] rounded-md bg-[#FBE51D]'
              onClick={handleGenerateExcelBooking}
            >
              <div className='flex flex-row items-center justify-center gap-2'>
                <ExcelIcon width={20} height={20} />
                <span> Xuất excel</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className='w-[calc(100vw-236px)] gap-4'>
        <div className='flex w-full justify-center gap-4 px-6'>
          <Input
            placeholder='Tìm kiếm đơn hàng ...'
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
            onChange={handlePagination}
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
                }, // click row
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
    </div>
  );
};

export default withPrivateRouteUser(ManageContainer);
