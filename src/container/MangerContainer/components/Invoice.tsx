/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, FormInstance, Input, Select, Table } from 'antd';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';
import VTextArea from '@/components/common/VTextarea';

import { renderInvoiceDetails } from '@/contants/columns/my-booking.columns';
import {
  AddressCustomer,
  IInvoiceDetails,
  InvoiceItemType,
  InvoiceType,
  IUser,
  ReceiverCustome,
} from '@/contants/types';
import {
  fetchCurrentUnit,
  fetchServicesBooking,
} from '@/services/booking.services';

import ModalInvoiceDetails from './components/ModalInvoiceDetails';
import ModalUpdateInvoiceDetails from './components/ModalUpdateInvoiceDetails';

const { Option } = Select;

type InvoiceProps = {
  sendAddress?: Partial<AddressCustomer>;
  receiverCustome?: Partial<ReceiverCustome>;
  form: FormInstance;
  dataUser: IUser | undefined;
  detailsInvoice?: Array<IInvoiceDetails>;
  handleAddInvoiceDetails: (form: IInvoiceDetails) => void;
  handleUpdateBookingInvoice: (form: IInvoiceDetails) => void;
  handleDeleteInvoice: (id: any) => void;
  serivcesSelected: any;
  isInvoice: boolean;
};

