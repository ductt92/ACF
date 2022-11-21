/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormInstance, Radio, Select } from 'antd';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { EServiceRequest, ETypeContract } from '@/contants/types';
import { getStaff } from '@/services/customer.services';
const { Option } = Select;
const ContractCustomer = ({
  form,
  expertise,
  onChangeEx,
}: {
  form: FormInstance;
  expertise: number;
  onChangeEx: (value: any) => void;
}) => {
  const { data: dataStaff } = useQuery(['getStaff', {}], () => getStaff());

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
  const EServiceRequestOpition = Object.entries(EServiceRequest).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const ETypeContractOpition = Object.entries(ETypeContract).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  return (
    <Form form={form}>
      <div className='h-[calc(70vh)] overflow-y-auto p-4'>
        <div className='grid grid-cols-2 gap-x-6'>
          <Form.Item
            name='serviceRequest'
            rules={[{ required: true, message: 'Vui lòng dịch vụ yêu cầu' }]}
          >
            <VSelect label='dịch vụ yêu cầu' required>
              {EServiceRequestOpition.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='potentialRevenue'
            rules={[
              { required: true, message: 'Vui lòng chọn doanh thu tiềm năng' },
            ]}
          >
            <VInput label='Doanh thu tiềm năng' required />
          </Form.Item>
          <Form.Item
            name='commitmentRate'
            rules={[
              {
                required: true,
                message:
                  'Vui lòng nhập tỷ lệ LNG Cam kết nếu xin giá riêng/Tháng',
              },
            ]}
          >
            <VInput
              label=' Tỷ lệ LNG Cam kết nếu xin giá riêng/Tháng'
              required
            />
          </Form.Item>
          <Form.Item
            name='contractCode'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mã hợp đồng',
              },
            ]}
          >
            <VInput label=' Mã hợp đồng' required />
          </Form.Item>
          <Form.Item
            name='contractName'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên hợp đồng',
              },
            ]}
          >
            <VInput label='Tên hợp đồng' required />
          </Form.Item>

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
            <VDatePicker
              label=' Lịch thanh toán công nợ kể từ ngày chốt bảng kê '
              format='DD-MM-YYYY'
              required
            />
          </Form.Item>
          <Form.Item name='noteContract'>
            <VInput label='Ghi chú hợp đồng' />
          </Form.Item>

          <Form.Item name='expertise'>
            <p>Thẩm định</p>
            <Radio.Group
              value={expertise}
              onChange={(e) => onChangeEx(e.target.value)}
            >
              <Radio value={1}>Đã thẩm định</Radio>
              <Radio value={0}>Chưa thầm định</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default ContractCustomer;
