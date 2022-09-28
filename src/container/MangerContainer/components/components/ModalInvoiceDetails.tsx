import { Button, Form, Modal, Select } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';

import { mockUnit } from '@/contants/types';
import { countries } from '@/contants/types/Country';

type ModalInvoiceDetailsProps = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
};

const { Option } = Select;

const ModalInvoiceDetails = ({ isOpen, onClose }: ModalInvoiceDetailsProps) => {
  const [form] = Form.useForm();

  const handleChange = () => {
    const quantity = form.getFieldValue('quantity');
    const unitPrice = form.getFieldValue('unitPrice');
    const total = unitPrice * quantity;
    form.setFieldsValue({ total });
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
                name='nameGood'
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
                name='desGood'
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
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>

              <Form.Item name='unit'>
                <VSelect label='Đơn vị tính' required>
                  {mockUnit.map((v) => (
                    <Select.Option value={v.value} key={v.value}>
                      {v.label}
                    </Select.Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='unitPrice'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số lượng Đơn giá',
                  },
                ]}
              >
                <VInputNumber
                  label='Đơn giá'
                  required
                  onChange={handleChange}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>

              <Form.Item name='total'>
                <VInputNumber
                  label='Thành tiền'
                  disabled
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>

              <Form.Item name='weight'>
                <VInputNumber
                  label='Cân nặng'
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>
              <Form.Item name='hsCode'>
                <VInput label='HS Code' />
              </Form.Item>
            </div>

            <Form.Item
              name='origin_of_goods'
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
              // onClick={onSubmit}
              // loading={isCreating}
              htmlType='submit'
              type='primary'
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
