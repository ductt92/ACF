/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloseOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Select } from 'antd';
import React, { useEffect } from 'react';

import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';

import { UnitOfMeasure } from '@/contants/types';
import { countries } from '@/contants/types/Country';

type ModalInvoiceDetailsProps = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  handleEdiInvoiceDetails: (form: any) => void;
  value: any;
  isInvoice: boolean;
};

const { Option } = Select;

const ModalUpdateInvoiceDetails = ({
  isOpen,
  onClose,
  handleEdiInvoiceDetails,
  value,
  isInvoice,
}: ModalInvoiceDetailsProps) => {
  const [invoiceDetailsForm] = Form.useForm();

  const handleChange = () => {
    const quantity = invoiceDetailsForm.getFieldValue('quantity');
    const price = invoiceDetailsForm.getFieldValue('price');
    const totalMoney = price * quantity;
    invoiceDetailsForm.setFieldsValue({ totalMoney });
  };

  const OpitionUnitOfMeasure = Object.entries(UnitOfMeasure).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const handleUpdateInvoices = async () => {
    const resForm = await invoiceDetailsForm.validateFields();
    const updateForm = { ...resForm, idKey: value.idKey };
    handleEdiInvoiceDetails(updateForm);
  };

  useEffect(() => {
    invoiceDetailsForm.setFieldsValue({
      ...value,
    });
  }, [invoiceDetailsForm, value]);
  const renderHeader = () => {
    return (
      <div
        className='bg-[#FBE51D] text-center text-[24px]
      font-bold'
      >
        Chi tiết invoice
      </div>
    );
  };
  return (
    <Modal
      footer={null}
      visible={isOpen}
      title={renderHeader()}
      onCancel={() => onClose(false)}
      closeIcon={<CloseOutlined className='text-[24px]' />}
      className='top-[calc(5vh)] w-[calc(50vw)]'
    >
      <div>
        <Form form={invoiceDetailsForm}>
          <div className='h-[calc(70vh)] overflow-y-auto p-5'>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item
                name='goodsName'
                className='w-full'
                rules={[
                  {
                    required: !isInvoice,
                    message: 'Vui lòng nhập Tên hàng hóa (Tiếng Anh)',
                  },
                ]}
              >
                <VInput label='Tên hàng hóa (Tiếng Anh)' required isHorizal />
              </Form.Item>

              <Form.Item
                name='describe'
                className='w-full'
                rules={[
                  {
                    required: !isInvoice,
                    message:
                      'Vui lòng nhập mô tả hàng hóa (Chất liệu, thành phần ... hàng hóa) (Tiếng Anh) ',
                  },
                ]}
              >
                <VInput
                  label='Mô tả hàng hóa (Chất liệu, thành phần ... hàng hóa) (Tiếng Anh)'
                  required
                  isHorizal
                />
              </Form.Item>

              <Form.Item
                name='quantity'
                rules={[
                  {
                    required: !isInvoice,
                    message: 'Vui lòng nhập số lượng hàng hóa',
                  },
                ]}
              >
                <VInputNumber
                  label='Số lượng'
                  required
                  onChange={handleChange}
                  isHorizal
                />
              </Form.Item>

              <Form.Item name='unitOfMeasure'>
                <VSelect label='Đơn vị tính' required isHorizal>
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
                    required: !isInvoice,
                    message: 'Vui lòng nhập Giá',
                  },
                ]}
              >
                <VInputNumber
                  label='Đơn Giá'
                  required
                  isHorizal
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item name='totalMoney'>
                <VInputNumber label='Thành tiền' disabled isHorizal />
              </Form.Item>

              <Form.Item
                name='weight'
                rules={[
                  {
                    required: !isInvoice,
                    message: 'Vui lòng nhập cân nặng',
                  },
                ]}
              >
                <VInputNumber label='Cân nặng' required isHorizal />
              </Form.Item>
              <Form.Item name='HSCode'>
                <VInput label='HS Code' isHorizal />
              </Form.Item>
            </div>

            <Form.Item
              name='originOfGoods'
              rules={[
                {
                  required: !isInvoice,
                  message: 'Vui lòng chọn xuất xứ',
                },
              ]}
            >
              <VSelect label='Xuất xứ hàng hóa' required showSearch isHorizal>
                {countries.map((v) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>
          </div>
          <div className='mt-4 flex justify-end'>
            <Button type='primary' onClick={handleUpdateInvoices}>
              Cập nhật Invoice
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalUpdateInvoiceDetails;
