/* eslint-disable react/jsx-key */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeleteOutlined,
  EditOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Modal, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import clsx from 'clsx';
import dayjs from 'dayjs';

import {
  CLICK_TO_COPY,
  copyToClipBoard,
  numberWithCommas,
} from '@/utils/helpers';

import { CalculationUnit } from '../common.constants';
import {
  BookingStatus,
  BookingType,
  DetailsBookingPost,
  ETypeStaff,
  IInvoiceDetails,
  IMyBooking,
  OpitionType,
} from '../types';

const COMMON_CLASS = 'cursor-pointer truncate text-center';
const HIGH_LIGHT_CLASS = 'text-[#1890ff]';
const DEFAULT_CONTAINER = 'min-h-[32px] min-w-[50px] text-center';
const CUSTOMER_CLASS = 'w-[150px] cursor-pointer truncate text-center p-2 m-0';

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
      return <span>{dayjs(estimatedDate).format('DD/MM/YYYY HH:mm:ss')}</span>;
    },
  },
  {
    title: 'Loại bưu phẩm bưu kiện',
    dataIndex: 'booking_type',
    key: 'booking_type',
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
      return <span>{dayjs(created_at).format('DD/MM/YYYY HH:mm:ss')}</span>;
    },
  },
];

export const renderBookingDetailsNoAction = (
  commoditiesType: Array<OpitionType>,
  shippingType: Array<OpitionType>
) => {
  const BOOKING_DETAILS: ColumnsType<DetailsBookingPost> = [
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
      key: 'commoditiesTypeId',
      align: 'center',
      width: 150,
      render: (type: string) => {
        const commoditie = commoditiesType?.filter((x) => x.value === type);
        return commoditie.map((v) => <span key={v.value}>{v.label}</span>);
      },
    },
    {
      title: 'Mặt hàng vận chuyển (Tiếng Việt)',
      dataIndex: 'shippingItemViId',
      key: 'shippingItemVi ',
      align: 'center',
      width: 150,
      render: (type: any) => {
        const shipping = shippingType?.filter((x) => x.value === type);
        return shipping.map((v) => (
          // <span key={v.value} className={clsx(COMMON_CLASS)}>
          //   {v.label}
          // </span>
          <Tooltip placement='bottom' title={v.label} key={v.value}>
            <p className={clsx(COMMON_CLASS)}>{v.label}</p>
          </Tooltip>
        ));
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
      title: 'Chiều rộng(cm)',
      dataIndex: 'width',
      key: 'width',
      align: 'center',
      width: 150,
    },
    {
      title: 'Chiều cao(cm)',
      dataIndex: 'height',
      key: 'height',
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
  return BOOKING_DETAILS;
};
export const renderBookingDetails = (
  commoditiesType: Array<OpitionType>,
  shippingType: Array<OpitionType>,
  handleDelete: (id: any) => void,
  handleUpdateBooking: (record: any) => void
) => {
  const handleDeleteRow = (row: any) => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <WarningOutlined className='text-red-700' />,
      content: 'Bạn có chắc chắn muốn xóa hàng hóa này không?',
      okText: 'Đồng ý',
      cancelText: 'Không',
      onOk: () => handleDelete(row),
    });
  };
  const BOOKING_DETAILS: ColumnsType<DetailsBookingPost> = [
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
      key: 'commoditiesTypeId',
      align: 'center',
      width: 150,
      render: (type: string) => {
        const commoditie = commoditiesType.filter((x) => x.value === type);
        return commoditie.map((v) => <span key={v.value}>{v.label}</span>);
      },
    },
    {
      title: 'Mặt hàng vận chuyển (Tiếng Việt)',
      dataIndex: 'shippingItemViId',
      key: 'shippingItemVi ',
      align: 'center',
      width: 150,
      render: (type: any) => {
        const shipping = shippingType?.filter((x) => x.value === type);
        return shipping.map((v) => (
          // <span key={v.value} className={clsx(COMMON_CLASS)}>
          //   {v.label}
          // </span>
          <Tooltip placement='bottom' title={v.label} key={v.value}>
            <p className={clsx(COMMON_CLASS)}>{v.label}</p>
          </Tooltip>
        ));
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
      title: 'Chiều rộng(cm)',
      dataIndex: 'width',
      key: 'width',
      align: 'center',
      width: 150,
    },
    {
      title: 'Chiều cao(cm)',
      dataIndex: 'height',
      key: 'height',
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
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (type: string, record: any, index) => (
        <div className='flex flex-row gap-8'>
          <EditOutlined
            onClick={() => handleUpdateBooking({ ...record, idKey: index })}
          />
          <DeleteOutlined onClick={() => handleDeleteRow(index)} />
        </div>
      ),
    },
  ];
  return BOOKING_DETAILS;
};

