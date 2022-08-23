import { Button, Form, Modal, notification, Select } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { DEFAULT_DATE_FORMAT, LevelStaff } from '@/contants/common.constants';
import { QUERY_EMPLOYEE } from '@/contants/query-key/employee.contants';
import { GENDER, IStaff, Marital } from '@/contants/types';
import { createStaffs } from '@/services/employee.services';

interface IProps {
  onClose: (value: boolean) => void;
}
const ModalCreateEmployee = ({ onClose }: IProps) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { Option } = Select;

  const { mutate: mutateCreate, isLoading: isCreating } = useMutation(
    createStaffs,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_EMPLOYEE.GET_EMPLOYEE);
        notification.success({
          message: 'Tạo mới tài khoản thành công',
          placement: 'top',
        });
        onClose(false);
      },
      onError: () => {
        notification.error({
          message: 'Something went wrong',
          placement: 'top',
        });
      },
    }
  );

  const onSubmit = async () => {
    const requestData: IStaff = await form.validateFields();
    mutateCreate({
      ...requestData,
      dayOfBirth: dayjs(requestData.dayOfBirth).format(DEFAULT_DATE_FORMAT),
      issueDate: dayjs(requestData.issueDate).format(DEFAULT_DATE_FORMAT),
      issueInsuranceDate: dayjs(requestData.issueInsuranceDate).format(
        DEFAULT_DATE_FORMAT
      ),
      insuranceParticipationDate: dayjs(
        requestData.insuranceParticipationDate
      ).format(DEFAULT_DATE_FORMAT),
    });
  };

  const OpitionGender = Object.entries(GENDER).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const OpitionMatarial = Object.entries(Marital).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const OpitionLevel = Object.entries(LevelStaff).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  return (
    <Modal
      footer={null}
      visible={true}
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(40vw)]'
    >
      <div>
        <p className='text-center text-[24px] font-medium'>Tạo mới nhân viên</p>
      </div>
      <div>
        <Form form={form}>
          <div className='h-[calc(70vh)] overflow-y-auto p-4'>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item
                name='fullName'
                rules={[{ required: true, message: 'Vui lòng nhập' }]}
              >
                <VInput
                  label='Tên nhân viên'
                  required
                  placeholder='Nhập vị tên nhân viên'
                />
              </Form.Item>

              <Form.Item
                name='placeOfBirth'
                rules={[{ required: true, message: 'Vui lòng nhập nơi sinh' }]}
              >
                <VInput label='Nơi Sinh' placeholder='Nhập nơi sinh' required />
              </Form.Item>

              <Form.Item name='position'>
                <VInput
                  label='Vị trí làm việc'
                  placeholder='Nhập vị trí làm việc'
                  required
                />
              </Form.Item>

              <Form.Item
                name='gender'
                rules={[{ required: true, message: 'Vui lòng chọn' }]}
              >
                <VSelect
                  label='Giới tính'
                  placeholder='Chọn giới tính'
                  required
                >
                  {OpitionGender.map((v, k) => (
                    <Option key={k} value={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='level'
                rules={[{ required: true, message: 'Vui lòng chọn' }]}
              >
                <VSelect
                  label='Trình độ học vấn'
                  placeholder='Chọn trình độ học vấn'
                  required
                >
                  {OpitionLevel.map((v, k) => (
                    <Option key={k} value={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item
                name='dayOfBirth'
                rules={[{ required: true, message: 'Vui lòng chọn' }]}
              >
                <VDatePicker
                  format='DD/MM/YYYY'
                  label='Ngày sinh'
                  placeholder='Chọn ngày sinh'
                  required
                />
              </Form.Item>

              <Form.Item
                name='temporaryAddress'
                rules={[{ required: true, message: 'Vui lòng nhập' }]}
              >
                <VInput
                  label='Tạm trú'
                  placeholder='Nhập địa chỉ tạm trú'
                  required
                />
              </Form.Item>
              <Form.Item
                name='permanentAddress'
                rules={[{ required: true, message: 'Vui lòng nhập' }]}
              >
                <VInput
                  label='Thường trú '
                  placeholder='Nhập địa chỉ thường trú'
                  required
                />
              </Form.Item>

              <Form.Item
                name='ethnic'
                rules={[{ required: true, message: 'Vui lòng nhập' }]}
              >
                <VInput label='Dân tộc' placeholder='Nhập dân tộc' required />
              </Form.Item>

              <Form.Item
                name='religion'
                rules={[{ required: true, message: 'Vui lòng nhập' }]}
              >
                <VInput label='Tôn giáo' placeholder='Nhập tôn giáo' required />
              </Form.Item>

              <Form.Item
                name='nationality'
                rules={[{ required: true, message: 'Vui lòng nhập' }]}
              >
                <VInput
                  label='Quốc tịch'
                  placeholder='Nhập quốc tịch'
                  required
                />
              </Form.Item>

              <Form.Item
                name='marital'
                rules={[{ required: true, message: 'Vui lòng chọn' }]}
              >
                <VSelect
                  label='Tình trạng hôn nhân'
                  placeholder='Chọn tình trạng hôn nhân'
                  required
                >
                  {OpitionMatarial.map((v, k) => (
                    <Option key={k} value={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item name='element'>
                <VInput
                  label='Thành phần'
                  placeholder='Nhập Thành phần (vd : công nhân viên)'
                />
              </Form.Item>
              <Form.Item
                name='email'
                rules={[
                  {
                    type: 'email',
                    message: 'Vui lofnh nhập đúng định dạng email',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <VInput
                  label='Email'
                  placeholder='Nhập email'
                  required
                  type='email'
                />
              </Form.Item>

              <Form.Item
                name='phoneNumber'
                rules={[{ required: true, message: 'Vui lòng nhập SĐT' }]}
              >
                <VInput label='SĐT' placeholder='Nhập SĐT' required />
              </Form.Item>

              <Form.Item
                name='phoneCode'
                rules={[{ required: true, message: 'Vui lòng nhập Mã ĐT' }]}
              >
                <VInput label='Mã ĐT' placeholder='Nhập Mã ĐT' required />
              </Form.Item>

              <Form.Item
                name='peopleId'
                rules={[{ required: true, message: 'Vui lòng nhập CMT/CCCD' }]}
              >
                <VInput label='CMT/CCCD' placeholder='Nhập CMT/CCCD' required />
              </Form.Item>

              <Form.Item
                name='issueDate'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Ngày phát hành CMT/CCCD',
                  },
                ]}
              >
                <VDatePicker
                  format='DD/MM/YYYY'
                  label='Ngày phát hành CMT/CCCD'
                  placeholder='Nhập Ngày phát hành CMT/CCCD'
                  required
                />
              </Form.Item>

              <Form.Item
                name='issuePlace'
                rules={[
                  { required: true, message: 'Vui lòng nhập Nơi cấp CMT/CCCD' },
                ]}
              >
                <VInput
                  label='Nơi cấp CMT/CCCD'
                  placeholder='Nhập Nơi cấp CMT/CCCD'
                  required
                />
              </Form.Item>

              <Form.Item
                name='region'
                rules={[
                  { required: true, message: 'Vui lòng nhập Nơi cấp CMT/CCCD' },
                ]}
              >
                <VInput label='Vùng' placeholder='Nhập Vùng' required />
              </Form.Item>
              <Form.Item name='taxCode'>
                <VInput label='MST' placeholder='Nhập MST' />
              </Form.Item>

              <Form.Item name='bankCode'>
                <VInput label='Ngân hàng' placeholder='Nhập Ngân hàng' />
              </Form.Item>

              <Form.Item name='bankAccountNumber'>
                <VInput label='Số thẻ NH' placeholder='Nhập Số thẻ NH' />
              </Form.Item>

              <Form.Item name='socialInsuranceId'>
                <VInput label='Mã BHXH' placeholder='Nhập Mã BHXH' />
              </Form.Item>

              <Form.Item name='healthInsuranceId'>
                <VInput label='Mã BHYT' placeholder='Nhập Mã BHYT' />
              </Form.Item>

              <Form.Item name='unionBookNumber'>
                <VInput
                  label='Số sổ công đoàn'
                  placeholder='Nhập Số sổ công đoàn'
                />
              </Form.Item>
              <Form.Item name='insuranceParticipationDate'>
                <VDatePicker
                  label='Ngày tham gia bảo hiểm'
                  placeholder='Nhập Ngày tham gia bảo hiểm'
                  format='DD/MM/YYYY'
                />
              </Form.Item>
              <Form.Item name='issueInsuranceDate'>
                <VDatePicker
                  label='Ngày phát hành bảo hiểm'
                  placeholder='Nhập Ngày phát hành bảo hiểm'
                  format='DD/MM/YYYY'
                />
              </Form.Item>
            </div>
          </div>

          <div className='mt-4 flex justify-start'>
            <Button
              onClick={onSubmit}
              loading={isCreating}
              htmlType='submit'
              type='primary'
            >
              Tạo mới nhân viên
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalCreateEmployee;