const InVoice = ({
  form,
  dataUser,
  detailsInvoice,
  handleAddInvoiceDetails,
  handleDeleteInvoice,
  handleUpdateBookingInvoice,
  sendAddress,
  serivcesSelected,
  receiverCustome,
  isInvoice,
}: InvoiceProps) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [detailsInvoices, setDetailsInvoices] = useState();

  const { data: dataCurrenUnit } = useQuery(['fetchCurrentUnit', {}], () =>
    fetchCurrentUnit()
  );
  const OpitionCurrencyUnit = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataCurrenUnit?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataCurrenUnit?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataCurrenUnit]);

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

  const OpitionInvoiceItemType = Object.entries(InvoiceItemType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const OpitionInvoiceType = Object.entries(InvoiceType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );
  const handleSetField = useCallback(async () => {
    form.setFieldsValue({
      senderInformation: `${sendAddress?.senderNameVi || dataUser?.fullName}\n${
        sendAddress?.senderAddressVi || dataUser?.detailAddress
      }\n${sendAddress?.senderProvince || dataUser?.province}\n${
        sendAddress?.senderCountry || dataUser?.country
      }\n${sendAddress?.senderPhoneNumber || dataUser?.phoneNumber}\n${
        sendAddress?.senderPostalCode
      }`,
      receiverInformation: `${receiverCustome?.receiverName || ''}\n${
        receiverCustome?.receiverAddress || ''
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-ignore
      }\n${receiverCustome?.receiverProvince || ''}\n${
        receiverCustome?.receiverCountry || ''
      }\n${receiverCustome?.receiverPhoneNumber || ''}\n${
        receiverCustome?.receiverPostalCode || ''
      }`,
      serviceId:
        OpitionServiceBooking.filter(
          (x: any) => x.value === serivcesSelected
        )[0]?.label || undefined,
    });
  }, [
    form,
    sendAddress?.senderNameVi,
    sendAddress?.senderAddressVi,
    sendAddress?.senderProvince,
    sendAddress?.senderCountry,
    sendAddress?.senderPhoneNumber,
    sendAddress?.senderPostalCode,
    dataUser?.fullName,
    dataUser?.detailAddress,
    dataUser?.province,
    dataUser?.country,
    dataUser?.phoneNumber,
    receiverCustome?.receiverName,
    receiverCustome?.receiverAddress,
    receiverCustome?.province,
    receiverCustome?.receiverCountry,
    receiverCustome?.receiverPhoneNumber,
    receiverCustome?.receiverPostalCode,
    OpitionServiceBooking,
    serivcesSelected,
  ]);

  useEffect(() => {
    handleSetField();
  }, [form, dataUser, handleSetField]);

  const handleUpdateInVoice = (record: any) => {
    setDetailsInvoices(record);
    setIsEdit(true);
  };
  return (
    <div className='m-auto h-full'>
      <Form form={form} className=''>
        <div className='m-auto mb-[18px] w-[1200px] rounded-md bg-pussy-color p-4 sm:w-full'>
          <p className='m-0 mb-[20px] p-0 text-xl font-bold'>Th??ng tin chung</p>

          <div className='grid grid-cols-2 gap-x-6 px-[86px] sm:grid-cols-1 sm:p-2'>
            <Form.Item
              name='typeItemInvoice'
              rules={[
                {
                  required: isInvoice,
                  message: 'Vui l??ng ch???n lo???i d???ch v???',
                },
              ]}
            >
              <VSelect label='Lo???i h??ng h??a' required>
                {OpitionInvoiceItemType.map((v) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>
            <Form.Item
              name='invoiceType'
              rules={[
                {
                  required: isInvoice,
                  message: 'Vui l??ng ch???n lo???i h??a ????n',
                },
              ]}
            >
              <VSelect label='Lo???i h??a ????n' required>
                {OpitionInvoiceType.map((v) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>
            <Form.Item name='senderInformation'>
              <VTextArea
                label='Th??ng tin ng?????i g???i'
                disabled
                className='h-[130px]'
              />
            </Form.Item>
            <Form.Item name='receiverInformation'>
              <VTextArea
                label='Th??ng tin ng?????i nh???n '
                disabled
                className='h-[130px]'
              />
            </Form.Item>
            <Form.Item
              name='invoiceDate'
              rules={[
                {
                  required: isInvoice,
                  message: 'Vui l??ng nh???p ng??y invoice',
                },
              ]}
            >
              <VDatePicker
                format='DD/MM/YYYY'
                label='Ng??y invoice'
                placeholder='Nh???p ng??y invoice'
                required
              />
            </Form.Item>
            <Form.Item name='serviceId'>
              <VInput label='D???ch v??? s??? d???ng' disabled />
            </Form.Item>
          </div>

          <div className='px-[86px] sm:p-2'>
            <Form.Item name='importProceduresPerson'>
              <VTextArea label='Th??ng tin ng?????i l??m th??? t???c nh???p kh???u' />
            </Form.Item>
          </div>

          <div className='grid grid-cols-5 gap-4 px-[86px] sm:grid-cols-2 sm:p-2'>
            <Form.Item name='invoiceNumber'>
              <VInput label='S??? invoice' isHorizal />
            </Form.Item>

            <Form.Item name='totalNetWeight'>
              <VInputNumber
                label='T???ng tr???ng l?????ng th???c (Kg)'
                disabled
                isHorizal
              />
            </Form.Item>
            <Form.Item name='totalBulkyWeight'>
              <VInputNumber
                label='T???ng tr???ng l?????ng c???ng k???nh'
                disabled
                isHorizal
              />
            </Form.Item>
            <Form.Item name='goodsSize'>
              <VInput label='K??ch th?????c h??ng h??a (cm)' disabled isHorizal />
            </Form.Item>
            <Form.Item name='totalBaleNumber'>
              <VInputNumber label='T???ng s??? ki???n' disabled isHorizal />
            </Form.Item>
          </div>

          <div className=' grid grid-cols-2 gap-4 px-[86px] sm:p-2'>
            <Form.Item
              name='currencyId'
              rules={[
                {
                  required: isInvoice,
                  message: 'Vui l??ng ch???n lo???i ti???n t???',
                },
              ]}
            >
              <VSelect label='Lo???i ti???n t???' showSearch required isHorizal>
                {OpitionCurrencyUnit?.map((v: any) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>
            <Form.Item
              name='reasonExport'
              rules={[
                {
                  required: isInvoice,
                  message: 'Vui l??ng nh???p l?? do xu???t kh???u',
                },
              ]}
            >
              <VInput label='L?? do xu???t kh???u' required isHorizal />
            </Form.Item>
          </div>
        </div>

        <div className='m-auto mb-[18px] w-[1200px] rounded-md bg-pussy-color p-4 sm:w-full'>
          <p className='m-0 mb-[20px] p-0 text-xl font-bold'>
            Chi ti???t Invoice
          </p>

          <div className='p-4'>
            <div className='flex flex-row  pb-6'>
              <Input
                placeholder='T??m ki???m ....'
                prefix={<SearchOutlined />}
                className='mb-4 mr-4 w-[350px]'
              />
              <Button
                onClick={() => setIsCreate(true)}
                className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
              >
                Th??m Invoice
              </Button>
            </div>

            <Table
              columns={renderInvoiceDetails(
                handleDeleteInvoice,
                handleUpdateInVoice
              )}
              rowKey='key-HSCode'
              className='cursor-pointer'
              dataSource={detailsInvoice}
              pagination={{
                showSizeChanger: false,
              }}
              bordered
            />
            {isCreate && (
              <ModalInvoiceDetails
                isOpen={isCreate}
                handleAddInvoiceDetails={handleAddInvoiceDetails}
                onClose={() => setIsCreate(false)}
              />
            )}

            {isEdit && (
              <ModalUpdateInvoiceDetails
                isOpen={isEdit}
                value={detailsInvoices}
                isInvoice={isInvoice}
                onClose={() => setIsEdit(false)}
                handleEdiInvoiceDetails={(e) => {
                  handleUpdateBookingInvoice(e);
                  setIsEdit(false);
                }}
              />
            )}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default InVoice;
