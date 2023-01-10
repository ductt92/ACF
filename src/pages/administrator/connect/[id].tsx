import { Button, Form, notification, Radio, Select, Table } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { OpitionType } from '@/contants/types';
import AdminLayOut from '@/layout/AdminLayOut';
import {
  connectPartnerServices,
  exportConnect,
  fetchServicePartnerService,
  fetchServicesBooking,
} from '@/services/booking.services';
import { renderColumsn } from '@/utils/contants/columns.contants';
import { QUERY_KEY } from '@/utils/contants/query-key';
import { connectPartner } from '@/utils/contants/services';
export enum EExportForm {
  DIRECT = 'Trực tiếp', // Trực tiếp
  TRANSIT = 'Gián tiếp', // Gián tiếp
}

export enum ETransportationType {
  PLANES = 'Máy bay', //Máy bay
  SHIP = 'Tàu biển', // Tàu biển
  ROAD = 'Đường bộ', // Đường bộ
  TRAIN = 'Đường tàu', // Đường tàu
}

const { Option } = Select;
const ConnectContainerById = () => {
  const router = useRouter();
  const [form] = useForm();
  const { id } = router.query;
  const queryClient = useQueryClient();

  const { data: dataSerivicesBooknig } = useQuery(
    ['dataSerivicesBooknig', {}],
    () => fetchServicesBooking()
  );

  const OpitionServiceBooking = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataSerivicesBooknig?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataSerivicesBooknig?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataSerivicesBooknig]);

  const { data: PartnerServices } = useQuery(
    ['fetchServicePartnerService'],
    () => fetchServicePartnerService()
  );

  const { mutate: connectBill } = useMutation(exportConnect, {
    onSuccess: () => {
      queryClient.invalidateQueries([]);
      notification.success({
        message: 'Thành công',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'Thất bại',
        placement: 'top',
      });
    },
  });

  const opitionPartnerServices = useMemo(() => {
    if (PartnerServices && PartnerServices?.length > 0) {
      const data = PartnerServices?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
      form.setFieldsValue({
        partnerId: data.find((x) => x.value === id),
      });
      return data;
    }
    return [];
  }, [PartnerServices, form, id]);

  const { data: dataConnect } = useQuery(['fetchServicePartnerService'], () =>
    connectPartnerServices()
  );
  const opitionPartnerServicesConnect = useMemo(() => {
    if (dataConnect && dataConnect?.length > 0) {
      const data = dataConnect?.map((v) => ({
        value: v.id,
        label: v.name,
      }));

      return data;
    }
    return [];
  }, [dataConnect]);
  const { data: dataStatic } = useQuery(
    [QUERY_KEY.statisticalDelivery, id],
    () => connectPartner(id as string)
  );

  const opitionExportFrom = Object.entries(EExportForm).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const opitionTransportationType = Object.entries(ETransportationType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const onSubMit = async () => {
    const res = await form.validateFields();
    const newRes = {
      ...res,
      partnerId: res.partnerId?.value || res.partnerId,
      connectionPartnerId:
        res.connectionPartnerId?.value || res.connectionPartnerId,
      itemDeliveries: dataStatic?.map((v) => v.delivery_id),
    };
    connectBill(newRes);
  };

  return (
    <div>
      <Form form={form}>
        <div className='grid grid-cols-2'>
          <Form.Item
            name='exportForm'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn một',
              },
            ]}
          >
            <div className='flex flex-row gap-4'>
              <span>
                Hình thức xuất khẩu <span className='text-[red]'>*</span>
              </span>
              <Radio.Group>
                {opitionExportFrom?.map((v) => (
                  <Radio value={v.value} key={v.value}>
                    {v.label}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
          </Form.Item>
          <Form.Item
            name='transportationType'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn phương tiện vận chuyển',
              },
            ]}
          >
            <VSelect label='Chọn phương tiện vận chuyển' required>
              {opitionTransportationType?.map((v) => (
                <Option key={v.value} value={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <Form.Item
            name='serviceId'
            rules={[
              {
                required: true,
                message: 'Vui lòng dịch vụ',
              },
            ]}
          >
            <VSelect label='Dịch vụ' required>
              {OpitionServiceBooking?.map((v: OpitionType) => (
                <Option key={v.value} value={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='partnerId'>
            <VSelect label='Dịch vụ  kết nối' disabled>
              {opitionPartnerServices?.map((v: OpitionType) => (
                <Option key={v.value} value={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='connectionPartnerId'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập đối tác kết nối',
              },
            ]}
          >
            <VSelect label='Đối tác kết nối'>
              {opitionPartnerServicesConnect?.map((v: OpitionType) => (
                <Option key={v.value} value={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <Form.Item
            name='mawbCode'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mã MAWB/HAWB/CWB',
              },
            ]}
          >
            <VInput label='Mã MAWB/HAWB/CWB' required />
          </Form.Item>
          <Form.Item
            name='flightCode'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mã MAWB/HAWB/CWB',
              },
            ]}
          >
            <VInput label='Mã xuất/nhập ' required />
          </Form.Item>
          <Form.Item
            name='flightTime'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Thời gian xuất/nhập',
              },
            ]}
          >
            <VDatePicker
              label='Thời gian xuất/nhập  '
              format='DD-MM-YYY'
              placeholder='Chọn thời gian xuất/nhập'
              required
            />
          </Form.Item>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <Form.Item
            name='sendingAirport'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Sân bay/Cảng/Nhà ga/Nơi gửi',
              },
            ]}
          >
            <VInput label='Sân bay/Cảng/Nhà ga/Nơi gửi' required />
          </Form.Item>

          <Form.Item
            name='receivingAirport'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Sân bay/Cảng/Nhà ga/Nơi nhận ',
              },
            ]}
          >
            <VInput label='Sân bay/Cảng nhận/Nhà ga/Nơi nhận' required />
          </Form.Item>
        </div>
      </Form>

      <Table
        dataSource={dataStatic}
        columns={renderColumsn()}
        pagination={false}
      />

      <div className='w-full p-4 text-right'>
        <Button
          onClick={onSubMit}
          className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
        >
          Xuất Excel
        </Button>
      </div>
    </div>
  );
};

ConnectContainerById.Layout = AdminLayOut;
export default ConnectContainerById;
