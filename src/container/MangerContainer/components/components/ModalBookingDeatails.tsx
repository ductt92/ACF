import { Button, Form, Modal, Select } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';

import { mockData } from '@/contants/types';
import { countries } from '@/contants/types/Country';

type ModalBookingDetailsProps = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
};

const { Option } = Select;

const ModalBookingDetails = ({ isOpen, onClose }: ModalBookingDetailsProps) => {
  const [form] = Form.useForm();

  const handleChange = () => {
    const width = form.getFieldValue('width');
    const height = form.getFieldValue('height');
    const longs = form.getFieldValue('longs');
    const weight22 = (width * height * longs) / 5000 || 0;
    form.setFieldsValue({ weight22 });
  };

  const handleChangeWeight = () => {
    const weight = form.getFieldValue('weight');
    const numb = form.getFieldValue('numb');
    const numb22 = weight * numb || 0;
    form.setFieldsValue({ numb22 });
  };
  return (
    <Modal
      footer={null}
      visible={isOpen}
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(50vw)]'
    >
      <div>
        <p className='text-center text-[24px] font-bold'>Chi tiết đơn hàng</p>

        <Form form={form}>
          <div className='h-[calc(70vh)] overflow-y-auto p-5'>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item
                name='description2'
                className='w-full'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập nhóm hàng hóa vận chuyển',
                  },
                ]}
              >
                <VInput label='Nhóm hàng hóa vận chuyển' required />
              </Form.Item>
              <Form.Item
                name='commoditiesType'
                className='w-full'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn loại hàng hóa',
                  },
                ]}
              >
                <VSelect
                  label='Mặt hàng vận chuyển (Tiếng Việt)'
                  required
                  showSearch
                >
                  {mockData.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>
              <Form.Item
                name='description'
                className='w-full'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mô tả cho hàng hóa',
                  },
                ]}
              >
                <VInput label='Mô tả chi tiết hàng hóa' required />
              </Form.Item>
              <Form.Item
                name='countries'
                className='w-full'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn xuất xứ hàng hóa',
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

              <Form.Item
                name='description2'
                className='w-full'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập nhóm hàng hóa vận chuyển',
                  },
                ]}
              >
                <VInput label='Nhóm hàng hóa vận chuyển(Tiếng Anh)' required />
              </Form.Item>

              <Form.Item name='weight'>
                <VInputNumber
                  label='Số kiện'
                  required
                  onChange={handleChangeWeight}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>

              <Form.Item name='numb'>
                <VInputNumber
                  label='Tổng trọng lượng thực (kg)'
                  required
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>
              <Form.Item name='height'>
                <VInputNumber
                  label='Chiều cao (cm)'
                  onChange={handleChange}
                  required
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>

              <Form.Item name='width'>
                <VInputNumber
                  label='Chiều rộng (cm)'
                  onChange={handleChange}
                  required
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>

              <Form.Item name='longs'>
                <VInputNumber
                  label='Chiều dài (cm)'
                  onChange={handleChange}
                  required
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>

              <Form.Item name='weight22'>
                <VInputNumber
                  label='Trọng lượng cồng kềnh (kg) tạm tính'
                  required
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  disabled
                />
              </Form.Item>

              <Form.Item name='numb22'>
                <VInputNumber
                  label='Tổng trọng lượng cồng kềnh (kg) tạm tính'
                  required
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  disabled
                />
              </Form.Item>
            </div>

            <Form.Item name='note'>
              <VInput label='Ghi chú' />
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

export default ModalBookingDetails;