export const renderInvoiceDetails = (
  handleDeleteInvoice: (id: any) => void,
  handleUpdateInvoice: (form: any) => void
) => {
  const handleDeleteRow = (row: any) => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <WarningOutlined className='text-red-700' />,
      content: 'Bạn có chắc chắn muốn xóa hàng hóa này không?',
      okText: 'Đồng ý',
      cancelText: 'Không',
      onOk: () => handleDeleteInvoice(row),
    });
  };
  const INVOICE_DETAILS: ColumnsType<IInvoiceDetails> = [
    {
      title: 'Tên hàng hóa',
      dataIndex: 'goodsName',
      key: 'goodsName',
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

    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (type: string, record: any, index) => (
        <div className='flex flex-row gap-8'>
          <EditOutlined
            onClick={() => handleUpdateInvoice({ ...record, idKey: index })}
          />
          <DeleteOutlined onClick={() => handleDeleteRow(index)} />
        </div>
      ),
    },
  ];

  return INVOICE_DETAILS;
};
export const INVOICE_DETAILS_ABC: ColumnsType<DetailsBookingPost> = [
  {
    title: 'Tên hàng hóa',
    dataIndex: 'goodsName',
    key: 'goodsName',
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

export const INVOICE_DETAILS: ColumnsType<IInvoiceDetails> = [
  {
    title: 'Tên hàng hóa',
    dataIndex: 'goodsName',
    key: 'goodsName',
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

export const columsStaff = ({
  arrayStaff,
  handleDelete,
  handleUpdate,
}: {
  arrayStaff: Array<OpitionType>;
  handleDelete: (id: any) => void;
  handleUpdate: (record: any) => void;
}) => {
  const handleDeleteRow = (row: any) => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <WarningOutlined className='text-red-700' />,
      content: 'Bạn có chắc chắn muốn xóa nhân viên này không?',
      okText: 'Đồng ý',
      cancelText: 'Không',
      onOk: () => handleDelete(row),
    });
  };

  const columns: ColumnsType<any> = [
    {
      title: 'Tên nhân viên',
      dataIndex: 'staffId',
      key: 'staffId',
      align: 'center',
      width: 150,
      render: (staffId: string) => (
        <div>
          {arrayStaff?.find((x: OpitionType) => x.value === staffId)?.label}
        </div>
      ),
    },
    {
      title: 'Loại nhân viên',
      dataIndex: 'typeStaff',
      key: 'typeStaff',
      align: 'center',
      width: 150,
      render: (typeStaff: string) => (
        <div>{ETypeStaff[typeStaff as 'DEBT_COLLECTOR']}</div>
      ),
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (type: string, record: any, index) => (
        <div className='flex flex-row gap-8'>
          <EditOutlined
            onClick={() => handleUpdate({ ...record, idKey: index })}
          />
          <DeleteOutlined onClick={() => handleDeleteRow(index)} />
        </div>
      ),
    },
  ];
  return columns;
};

export const columnsContract = ({
  opitionTypeContract,
  opitionStaff,
  opitionServices,
  handleDelete,
  handleUpdate,
}: {
  opitionTypeContract: Array<OpitionType>;
  opitionStaff: Array<OpitionType>;
  opitionServices: Array<OpitionType>;
  handleDelete: (id: any) => void;
  handleUpdate: (record: any) => void;
}) => {
  const handleDeleteRow = (row: any) => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <WarningOutlined className='text-red-700' />,
      content: 'Bạn có chắc chắn muốn xóa hàng hóa này không?',
      okText: 'Đồng ý',
      cancelText: 'Không',
      onOk: () => handleDelete(row),
    });
  };
  const contract: ColumnsType<any> = [
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
      width: 150,
      render: (createdAt: string) => (
        <div>{dayjs(createdAt).format('DD-MM-YYYY  HH:mm:ss')}</div>
      ),
    },
    {
      title: 'Mã phụ lục hợp đồng',
      dataIndex: 'contractCode',
      key: 'contractCode',
      align: 'center',
      width: 150,
      render: (contractCode: string) => <div>{contractCode}</div>,
    },
    {
      title: 'Tên phụ lục hợp đồng',
      dataIndex: 'contractName',
      key: 'contractName',
      align: 'center',
      width: 150,
      render: (contractName: string) => <div>{contractName}</div>,
    },
    {
      title: 'Dịch vụ sử dụng',
      dataIndex: 'service',
      key: 'service',
      align: 'center',
      width: 150,
      render: (service: string) => (
        <div>
          {
            opitionServices?.find((x: OpitionType) => x.value === service)
              ?.label
          }
        </div>
      ),
    },
    {
      title: 'Loại phụ lục hợp đồng',
      dataIndex: 'typeContract',
      key: 'typeContract',
      align: 'center',
      width: 150,
      render: (typeContract: string) => (
        <div>
          {
            opitionTypeContract?.find(
              (x: OpitionType) => x.value === typeContract
            )?.label
          }
        </div>
      ),
    },
    {
      title: 'Lịch thanh toán công nợ kể từ ngày xuất hóa đơn',
      dataIndex: 'paymentSchedule',
      key: 'paymentSchedule',
      align: 'center',
      width: 150,
      render: (paymentSchedule: string) => {
        return <div>{paymentSchedule}</div>;
      },
    },

    {
      title: 'Thời hạn hợp đồng',
      dataIndex: 'contactTerm',
      key: 'contactTerm',
      align: 'center',
      width: 140,
      render: (contactTerm: Array<any>) => (
        <div>{`Từ: ${dayjs(contactTerm[0]).format(
          'DD-MM-YYYY'
        )} \n Đến :${dayjs(contactTerm[1]).format('DD-MM-YYYY')}`}</div>
      ),
    },
    {
      title: 'Thẩm định',
      dataIndex: 'expertise',
      key: 'expertise',
      align: 'center',
      width: 140,
      render: (expertise: number) => (
        <div>{expertise === 1 ? 'Đã thẩm định' : 'Chưa thầm định'}</div>
      ),
    },
    {
      title: 'Nhân viên thẩm định',
      dataIndex: 'appraisalStaff',
      key: 'appraisalStaff',
      align: 'center',
      width: 140,
      render: (appraisalStaff: string) => {
        return (
          <div>
            {
              opitionStaff.find((x: OpitionType) => x.value === appraisalStaff)
                ?.label
            }
          </div>
        );
      },
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (type: string, record: any, index) => (
        <div className='flex flex-row gap-8'>
          <EditOutlined
            onClick={() => handleUpdate({ ...record, idKey: index })}
          />
          <DeleteOutlined onClick={() => handleDeleteRow(index)} />
        </div>
      ),
    },
  ];
  return contract;
};

