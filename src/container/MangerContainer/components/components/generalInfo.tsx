/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  FormInstance,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Table,
} from 'antd';
import moment from 'moment';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import VDatePicker from '@/components/common/VDatePicker';
import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VTimePicker from '@/components/common/VTimePicker';

import { renderBookingDetails } from '@/contants/columns/my-booking.columns';
import { FORMAT_DATE_DD_MM_YYYY } from '@/contants/common.constants';
import { BookingType, DetailsBookingPost } from '@/contants/types';
import {
  fetchCommoditiesTypeId,
  fetchDeliveryCondition,
  fetchServicesBooking,
  fetchShippingType,
  fetchTypeOfPayment,
} from '@/services/booking.services';

import ModalBookingDetails from './ModalBookingDeatails';
import ModalUpdateBookingDetails from './ModalUpdateBookingDetails';
const { Option } = Select;
interface GeneralInfomationProps {
  form: FormInstance;
  dataDetails: Array<DetailsBookingPost>;
  handleAddBookingDetails: (form: any) => void;
  handleDeleteRow: (id: any) => void;
  handleUpdateBookingDetails: (form: any) => void;
  serivcesSelected: string;
  handleServicesSelected: (e: any) => void;
  value: any;
  handleSetvalue: (e: any) => void;
  handleSetBillPartner: (e: any) => void;
}

