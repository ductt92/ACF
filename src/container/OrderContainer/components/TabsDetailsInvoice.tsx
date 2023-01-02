/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, Form, FormInstance, Select, Table } from 'antd';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VInputNumber from '@/components/common/VInputNumber';
import VSelect from '@/components/common/VSelect';
import VTextArea from '@/components/common/VTextarea';

import { INVOICE_DETAILS } from '@/contants/columns/my-booking.columns';
import {
  IInvoiceDetails,
  InvoiceItemType,
  InvoiceType,
} from '@/contants/types';
import { fetchCurrentUnit } from '@/services/booking.services';

const { Option } = Select;

const TabsDetailsInvoice = ({
  form,
  detailInVoice,
}: {
  form: FormInstance;
  detailInVoice: Array<IInvoiceDetails>;
}) => {
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

  return (
    <>
      <div className='mb-20 h-full'>
        <Form form={form}>
          <div className='grid grid-cols-2 gap-x-6'>
            <p className='m-0 p-0 font-bold'>1.Thông tin chung </p>
            <Divider className='bg-yellow' />

            <Form.Item name='typeItemInvoice'>
              <VSelect label='Loại hàng hóa' required disabled isHorizal>
                {OpitionInvoiceItemType.map((v) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>

            <Form.Item name='invoiceType'>
              <VSelect label='Loại hóa đơn' required disabled isHorizal>
                {OpitionInvoiceType.map((v) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>

            <Form.Item name='senderInformation'>
              <VTextArea
                label='Thông tin người gửi'
                disabled
                className='h-[130px]'
                isHorizal
              />
            </Form.Item>

            <Form.Item name='receiverInformation'>
              <VTextArea
                label='Thông tin người nhận '
                disabled
                className='h-[130px]'
                isHorizal
              />
            </Form.Item>

            <Form.Item name='invoiceDate'>
              <VDatePicker
                format='DD/MM/YYYY'
                label='Ngày invoice'
                placeholder='Nhập ngày invoice'
                required
                isHorizal
                disabled
              />
            </Form.Item>

            <Form.Item name='invoiceNumber'>
              <VInput label='Số invoice' disabled isHorizal />
            </Form.Item>
            <Form.Item name='importProceduresPerson'>
              <VTextArea
                label='Thông tin người làm thủ tục nhập khẩu'
                disabled
                isHorizal
              />
            </Form.Item>

            <Form.Item name='serviceId'>
              <VInput label='Dịch vụ sử dụng' disabled isHorizal />
            </Form.Item>

            <Form.Item name='totalNetWeight'>
              <VInputNumber
                label='Tổng trọng lượng thực (Kg)'
                disabled
                isHorizal
              />
            </Form.Item>
            <Form.Item name='totalBulkyWeight'>
              <VInputNumber
                label='Tổng trọng lượng cồng kềnh (kg)'
                disabled
                isHorizal
              />
            </Form.Item>

            <Form.Item name='goodsSize'>
              <VInput label='Kích thước hàng hóa (cm)' disabled isHorizal />
            </Form.Item>

            <Form.Item name='totalBaleNumber'>
              <VInputNumber label='Tổng số kiện' disabled isHorizal />
            </Form.Item>
            <Form.Item name='currencyId'>
              <VSelect
                label='Loại tiền tệ'
                showSearch
                required
                disabled
                isHorizal
              >
                {OpitionCurrencyUnit?.map((v: any) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>

            <Form.Item name='reasonExport'>
              <VInput label='Lý do xuất khẩu' required disabled isHorizal />
            </Form.Item>
          </div>

          <p className='m-0 p-0 font-bold'>
            2.Chi tiết Booking Express Invoice{' '}
          </p>
          <Divider className='bg-yellow' />

          <div>
            <Table
              columns={INVOICE_DETAILS}
              rowKey='key-HSCode'
              className='cursor-pointer'
              dataSource={detailInVoice}
              pagination={{
                showSizeChanger: false,
              }}
              bordered
            />
          </div>
        </Form>
      </div>
    </>
  );
};
export default TabsDetailsInvoice;
