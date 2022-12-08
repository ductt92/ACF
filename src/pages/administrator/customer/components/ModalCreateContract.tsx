/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  DatePicker,
  Form,
  FormInstance,
  Modal,
  Radio,
  Select,
  Spin,
} from 'antd';
import React, { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import {
  EFixedPriceCode,
  ETypeContract,
  IContract,
  OpitionType,
} from '@/contants/types';
import {
  getCountry,
  getSmallServices,
  getStaff,
} from '@/services/customer.services';

const { Option } = Select;
const { RangePicker } = DatePicker;

interface ModalCreateContract {
  onClose: () => void;
  form: FormInstance<IContract>;
  isOpen: boolean;
  expertise: any;
  handleChangeEx: (value: any) => void;
  handleChangeServices: (value: string) => void;
  servicesId?: string;
  handleAddContract: () => void;
}

const ModalCreateContract = ({
  onClose,
  form,
  isOpen,
  expertise,
  servicesId,
  handleChangeServices,
  handleChangeEx,
  handleAddContract,
}: ModalCreateContract) => {
  const { data: dataStaff } = useQuery(['getStaff', {}], () => getStaff());
  const { data: dataSmallServices } = useQuery(['smallSerices', {}], () =>
    getSmallServices()
  );
  const { data: countryContract, isLoading: countryContractLoading } = useQuery(
    ['countryContract', { servicesId }],
    () => getCountry(servicesId)
  );

  const OpitionStaff = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataStaff?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataStaff?.map((v) => ({
        value: v.id,
        label: `${v.staffCode} - ${v.fullName}`,
      }));
    }
  }, [dataStaff]);

  const OpitionSmallServices = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataSmallServices?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataSmallServices?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [dataSmallServices]);

  const CountryZoneOpition = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (countryContract?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return countryContract?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [countryContract]);

  const ETypeContractOpition = Object.entries(ETypeContract).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const EFixedPriceOpition = Object.entries(EFixedPriceCode).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [form]);

  return (
    <Modal
      footer={null}
      destroyOnClose={true}
      visible={isOpen}
      onCancel={onClose}
      className='top-[calc(5vh)] w-[calc(35vw)]'
    >
      <Spin spinning={countryContractLoading}>
        <p className='text-center text-2xl'>Tạo mới thông tin hợp đồng</p>
        <Form form={form}>
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
                  {OpitionSmallServices?.map((v: OpitionType) => (
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
                  label='Lịch thanh toán công nợ kể từ ngày chốt bảng kê'
                  placeholder='Lịch thanh toán công nợ kể từ ngày chốt bảng kê'
                  required
                />
              </Form.Item>

              <Form.Item
                name='potentialRevenueFrom'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Doanh thu tiềm năng từ',
                  },
                ]}
              >
                <VInput
                  label='Doanh thu tiềm năng từ'
                  placeholder='Nhập Doanh thu tiềm năng từ'
                  required
                />
              </Form.Item>

              <Form.Item
                name='potentialRevenueTo'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Doanh thu tiềm năng đến',
                  },
                ]}
              >
                <VInput
                  label='Doanh thu tiềm năng đến'
                  placeholder='Nhập Doanh thu tiềm năng đến'
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
                  {ETypeContractOpition.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item name='fixedPriceCode'>
                <VSelect label='Mã bảng giá cố định'>
                  {EFixedPriceOpition.map((v) => (
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
                <p className='m-0 p-0'>
                  Thời hạn hợp đồng <span className='text-red-500'>*</span>
                </p>
                <RangePicker
                  placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
                  className='w-full'
                  format='DD/MM/YYYY'
                />
              </Form.Item>

              <Form.Item name='otherPrice'>
                <VInput label='Giá khác' placeholder='Giá khác' required />
              </Form.Item>

              <Form.Item name='countryContractId'>
                <VSelect label='Country hoặc Zone '>
                  {CountryZoneOpition?.map((v: OpitionType) => (
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
                    message: 'Vui lòng chọn thời hạn hợp đồng',
                  },
                ]}
              >
                <p className='m-0 p-0'>
                  Thời hạn áp dung mã giảm giá
                  <span className='text-red-500'>*</span>
                </p>
                <RangePicker
                  placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
                  className='w-full'
                  format='DD/MM/YYYY'
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
                    message: 'Vui lòng chọn thời hạn hợp đồng',
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
                  <Radio value={1}>Đã thẩm định</Radio>
                  <Radio value={0}>Chưa thầm định</Radio>
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
                    {OpitionStaff?.map((v: any) => (
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