export const columsOrdersCode = ({
  opitionServices,
  opitionFixedPriceCode,
  handleDelete,
  handleUpdate,
  dataZone,
}: {
  opitionServices: Array<OpitionType>;
  opitionFixedPriceCode: Array<OpitionType>;
  dataZone?: Array<any>;
  handleDelete: (id: any) => void;
  handleUpdate: (record: any) => void;
}) => {
  const handleDeleteRow = (row: any) => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <WarningOutlined className='text-red-700' />,
      content: 'Bạn có chắc chắn muốn xóa bảng giá này không?',
      okText: 'Đồng ý',
      cancelText: 'Không',
      onOk: () => handleDelete(row),
    });
  };
  const ordersCode: ColumnsType<any> = [
    {
      title: 'Thời gian cập nhật',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
      width: 150,
      render: (createdAt: string | Date) => (
        <div>{dayjs(createdAt).format('DD-MM-YYYY HH:mm:ss')}</div>
      ),
    },
    {
      title: 'Dịch vụ yêu cầu',
      dataIndex: 'serviceRequestId',
      key: 'serviceRequestId',
      align: 'center',
      width: 150,
      render: (serviceRequestId: string) => (
        <div>
          {
            opitionServices?.find(
              (x: OpitionType) => x.value === serviceRequestId
            )?.label
          }
        </div>
      ),
    },

    {
      title: 'Doanh thu tiềm năng từ (triệu đồng)',
      dataIndex: 'potentialRevenueFrom',
      key: 'potentialRevenueFrom',
      align: 'center',
      width: 150,
      render: (potentialRevenueFrom: string) => (
        <div>{numberWithCommas(potentialRevenueFrom)}</div>
      ),
    },
    {
      title: 'Doanh thu tiềm năng đến (triệu đồng)',
      dataIndex: 'potentialRevenueTo',
      key: 'potentialRevenueTo',
      align: 'center',
      width: 150,
      render: (potentialRevenueFrom: string) => (
        <div>{numberWithCommas(potentialRevenueFrom)}</div>
      ),
    },
    {
      title: 'Mã bảng giá cố định',
      dataIndex: 'fixedPriceCode',
      key: 'fixedPriceCode',
      align: 'center',
      width: 150,
      render: (fixedPriceCode: string) => (
        <div>
          {
            opitionFixedPriceCode?.find(
              (x: OpitionType) => x.value === fixedPriceCode
            )?.label
          }
        </div>
      ),
    },
    {
      title: 'Giá khác',
      dataIndex: 'otherPrice',
      key: 'otherPrice',
      align: 'center',
      width: 180,
      render: (otherPrice: Array<any>, record: any) => {
        return dataZone &&
          dataZone?.length > 0 &&
          record?.otherPrices.length > 0 ? (
          <div>
            {dataZone.map((v, index) => (
              <div className='grid grid-cols-2'>
                <p className='m-0 p-0'> {v?.name}</p>
                <p className='m-0 p-0'>
                  {record?.otherPrices[index].discountRate}%
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>{otherPrice}</div>
        );
      },
    },

    {
      title: 'Thời hạn áp dung mã giảm giá',
      dataIndex: 'timeApply',
      key: 'timeApply',
      align: 'center',
      width: 140,
      render: (timeApply: Array<any>) => (
        <div>
          {`Từ: ${dayjs(timeApply?.[0]).format('DD-MM-YYYY')}\nĐến :${dayjs(
            timeApply?.[1]
          ).format('DD-MM-YYYY')}`}
        </div>
      ),
    },
    {
      title: 'Phụ phí xăng dầu',
      dataIndex: 'surcharge',
      key: 'surcharge',
      align: 'center',
      width: 140,
    },
    {
      title: 'Tỉ giá (VNĐ)',
      dataIndex: 'exchangeRate',
      key: 'exchangeRate',
      align: 'center',
      width: 140,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (type: string, record: any, index) => (
        <div className='flex flex-row gap-8'>
          <EditOutlined
            onClick={() => handleUpdate({ ...record, idKey: index })}
          />
          <DeleteOutlined onClick={() => handleDeleteRow(index)} />
        </div>
      ),
    },
  ];
  return ordersCode;
};
