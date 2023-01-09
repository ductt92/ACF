/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AutoComplete,
  Button,
  Col,
  Form,
  notification,
  Row,
  Select,
  Spin,
  Table,
} from 'antd';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';
import VTextArea from '@/components/common/VTextarea';

import { BookingType, OpitionType } from '@/contants/types';
import {
  fetchServicePartnerService,
  fetchServicesBooking,
} from '@/services/booking.services';
import { renderColumnsOperate } from '@/utils/contants/columns.contants';
import { QUERY_KEY } from '@/utils/contants/query-key';
import {
  getDeliveryConfirm,
  getDeliverySearchPu,
  getPUDelivery,
  getPUIdDelivery,
  QUERY,
} from '@/utils/contants/services';

const QUERY_PARAMS: QUERY = {
  page: 1,
  pageSize: 10,
  search: '',
  orderBy: 'createdAt_DESC',
};

const { Option } = Select;
const OperateContainer = () => {
  const [queries, setQueries] = useState<QUERY>(QUERY_PARAMS);

  const router = useRouter();

  const [form] = Form.useForm();

  const [search, setSearch] = useState<any>();

  const [idRowClick, setIdRowClick] = useState();

  const [invoice, setInvoice] = useState(false);

  const [status, setStatus] = useState();

  const [idBooking, setIdBooking] = useState<any>();

  const queryClient = useQueryClient();

  const {
    data,
    isLoading: loadingSearch,
    isFetching: fetchingSearch,
  } = useQuery([QUERY_KEY.GET_DATA, { search }], () =>
    getDeliverySearchPu(search)
  );
  const {
    data: dataDelivery,
    isLoading,
    isFetching,
  } = useQuery([QUERY_KEY.GET_DELIVERY, queries], () => getPUDelivery(queries));
  const { mutate: confirm } = useMutation(getDeliveryConfirm, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_DELIVERY]);
      notification.success({
        message: 'Cập nhật thành công',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'Cập nhật thất bại',
        placement: 'top',
      });
    },
  });
  const OpitionInvoiceItemType = Object.entries(BookingType).map(
    ([key, value]) => ({
      value: key,
      label: value,
    })
  );

  const options = useMemo(() => {
    if (isLoading || isFetching || !data) {
      return [];
    } else {
      return [
        {
          ...data,
          value: data.booking_code,
        },
      ];
    }
  }, [data, isFetching, isLoading]);

  const handlePagination = (pagination: { current?: number }) => {
    setQueries((prev) => ({
      ...prev,
      page: pagination.current || 0,
    }));
  };
  const { data: PartnerServices } = useQuery(
    ['fetchServicePartnerService'],
    () => fetchServicePartnerService()
  );

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
  const handleSearch = (e: any) => {
    setSearch(e);
  };

  const handleSelect = (e: any) => {
    const value = options.find((f) => f.booking_code === e);
    setIdBooking(value?.id || undefined);
    form.setFieldsValue({
      ...value,
      type: OpitionInvoiceItemType.find((x) => x.value === value?.type),
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    setInvoice(Boolean(value?.booking_is_invoice));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    setStatus(value?.status);
  };

  const handleCallBackGet = (data: any) => {
    form.setFieldsValue({
      ...data,
      type:
        data?.type && OpitionInvoiceItemType.find((x) => x.value === data.type),
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    setInvoice(Boolean(data?.booking_is_invoice));
    setStatus(data?.status);
    setIdBooking(data?.id);
  };
  const { isLoading: loadingPuById, isFetching: fetchingPuById } = useQuery(
    [QUERY_KEY.GET_DATA, idRowClick],
    () => getPUIdDelivery({ id: idRowClick, handleCallBack: handleCallBackGet })
  );

  const handleSubmit = async () => {
    if (idBooking) {
      const res = await form.validateFields();
      const newREs = {
        type: res.type.value,
        serviceBookingId: res.service_booking_id,
        customsDeclarationNumber: res.customs_declaration_number,
        note: res.note,
        bookingPartnerBillCode: res.booking_partner_bill_code,
        bookingPartnerService:
          res.booking_partner_service?.value || res.booking_partner_service,
        contentDetailInvoice: res.content_detail_invoice,
        informationReceiverAddress: res.information_receiver_address,
      };
      confirm({ id: idBooking, data: newREs });
    }
  };
  return (
    <Spin
      spinning={
        isLoading ||
        isFetching ||
        loadingSearch ||
        fetchingSearch ||
        loadingPuById ||
        fetchingPuById
      }
    >
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-end'>
          <Table
            columns={renderColumnsOperate()}
            rowKey='key'
            onChange={handlePagination}
            className='cursor-pointer px-6'
            dataSource={dataDelivery?.data}
            pagination={{
              current: dataDelivery?.pagination?.currentPage,
              total: dataDelivery?.pagination?.totalCount,
              showSizeChanger: false,
              defaultPageSize: QUERY_PARAMS.pageSize,
            }}
            bordered
            onRow={(record) => {
              return {
                onClick: async () => {
                  setIdRowClick(record.id);
                },
              };
            }}
            scroll={{ y: 700, x: 800 }}
          />
        </div>
        <div>
          <Row>
            <Col xs={12}>
              <AutoComplete
                options={options}
                placeholder='Check point mã bưu phẩm, bưu kiện'
                onChange={(e) => handleSearch(e)}
                className='w-[300px]'
                onSelect={(e: any) => handleSelect(e)}
              />
            </Col>
            <Col
              xs={12}
              className='text-right'
              onClick={() => router.push('operate/operate-statistic')}
            >
              <Button className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'>
                Tiếp tục
              </Button>
            </Col>
          </Row>
        </div>
        <div className='w-full'>
          <Form form={form}>
            <Row gutter={[16, 16]}>
              <Col xs={4}>
                <Form.Item name='booking_partner_bill_code'>
                  <VInput label='Mã Bill đối tác' isHorizal />
                </Form.Item>
              </Col>

              <Col xs={4}>
                <Form.Item name='type'>
                  <VSelect label='Loại hàng hóa' isHorizal>
                    {OpitionInvoiceItemType?.map((v) => (
                      <Option value={v.value} key={v.value}>
                        {v.label}
                      </Option>
                    ))}
                  </VSelect>
                </Form.Item>
              </Col>

              <Col xs={4}>
                <Form.Item name='quantity'>
                  <VInput label='Số kiện' isHorizal disabled />
                </Form.Item>
              </Col>

              <Col xs={4}>
                <Form.Item name='weight'>
                  <VInput label='Trọng lượng thực' isHorizal disabled />
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item name='bulky_weight'>
                  <VInput label='Trọng lượng cồng kềnh' isHorizal disabled />
                </Form.Item>
              </Col>

              <Col xs={4}>
                <Form.Item name='weight'>
                  <VInput label='Trọng lượng chốt cước' isHorizal disabled />
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item name='customer_code'>
                  <VInput label='Mã khách hàng' isHorizal disabled />
                </Form.Item>
              </Col>

              <Col xs={12}>
                <Form.Item name='customer_full_name'>
                  <VInput label='Tên khách hàng' isHorizal disabled />
                </Form.Item>
              </Col>

              <Col xs={4}>
                <Form.Item name='service_booking_id'>
                  <VSelect label='Dịch vụ kết nối' isHorizal>
                    {OpitionServiceBooking?.map((v: OpitionType) => (
                      <Option value={v.value} key={v.value}>
                        {v.label}
                      </Option>
                    ))}
                  </VSelect>
                </Form.Item>
              </Col>

              <Col xs={4}>
                <Form.Item name='booking_partner_service'>
                  <VSelect label='Đối tác kết nối' isHorizal>
                    {OpitionPartServices?.map((v: OpitionType) => (
                      <Option value={v.value} key={v.value}>
                        {v.label}
                      </Option>
                    ))}
                  </VSelect>
                </Form.Item>
              </Col>
              <Col xs={16}>
                <Form.Item name='content_detail_invoice'>
                  <VInput
                    label='Nội dung chi tiết bưu phẩm bưu kiện'
                    isHorizal
                  />
                </Form.Item>
              </Col>
              <Col xs={8} className='text-center'>
                <Button
                  className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
                  disabled={invoice !== false}
                >
                  Thêm Invoice
                </Button>
              </Col>
              <Col xs={16}>
                <Form.Item name='information_receiver_address'>
                  <VTextArea
                    label='Thông tin địa chỉ nơi đến'
                    isHorizal
                    className='h-[100px]'
                  />
                </Form.Item>
              </Col>
              <Col xs={8}>
                <div>
                  <Form.Item name='customs_declaration_number'>
                    <VInput label='Tờ khai hải quan' />
                  </Form.Item>
                  <Form.Item name='note'>
                    <VInput label='Ghi chú' isHorizal />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <div className='text-right'>
          <Button
            onClick={handleSubmit}
            className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
            disabled={status !== 3 || !idBooking}
          >
            Xác nhận
          </Button>
        </div>
      </div>
    </Spin>
  );
};

export default OperateContainer;
