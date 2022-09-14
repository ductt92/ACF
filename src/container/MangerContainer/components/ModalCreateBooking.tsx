import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Modal, notification, Select } from 'antd';
import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { FORMAT_DATE_DD_MM_YYYY_HH_MM_SS } from '@/contants/common.constants';
import { QUERY_BOOKING } from '@/contants/query-key/booking.query';
import {
  BookingDetails,
  BookingType,
  CommoditiesType,
  IMyBooking,
  ServiceEnum,
  TypeOfPayment,
} from '@/contants/types';
import { createBooking } from '@/services/booking.services';
const { Option } = Select;

type ModalCreateEmployeeProps = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
};
const ModalCreateBooking = ({ isOpen, onClose }: ModalCreateEmployeeProps) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  // const { getItem } = storage();
  // const user = getItem(USER);

  const { mutate: mutateCreate, isLoading: isCreating } = useMutation(
    createBooking,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_BOOKING.GET_BOOKING]);
        notification.success({
          message: 'Tạo đơn hàng mới thành công',
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
    const dataCreateBooking: Partial<IMyBooking> = await form.validateFields();
    mutateCreate({
      ...dataCreateBooking,
      total: parseInt(dataCreateBooking.total?.toString() || '') || 0,
      vat: parseInt(dataCreateBooking.vat?.toString() || '') || 0,
      amount: parseInt(dataCreateBooking.amount?.toString() || '') || 0,
      bookingDetail: dataCreateBooking?.bookingDetail?.map(
        (v: BookingDetails) => ({
          ...v,
          quantity: parseInt(v.quantity?.toString()) || 0,
          weight: parseInt(v.weight?.toString()) || 0,
          height: parseInt(v.height?.toString()) || 0,
          width: parseInt(v.width?.toString()) || 0,
          longs: parseInt(v.longs?.toString()) || 0,
          bulkyWeight: parseInt(v.bulkyWeight?.toString()) || 0,
        })
      ),
    });
  };

  const OpitionType = Object.entries(BookingType).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  // const OpitionBookingStatus = Object.entries(BookingStatus).map(
  //   ([key, value]) => ({
  //     value: key,
  //     label: value,
  //   })
  // );

  const OpitionServiceBooking = Object.entries(ServiceEnum).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const OpitionTypePayment = Object.entries(TypeOfPayment).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const OpitionCommoditiesType = Object.entries(CommoditiesType).map(
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
    <>
      <Modal
        footer={null}
        visible={isOpen}
        onCancel={() => onClose(false)}
        className='top-[calc(5vh)] w-[calc(50vw)]'
      >
        <div>
          <p className='text-center text-[24px] font-bold'>Tạo mới đơn hàng</p>
        </div>
        <div>
          <Form form={form}>
            <div className='h-[calc(70vh)] overflow-y-auto p-5'>
              <div>
                <p className='text-xl font-bold'>1. Thông tin chung</p>
                <div className='grid grid-cols-2 gap-x-6'>
                  <Form.Item
                    name='type'
                    rules={[
                      {
                        required: true,
                        message:
                          'Vui lòng chọn loại booking (Chứng từ, hàng hóa)',
                      },
                    ]}
                  >
                    <VSelect label='Loại booking (Chứng từ, hàng hóa)' required>
                      {OpitionType.map((v) => (
                        <Option value={v.value} key={v.value}>
                          {v.label}
                        </Option>
                      ))}
                    </VSelect>
                  </Form.Item>
                  <Form.Item name='invoiceId'>
                    <VInput label='Mã invoice' />
                  </Form.Item>
                  <Form.Item
                    name='estimatedDate'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn thời gian dự kiến lấy hàng',
                      },
                    ]}
                  >
                    <VDatePicker
                      label='Thời gian dự kiến lấy hàng'
                      format={FORMAT_DATE_DD_MM_YYYY_HH_MM_SS}
                      required
                    />
                  </Form.Item>

                  <Form.Item
                    name='serviceBooking'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn loại dịch vụ',
                      },
                    ]}
                  >
                    <VSelect label='Dịch vụ' required>
                      {OpitionServiceBooking.map((v) => (
                        <Option value={v.value} key={v.value}>
                          {v.label}
                        </Option>
                      ))}
                    </VSelect>
                  </Form.Item>

                  <Form.Item
                    name='typeOfPayment'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn loại thanh toán',
                      },
                    ]}
                  >
                    <VSelect label='Loại hình thanh toán' required>
                      {OpitionTypePayment.map((v) => (
                        <Option value={v.value} key={v.value}>
                          {v.label}
                        </Option>
                      ))}
                    </VSelect>
                  </Form.Item>

                  <Form.Item name='total'>
                    <VInput label='Tổng tiền booking' />
                  </Form.Item>

                  <Form.Item name='vat'>
                    <VInput label='Tiền thuế' />
                  </Form.Item>
                  <Form.Item name='amount'>
                    <VInput label='Tổng tiền thanh toán' />
                  </Form.Item>
                  <Form.Item name='note'>
                    <VInput label='Note' />
                  </Form.Item>

                  <Form.Item name='partnerBillCode'>
                    <VInput label='Mã bill đối tác' />
                  </Form.Item>
                </div>
              </div>

              <div>
                <p className='text-xl font-bold'>2. Thông tin người gửi</p>

                <div className='grid grid-cols-2 gap-x-6'>
                  <Form.Item
                    name='senderName'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập người gửi',
                      },
                    ]}
                  >
                    <VInput label='Người gửi' required />
                  </Form.Item>

                  <Form.Item
                    name='senderContactPerson'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập người liên hệ',
                      },
                    ]}
                  >
                    <VInput label='Người liên hệ' required />
                  </Form.Item>

                  <Form.Item
                    name='senderPhoneNumber'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập sđt người gửi',
                      },
                    ]}
                  >
                    <VInput label='Số điện thoại' required />
                  </Form.Item>

                  <Form.Item
                    name='senderMobile'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập mobile',
                      },
                    ]}
                  >
                    <VInput label='Mobile' required />
                  </Form.Item>

                  <Form.Item
                    name='senderCountry'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập quốc gia',
                      },
                    ]}
                  >
                    <VInput label='Quốc gia' required />
                  </Form.Item>

                  <Form.Item
                    name='senderCommune'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập phường xã',
                      },
                    ]}
                  >
                    <VInput label='Phường/xã' required />
                  </Form.Item>

                  <Form.Item
                    name='senderDistrict'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Quận/Huyện',
                      },
                    ]}
                  >
                    <VInput label='Quận/Huyện' required />
                  </Form.Item>

                  <Form.Item
                    name='senderProvince'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Tỉnh/Thành phố',
                      },
                    ]}
                  >
                    <VInput label='Tỉnh/Thành phố' required />
                  </Form.Item>

                  <Form.Item name='senderPostalCode'>
                    <VInput label='Mã bưu chính' />
                  </Form.Item>

                  <Form.Item name='senderState'>
                    <VInput label='Tiểu bang' />
                  </Form.Item>
                </div>
                <Form.Item
                  name='senderAddress'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập địa chỉ chi tiết người gửi',
                    },
                  ]}
                >
                  <VInput label='Địa chỉ chi tiết người gửi' required />
                </Form.Item>
              </div>

              <div>
                <p className='text-xl font-bold'>3. Thông tin người nhận</p>

                <div className='grid grid-cols-2 gap-x-6'>
                  <Form.Item
                    name='receiverName'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập người nhận',
                      },
                    ]}
                  >
                    <VInput label='Người nhận' required />
                  </Form.Item>

                  <Form.Item
                    name='receiverContactPerson'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập người liên hệ',
                      },
                    ]}
                  >
                    <VInput label='Người liên hệ' required />
                  </Form.Item>

                  <Form.Item
                    name='receiverPhoneNumber'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập số điện thoại',
                      },
                    ]}
                  >
                    <VInput label='Số điện thoại' required />
                  </Form.Item>

                  <Form.Item
                    name='receiverMobile'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập mobile',
                      },
                    ]}
                  >
                    <VInput label='Mobile' required />
                  </Form.Item>

                  <Form.Item
                    name='receiverCountry'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập quốc gia ',
                      },
                    ]}
                  >
                    <VInput label='Quốc gia' required />
                  </Form.Item>

                  <Form.Item
                    name='receiverCommune'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập phường/xã',
                      },
                    ]}
                  >
                    <VInput label='Phường/xã' required />
                  </Form.Item>

                  <Form.Item
                    name='receiverDistrict'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Quận/Huyện',
                      },
                    ]}
                  >
                    <VInput label='Quận/Huyện' required />
                  </Form.Item>

                  <Form.Item
                    name='receiverProvince'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập Tỉnh/Thành phố',
                      },
                    ]}
                  >
                    <VInput label='Tỉnh/Thành phố' required />
                  </Form.Item>

                  <Form.Item
                    name='receiverPostalCode'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập mã bưu chính',
                      },
                    ]}
                  >
                    <VInput label='Mã bưu chính' required />
                  </Form.Item>
                  <Form.Item
                    name='receiverState'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập tiểu bang',
                      },
                    ]}
                  >
                    <VInput label='Tiểu bang' required />
                  </Form.Item>
                </div>

                <Form.Item
                  name='receiverAddress'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập Địa chỉ chi tiết người nhận',
                    },
                  ]}
                >
                  <VInput label='Địa chỉ chi tiết người nhận' required />
                </Form.Item>
              </div>

              <div>
                <p className='text-xl font-bold'>4. Chi tiết hàng hóa </p>

                <Form.List
                  name='bookingDetail'
                  rules={[
                    {
                      validator: async (_, bookingDetail) => {
                        if (!bookingDetail) {
                          return Promise.reject(
                            new Error('Vui lòng thêm hàng hóa ')
                          );
                        }
                      },
                    },
                  ]}
                >
                  {(fields, { add }, { errors }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <div className='grid grid-cols-2 gap-x-6' key={key}>
                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'commoditiesType']}
                              className='w-full'
                              rules={[
                                {
                                  required: true,
                                  message: 'Vui lòng chọn loại hàng hóa',
                                },
                              ]}
                            >
                              <VSelect label='Loại hàng hóa' required>
                                {OpitionCommoditiesType.map((v) => (
                                  <Option value={v.value} key={v.value}>
                                    {v.label}
                                  </Option>
                                ))}
                              </VSelect>
                            </Form.Item>
                          </div>

                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'name']}
                              className='w-full'
                              rules={[
                                {
                                  required: true,
                                  message: 'Vui lòng nhập tên hàng hóa',
                                },
                              ]}
                            >
                              <VInput label='Tên hàng hóa' required />
                            </Form.Item>
                          </div>

                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'description']}
                              className='w-full'
                              rules={[
                                {
                                  required: true,
                                  message: 'Vui lòng nhập mô tả cho hàng hóa',
                                },
                              ]}
                            >
                              <VInput label='Mô tả' required />
                            </Form.Item>
                          </div>

                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'quantity']}
                              className='w-full'
                              rules={[
                                {
                                  required: true,
                                  message: 'Vui lòng nhập số lượng hàng hóa',
                                },
                              ]}
                            >
                              <VInput
                                label='Số lượng'
                                required
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Form.Item>
                          </div>

                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'weight']}
                              className='w-full'
                              rules={[
                                {
                                  required: true,
                                  message: 'Vui lòng nhập trọng lượng hàng hóa',
                                },
                              ]}
                            >
                              <VInput
                                label='Trọng lượng (kg/kiện)'
                                required
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Form.Item>
                          </div>

                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'width']}
                              className='w-full'
                            >
                              <VInput
                                label='Chiều rộng'
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Form.Item>
                          </div>

                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'height']}
                              className='w-full'
                            >
                              <VInput
                                label='Chiều cao'
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Form.Item>
                          </div>

                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'longs']}
                              className='w-full'
                            >
                              <VInput
                                label='Chiều dài'
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'bulkyWeight']}
                              className='w-full'
                            >
                              <VInput
                                label='Trọng lượng cồng kềnh'
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              {...restField}
                              name={[name, 'note']}
                              className='w-full'
                            >
                              <VInput label='Note' />
                            </Form.Item>
                          </div>
                        </div>
                      ))}

                      <Form.Item className='flex flex-row items-center justify-center'>
                        <Button
                          type='dashed'
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Thêm hàng hóa (vật tư)
                        </Button>
                      </Form.Item>

                      <Form.ErrorList errors={errors} />
                    </>
                  )}
                </Form.List>
              </div>
            </div>

            <div className='mt-4 flex justify-start'>
              <Button
                onClick={onSubmit}
                loading={isCreating}
                htmlType='submit'
                type='primary'
              >
                Tạo mới đơn hàng
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ModalCreateBooking;
