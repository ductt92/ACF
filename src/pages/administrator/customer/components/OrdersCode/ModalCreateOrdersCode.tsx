/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormInstance, Modal, Select, Spin } from 'antd';
import React, { useEffect } from 'react';
const { Option } = Select;

import { CloseOutlined } from '@ant-design/icons';

import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VRangePicker from '@/components/common/VRangeDate';
import VSelect from '@/components/common/VSelect';
import FileUpload from '@/components/FileUpLoad';

import { OpitionType } from '@/contants/types';
interface ModalCreateStaffProps {
  form: FormInstance;
  isOpen: boolean;
  isUpdate: boolean;
  otherPrice: any;
  handleClose: () => void;
  opitonServices: Array<OpitionType>;
  servicesId?: string;
  opitionFixedPriceCode: Array<OpitionType>;
  handleAddOrder: (data: any) => void;
  handleChangeServices: (id: string) => void;
  handleChangeOtherPrice: (value: any) => void;
  dataZone?: any;
  handleSetForm: (value: any) => void;
  fileList: any;
  handleSetFileList: (data: any) => void;
}
const ModalCreateOrdersCode = ({
  form,
  isOpen,
  otherPrice,
  handleChangeOtherPrice,
  handleClose,
  opitonServices,
  isUpdate,
  opitionFixedPriceCode,
  servicesId,
  handleChangeServices,
  handleAddOrder,
  dataZone,
  handleSetForm,
  fileList,
  handleSetFileList,
}: ModalCreateStaffProps) => {
  useEffect(() => {
    if (otherPrice === 'OTHER_PRICE' && !isUpdate) handleSetForm(dataZone);
  }, [dataZone, handleSetForm, isUpdate, otherPrice]);

  const renderHeader = () => {
    return (
      <div
        className='bg-[#FBE51D] text-center text-[24px]
      font-bold'
      >
        {isUpdate ? 'Cập nhật bảng giá' : 'Thêm mới bảng giá'}
      </div>
    );
  };
  return (
    <Modal
      footer={null}
      visible={isOpen || isUpdate}
      title={renderHeader()}
      closeIcon={<CloseOutlined className='text-[24px]' />}
      onCancel={handleClose}
      destroyOnClose
      className='top-[calc(5vh)] w-[calc(40vw)]'
    >
      <Form form={form}>
        <Spin spinning={false}>
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
                  isHorizal
                >
                  {opitonServices?.map((v: OpitionType) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>
              <Form.Item name='timeApply'>
                <VRangePicker
                  placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
                  className='w-full'
                  format='DD/MM/YYYY'
                  label='Thời hạn áp dụng'
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
                  isHorizal
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
                  isHorizal
                />
              </Form.Item>

              <Form.Item name='exchangeRate'>
                <VInputNumber
                  label='Tỷ giá'
                  placeholder='Nhập Tỷ giá'
                  isHorizal
                />
              </Form.Item>
              <Form.Item name='notePriceList'>
                <VInput label='Ghi chú' placeholder='Nhập ghi chú' isHorizal />
              </Form.Item>
              <Form.Item
                name='surcharge'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập phụ phí xăng dầu',
                  },
                ]}
              >
                <VInputNumber
                  label='Phụ phí xăng dầu (%)'
                  placeholder='Nhập phụ phí xăng dầu'
                  required
                  isHorizal
                />
              </Form.Item>
              <Form.Item name='files' className='space-y-1'>
                <p className='m-0 p-0'>File</p>
                <FileUpload
                  handleSetFileList={handleSetFileList}
                  fileList={fileList}
                />
              </Form.Item>

              {servicesId && (
                <Form.Item name='fixedPriceCode'>
                  <VSelect
                    label='Mã bảng giá cố định'
                    onChange={handleChangeOtherPrice}
                    isHorizal
                  >
                    {opitionFixedPriceCode.map((v) => (
                      <Option value={v.value} key={v.value}>
                        {v.label}
                      </Option>
                    ))}
                  </VSelect>
                </Form.Item>
              )}
              {otherPrice === 'OTHER_PRICE' && dataZone?.length <= 0 && (
                <Form.Item name='otherPrice'>
                  <VInput label='Giá khác' isHorizal />
                </Form.Item>
              )}
              {otherPrice === 'OTHER_PRICE' && dataZone?.length <= 0 && (
                <Form.Item name='discountRate'>
                  <VInput
                    label='Lợi Nhuận gộp (Doanh thu/Chi phí) cam kết/Tháng (Theo hóa đơn) đạt tỷ lệ tối thiểu (Đánh tỷ lệ %)'
                    isHorizal
                  />
                </Form.Item>
              )}
            </div>

            {otherPrice === 'OTHER_PRICE' && (
              <Form.List name='otherPrices'>
                {(fields) => (
                  <div className='grid grid-cols-2 gap-x-6'>
                    {fields.map(({ key, name, ...restField }) => (
                      <div key={key}>
                        <Form.Item
                          name={[name, 'discountRate']}
                          {...restField}
                          rules={[
                            {
                              required: true,
                              message: `Nhập Tỷ lệ giảm giá (Đánh tỷ lệ %) ${dataZone?.[key]?.name} `,
                            },
                          ]}
                        >
                          <VInput
                            label={`Nhập Tỷ lệ giảm giá (Đánh tỷ lệ %) ${dataZone?.[key]?.name} `}
                            required
                            isHorizal
                          />
                        </Form.Item>
                      </div>
                    ))}
                  </div>
                )}
              </Form.List>
            )}
          </div>
        </Spin>
        <Button type='primary' onClick={handleAddOrder}>
          {isUpdate ? 'Cập nhật mã bảng giá' : 'Tạo mới mã bảng giá'}
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalCreateOrdersCode;
