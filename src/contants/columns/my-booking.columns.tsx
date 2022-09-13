/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import dayjs from 'dayjs';

import { CLICK_TO_COPY, copyToClipBoard } from '@/utils/helpers';

import {
  BookingDetails,
  BookingStatus,
  BookingType,
  CommoditiesType,
  IMyBooking,
  ServiceEnum,
  TypeOfPayment,
} from '../types';
const HIGH_LIGHT_CLASS = 'text-[#1890ff] ';

export const MYBOOKING_COLUMNS: ColumnsType<IMyBooking> = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'bookingCode',
    key: 'bookingCode',
    align: 'center',
    width: 150,
    render: (bookingCode: string) => (
      <Tooltip placement='bottom' title={CLICK_TO_COPY}>
        <p
          onClick={() => copyToClipBoard(bookingCode)}
          className={HIGH_LIGHT_CLASS}
        >
          {bookingCode}
        </p>
      </Tooltip>
    ),
  },
  {
    title: 'Loại đơn hàng (Chứng từ, hàng hóa)',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{BookingType[type as 'LICENSE']}</span>;
    },
  },

  {
    title: 'Mã bill đối tác',
    dataIndex: 'partnerBillCode',
    key: 'partnerBillCode',
    align: 'center',
    width: 150,
  },
  {
    title: 'Địa chỉ chi tiết người gửi',
    dataIndex: 'senderAddress',
    key: 'senderAddress',
    align: 'center',
    width: 150,
  },
  {
    title: 'Người gửi',
    dataIndex: 'senderName',
    key: 'senderName',
    align: 'center',
    width: 150,
  },
  {
    title: 'Người liên hệ',
    dataIndex: 'senderContactPerson',
    key: 'senderContactPerson',
    align: 'center',
    width: 150,
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'senderPhoneNumber',
    key: 'senderPhoneNumber',
    align: 'center',
    width: 150,
  },
  {
    title: 'Mobile',
    dataIndex: 'senderMobile',
    key: 'senderMobile',
    align: 'center',
    width: 150,
  },

  {
    title: 'Quốc gia',
    dataIndex: 'senderCountry',
    key: 'senderCountry',
    align: 'center',
    width: 150,
  },
  {
    title: 'Phường/xã',
    dataIndex: 'senderCommune',
    key: 'senderCommune',
    align: 'center',
    width: 150,
  },
  {
    title: 'Quận/Huyện',
    dataIndex: 'senderDistrict',
    key: 'senderDistrict',
    align: 'center',
    width: 150,
  },
  {
    title: 'Tỉnh/Thành phố',
    dataIndex: 'senderProvince',
    key: 'senderProvince',
    align: 'center',
    width: 150,
  },
  {
    title: 'Mã bưu chính',
    dataIndex: 'senderPostalCode',
    key: 'senderPostalCode',
    align: 'center',
    width: 150,
  },
  {
    title: 'Tiểu bang',
    dataIndex: 'senderState',
    key: 'senderState',
    align: 'center',
    width: 150,
  },
  {
    title: 'Địa chỉ chi tiết người nhận',
    dataIndex: 'receiverAddress',
    key: 'receiverAddress',
    align: 'center',
    width: 150,
  },
  {
    title: 'Người nhận',
    dataIndex: 'receiverName',
    key: 'receiverName',
    align: 'center',
    width: 150,
  },
  {
    title: 'Người liên hệ',
    dataIndex: 'receiverContactPerson',
    key: 'receiverContactPerson',
    align: 'center',
    width: 150,
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'receiverPhoneNumber',
    key: 'receiverPhoneNumber',
    align: 'center',
    width: 150,
  },
  {
    title: 'Mobile',
    dataIndex: 'receiverMobile',
    key: 'receiverMobile',
    align: 'center',
    width: 150,
  },
  {
    title: 'Quốc gia',
    dataIndex: 'receiverCountry',
    key: 'receiverCountry',
    align: 'center',
    width: 150,
  },
  {
    title: 'Phường/xã',
    dataIndex: 'receiverCommune',
    key: 'receiverCommune',
    align: 'center',
    width: 150,
  },
  {
    title: 'Quận/Huyện',
    dataIndex: 'receiverDistrict',
    key: 'receiverDistrict',
    align: 'center',
    width: 150,
  },
  {
    title: 'Tỉnh/Thành phố',
    dataIndex: 'receiverProvince',
    key: 'receiverProvince',
    align: 'center',
    width: 150,
  },

  {
    title: 'Mã bưu chính',
    dataIndex: 'receiverPostalCode',
    key: 'receiverPostalCode',
    align: 'center',
    width: 150,
  },
  {
    title: 'Tiểu bang',
    dataIndex: 'receiverState',
    key: 'receiverState',
    align: 'center',
    width: 150,
  },
  {
    title: 'Thời gian dự kiến lấy hàng',
    dataIndex: 'estimatedDate',
    key: 'estimatedDate',
    align: 'center',
    width: 150,
    render: (estimatedDate: string) => {
      return <span>{dayjs(estimatedDate).format('DD/MM/YYYY')}</span>;
    },
  },
  {
    title: 'Trạng thái booking',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{BookingStatus[type as 'NOT_YET_HANDED_OVER']}</span>;
    },
  },
  {
    title: 'Dịch vụ',
    dataIndex: 'serviceBooking',
    key: 'serviceBooking',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{ServiceEnum[type as 'EXPORT_SERVICE_EXPRESS']}</span>;
    },
  },
  {
    title: 'Loại hình thanh toán',
    dataIndex: 'typeOfPayment',
    key: 'typeOfPayment',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{TypeOfPayment[type as 'PREPAID']}</span>;
    },
  },
  {
    title: 'Tổng tiền đơn hàng',
    dataIndex: 'total',
    key: 'total',
    align: 'center',
    width: 150,
  },
  {
    title: 'Tiền thuế',
    dataIndex: 'vat',
    key: 'vat',
    align: 'center',
    width: 150,
  },
  {
    title: 'Tổng tiền thanh toán',
    dataIndex: 'amount',
    key: 'amount',
    align: 'center',
    width: 150,
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note',
    key: 'note',
    align: 'center',
    width: 150,
  },
];

export const BOOKING_DETAILS: ColumnsType<BookingDetails> = [
  {
    title: 'Loại hàng hóa',
    dataIndex: 'commoditiesType',
    key: 'commoditiesType-2',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{CommoditiesType[type as 'LICENSE']}</span>;
    },
  },
  {
    title: 'Tên hàng hóa',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: 150,
  },
  {
    title: 'Mô tả',
    dataIndex: 'description',
    key: 'description',
    align: 'center',
    width: 150,
  },
  {
    title: 'Số kiện',
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'center',
    width: 150,
  },
  {
    title: 'Trọng lượng (kg/kiện)',
    dataIndex: 'weight',
    key: 'weight',
    align: 'center',
    width: 150,
  },
  {
    title: 'Chiều cao',
    dataIndex: 'height',
    key: 'height',
    align: 'center',
    width: 150,
  },
  {
    title: 'Chiều rộng',
    dataIndex: 'width',
    key: 'width',
    align: 'center',
    width: 150,
  },
  {
    title: 'Chiều dài',
    dataIndex: 'longs',
    key: 'longs',
    align: 'center',
    width: 150,
  },
  {
    title: 'Trọng lượng cồng kềnh',
    dataIndex: 'bulkyWeight',
    key: 'bulkyWeight',
    align: 'center',
    width: 150,
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note',
    key: 'note-2',
    align: 'center',
    width: 150,
  },
];
