/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from '@ant-design/icons';
import {
  Button,
  Divider,
  Form,
  FormInstance,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Table,
} from 'antd';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VTimePicker from '@/components/common/VTimePicker';

import { renderBookingDetails } from '@/contants/columns/my-booking.columns';
import { FORMAT_DATE_DD_MM_YYYY } from '@/contants/common.constants';
import { BookingType, DetailsBookingPost } from '@/contants/types';
import {
  fetchCommoditiesTypeId,
  fetchDeliveryCondition,
  fetchServicesBooking,
  fetchShippingType,
  fetchTypeOfPayment,
} from '@/services/booking.services';

import ModalBookingDetails from './ModalBookingDeatails';
import ModalUpdateBookingDetails from './ModalUpdateBookingDetails';
const { Option } = Select;
interface GeneralInfomationProps {
  form: FormInstance;
  dataDetails: Array<DetailsBookingPost>;
  handleAddBookingDetails: (form: any) => void;
  handleDeleteRow: (id: any) => void;
  handleUpdateBookingDetails: (form: any) => void;
  serivcesSelected: string;
  handleServicesSelected: (e: any) => void;
  value: any;
  handleSetvalue: (e: any) => void;
}

const GeneralInfomation = ({
  form,
  dataDetails,
  handleAddBookingDetails,
  handleDeleteRow,
  handleUpdateBookingDetails,
  handleServicesSelected,
  serivcesSelected,
  value,
  handleSetvalue,
}: GeneralInfomationProps) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [detailsBooking, setDetailsBooking] = useState();

  const { data: dataSerivicesBooknig } = useQuery(
    ['dataSerivicesBooknig', {}],
    () => fetchServicesBooking()
  );

  const OpitionServiceBooking = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataSerivicesBooknig?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataSerivicesBooknig?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataSerivicesBooknig]);

  const { data: dataDelivery } = useQuery(['fetchDeliveryCondition', {}], () =>
    fetchDeliveryCondition()
  );

  const OpitionDeliveryConditions = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataDelivery?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataDelivery?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataDelivery]);

  const OpitionType = Object.entries(BookingType).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const { data: fetchTypeOfPaymentId } = useQuery(
    ['fetchTypeOfPaymentId', {}],
    () => fetchTypeOfPayment()
  );

  const OpitionTypePayment = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (fetchTypeOfPaymentId?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return fetchTypeOfPaymentId?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [fetchTypeOfPaymentId]);

  const { data: DataCommoditiesTypeId } = useQuery(
    ['DataCommoditiesTypeId', {}],
    () => fetchCommoditiesTypeId()
  );

  const OpitionCommoditiesTypeId = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (DataCommoditiesTypeId?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return DataCommoditiesTypeId?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [DataCommoditiesTypeId]);

  const { data: DataShippingType } = useQuery(['DataShippingType', {}], () =>
    fetchShippingType()
  );

  const OpitionShippingType = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (DataShippingType?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return DataShippingType?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [DataShippingType]);

  const handleAddBooking = (form: any) => {
    handleAddBookingDetails(form);
    setIsCreate(false);
  };
  const onChange = (e: RadioChangeEvent) => {
    handleSetvalue(e.target.value);
  };

  const handleUpdateBooking = (record: any) => {
    setDetailsBooking(record);
    setIsEdit(true);
  };

  return (
    <div className='mb-20 h-full'>
      <Form form={form}>
        <p className='m-0 p-0 font-bold'>1.Thông tin chung </p>
        <Divider className='bg-yellow' />
        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item name='partnerBillCode'>
            <VInput label='Mã bill đối tác' />
          </Form.Item>

          <Form.Item
            name='serviceBookingId'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại dịch vụ',
              },
            ]}
          >
            <VSelect label='Dịch vụ' required onChange={handleServicesSelected}>
              {OpitionServiceBooking?.map((v: any) => (
                <Option key={v.value}>{v.label}</Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='deliveryConditionId'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn điều kiện giao hàng',
              },
            ]}
          >
            <VSelect label='Điều kiện giao hàng' required>
              {OpitionDeliveryConditions?.map((v: any) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='type'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại booking (Chứng từ, hàng hóa)',
              },
            ]}
          >
            <VSelect label='Loại booking (Chứng từ, hàng hóa)' required>
              {OpitionType.map((v) => (
                <Option key={v.value}>{v.label}</Option>
              ))}
            </VSelect>
          </Form.Item>

          <div className='grid grid-cols-2 gap-x-6'>
            <Form.Item
              name='estimatedDate'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn thời gian dự kiến lấy hàng',
                },
              ]}
            >
              <VDatePicker
                label='Ngày dự kiến lấy hàng'
                format={FORMAT_DATE_DD_MM_YYYY}
                required
              />
              {/* <TimePicker format={HH_MM} /> */}
            </Form.Item>

            <Form.Item
              name='estimateHour'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn thời gian dự kiến lấy hàng',
                },
              ]}
            >
              <VTimePicker
                format='HH:mm'
                label='Giờ dự kiến lấy hàng'
                required
              />
            </Form.Item>
          </div>

          <Form.Item name='note'>
            <VInput label='Note' />
          </Form.Item>
        </div>

        <p className='m-0 p-0 font-bold'>2.Hình thức thanh toán </p>
        <Divider className='bg-yellow' />

        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='typeOfPaymentId'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại thanh toán',
              },
            ]}
          >
            <VSelect label='Loại hình thanh toán' required>
              {OpitionTypePayment?.map((v: any) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          {/* Chi Tiết booking */}
        </div>
        <p className='m-0 p-0 font-bold'>3.Tờ khai hải quan</p>
        <div className='flex flex-col gap-4'>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Không</Radio>
            <Radio value={2}>Có</Radio>
          </Radio.Group>
          {value === 2 && (
            <Form.Item
              name='customsDeclarationNumer'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập số tờ khai hải quan',
                },
              ]}
            >
              <VInput label='Số tờ khai hải quan' required />
            </Form.Item>
          )}
        </div>
        <Divider className='bg-yellow' />

        <p className='m-0 p-0 font-bold'>4.Chi tiết booking </p>
        <Divider className='bg-yellow' />

        <div>
          <div className='flex flex-row pb-6'>
            <Input
              placeholder='Tìm kiếm đơn hàng...'
              prefix={<SearchOutlined />}
              className='mb-4 mr-4 w-[350px]'
            />
            <Button
              type='primary'
              onClick={() => setIsCreate(true)}
              disabled={!serivcesSelected}
            >
              Thêm hàng hóa
            </Button>
          </div>

          <Table
            columns={renderBookingDetails(
              OpitionCommoditiesTypeId,
              OpitionShippingType,
              handleDeleteRow,
              handleUpdateBooking
            )}
            rowKey='key'
            scroll={{ y: 450, x: 500 }}
            className='cursor-pointer'
            dataSource={dataDetails}
            pagination={{
              showSizeChanger: false,
            }}
            bordered
          />

          {isCreate && (
            <ModalBookingDetails
              isOpen={isCreate}
              services={serivcesSelected}
              listServices={OpitionServiceBooking}
              onClose={() => setIsCreate(false)}
              handleAddBookingDetails={handleAddBooking}
            />
          )}
          {isEdit && (
            <ModalUpdateBookingDetails
              isOpen={isEdit}
              services={serivcesSelected}
              listServices={OpitionServiceBooking}
              onClose={() => setIsEdit(false)}
              handleUpdateBookingDetails={(e) => {
                handleUpdateBookingDetails(e);
                setIsEdit(false);
              }}
              value={detailsBooking}
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default GeneralInfomation;
