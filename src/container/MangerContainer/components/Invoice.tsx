/* eslint-disable @typescript-eslint/no-explicit-any */
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
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';
import VTextArea from '@/components/common/VTextarea';

import { INVOICE_DETAILS } from '@/contants/columns/my-booking.columns';
import {
  IInvoiceDetails,
  InvoiceItemType,
  InvoiceType,
  IUser,
} from '@/contants/types';
import { fetchCurrentUnit } from '@/services/booking.services';

import ModalInvoiceDetails from './components/ModalInvoiceDetails';

const { Option } = Select;

type InvoiceProps = {
  form: FormInstance;
  dataUser: IUser | undefined;
  detailsInvoice?: Array<IInvoiceDetails>;
  handleAddInvoiceDetails: (form: IInvoiceDetails) => void;
};

const InVoice = ({
  form,
  dataUser,
  detailsInvoice,
  handleAddInvoiceDetails,
}: InvoiceProps) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);

  const { data: dataCurrenUnit } = useQuery(['fetchCurrentUnit', {}], () =>
    fetchCurrentUnit()
  );
  const OpitionCurrencyUnit = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataCurrenUnit?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataCurrenUnit?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataCurrenUnit]);

  const OpitionInvoiceItemType = Object.entries(InvoiceItemType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const OpitionInvoiceType = Object.entries(InvoiceType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const handleSetField = useCallback(async () => {
    const res = await form.getFieldValue('receiverAddress');
    form.setFieldsValue({
      senderInformation: dataUser?.detailAddress,
      receiver_information: res,
    });
  }, [dataUser?.detailAddress, form]);

  useEffect(() => {
    handleSetField();
  }, [form, dataUser, handleSetField]);

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
              {OpitionInvoiceItemType.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='invoiceType'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại hóa đơn',
              },
            ]}
          >
            <VSelect label='Loại hóa đơn' required>
              {OpitionInvoiceType.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='senderInformation'>
            <VInput label='Thông tin người gửi' disabled />
          </Form.Item>

          <Form.Item name='receiverInformation'>
            <VInput label='Thông tin người nhận ' disabled />
          </Form.Item>

          <Form.Item
            name='invoiceDate'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập ngày invoice',
              },
            ]}
          >
            <VDatePicker
              format='DD/MM/YYYY'
              label='Ngày invoice'
              placeholder='Nhập ngày invoice'
              required
            />
          </Form.Item>

          <Form.Item name='invoiceNumber'>
            <VInput label='Số invoice' />
          </Form.Item>
          <Form.Item name='importProceduresPerson'>
            <VTextArea label='Thông tin người làm thủ tục nhập khẩu' />
          </Form.Item>

          <Form.Item name='serviceId'>
            <VInput label='Dịch vụ sử dụng' disabled />
          </Form.Item>

          <Form.Item name='totalNetWeight'>
            <VInputNumber label='Tổng trọng lượng thực (Kg)' />
          </Form.Item>
          <Form.Item name='totalBulkyWeight'>
            <VInputNumber label='Tổng trọng lượng cồng kềnh (kg)' />
          </Form.Item>

          <Form.Item name='goodsSize'>
            <VInputNumber label='Kích thước hàng hóa (cm)' />
          </Form.Item>

          <Form.Item name='totalBaleNumber'>
            <VInputNumber label='Tổng số kiện' />
          </Form.Item>
          <Form.Item
            name='currencyId'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại tiền tệ',
              },
            ]}
          >
            <VSelect label='Loại tiền tệ' showSearch required>
              {OpitionCurrencyUnit?.map((v: any) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='reasonExport'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập lý do xuất khẩu',
              },
            ]}
          >
            <VInput label='Lý do xuất khẩu' required />
          </Form.Item>
        </div>

        <p className='m-0 p-0 font-bold'>2.Chi tiết Booking Express Invoice </p>
        <Divider className='bg-yellow' />

        <div>
          <div className='flex flex-row pb-6'>
            <Input
              placeholder='Tìm kiếm ....'
              prefix={<SearchOutlined />}
              className='mb-4 mr-4 w-[350px]'
            />
            <Button type='primary' onClick={() => setIsCreate(true)}>
              Thêm Invoice
            </Button>
          </div>

          <Table
            columns={INVOICE_DETAILS}
            rowKey='key-HSCode'
            className='cursor-pointer'
            dataSource={detailsInvoice}
            pagination={{
              showSizeChanger: false,
            }}
            bordered
          />

          {isCreate && (
            <ModalInvoiceDetails
              isOpen={isCreate}
              handleAddInvoiceDetails={handleAddInvoiceDetails}
              onClose={() => setIsCreate(false)}
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default InVoice;
