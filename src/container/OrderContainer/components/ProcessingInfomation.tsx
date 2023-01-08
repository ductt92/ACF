import { Checkbox, Form, FormInstance, Select } from 'antd';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { OpitionType } from '@/contants/types';
import {
  fetchServicePartnerService,
  fetchServicePartnerServiceByZone,
} from '@/services/booking.services';
import { dataDHL, dataFedex, dataUPS } from '@/utils/common-function';
const { Option } = Select;
const ProcessingInfomation = ({ form }: { form: FormInstance }) => {
  const { data: PartnerServices } = useQuery(
    ['fetchServicePartnerService'],
    () => fetchServicePartnerService()
  );

  const { data: PartnerServicesDOMESTIC } = useQuery(
    ['fetchServicePartnerServiceDOMESTIC'],
    () => fetchServicePartnerServiceByZone('DOMESTIC')
  );
  const { data: PartnerServicesFOREIGN } = useQuery(
    ['fetchServicePartnerServiceFOREIGN'],
    () => fetchServicePartnerServiceByZone('FOREIGN')
  );

  const OpitionPartServicesDOMESTIC = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (PartnerServicesDOMESTIC?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return PartnerServicesDOMESTIC?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [PartnerServicesDOMESTIC]);

  const OpitionPartServicesFOREIGN = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (PartnerServicesFOREIGN?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return PartnerServicesFOREIGN?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [PartnerServicesFOREIGN]);

  const OpitionPartServices = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (PartnerServices?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return PartnerServices?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
  }, [PartnerServices]);

  return (
    <div className='mb-24'>
      <Form form={form}>
        <div className='grid grid-cols-3 gap-x-4'>
          <Form.Item name='partnerBillCodeDomestic'>
            <VInput
              label='Mã bưu đối tác kết nối dịch vụ Nội địa trong nước Việt Nam'
              isHorizal
            />
          </Form.Item>
          <Form.Item name='partnerServiceDomestic'>
            <VSelect label='Dịch vụ đối tác trong nước' isHorizal showSearch>
              {OpitionPartServicesDOMESTIC?.map((v: OpitionType) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          <Form.Item name='manufactureDomestic'>
            <VInput label='Nhà cung cấp trong nước' isHorizal />
          </Form.Item>

          <Form.Item name='partnerBillCode'>
            <VInput label='Mã bưu đối tác' isHorizal />
          </Form.Item>
          <Form.Item name='partnerService'>
            <VSelect label='Dịch vụ đối tác' isHorizal showSearch>
              {OpitionPartServices?.map((v: OpitionType) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          <Form.Item name='manufacture'>
            <VInput label='Nhà cung câp từ VN ra nước ngoài ' isHorizal />
          </Form.Item>

          <Form.Item name='partnerBillCodeForeign'>
            <VInput label='Mã bưu đối tác kết nối ở Nước ngoài' isHorizal />
          </Form.Item>
          <Form.Item name='partnerServiceForeign'>
            <VSelect label='Dịch vụ đối tác ở nước ngoài' isHorizal showSearch>
              {OpitionPartServicesFOREIGN?.map((v: OpitionType) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          <Form.Item name='manufactureForeign'>
            <VInput label='Nhà  cung cấp nước ngoài ' isHorizal />
          </Form.Item>
        </div>
        <p className='text-xl font-bold'>Dịch vụ giá trị gia tăng</p>
        <p className='m-0 p-0 font-bold'>Dịch vụ chuyên tuyến/ Dịch vụ khác</p>
        <div className='grid gap-x-4'>
          <Form.Item name='valueAddedService1'>
            <VInput label='Dịch vụ 1' />
          </Form.Item>
          <Form.Item name='valueAddedService2'>
            <VInput label='Dịch vụ 2' />
          </Form.Item>
          <Form.Item name='valueAddedService3'>
            <VInput label='Dịch vụ 3' />
          </Form.Item>
        </div>

        <div>
          <p className='m-0 p-0 font-bold'>Dịch vụ DHL</p>
          <Form.Item name='dhl'>
            <Checkbox.Group options={dataDHL} />
          </Form.Item>
        </div>

        <div className='flex flex-col'>
          <p className='m-0 p-0 font-bold'>Dịch vụ Fedex</p>
          <Form.Item name='fedex'>
            <Checkbox.Group options={dataFedex} />
          </Form.Item>
        </div>
        <div className='flex flex-col'>
          <p className='m-0 p-0 font-bold'>Dịch vụ UPS</p>
          <Form.Item name='ups'>
            <Checkbox.Group options={dataUPS} />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default ProcessingInfomation;
