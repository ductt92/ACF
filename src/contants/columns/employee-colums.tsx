/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnsType } from 'antd/lib/table';
import dayjs from 'dayjs';

import { LevelStaff } from '../common.constants';
import { IStaff, Marital } from '../types';

export const EMPLOYEE_COLUMNS: ColumnsType<IStaff> = [
  {
    title: 'Tên nhân viên',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'center',
    width: 150,
  },
  {
    title: 'Mã nhân viên',
    dataIndex: 'staffCode',
    key: 'staffCode',
    align: 'center',
    width: 150,
  },
  {
    title: 'Vị trí làm việc',
    dataIndex: 'position',
    key: 'position',
    align: 'center',
    width: 150,
  },

  {
    title: 'Giới tính',
    dataIndex: 'gender',
    key: 'gender',
    align: 'center',
    width: 150,
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'dayOfBirth',
    key: 'dayOfBirth',
    align: 'center',
    width: 150,
    render: (dayOfBirth: string) => {
      return <span>{dayjs(dayOfBirth).format('DD/MM/YYYY')}</span>;
    },
  },
  {
    title: 'Nơi sinh',
    dataIndex: 'placeOfBirth',
    key: 'placeOfBirth',
    align: 'center',
    width: 150,
  },
  {
    title: 'Tạm trú',
    dataIndex: 'temporaryAddress',
    key: 'temporaryAddress',
    align: 'center',
    width: 150,
  },
  {
    title: 'Thường trú',
    dataIndex: 'permanentAddress',
    key: 'permanentAddress',
    align: 'center',
    width: 150,
  },
  {
    title: 'Dân tộc',
    dataIndex: 'ethnic',
    key: 'ethnic',
    align: 'center',
    width: 150,
  },

  {
    title: 'Tôn giáo',
    dataIndex: 'religion',
    key: 'religion',
    align: 'center',
    width: 150,
  },
  {
    title: 'Quốc tịch',
    dataIndex: 'nationality',
    key: 'nationality',
    align: 'center',
    width: 150,
  },
  {
    title: 'Trình Độ',
    dataIndex: 'level',
    key: 'level',
    align: 'center',
    width: 150,
    render: (typeCustomer: string) => {
      return <span>{LevelStaff[typeCustomer as 'MASTER']}</span>;
    },
    // LevelStaff
  },
  {
    title: 'Tình trạng hôn nhân',
    dataIndex: 'marital',
    key: 'marital',
    align: 'center',
    width: 150,
    render: (typeCustomer: string) => {
      return <span>{Marital[typeCustomer as 'SINGLE']}</span>;
    },
  },
  {
    title: 'Thành phần',
    dataIndex: 'element',
    key: 'element',
    align: 'center',
    width: 150,
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
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
    title: 'Mã vùng điện thoại của nước sở tại',
    dataIndex: 'phoneCode',
    key: 'phoneCode',
    align: 'center',
    width: 150,
  },
  {
    title: 'CMT/CCCD',
    dataIndex: 'peopleId',
    key: 'peopleId',
    align: 'center',
    width: 150,
  },
  {
    title: 'Ngày phát hành CMT/CCCD',
    dataIndex: 'issueDate',
    key: 'issueDate',
    align: 'center',
    width: 150,
    render: (dayOfBirth: string) => {
      return <span>{dayjs(dayOfBirth).format('DD/MM/YYYY')}</span>;
    },
  },
  {
    title: 'Nơi cấp CMT/CCCD',
    dataIndex: 'issuePlace',
    key: 'issuePlace',
    align: 'center',
    width: 150,
  },
  {
    title:
      'Khu vực làm việc của nhân viên. Chọn theo các thông tin đơn vị của trường quản lý khách hàng',
    dataIndex: 'region',
    key: 'region',
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
    title: 'Ngân hàng',
    dataIndex: 'bankCode',
    key: 'bankCode',
    align: 'center',
    width: 150,
  },
  {
    title: 'Số thẻ NH',
    dataIndex: 'bankAccountNumber',
    key: 'bankAccountNumber',
    align: 'center',
    width: 150,
  },

  {
    title: 'Mã BHXH',
    dataIndex: 'socialInsuranceId',
    key: 'socialInsuranceId',
    align: 'center',
    width: 150,
  },
  {
    title: 'Mã BHYT',
    dataIndex: 'healthInsuranceId',
    key: 'healthInsuranceId',
    align: 'center',
    width: 150,
  },
  {
    title: 'Số sổ công đoàn',
    dataIndex: 'unionBookNumber',
    key: 'unionBookNumber',
    align: 'center',
    width: 150,
  },
  {
    title: 'Ngày tham gia bảo hiểm',
    dataIndex: 'insuranceParticipationDate',
    key: 'insuranceParticipationDate',
    align: 'center',
    width: 150,
    render: (dayOfBirth: string) => {
      return (
        <span>{dayOfBirth && dayjs(dayOfBirth).format('DD/MM/YYYY')}</span>
      );
    },
  },
  {
    title: 'Ngày phát bảo hiểm',
    dataIndex: 'issueInsuranceDate',
    key: 'issueInsuranceDate',
    align: 'center',
    width: 150,
    render: (dayOfBirth: string) => {
      return (
        <span>{dayOfBirth && dayjs(dayOfBirth).format('DD/MM/YYYY')}</span>
      );
    },
  },
];