const GeneralInfomation = ({
  form,
  dataDetails,
  handleAddBookingDetails,
  handleDeleteRow,
  handleUpdateBookingDetails,
  handleServicesSelected,
  serivcesSelected,
  value,
  handleSetvalue,
}: GeneralInfomationProps) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [detailsBooking, setDetailsBooking] = useState();

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

  const { data: dataDelivery } = useQuery(['fetchDeliveryCondition', {}], () =>
    fetchDeliveryCondition()
  );

  const OpitionDeliveryConditions = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataDelivery?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataDelivery?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataDelivery]);

  const OpitionType = Object.entries(BookingType).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const { data: fetchTypeOfPaymentId } = useQuery(
    ['fetchTypeOfPaymentId', {}],
    () => fetchTypeOfPayment()
  );

  const OpitionTypePayment = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (fetchTypeOfPaymentId?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return fetchTypeOfPaymentId?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [fetchTypeOfPaymentId]);

  const { data: DataCommoditiesTypeId } = useQuery(
    ['DataCommoditiesTypeId', {}],
    () => fetchCommoditiesTypeId()
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

  const { data: DataShippingType } = useQuery(['DataShippingType', {}], () =>
    fetchShippingType()
  );

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
  }, [DataShippingType]);

  const handleAddBooking = (form: any) => {
    handleAddBookingDetails(form);
    setIsCreate(false);
  };
  const onChange = (e: RadioChangeEvent) => {
    handleSetvalue(e.target.value);
  };

  const handleUpdateBooking = (record: any) => {
    setDetailsBooking(record);
    setIsEdit(true);
  };

  return (
    <div className='h-full'>
      <Form form={form} className='gap-4'>
        <div className='m-auto mb-[18px] w-[1200px]  rounded-md bg-pussy-color  p-4 sm:w-full'>
          <p className='m-0 mb-[20px] p-0 font-bold'>Th??ng tin chung</p>
          <div className='grid grid-cols-2 gap-x-6 px-[86px]  sm:grid-cols-1 sm:px-2'>
            <Form.Item
              name='serviceBookingId'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng ch???n lo???i d???ch v???',
                },
              ]}
            >
              <VSelect
                label='D???ch v???'
                required
                onChange={handleServicesSelected}
              >
                {OpitionServiceBooking?.map((v: any) => (
                  <Option key={v.value}>{v.label}</Option>
                ))}
              </VSelect>
            </Form.Item>

            <Form.Item
              name='deliveryConditionId'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng ch???n ??i???u ki???n giao h??ng',
                },
              ]}
            >
              <VSelect label='??i???u ki???n giao h??ng' required>
                {OpitionDeliveryConditions?.map((v: any) => (
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
                  message: 'Vui l??ng ch???n lo???i booking (Ch???ng t???, h??ng h??a)',
                },
              ]}
            >
              <VSelect label='Lo???i booking (Ch???ng t???, h??ng h??a)' required>
                {OpitionType.map((v) => (
                  <Option key={v.value}>{v.label}</Option>
                ))}
              </VSelect>
            </Form.Item>

            <Form.Item
              name='estimatedDate'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng ch???n th???i gian d??? ki???n l???y h??ng',
                },
              ]}
            >
              <VDatePicker
                label='Ng??y d??? ki???n l???y h??ng'
                format={FORMAT_DATE_DD_MM_YYYY}
                required
                disabledDate={(current) => {
                  // Can not select days before today and today
                  return current && current < moment().startOf('day');
                }}
              />
              {/* <TimePicker format={HH_MM} /> */}
            </Form.Item>

            <Form.Item
              name='estimateHour'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng ch???n th???i gian d??? ki???n l???y h??ng',
                },
              ]}
            >
              <VTimePicker
                format='HH:mm'
                label='Gi??? d??? ki???n l???y h??ng'
                required
              />
            </Form.Item>
            <Form.Item name='note'>
              <VInput label='Ghi ch??' />
            </Form.Item>
          </div>
        </div>

        <div className='m-auto mb-[18px] w-[1200px] rounded-md bg-pussy-color p-4 sm:w-full'>
          <p className='m-0 p-0 font-bold'>H??nh th???c thanh to??n </p>

          <div className='grid gap-x-6 px-[86px] sm:grid-cols-1 sm:px-2 '>
            <Form.Item
              name='typeOfPaymentId'
              className='py-4'
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng ch???n lo???i thanh to??n',
                },
              ]}
            >
              <VSelect label='Lo???i h??nh thanh to??n' required>
                {OpitionTypePayment?.map((v: any) => (
                  <Option value={v.value} key={v.value}>
                    {v.label}
                  </Option>
                ))}
              </VSelect>
            </Form.Item>
            {/* Chi Ti???t booking */}
          </div>
        </div>

        <div className='m-auto mb-[18px] w-[1200px] rounded-md bg-pussy-color p-4 sm:w-full'>
          <p className='m-0 p-0 font-bold'>T??? khai h???i quan</p>
          <div className='flex flex-col gap-4'>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Kh??ng</Radio>
              <Radio value={2}>C??</Radio>
            </Radio.Group>
            {value === 2 && (
              <div className='grid grid-cols-2 gap-x-6'>
                <Form.Item
                  name='isCustomerCreateDeclaration'
                  rules={[
                    {
                      required: true,
                      message: 'Vui l??ng ch???n lo???i m??? t??? khai',
                    },
                  ]}
                >
                  <VSelect label='Lo???i m??? t??? khai' required>
                    <Option value={false}>ACF m??? t??? khai h???i quan</Option>
                    <Option value={true}>Kh??ch h??ng m??? t??? khai h???i quan</Option>
                  </VSelect>
                </Form.Item>
                <Form.Item
                  name='customsDeclarationNumber'
                  rules={[
                    {
                      required: true,
                      message: 'Vui l??ng nh???p s??? t??? khai h???i quan',
                    },
                  ]}
                >
                  <VInput label='S??? t??? khai h???i quan' required />
                </Form.Item>
              </div>
            )}
          </div>
        </div>

        <div className='m-auto mb-[18px] w-[1200px] rounded-md bg-pussy-color p-4 sm:w-full'>
          <p className='m-0 mb-[20px] p-0 font-bold'>Chi ti???t booking </p>

          <div className='p-4'>
            <div className='flex flex-row pb-6'>
              <Input
                placeholder='T??m ki???m ????n h??ng...'
                prefix={<SearchOutlined />}
                className='mb-4 mr-4 w-[350px]'
              />
              <Button
                onClick={() => setIsCreate(true)}
                disabled={!serivcesSelected}
                className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
              >
                Th??m h??ng h??a
              </Button>
            </div>

            <Table
              columns={renderBookingDetails(
                OpitionCommoditiesTypeId,
                OpitionShippingType,
                handleDeleteRow,
                handleUpdateBooking
              )}
              rowKey='key'
              scroll={{ y: 450, x: 500 }}
              className='cursor-pointer'
              dataSource={dataDetails}
              pagination={{
                showSizeChanger: false,
              }}
              bordered
            />

            {isCreate && (
              <ModalBookingDetails
                isOpen={isCreate}
                services={serivcesSelected}
                listServices={OpitionServiceBooking}
                onClose={() => setIsCreate(false)}
                handleAddBookingDetails={handleAddBooking}
              />
            )}
            {isEdit && (
              <ModalUpdateBookingDetails
                isOpen={isEdit}
                services={serivcesSelected}
                listServices={OpitionServiceBooking}
                onClose={() => setIsEdit(false)}
                handleUpdateBookingDetails={(e) => {
                  handleUpdateBookingDetails(e);
                  setIsEdit(false);
                }}
                value={detailsBooking}
              />
            )}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default GeneralInfomation;
