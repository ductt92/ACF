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
import React, { useCallback, useEffect, useState } from 'react';

import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';

import { INVOICE_DETAILS } from '@/contants/columns/my-booking.columns';
import { CurrencyUnit } from '@/contants/common.constants';
import { IUser } from '@/contants/types';

import ModalInvoiceDetails from './components/ModalInvoiceDetails';

const { Option } = Select;
const mockTypeItemInvoice = [
  { value: 1, label: 'Hàng hóa mậu dịch' },
  { value: 2, label: 'Hàng hóa phi mậu dịch' },
];
const mockTypeInvoice = [
  { value: 1, label: 'Non-Commercial invoice' },
  { value: 2, label: 'Commercial invoice' },
];
type InvoiceProps = {
  form: FormInstance;
  dataUser: IUser | undefined;
};
const InVoice = ({ form, dataUser }: InvoiceProps) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);

  const OpitionCurrencyUnit = Object.entries(CurrencyUnit).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const handleSetField = useCallback(async () => {
    const res = await form.getFieldValue('receiverAddress');
    form.setFieldsValue({
      sender_information: dataUser?.detailAddress,
      receiver_information: res,
    });
  }, [dataUser?.detailAddress, form]);

  useEffect(() => {
    handleSetField();
  }, [form, dataUser, handleSetField]);

  // const handleAddBookingDetails = (form: FormInstance) => {
  //   console.log(form);
  // };
  return (
    <div className='mb-20 h-full'>
      <Form form={form}>
        <div className='grid grid-cols-2 gap-x-6'>
          <p className='m-0 p-0 font-bold'>1.Thông tin chung </p>
          <Divider className='bg-yellow' />

          <Form.Item
            name='typeItemInvoice'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại dịch vụ',
              },
            ]}
          >
            <VSelect label='Loại hàng hóa' required>
              {mockTypeItemInvoice.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          <Form.Item
            name='invoice_type'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại dịch vụ',
              },
            ]}
          >
            <VSelect label='Loại invoice' required>
              {mockTypeInvoice.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          <Form.Item
            name='booking_id'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại dịch vụ',
              },
            ]}
          >
            <VInput label='Mã vận đơn' />
          </Form.Item>

          <Form.Item
            name='sender_information'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại dịch vụ',
              },
            ]}
          >
            <VInput label='Thông tin người gửi' disabled />
          </Form.Item>

          <Form.Item
            name='receiver_information'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại dịch vụ',
              },
            ]}
          >
            <VInput label='Thông tin người gửi' disabled />
          </Form.Item>
          <Form.Item
            name='receiver_information'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại dịch vụ',
              },
            ]}
          >
            <VInput label='Thông tin người gửi' disabled />
          </Form.Item>

          <Form.Item name='invoice_date'>
            <VInput label='Ngày invoice' />
          </Form.Item>

          <Form.Item name='invoice_number'>
            <VInput label='Số invoice' />
          </Form.Item>

          <Form.Item name='service '>
            <VInput label='Dịch vụ sử dụng' disabled />
          </Form.Item>
          <Form.Item name='total_net_weight'>
            <VInputNumber
              label='Tổng trọng lượng thực (Kg)'
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Form.Item>
          <Form.Item name='total_bulky_weight'>
            <VInputNumber
              label='Tổng trọng lượng cồng kềnh (kg)'
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Form.Item>
          <Form.Item name='goods_size'>
            <VInputNumber
              label='Kích thước hàng hóa (cm)'
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Form.Item>
          <Form.Item name='total_bale_number'>
            <VInputNumber
              label='Tổng số kiện'
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Form.Item>
          <Form.Item name='currency'>
            <VSelect label='Loại tiền tệ' showSearch>
              {OpitionCurrencyUnit.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
        </div>
        <Form.Item name='reason_export'>
          <VInput label='Lý do xuất khẩu' />
        </Form.Item>

        <p className='m-0 p-0 font-bold'>2.Chi tiết Booking Express Invoice </p>
        <Divider className='bg-yellow' />

        <div>
          <div className='flex flex-row pb-6'>
            <Input
              placeholder='Tìm kiếm ....'
              prefix={<SearchOutlined />}
              className='mb-4 mr-4 w-[350px]'
              // onChange={(event: ChangeEvent<HTMLInputElement>) =>
              //   handleSearch(event.target.value)
              // }
            />
            <Button type='primary' onClick={() => setIsCreate(true)}>
              Thêm Invoice
            </Button>
          </div>

          <Table
            columns={INVOICE_DETAILS}
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
            <ModalInvoiceDetails
              isOpen={isCreate}
              onClose={() => setIsCreate(false)}
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default InVoice;
