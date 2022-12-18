/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormInstance, Modal, Radio, Select, Spin } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';
import VRangePicker from '@/components/common/VRangeDate';
import VSelect from '@/components/common/VSelect';

import { IContract, OpitionType } from '@/contants/types';

const { Option } = Select;

interface ModalCreateContract {
  onClose: () => void;
  form: FormInstance<IContract>;
  isOpen: boolean;
  isUpdate: boolean;
  expertise: any;
  handleChangeEx: (value: any) => void;
  handleAddContract: () => void;
  opitionTypeContract: Array<OpitionType>;
  opitionStaff: Array<OpitionType>;
  opitionServices: Array<OpitionType>;
}

const ModalCreateContract = ({
  onClose,
  form,
  isOpen,
  isUpdate,
  expertise,
  handleChangeEx,
  handleAddContract,
  opitionTypeContract,
  opitionStaff,
  opitionServices,
}: ModalCreateContract) => {
  return (
    <Modal
      footer={null}
      destroyOnClose={true}
      visible={isOpen || isUpdate}
      onCancel={onClose}
      className='top-[calc(5vh)] w-[calc(45vw)]'
    >
      <Spin spinning={false}>
        <p className='text-center text-2xl'>
          {isUpdate
            ? 'Cập nhật thông tin hợp đồng'
            : 'Tạo mới thông tin hợp đồng'}
        </p>
        <Form form={form} name='contractFrom'>
          <div className='h-[calc(70vh)] overflow-y-auto p-4'>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item
                name='contractCode'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Mã phụ lục hợp đồng',
                  },
                ]}
              >
                <VInput
                  label='Mã phụ lục hợp đồng'
                  placeholder='Nhập Mã phụ lục hợp đồng'
                  required
                />
              </Form.Item>

              <Form.Item
                name='contractName'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Tên phụ lục hợp đồng',
                  },
                ]}
              >
                <VInput
                  label='Tên phụ lục hợp đồng'
                  placeholder='Nhập Tên phụ lục hợp đồng'
                  required
                />
              </Form.Item>

              <Form.Item
                name='service'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn loại dịch vụ sử dụng',
                  },
                ]}
              >
                <VSelect
                  label='Dịch vụ sử dụng'
                  required
                  placeholder='Chọn loại dịch vụ sử dụng'
                >
                  {opitionServices?.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='typeContract'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn loại phụ lục hợp đồng',
                  },
                ]}
              >
                <VSelect
                  label='Loại phụ lục hợp đồng'
                  required
                  placeholder='Chọn loại phụ lục hợp đồng'
                >
                  {opitionTypeContract.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='paymentSchedule'
                rules={[
                  {
                    required: true,
                    message:
                      'Vui lòng nhập lịch thanh toán công nợ kể từ ngày chốt bảng kê',
                  },
                ]}
              >
                <VInput
                  label='Lịch thanh toán công nợ kể từ ngày xuất hóa đơn'
                  placeholder='Lịch thanh toán công nợ kể từ ngày xuất hóa đơn'
                  required
                />
              </Form.Item>

              <Form.Item
                name='timeAplly'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn thời hạn phụ lục hợp đồng',
                  },
                ]}
              >
                <VRangePicker
                  placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
                  className='w-full'
                  format='DD/MM/YYYY'
                  label='Thời hạn phụ lục hợp đồng'
                  required
                />
              </Form.Item>

              <Form.Item name='noteContract'>
                <VInput
                  label='Ghi chú hợp đồng'
                  placeholder='Nhập ghi chú hợp đồng'
                />
              </Form.Item>
            </div>

            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item name='expertise'>
                <p className='m-0 p-0'>Thẩm định</p>
                <Radio.Group
                  value={expertise}
                  onChange={(e) => handleChangeEx(e.target.value)}
                >
                  <Radio value={0}>Chưa thầm định</Radio>
                  <Radio value={1}>Đã thẩm định</Radio>
                </Radio.Group>
              </Form.Item>

              {expertise === 1 && (
                <Form.Item
                  name='appraisalStaff'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn nhân viên thẩm định',
                    },
                  ]}
                >
                  <VSelect label='Nhân viên thẩm định' required>
                    {opitionStaff?.map((v: any) => (
                      <Option value={v.value} key={v.value}>
                        {v.label}
                      </Option>
                    ))}
                  </VSelect>
                </Form.Item>
              )}
            </div>
          </div>
        </Form>

        <Button type='primary' onClick={handleAddContract}>
          {isUpdate ? 'Cập nhật hợp đồng' : ' Thêm hợp đồng'}
        </Button>
      </Spin>
    </Modal>
  );
};

export default ModalCreateContract;
