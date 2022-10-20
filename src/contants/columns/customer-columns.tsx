/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnsType } from 'antd/lib/table';

import {
  CustomerType,
  ICustomer,
  NetWorkCustomerType,
  ServiceEnum,
} from '../types';

export const CUSTOMER_COLUMNS: ColumnsType<ICustomer> = [
  {
    title: 'Mã khách hàng',
    dataIndex: 'customerCode',
    key: 'customerCode',
    align: 'center',
    width: 150,
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'center',
    width: 150,
  },
  {
    title: 'Địa chỉ chi tiết',
    dataIndex: 'detailAddress',
    key: 'detailAddress',
    align: 'center',
    width: 150,
  },
  {
    title: 'Phường/Xã',
    dataIndex: 'commune',
    key: 'commune',
    align: 'center',
    width: 150,
  },

  {
    title: 'Quận/Huyện',
    dataIndex: 'district',
    key: 'district',
    align: 'center',
    width: 150,
  },
  {
    title: 'Thành phố',
    dataIndex: 'province',
    key: 'province',
    align: 'center',
    width: 150,
  },
  {
    title: 'Quốc gia',
    dataIndex: 'country',
    key: 'country',
    align: 'center',
    width: 150,
  },
  {
    title: 'MST',
    dataIndex: 'taxCode',
    key: 'taxCode',
    align: 'center',
    width: 150,
  },
  {
    title: 'Người liên hệ',
    dataIndex: 'contactPerson',
    key: 'contactPerson',
    align: 'center',
    width: 150,
  },
  {
    title: 'SĐT',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    align: 'center',
    width: 150,
  },
  {
    title: 'Mã vùng',
    dataIndex: 'phoneCode',
    key: 'phoneCode',
    align: 'center',
    width: 150,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
    width: 150,
  },

  {
    title: 'Loại khách hàng',
    dataIndex: 'typeCustomer',
    key: 'typeCustomer',
    align: 'center',
    width: 150,
    render: (typeCustomer: string) => {
      return <span>{CustomerType[typeCustomer as 'DOMESTIC_COMPANY']}</span>;
    },
  },
  {
    title: 'Dịch vụ',
    dataIndex: 'service',
    key: 'service',
    align: 'center',
    width: 150,
    render: (service: string) => {
      return <span>{ServiceEnum[service as 'EXPORT_SERVICE_EXPRESS']}</span>;
    },
  },
  {
    title: 'Loại khách hàng vào mạng',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{NetWorkCustomerType[type as 'LOT_CUSTOMER']}</span>;
    },
  },
  {
    title: 'Mã bưu chính',
    dataIndex: 'postCode',
    key: 'postCode',
    align: 'center',
    width: 150,
    render: (type: string) => {
      return <span>{NetWorkCustomerType[type as 'LOT_CUSTOMER']}</span>;
    },
  },
  {
    title: 'Tiểu bang',
    dataIndex: 'state',
    key: 'state',
    align: 'center',
    width: 150,
    render: (state: string) => {
      return <span>{state}</span>;
    },
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note',
    key: 'note',
    align: 'center',
    width: 150,
  },
];
