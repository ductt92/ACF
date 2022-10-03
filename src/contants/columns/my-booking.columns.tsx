/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import dayjs from 'dayjs';

import { CLICK_TO_COPY, copyToClipBoard } from '@/utils/helpers';

import { CalculationUnit } from '../common.constants';
import {
  BookingStatus,
  BookingType,
  DetailsBookingPost,
  IInvoiceDetails,
  IMyBooking,
} from '../types';
const HIGH_LIGHT_CLASS = 'text-[#1890ff] ';

export const MYBOOKING_COLUMNS: ColumnsType<IMyBooking> = [
  {
    title: 'Mã bưu phẩm bưu kiện ACF',
    dataIndex: 'booking_code',
    key: 'booking_code',
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
    title: 'Mã bưu phẩm bưu kiện đối tác',
    dataIndex: 'partner_bill_code',
    key: 'partner_bill_code',
    align: 'center',
    width: 150,
  },
  {
    title: 'Trạng thái đơn hàng',
    dataIndex: 'booking_status',
    key: 'booking_status',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{BookingStatus[type as 'NOT_YET_HANDED_OVER']}</span>;
    },
  },
  {
    title: 'Thời gian yêu cầu lấy hàng',
    dataIndex: 'estimate_date',
    key: 'estimate_date',
    align: 'center',
    width: 150,
    render: (estimatedDate: string) => {
      return <span>{dayjs(estimatedDate).format('DD/MM/YYYY hh:mm:ss')}</span>;
    },
  },
  {
    title: 'Loại bưu phẩm bưu kiện',
    dataIndex: 'booking_status',
    key: 'booking_status',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{BookingType[type as 'LICENSE']}</span>;
    },
  },
  {
    title: 'Cân nặng thực (Kg)',
    dataIndex: 'weight',
    key: 'weight',
    align: 'center',
    width: 150,
  },
  {
    title: 'Cân nặng cồng kềnh (kg)',
    dataIndex: 'bulky_weight',
    key: 'bulky_weight',
    align: 'center',
    width: 150,
  },
  {
    title: 'Dịch vụ',
    dataIndex: 'services_name',
    key: 'services_name',
    align: 'center',
    width: 150,
  },
  {
    title: 'Thông tin người nhận',
    dataIndex: 'receiver_contact_person',
    key: 'receiver_contact_person',
    align: 'center',
    width: 150,
  },
  {
    title: 'Ghi chú',
    dataIndex: 'booking_note',
    key: 'booking_note',
    align: 'center',
    width: 150,
  },

  {
    title: 'Thời gian tạo booking',
    dataIndex: 'created_at',
    key: 'created_at',
    align: 'center',
    width: 150,
    render: (created_at: string) => {
      return <span>{dayjs(created_at).format('DD/MM/YYYY hh:mm:ss')}</span>;
    },
  },
];

export const BOOKING_DETAILS: ColumnsType<DetailsBookingPost> = [
  {
    title: 'Đơn vị',
    dataIndex: 'calculationUnit',
    key: 'calculationUnit',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{CalculationUnit[type as 'CM_KG']}</span>;
    },
  },
  {
    title: 'Nhóm hàng hóa vận chuyển',
    dataIndex: 'commoditiesTypeId',
    key: 'commoditiesType',
    align: 'center',
    width: 150,
  },
  {
    title: 'Mặt hàng vận chuyển (Tiếng Việt)',
    dataIndex: 'shippingItemViId',
    key: 'shippingItemVi ',
    align: 'center',
    width: 150,
    render: (type: any) => {
      return <span>{type}</span>;
    },
  },
  {
    title: 'Mô tả chi tiết hàng hóa',
    dataIndex: 'description',
    key: 'description',
    align: 'center',
    width: 150,
  },
  {
    title: 'Xuất xứ hàng hóa',
    dataIndex: 'originItem',
    key: 'originItem',
    align: 'center',
    width: 150,
  },

  {
    title: 'Mặt hàng vận chuyển (Tiếng Anh)',
    dataIndex: 'shippingItemEn',
    key: 'shippingItemEn ',
    align: 'center',
    width: 150,
  },
  {
    title: 'Số kiện hàng',
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'center',
    width: 150,
  },
  {
    title: 'Chiều dài(cm)',
    dataIndex: 'longs',
    key: 'longs',
    align: 'center',
    width: 150,
  },
  {
    title: 'Trọng lượng cồng kềnh(kg)',
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

export const INVOICE_DETAILS: ColumnsType<IInvoiceDetails> = [
  {
    title: 'Tên hàng hóa',
    dataIndex: 'goods_name',
    key: 'goods_name',
    align: 'center',
    width: 150,
  },
  {
    title: 'Mô tả hàng hóa',
    dataIndex: 'describe',
    key: 'describe',
    align: 'center',
    width: 150,
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'center',
    width: 150,
  },
  {
    title: 'Đơn vị tính',
    dataIndex: 'unitOfMeasure',
    key: 'unitOfMeasure',
    align: 'center',
    width: 150,
  },
  {
    title: 'Đơn giá',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
    width: 150,
  },
  {
    title: 'Thành tiền',
    dataIndex: 'totalMoney',
    key: 'totalMoney',
    align: 'center',
    width: 150,
  },
  {
    title: 'Cân nặng',
    dataIndex: 'weight',
    key: 'weight',
    align: 'center',
    width: 150,
  },
  {
    title: 'Xuất xứ',
    dataIndex: 'originOfGoods',
    key: 'originOfGoods',
    align: 'center',
    width: 150,
  },
  {
    title: 'HS Code',
    dataIndex: 'HSCode',
    key: 'HSCode',
    align: 'center',
    width: 150,
  },
];
