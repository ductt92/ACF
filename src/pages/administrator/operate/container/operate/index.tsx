/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AutoComplete,
  Button,
  Col,
  Form,
  Row,
  Select,
  Spin,
  Table,
} from 'antd';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

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
  getDeliverySearchPu,
  getPUDelivery,
  getPUIdDelivery,
  QUERY,
} from '@/utils/contants/services';

// const { Panel } = Collapse;

const QUERY_PARAMS: QUERY = {
  page: 1,
  pageSize: 10,
  search: '',
  orderBy: 'createdAt_DESC',
};

const { Option } = Select;
const OperateContainer = () => {
  const [queries, setQueries] = useState<QUERY>(QUERY_PARAMS);
  const [form] = Form.useForm();

  const [search, setSearch] = useState<any>();

  const [idRowClick, setIdRowClick] = useState();

  const [invoice, setInvoice] = useState(false);

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

    form.setFieldsValue({
      ...value,
      type: OpitionInvoiceItemType.find((x) => x.value === value?.type),
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    setInvoice(Boolean(value?.booking_is_invoice));
  };

  const handleCallBackGet = (data: any) => {
    form.setFieldsValue({
      ...data,

      type:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-ignore
        value?.type &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-ignore
        OpitionInvoiceItemType.find((x) => x.value === value.type),
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    setInvoice(Boolean(data?.booking_is_invoice));
  };
  const { isLoading: loadingPuById, isFetching: fetchingPuById } = useQuery(
    [QUERY_KEY.GET_DATA, idRowClick],
    () => getPUIdDelivery({ id: idRowClick, handleCallBack: handleCallBackGet })
  );

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
            <Col xs={12}></Col>
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
      </div>
    </Spin>
  );
};

export default OperateContainer;

{
  /* <Collapse bordered={true} defaultActiveKey={['1']}>
        <Panel header='This is panel header 1' key='1'>
          <div>dsads</div>
        </Panel>
        <Panel header='This is panel header 2' key='2'>
          <div>dsa</div>
        </Panel>
        <Panel header='This is panel header 3' key='3'>
          <div>dsads</div>
        </Panel>
      </Collapse> */
}
