/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Modal, Select } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';

import { UnitOfMeasure } from '@/contants/types';
import { countries } from '@/contants/types/Country';

type ModalInvoiceDetailsProps = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  handleAddInvoiceDetails: (form: any) => void;
};

const { Option } = Select;

const ModalInvoiceDetails = ({
  isOpen,
  onClose,
  handleAddInvoiceDetails,
}: ModalInvoiceDetailsProps) => {
  const [form] = Form.useForm();

  const handleChange = () => {
    const quantity = form.getFieldValue('quantity');
    const unitPrice = form.getFieldValue('unitPrice');
    const total = unitPrice * quantity;
    form.setFieldsValue({ total });
  };

  const OpitionUnitOfMeasure = Object.entries(UnitOfMeasure).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const handleDetails = async (form: any) => {
    const resForm = await form.validateFields();
    handleAddInvoiceDetails(resForm);
  };
  return (
    <Modal
      footer={null}
      visible={isOpen}
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(50vw)]'
    >
      <div>
        <p className='text-center text-[24px] font-bold'>Chi tiết Invoice</p>

        <Form form={form}>
          <div className='h-[calc(70vh)] overflow-y-auto p-5'>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item
                name='goodsName'
                className='w-full'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Tên hàng hóa',
                  },
                ]}
              >
                <VInput label='Tên hàng hóa' required />
              </Form.Item>

              <Form.Item
                name='describe'
                className='w-full'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mô tả hàng hóa',
                  },
                ]}
              >
                <VInput label='Mô tả hàng hóa' required />
              </Form.Item>

              <Form.Item
                name='quantity'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số lượng hàng hóa',
                  },
                ]}
              >
                <VInputNumber
                  label='Số lượng'
                  required
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item name='unitOfMeasure'>
                <VSelect label='Đơn vị tính' required>
                  {OpitionUnitOfMeasure.map((v) => (
                    <Select.Option value={v.value} key={v.value}>
                      {v.label}
                    </Select.Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='price'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Giá',
                  },
                ]}
              >
                <VInputNumber label='Giá' required onChange={handleChange} />
              </Form.Item>

              <Form.Item name='totalMoney'>
                <VInputNumber label='Thành tiền' disabled />
              </Form.Item>

              <Form.Item name='weight'>
                <VInputNumber label='Cân nặng' />
              </Form.Item>
              <Form.Item name='hsCode'>
                <VInput label='HS Code' />
              </Form.Item>
            </div>

            <Form.Item
              name='originOfGoods'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn xuất xứ',
                },
              ]}
            >
              <VSelect label='Xuất xứ hàng hóa' required showSearch>
                {countries.map((v) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>
          </div>

          <div className='mt-4 flex justify-start'>
            <Button
              htmlType='submit'
              type='primary'
              onClick={() => {
                handleDetails(form);
                onClose(false);
              }}
            >
              Tạo mới Invoice
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalInvoiceDetails;
