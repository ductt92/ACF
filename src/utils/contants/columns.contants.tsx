/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeleteOutlined,
  EditOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Modal } from 'antd';
import { ColumnsType } from 'antd/lib/table';

const renderPubStatus = (status: number) => {
  switch (status) {
    case 1:
      return 'Đã lấy hàng từ khách';
    case 2:
      return 'Đã xác nhận xử lý đơn hàng';
    case 3:
      return 'Đã chuyển bộ phận OP';
    default:
      return 'OP xác nhận đơn hàng';
  }
};
export const rendeColumsPickup = (servicesBooking: Array<any>) => {
  const PickUpColums: ColumnsType<any> = [
    {
      title: 'Stt',
      dataIndex: 'calculationUnit',
      key: 'calculationUnit',
      align: 'center',
      width: 60,
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Trạng thái đơn hàng',
      dataIndex: 'pud_status',
      key: 'pud_status',
      align: 'center',
      width: 180,
      render: (text: number) => {
        return <span>{renderPubStatus(text)}</span>;
      },
    },
    {
      title: 'Mã bill',
      dataIndex: 'booking_code',
      key: 'booking_code',
      align: 'center',
      width: 180,
    },
    {
      title: 'Mã Khách hàng',
      dataIndex: 'customer_code',
      key: 'customer_code ',
      align: 'center',
      width: 180,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'customer_full_name',
      key: 'customer_full_name',
      align: 'center',
      width: 180,
    },
    {
      title: 'Tổng số kiện',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      width: 180,
    },

    {
      title: 'Tổng TL thực',
      dataIndex: 'weight',
      key: 'weight ',
      align: 'center',
      width: 180,
    },
    {
      title: 'Tổng TL cồng kềnh',
      dataIndex: 'bulky_weight',
      key: 'bulky_weight',
      align: 'center',
      width: 180,
    },
    {
      title: 'Nội dung bưu phẩm',
      dataIndex: 'content_detail',
      key: 'content_detail',
      align: 'center',
      width: 180,
    },
    {
      title: 'Dịch vụ xuất',
      dataIndex: 'service_booking_id',
      key: 'service_booking_id',
      align: 'center',
      width: 180,
      render: (type: string) => (
        <span>{servicesBooking?.find((x) => x.value === type)?.label}</span>
      ),
    },
  ];

  return PickUpColums;
};
export const renderColumsInfoItem = ({
  handleDelete,
  isDisable,
  handleUpdate,
}: {
  isDisable: boolean;
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
  const InfoCheckPointColums: ColumnsType<any> = [
    {
      title: 'Nhóm kiện',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      width: 180,
    },
    {
      title: 'Dài',
      dataIndex: 'longs',
      key: 'longs',
      align: 'center',
      width: 180,
    },
    {
      title: 'Rộng',
      dataIndex: 'width',
      key: 'width',
      align: 'center',
      width: 180,
    },
    {
      title: 'Cao',
      dataIndex: 'height',
      key: 'height',
      align: 'center',
      width: 180,
    },
    {
      title: 'TL cồng kềnh',
      dataIndex: 'bulky_weight',
      key: 'bulky_weight',
      align: 'center',
      width: 180,
    },
    {
      title: 'TL thực',
      dataIndex: 'weight',
      key: 'weight',
      align: 'center',
      width: 180,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 60,
      render: (type: string, record: any, index) => (
        <div className='flex flex-row gap-4'>
          <EditOutlined
            onClick={() => handleUpdate({ ...record, idKey: index })}
          />
          <DeleteOutlined
            onClick={() => !isDisable && handleDeleteRow(index)}
          />
        </div>
      ),
    },
  ];
  return InfoCheckPointColums;
};

export const renderColumnsOperate = () => {
  const ColumnsOperate: ColumnsType<any> = [
    {
      title: 'Stt',
      dataIndex: 'calculationUnit',
      key: 'calculationUnit',
      align: 'center',
      width: 60,
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Mã bill',
      dataIndex: 'booking_code',
      key: 'booking_code',
      align: 'center',
      width: 60,
    },

    {
      title: 'Mã khách hàng',
      dataIndex: 'customer_code',
      key: 'customer_code',
      align: 'center',
      width: 100,
    },
    {
      title: 'Tên khách hàng ',
      dataIndex: 'customer_full_name',
      key: 'customer_full_name',
      align: 'center',
      width: 100,
    },
    {
      title: 'Thông tin nơi đến',
      dataIndex: 'booking_address',
      key: 'booking_address',
      align: 'center',
      width: 180,
    },
    {
      title: 'Tổng TL thực',
      dataIndex: 'weight',
      key: 'weight',
      align: 'center',
      width: 100,
    },
    {
      title: 'Tổng TL Cồng kềnh',
      dataIndex: 'bulky_weight',
      key: 'bulky_weight',
      align: 'center',
      width: 100,
    },
    {
      title: 'Tổng TL chốt cước',
      dataIndex: 'bulky_weight',
      key: 'bulky_weight_2',
      align: 'center',
      width: 100,
      render: (text, record) => (
        <span>{Math.max(record?.weight, record?.bulky_weight)}</span>
      ),
    },
  ];

  return ColumnsOperate;
};

export const renderStatis = () => {
  const ColumnsOperate: ColumnsType<any> = [
    {
      title: 'Stt',
      dataIndex: 'calculationUnit',
      key: 'calculationUnit',
      align: 'center',
      width: 60,
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Mã Bill ACF',
      dataIndex: 'booking_code',
      key: 'booking_code',
      align: 'center',
      width: 80,
    },
    {
      title: 'Mã Bill đối tác',
      dataIndex: 'booking_partner_service',
      key: 'booking_partner_service',
      align: 'center',
      width: 100,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'customer_full_name',
      key: 'customer_full_name',
      align: 'center',
      width: 100,
    },
    {
      title: 'Thông tin nơi đến',
      dataIndex: 'customer_full_name',
      key: 'customer_full_name',
      align: 'center',
      width: 100,
    },
  ];
  return ColumnsOperate;
};
