/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormInstance, Select } from 'antd';
import React, { useEffect } from 'react';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { AddressCustomer, IUser } from '@/contants/types';
import { countries } from '@/contants/types/Country';

interface AddressProps {
  form: FormInstance;
  dataUser: IUser | undefined;
  addressCustome: Partial<AddressCustomer> | undefined;
  handleChangeInfoSender: (name: string, value: any) => void;
  handleChangeInfoRecei: (name: string, value: any) => void;
}

const { Option } = Select;

const Address = ({
  form,
  dataUser,
  addressCustome,
  handleChangeInfoSender,
  handleChangeInfoRecei,
}: AddressProps) => {
  useEffect(() => {
    form.setFieldsValue({
      senderNameVi: addressCustome?.senderNameVi || dataUser?.fullName,
      senderPhoneNumber:
        addressCustome?.senderPhoneNumber || dataUser?.phoneNumber,
      senderContactPerson:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-ignore
        addressCustome?.senderContactPerson || dataUser?.contactPerson,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      senderMobile: addressCustome?.senderMobile || dataUser?.phoneNumber,
      senderCountry: addressCustome?.senderCountry || dataUser?.country,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      senderCommune: addressCustome?.addressCustome || dataUser?.commune,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      senderDistrict: addressCustome?.senderDistrict || dataUser?.district,
      senderProvince: addressCustome?.senderProvince || dataUser?.province,
      senderPostalCode:
        addressCustome?.senderPostalCode || dataUser?.postalCode,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      senderState: addressCustome?.senderState || dataUser?.state,
      senderAddressVi:
        addressCustome?.senderAddressVi || dataUser?.detailAddress,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      senderNote: addressCustome?.senderNote || dataUser?.note,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      senderNameEn: addressCustome?.senderNameEn || dataUser?.fullNameEn,
    });
  }, []);

  return (
    <div className='mb-24'>
      <Form
        form={form}
        className=' mx-auto flex w-[1240px] flex-row items-stretch justify-center sm:w-full sm:flex-col'
      >
        <div className='mx-auto w-[605px] rounded-[16px] bg-pussy-color p-[32px] sm:w-full sm:rounded-none'>
          <p className='m-0 mb-[32px] p-0 font-bold'>?????a ch??? ng?????i g???i</p>
          <div>
            <Form.Item
              name='senderNameVi'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p T??n c??ng ty g???i (Ti???ng Vi???t)',
                },
              ]}
            >
              <VInput
                isHorizal
                label='T??n c??ng ty g???i (Ti???ng Vi???t)'
                required
                onChange={(e) =>
                  handleChangeInfoSender('senderNameVi', e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              name='senderNameEn'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p T??n c??ng ty g???i (Ti???ng Anh)',
                },
              ]}
            >
              <VInput isHorizal label='T??n c??ng ty g???i (Ti???ng Anh)' required />
            </Form.Item>

            <Form.Item
              name='senderAddressVi'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p ?????a ch??? chi ti???t (Ti???ng Vi???t)',
                },
              ]}
            >
              <VInput
                isHorizal
                label='?????a ch??? chi ti???t (Ti???ng Vi???t)'
                required
                onChange={(e) =>
                  handleChangeInfoSender('senderAddressVi', e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              name='senderAddressEn'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p ?????a ch??? chi ti???t (Ti???ng Anh)',
                },
              ]}
            >
              <VInput isHorizal label='?????a ch??? chi ti???t (Ti???ng Anh)' required />
            </Form.Item>

            <Form.Item
              name='senderContactPerson'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p T??n ng?????i g???i h??ng',
                },
              ]}
            >
              <VInput isHorizal label='T??n ng?????i g???i h??ng' required />
            </Form.Item>

            <div className='grid grid-cols-2 gap-4'>
              <Form.Item name='senderDepartment'>
                <VInput isHorizal label='Ph??ng ban g???i' />
              </Form.Item>

              <Form.Item name='senderPostalCode'>
                <VInput
                  isHorizal
                  label='M?? b??u ch??nh (postcode)'
                  onChange={(e) =>
                    handleChangeInfoSender('senderPostalCode', e.target.value)
                  }
                />
              </Form.Item>
            </div>

            <div className='grid grid-cols-3 gap-4'>
              <Form.Item
                name='senderPhoneNumber'
                rules={[
                  {
                    required: true,
                    message: 'S??? ??i???n tho???i g???i',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  label='S??? ??i???n tho???i g???i'
                  required
                  onChange={(e) =>
                    handleChangeInfoSender('senderPhoneNumber', e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item
                name='senderProvince'
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng nh???p t???nh/th??nh ph???',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  required
                  label='T???nh/Th??nh ph???'
                  onChange={(e) =>
                    handleChangeInfoSender('senderProvince', e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item name='senderCountry'>
                <VSelect
                  label='Qu???c gia'
                  required
                  isHorizal
                  showSearch
                  onChange={(e) => handleChangeInfoSender('senderCountry', e)}
                >
                  {countries.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>
            </div>

            <Form.Item name='senderNote'>
              <VInput isHorizal label='Ghi ch??' />
            </Form.Item>
          </div>
        </div>

        <div className='mx-auto w-[605px] rounded-[16px] bg-pussy-color p-[32px] sm:w-full sm:rounded-none'>
          <p className='m-0 mb-[32px] p-0 font-bold'>?????a ch??? ng?????i nh???n</p>

          <div>
            <Form.Item
              name='receiverName'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p T??n c??ng ty nh???n',
                },
              ]}
            >
              <VInput
                label='T??n c??ng ty nh???n'
                required
                isHorizal
                onChange={(e) =>
                  handleChangeInfoRecei('receiverName', e.target.value)
                }
              />
            </Form.Item>
            <Form.Item
              name='receiverAddress'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p ?????a ch??? nh???n h??ng chi ti???t',
                },
              ]}
            >
              <VInput
                isHorizal
                label='?????a ch??? nh???n h??ng chi ti???t'
                required
                onChange={(e) =>
                  handleChangeInfoRecei('receiverAddress', e.target.value)
                }
              />
            </Form.Item>

            <Form.Item
              name='receiverContactPerson'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p Ng?????i nh???n h??ng',
                },
              ]}
            >
              <VInput isHorizal label='Ng?????i nh???n h??ng' required />
            </Form.Item>

            <div className='grid grid-cols-2 gap-4'>
              <Form.Item name='receiverDepartment'>
                <VInput isHorizal label='Ph??ng ban nh???n h??ng' />
              </Form.Item>

              <Form.Item
                name='receiverPostalCode'
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng nh???p M?? b??u ch??nh (postcode)',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  label='M?? b??u ch??nh (postcode)'
                  required
                  onChange={(e) =>
                    handleChangeInfoRecei('receiverPostalCode', e.target.value)
                  }
                />
              </Form.Item>
            </div>

            <div className='grid grid-cols-3 gap-4'>
              <Form.Item
                name='receiverPhoneNumber'
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng nh???p S??? ??i???n tho???i ng?????i nh???n',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  label='S??? ??i???n tho???i ng?????i nh???n'
                  required
                  onChange={(e) =>
                    handleChangeInfoRecei('receiverPhoneNumber', e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item
                name='receiverProvince'
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng nh???p th??nh ph???',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  required
                  label='Th??nh ph???'
                  onChange={(e) =>
                    handleChangeInfoRecei('receiverProvince', e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item
                name='receiverCountry'
                rules={[
                  {
                    required: true,
                    message: 'Vui l??ng nh???p qu???c gia',
                  },
                ]}
              >
                <VSelect
                  label='Qu???c gia'
                  required
                  isHorizal
                  showSearch
                  onChange={(e) => handleChangeInfoRecei('receiverCountry', e)}
                >
                  {countries.map((v) => (
                    <Option value={v.value} key={v.value}>
                      {v.label}
                    </Option>
                  ))}
                </VSelect>
              </Form.Item>
            </div>

            <Form.Item name='receiverNote'>
              <VInput isHorizal label='Ghi ch??' />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Address;
