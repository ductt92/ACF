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
              label='M?? b??u ?????i t??c k???t n???i d???ch v??? N???i ?????a trong n?????c Vi???t Nam'
              isHorizal
            />
          </Form.Item>
          <Form.Item name='partnerServiceDomestic'>
            <VSelect label='D???ch v??? ?????i t??c trong n?????c' isHorizal showSearch>
              {OpitionPartServicesDOMESTIC?.map((v: OpitionType) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          <Form.Item name='manufactureDomestic'>
            <VInput label='Nh?? cung c???p trong n?????c' isHorizal />
          </Form.Item>

          <Form.Item name='partnerBillCode'>
            <VInput label='M?? b??u ?????i t??c' isHorizal />
          </Form.Item>
          <Form.Item name='partnerService'>
            <VSelect label='D???ch v??? ?????i t??c' isHorizal showSearch>
              {OpitionPartServices?.map((v: OpitionType) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          <Form.Item name='manufacture'>
            <VInput label='Nh?? cung c??p t??? VN ra n?????c ngo??i ' isHorizal />
          </Form.Item>

          <Form.Item name='partnerBillCodeForeign'>
            <VInput label='M?? b??u ?????i t??c k???t n???i ??? N?????c ngo??i' isHorizal />
          </Form.Item>
          <Form.Item name='partnerServiceForeign'>
            <VSelect label='D???ch v??? ?????i t??c ??? n?????c ngo??i' isHorizal showSearch>
              {OpitionPartServicesFOREIGN?.map((v: OpitionType) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          <Form.Item name='manufactureForeign'>
            <VInput label='Nh??  cung c???p n?????c ngo??i ' isHorizal />
          </Form.Item>
        </div>
        <p className='text-xl font-bold'>D???ch v??? gi?? tr??? gia t??ng</p>
        <p className='m-0 p-0 font-bold'>D???ch v??? chuy??n tuy???n/ D???ch v??? kh??c</p>
        <div className='grid gap-x-4'>
          <Form.Item name='valueAddedService1'>
            <VInput label='D???ch v??? 1' />
          </Form.Item>
          <Form.Item name='valueAddedService2'>
            <VInput label='D???ch v??? 2' />
          </Form.Item>
          <Form.Item name='valueAddedService3'>
            <VInput label='D???ch v??? 3' />
          </Form.Item>
        </div>

        <div>
          <p className='m-0 p-0 font-bold'>D???ch v??? DHL</p>
          <Form.Item name='dhl'>
            <Checkbox.Group options={dataDHL} />
          </Form.Item>
        </div>

        <div className='flex flex-col'>
          <p className='m-0 p-0 font-bold'>D???ch v??? Fedex</p>
          <Form.Item name='fedex'>
            <Checkbox.Group options={dataFedex} />
          </Form.Item>
        </div>
        <div className='flex flex-col'>
          <p className='m-0 p-0 font-bold'>D???ch v??? UPS</p>
          <Form.Item name='ups'>
            <Checkbox.Group options={dataUPS} />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default ProcessingInfomation;
