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
          <p className='m-0 mb-[32px] p-0 font-bold'>Địa chỉ người gửi</p>
          <div>
            <Form.Item
              name='senderNameVi'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập Tên công ty gửi (Tiếng Việt)',
                },
              ]}
            >
              <VInput
                isHorizal
                label='Tên công ty gửi (Tiếng Việt)'
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
                  message: 'Vui lòng nhập Tên công ty gửi (Tiếng Anh)',
                },
              ]}
            >
              <VInput isHorizal label='Tên công ty gửi (Tiếng Anh)' required />
            </Form.Item>

            <Form.Item
              name='senderAddressVi'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập Địa chỉ chi tiết (Tiếng Việt)',
                },
              ]}
            >
              <VInput
                isHorizal
                label='Địa chỉ chi tiết (Tiếng Việt)'
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
                  message: 'Vui lòng nhập Địa chỉ chi tiết (Tiếng Anh)',
                },
              ]}
            >
              <VInput isHorizal label='Địa chỉ chi tiết (Tiếng Anh)' required />
            </Form.Item>

            <Form.Item
              name='senderContactPerson'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập Tên người gửi hàng',
                },
              ]}
            >
              <VInput isHorizal label='Tên người gửi hàng' required />
            </Form.Item>

            <div className='grid grid-cols-2 gap-4'>
              <Form.Item name='senderDepartment'>
                <VInput isHorizal label='Phòng ban gửi' />
              </Form.Item>

              <Form.Item name='senderPostalCode'>
                <VInput
                  isHorizal
                  label='Mã bưu chính (postcode)'
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
                    message: 'Số điện thoại gửi',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  label='Số điện thoại gửi'
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
                    message: 'Vui lòng nhập tỉnh/thành phố',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  required
                  label='Tỉnh/Thành phố'
                  onChange={(e) =>
                    handleChangeInfoSender('senderProvince', e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item name='senderCountry'>
                <VSelect
                  label='Quốc gia'
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
              <VInput isHorizal label='Ghi chú' />
            </Form.Item>
          </div>
        </div>

        <div className='mx-auto w-[605px] rounded-[16px] bg-pussy-color p-[32px] sm:w-full sm:rounded-none'>
          <p className='m-0 mb-[32px] p-0 font-bold'>Địa chỉ người nhận</p>

          <div>
            <Form.Item
              name='receiverName'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập Tên công ty nhận',
                },
              ]}
            >
              <VInput
                label='Tên công ty nhận'
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
                  message: 'Vui lòng nhập Địa chỉ nhận hàng chi tiết',
                },
              ]}
            >
              <VInput
                isHorizal
                label='Địa chỉ nhận hàng chi tiết'
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
                  message: 'Vui lòng nhập Người nhận hàng',
                },
              ]}
            >
              <VInput isHorizal label='Người nhận hàng' required />
            </Form.Item>

            <div className='grid grid-cols-2 gap-4'>
              <Form.Item name='receiverDepartment'>
                <VInput isHorizal label='Phòng ban nhận hàng' />
              </Form.Item>

              <Form.Item
                name='receiverPostalCode'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Mã bưu chính (postcode)',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  label='Mã bưu chính (postcode)'
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
                    message: 'Vui lòng nhập Số điện thoại người nhận',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  label='Số điện thoại người nhận'
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
                    message: 'Vui lòng nhập thành phố',
                  },
                ]}
              >
                <VInput
                  isHorizal
                  required
                  label='Thành phố'
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
                    message: 'Vui lòng nhập quốc gia',
                  },
                ]}
              >
                <VSelect
                  label='Quốc gia'
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
              <VInput isHorizal label='Ghi chú' />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Address;
