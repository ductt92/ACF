import { SearchOutlined } from '@ant-design/icons';
import {
  Button,
  Divider,
  Form,
  FormInstance,
  Input,
  Select,
  Table,
} from 'antd';
import React, { useState } from 'react';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VTimePicker from '@/components/common/VTimePicker';

import { BOOKING_DETAILS } from '@/contants/columns/my-booking.columns';
import {
  DeliveryConditions,
  FORMAT_DATE_DD_MM_YYYY,
} from '@/contants/common.constants';
import { BookingType, ServiceEnum, TypeOfPayment } from '@/contants/types';

import ModalBookingDetails from './ModalBookingDeatails';
const { Option } = Select;
interface GeneralInfomationProps {
  form: FormInstance;
}

const GeneralInfomation = ({ form }: GeneralInfomationProps) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);

  const OpitionServiceBooking = Object.entries(ServiceEnum).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const OpitionDeliveryConditions = Object.entries(DeliveryConditions).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const OpitionType = Object.entries(BookingType).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const OpitionTypePayment = Object.entries(TypeOfPayment).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

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
            name='serviceBooking'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại dịch vụ',
              },
            ]}
          >
            <VSelect label='Dịch vụ' required>
              {OpitionServiceBooking.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='deliveryConditions'>
            <VSelect label='Điều kiện giao hàng' required>
              {OpitionDeliveryConditions.map((v) => (
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
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
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
            name='typeOfPayment'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại thanh toán',
              },
            ]}
          >
            <VSelect label='Loại hình thanh toán' required>
              {OpitionTypePayment.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          {/* Chi Tiết booking */}
        </div>

        <p className='m-0 p-0 font-bold'>3.Chi tiết booking </p>
        <Divider className='bg-yellow' />

        <div>
          <div className='flex flex-row pb-6'>
            <Input
              placeholder='Tìm kiếm đơn hàng...'
              prefix={<SearchOutlined />}
              className='mb-4 mr-4 w-[350px]'
              // onChange={(event: ChangeEvent<HTMLInputElement>) =>
              //   handleSearch(event.target.value)
              // }
            />
            <Button type='primary' onClick={() => setIsCreate(true)}>
              Thêm hàng hóa
            </Button>
          </div>

          <Table
            columns={BOOKING_DETAILS}
            rowKey='key'
            className='cursor-pointer'
            dataSource={[]}
            pagination={{
              // current: data?.pagination?.currentPage,
              // total: data?.pagination?.totalCount,
              showSizeChanger: false,
              // defaultPageSize: QUERY_PARAMS.pageSize,
            }}
            bordered
          />

          {isCreate && (
            <ModalBookingDetails
              isOpen={isCreate}
              onClose={() => setIsCreate(false)}
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default GeneralInfomation;
