/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Modal, Select } from 'antd';
import React, { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';

import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';

import { CalculationUnit } from '@/contants/common.constants';
import { OpitionType } from '@/contants/types';
import { countries } from '@/contants/types/Country';
import {
  fetchCommoditiesTypeId,
  fetchShippingType,
} from '@/services/booking.services';

type ModalBookingDetailsProps = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  handleUpdateBookingDetails: (form: any) => void;
  services?: string;
  listServices: Array<OpitionType>;
  value: any;
};

const { Option } = Select;

const ModalUpdateBookingDetails = ({
  isOpen,
  services,
  listServices,
  onClose,
  handleUpdateBookingDetails,
  value,
}: ModalBookingDetailsProps) => {
  const [detailsBookingForm] = Form.useForm();

  const { data: DataCommoditiesTypeId } = useQuery(
    ['DataCommoditiesTypeId', {}],
    () => fetchCommoditiesTypeId()
  );
  const { data: DataShippingType } = useQuery(['DataShippingType', {}], () =>
    fetchShippingType()
  );

  const getBulkyWeight = (id: string) => {
    const service = listServices.filter((x) => x.value === id);
    switch (service[0].label) {
      case 'Dịch vụ hàng xuất Chuyển phát nhanh':
      case 'Dịch vụ hàng nhập Chuyển phát nhanh':
      case 'Dịch vụ Thương mại điện tử':
        return 5000;
      case 'Dịch vụ Air Cargo (Hàng không quốc tế)':
        return 6000;
      case 'Dịch vụ Forwarding (Vận tải quốc tế)':
        return 10000;
      case 'Dịch vụ Trucking trong nước':
        return 1;
      case 'Dịch vụ Nội địa':
        return 1 / 333;
      default:
        return 0;
    }
  };
  const handleChange = () => {
    const width = detailsBookingForm.getFieldValue('width');
    const height = detailsBookingForm.getFieldValue('height');
    const longs = detailsBookingForm.getFieldValue('longs');
    const quantity = detailsBookingForm.getFieldValue('quantity');

    const bulkyWeight =
      (width * height * longs) / getBulkyWeight(services || '') || 0;
    detailsBookingForm.setFieldsValue({ bulkyWeight });

    const numb22 = bulkyWeight * quantity || 0;
    detailsBookingForm.setFieldsValue({ numb22: numb22.toFixed(2) });
  };

  const handleUpdateBooking = async () => {
    const resForm = await detailsBookingForm.validateFields();
    const updateForm = { ...resForm, idKey: value.idKey };
    handleUpdateBookingDetails(updateForm);
  };

  const OpitionCalculationUnit = Object.entries(CalculationUnit).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const OpitionCommoditiesTypeId = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (DataCommoditiesTypeId?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return DataCommoditiesTypeId?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [DataCommoditiesTypeId]);

  const OpitionShippingType = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (DataShippingType?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return DataShippingType?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [DataShippingType]);

  useEffect(() => {
    detailsBookingForm.setFieldsValue({
      ...value,
    });
  }, [detailsBookingForm, value]);

  return (
    <Modal
      footer={null}
      visible={isOpen}
      destroyOnClose
      onCancel={() => onClose(false)}
      className='top-[calc(5vh)] w-[calc(50vw)]'
    >
      <div>
        <p className='text-center text-[24px] font-bold'>Chi tiết đơn hàng </p>

        <Form form={detailsBookingForm}>
          <div className='h-[calc(70vh)] overflow-y-auto p-5'>
            <div className='grid grid-cols-2 gap-x-6'>
              <Form.Item
                name='commoditiesTypeId'
                className='w-full'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập nhóm hàng hóa vận chuyển',
                  },
                ]}
              >
                <VSelect label='Nhóm hàng hóa vận chuyển' required showSearch>
                  {OpitionCommoditiesTypeId?.map((v: any) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>
              <Form.Item
                name='shippingItemViId'
                className='w-full'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn loại hàng hóa',
                  },
                ]}
              >
                <VSelect
                  label='Nhóm hàng hóa vận chuyển (Tiếng Việt)'
                  required
                  showSearch
                >
                  {OpitionShippingType?.map((v: any) => (
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
                name='originItem'
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
                name='shippingItemEn'
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

              <Form.Item name='quantity'>
                <VInputNumber
                  label='Số kiện'
                  required
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item name='weight'>
                <VInputNumber label='Tổng trọng lượng thực (kg)' required />
              </Form.Item>
              <Form.Item name='height'>
                <VInputNumber
                  label='Chiều cao (cm)'
                  onChange={handleChange}
                  required
                />
              </Form.Item>

              <Form.Item name='width'>
                <VInputNumber
                  label='Chiều rộng (cm)'
                  onChange={handleChange}
                  required
                />
              </Form.Item>

              <Form.Item name='longs'>
                <VInputNumber
                  label='Chiều dài (cm)'
                  onChange={handleChange}
                  required
                />
              </Form.Item>

              <Form.Item name='bulkyWeight'>
                <VInputNumber
                  label='Trọng lượng cồng kềnh (kg) tạm tính'
                  required
                  disabled
                />
              </Form.Item>

              <Form.Item name='numb22'>
                <VInputNumber
                  label='Tổng trọng lượng cồng kềnh (kg) tạm tính'
                  required
                  disabled
                />
              </Form.Item>

              <Form.Item
                name='calculationUnit'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập đơn vị tính',
                  },
                ]}
              >
                <VSelect label='Đơn vị' required showSearch>
                  {OpitionCalculationUnit.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>

              <Form.Item name='note'>
                <VInput label='Ghi chú' />
              </Form.Item>
            </div>
          </div>

          <div className='mt-4 flex justify-start'>
            <Button type='primary' onClick={handleUpdateBooking}>
              Cập nhật Hàng hóa
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalUpdateBookingDetails;
