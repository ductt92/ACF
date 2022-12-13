/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormInstance, Modal, Radio, Select, Spin } from 'antd';
import React from 'react';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VRangePicker from '@/components/common/VRangeDate';
import VSelect from '@/components/common/VSelect';

import { IContract, OpitionType } from '@/contants/types';

const { Option } = Select;

interface ModalCreateContract {
  onClose: () => void;
  form: FormInstance<IContract>;
  isOpen: boolean;
  expertise: any;
  handleChangeEx: (value: any) => void;
  handleChangeServices: (value: string) => void;
  handleAddContract: () => void;
  opitonServices: Array<OpitionType>;
  opitionTypeContract: Array<OpitionType>;
  opitionFixedPriceCode: Array<OpitionType>;
  opitionCountryZone: Array<OpitionType>;
  opitionStaff: Array<OpitionType>;
  countryContractLoading: boolean;
}

const ModalCreateContract = ({
  onClose,
  form,
  isOpen,
  expertise,
  handleChangeServices,
  handleChangeEx,
  handleAddContract,
  opitonServices,
  opitionTypeContract,
  opitionFixedPriceCode,
  opitionCountryZone,
  countryContractLoading,
  opitionStaff,
}: ModalCreateContract) => {
  return (
    <Modal
      footer={null}
      destroyOnClose={true}
      visible={isOpen}
      onCancel={onClose}
      className='top-[calc(5vh)] w-[calc(45vw)]'
    >
      <Spin spinning={countryContractLoading}>
        <p className='text-center text-2xl'>Tạo mới thông tin hợp đồng</p>
        <Form form={form} name='contractFrom'>
          <div className='h-[calc(70vh)] overflow-y-auto p-4'>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item
                name='serviceRequestId'
                rules={[
                  { required: true, message: 'Vui lòng chọn dịch vụ yêu cầu' },
                ]}
              >
                <VSelect
                  label='Dịch vụ yêu cầu'
                  required
                  onChange={handleChangeServices}
                >
                  {opitonServices?.map((v: OpitionType) => (
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
                      'Vui lòng chọn lịch thanh toán công nợ kể từ ngày chốt bảng kê',
                  },
                ]}
              >
                <VDatePicker
                  format='DD-MM-YYYY'
                  label='Lịch thanh toán công nợ kể từ ngày xuất hóa đơn'
                  placeholder='Lịch thanh toán công nợ kể từ ngày xuất hóa đơn'
                  required
                />
              </Form.Item>

              <Form.Item
                name='potentialRevenueFrom'
                rules={[
                  {
                    required: true,
                    message:
                      'Vui lòng nhập Doanh thu tiềm năng từ (triệu đồng)',
                  },
                ]}
              >
                <VInputNumber
                  label='Doanh thu tiềm năng từ (triệu đồng)'
                  placeholder='Nhập Doanh thu tiềm năng từ'
                  required
                />
              </Form.Item>

              <Form.Item
                name='potentialRevenueTo'
                rules={[
                  {
                    required: true,
                    message:
                      'Vui lòng nhập Doanh thu tiềm năng đến (triệu đồng)',
                  },
                ]}
              >
                <VInputNumber
                  label='Doanh thu tiềm năng đến (triệu đồng)'
                  placeholder='Nhập Doanh thu tiềm năng đến (triệu đồng)'
                  required
                />
              </Form.Item>

              <Form.Item
                name='commitmentRate'
                rules={[
                  {
                    required: true,
                    message:
                      'Vui lòng nhập Tỷ lệ LNG Cam kết nếu xin giá riêng/Tháng',
                  },
                ]}
              >
                <VInput
                  label='Tỷ lệ LNG Cam kết nếu xin giá riêng/Tháng'
                  placeholder='Nhập Doanh thu tiềm năng đến'
                  required
                />
              </Form.Item>

              <Form.Item
                name='contractCode'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Mã hợp đồng',
                  },
                ]}
              >
                <VInput
                  label='Mã hợp đồng'
                  placeholder='Nhập Mã hợp đồng'
                  required
                />
              </Form.Item>

              <Form.Item
                name='contractName'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Tên hợp đồng',
                  },
                ]}
              >
                <VInput
                  label='Tên hợp đồng'
                  placeholder='Nhập Tên hợp đồng'
                  required
                />
              </Form.Item>

              <Form.Item
                name='typeContract'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn loại hợp đồng',
                  },
                ]}
              >
                <VSelect label='Loại hợp đồng' required>
                  {opitionTypeContract.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item name='fixedPriceCode'>
                <VSelect label='Mã bảng giá cố định'>
                  {opitionFixedPriceCode.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='contactTerm'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn thời hạn hợp đồng',
                  },
                ]}
              >
                <VRangePicker
                  placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
                  className='w-full'
                  format='DD/MM/YYYY'
                  label='Thời hạn hợp đồng'
                  required
                />
              </Form.Item>

              <Form.Item name='otherPrice'>
                <VInput label='Giá khác' placeholder='Giá khác' required />
              </Form.Item>

              <Form.Item name='countryContractId'>
                <VSelect label='Country hoặc Zone '>
                  {opitionCountryZone?.map((v: OpitionType) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item name='discountRate'>
                <VInput
                  label='Tỷ lệ giảm giá (Đánh tỷ lệ %)'
                  placeholder='Nhập Tỷ lệ giảm giá (Đánh tỷ lệ %)'
                />
              </Form.Item>
              <Form.Item name='noteContract'>
                <VInput
                  label='Ghi chú hợp đồng'
                  placeholder='Nhập ghi chú hợp đồng'
                />
              </Form.Item>
              <Form.Item
                name='priceListCode'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Mã bảng giá',
                  },
                ]}
              >
                <VInput
                  label='Mã bảng giá'
                  placeholder='Nhập Mã bảng giá'
                  required
                />
              </Form.Item>
              <Form.Item
                name='timeAplly'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Thời hạn áp dung mã giảm giá',
                  },
                ]}
              >
                <VRangePicker
                  placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
                  className='w-full'
                  format='DD/MM/YYYY'
                  label='Thời hạn áp dung mã giảm giá'
                  required
                />
              </Form.Item>

              <Form.Item
                name='surcharge'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn thời hạn hợp đồng',
                  },
                ]}
              >
                <VInput
                  label='Phụ phí xăng dầu'
                  placeholder='Nhập phụ phí xăng dầu'
                  required
                />
              </Form.Item>

              <Form.Item
                name='applicableRate'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn tý giá áp dụng',
                  },
                ]}
              >
                <VInput
                  label='Tý giá áp dụng'
                  placeholder='Nhập tý giá áp dụng'
                  required
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
          Thêm hợp đồng
        </Button>
      </Spin>
    </Modal>
  );
};

export default ModalCreateContract;
