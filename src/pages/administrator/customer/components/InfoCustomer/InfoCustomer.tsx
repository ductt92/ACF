/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormInstance, Select } from 'antd';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import {
  CustomerType,
  ECustomerGroup,
  EIdentifierType,
  NetWorkCustomerType,
  OpitionType,
} from '@/contants/types';
import {
  getCompanies,
  getServices,
  getUnit,
} from '@/services/customer.services';

const { Option } = Select;
const InfoCustomer = ({ form }: { form: FormInstance }) => {
  const { data: dataCompanies } = useQuery(['getCompanies', {}], () =>
    getCompanies()
  );
  const { data: dataGetServices } = useQuery(['getServices', {}], () =>
    getServices()
  );
  const { data: dataUnits } = useQuery(['getUnit', {}], () => getUnit());

  const OpitionCompanies = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataCompanies?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataCompanies?.map((v) => ({
        value: v.id,
        label: `${v.name}`,
      }));
    }
  }, [dataCompanies]);

  const OpitionServices = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataGetServices?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataGetServices?.map((v) => ({
        value: v.id,
        label: `${v.name}`,
      }));
    }
  }, [dataGetServices]);

  const OpitionUnits = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataUnits?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataUnits?.map((v) => ({
        value: v.id,
        label: `${v.name}`,
      }));
    }
  }, [dataUnits]);

  const OpitionCustomerType = Object.entries(CustomerType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const OpitionNetWorkCustomerType = Object.entries(NetWorkCustomerType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const IdentifierOpition = Object.entries(EIdentifierType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const ECustomerGroupOpition = Object.entries(ECustomerGroup).map(
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
            name='fullName'
            rules={[{ required: true, message: 'Vui l??ng nh???p h??ng' }]}
          >
            <VInput
              label='T??n kh??ch h??ng'
              required
              placeholder='Nh???p t??n kh??ch h??ng'
              isHorizal
            />
          </Form.Item>

          <Form.Item name='fullNameEn'>
            <VInput
              label='T??n kh??ch h??ng(Ti???ng Anh)'
              placeholder='Nh???p t??n kh??ch h??ng (Ti???ng Anh)'
              isHorizal
            />
          </Form.Item>

          <Form.Item
            name='companyId'
            rules={[
              {
                required: true,
                message: 'Vui l??ng ch???n C??ng ty qu???n l?? kh??ch h??ng',
              },
            ]}
          >
            <VSelect label='C??ng ty qu???n l?? kh??ch h??ng' required isHorizal>
              {OpitionCompanies?.map((v: any) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='unitId'
            rules={[
              { required: true, message: 'Vui l??ng ch???n th??ng tin ????n v???' },
            ]}
          >
            <VSelect label='Th??ng tin ????n v???' required showSearch isHorizal>
              {OpitionUnits?.map((v: any) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item name='customerGroup'>
            <VSelect label='Nh??m kh??ch h??ng' required isHorizal>
              {ECustomerGroupOpition.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='detailAddress'
            rules={[{ required: true, message: 'Vui l??ng ?????a ch??? chi ti???t' }]}
          >
            <VInput
              label='?????a ch??? chi ti???t'
              required
              placeholder='Nh???p ?????a ch??? chi ti???t'
              isHorizal
            />
          </Form.Item>

          <Form.Item
            name='commune'
            rules={[{ required: true, message: 'Vui l??ng x??/ph?????ng' }]}
          >
            <VInput
              label='X??/Ph?????ng'
              required
              placeholder='Nh???p x??/ph?????ng'
              isHorizal
            />
          </Form.Item>

          <Form.Item
            name='district'
            rules={[{ required: true, message: 'Vui l??ng qu???n/huy???n ' }]}
          >
            <VInput
              label='Qu???n/Huy???n '
              isHorizal
              required
              placeholder='Nh???p qu???n/huy???n '
            />
          </Form.Item>
          <Form.Item
            name='province'
            rules={[{ required: true, message: 'Vui l??ng T???nh/Th??nh ph??? ' }]}
          >
            <VInput
              label='T???nh/Th??nh ph???'
              required
              isHorizal
              placeholder='Nh???p T???nh/Th??nh ph??? '
            />
          </Form.Item>
          <Form.Item
            name='country'
            rules={[{ required: true, message: 'Vui l??ng Qu???c gia ' }]}
          >
            <VInput
              label='Qu???c gia'
              required
              placeholder='Nh???p Qu???c gia '
              isHorizal
            />
          </Form.Item>
          <Form.Item
            name='identifierType'
            rules={[
              {
                required: true,
                message: 'Vui l??ng nh???p lo???i m?? ?????nh danh',
              },
            ]}
          >
            <VSelect label='Lo???i m?? ?????nh danh' required isHorizal>
              {IdentifierOpition.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='identifier'
            rules={[
              {
                required: true,
                message: 'Vui l??ng nh???p m?? ?????nh danh',
              },
            ]}
          >
            <VInput label='M?? ?????nh danh' required isHorizal />
          </Form.Item>

          <Form.Item
            name='contactPerson'
            rules={[
              {
                required: true,
                message: 'Vui l??ng Ng?????i li??n h??? c???a c??ng ty ',
              },
            ]}
          >
            <VInput
              label='Ng?????i li??n h??? c???a c??ng ty'
              required
              placeholder='Nh???p Ng?????i li??n h??? c???a c??ng ty'
              isHorizal
            />
          </Form.Item>
          <Form.Item
            name='phoneNumber'
            rules={[
              {
                required: true,
                message: 'Vui l??ng nh???p s??t c??ng ty',
              },
            ]}
          >
            <VInput
              label='S??T c??? ?????nh'
              required
              placeholder='Nh???p S??T c??? ?????nh'
              isHorizal
            />
          </Form.Item>

          <Form.Item
            name='mobile'
            rules={[
              {
                required: true,
                message: 'Vui l??ng nh???p s??? di ????ng',
              },
            ]}
          >
            <VInput
              label='S??? di d???ng'
              required
              placeholder='Nh???p s??? di ?????ng '
              isHorizal
            />
          </Form.Item>

          <Form.Item name='fax'>
            <VInput label='S??? Fax' placeholder='Nh???p s??? fax ' isHorizal />
          </Form.Item>

          <Form.Item name='website'>
            <VInput
              label='Website'
              placeholder='Nh???p ?????a ch??? website '
              isHorizal
            />
          </Form.Item>

          <Form.Item
            name='phoneCode'
            rules={[
              {
                required: true,
                message: 'Vui l??ng nh???p m?? v??ng',
              },
            ]}
          >
            <VInput
              label='M?? v??ng'
              required
              placeholder='Nh???p m?? v??ng'
              isHorizal
            />
          </Form.Item>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: 'Vui l??ng nh???p email',
              },
            ]}
          >
            <VInput
              label='Email'
              required
              placeholder='Nh???p m?? email'
              isHorizal
            />
          </Form.Item>
          <Form.Item
            name='typeCustomer'
            rules={[
              {
                required: true,
                message: 'Vui l??ng nh???p Lo???i kh??ch h??ng',
              },
            ]}
          >
            <VSelect
              label='Lo???i kh??ch h??ng'
              required
              placeholder='Nh???p  Lo???i kh??ch h??ng'
              isHorizal
            >
              {OpitionCustomerType.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='service'
            rules={[
              {
                required: true,
                message: 'Vui l??ng nh???p D???ch v??? s??? d???ng',
              },
            ]}
          >
            <VSelect
              label='D???ch v??? s??? d???ng'
              required
              mode='multiple'
              placeholder='Nh???p lo???i D???ch v??? s??? d???ng'
              isHorizal
            >
              {OpitionServices?.map((v: OpitionType) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>

          <Form.Item
            name='type'
            rules={[
              {
                required: true,
                message: 'Vui l??ng nh???p Lo???i kh??ch h??ng v??o m???ng',
              },
            ]}
          >
            <VSelect
              label='Lo???i kh??ch h??ng v??o m???ng'
              required
              placeholder='Nh???p Lo???i kh??ch h??ng v??o m???ng'
              isHorizal
            >
              {OpitionNetWorkCustomerType.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
          <Form.Item name='postCode'>
            <VInput
              label='M?? b??u ch??nh'
              placeholder='Nh???p M?? b??u ch??nh'
              isHorizal
            />
          </Form.Item>
          <Form.Item name='state'>
            <VInput label='Ti???u bang' placeholder='Nh???p Ti???u bang' isHorizal />
          </Form.Item>
          <Form.Item name='note'>
            <VInput label='Ghi ch??' placeholder='Nh???p ghi ch??' isHorizal />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default InfoCustomer;
