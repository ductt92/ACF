/* eslint-disable @typescript-eslint/no-explicit-any */
import { CopyOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Progress, Row, Spin, Timeline } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { trackingBooking } from '@/services/booking.services';
import { copyToClipBoard } from '@/utils/helpers';
import { getStatusTracking } from '@/utils/ultils';

const { Panel } = Collapse;

const TrackingContainer = () => {
  const router = useRouter();
  const [query, setQueries] = useState({
    search: '',
    page: 1,
    pageSize: 10,
    billCodes: [] as string[],
  });
  const { id } = router.query;
  const [search, setSearch] = useState('');

  const { data: dataDelivery, isLoading } = useQuery(
    ['trackingBooking', { query }],
    () => trackingBooking(query)
  );

  const handleSearch = () => {
    setQueries((prev) => ({ ...prev, billCodes: search.split('\n') }));
  };

  useEffect(() => {
    if (id) {
      const billCodes = [id] as string[];
      setQueries((prev) => ({
        ...prev,
        billCodes: billCodes,
      }));
    }
  }, [id]);

  const renderHeader = (v: any) => {
    return (
      <div className='flex w-full flex-row items-center gap-4'>
        <div>{getStatusTracking(v.tag)}</div>
        <div className=' flex w-full  flex-row gap-x-4'>
          <div className='flex w-full flex-row items-center justify-between'>
            <div>
              <div className='flex flex-row items-center gap-4 '>
                <p className='m-0 p-0'>{v.trackingNumber} </p>
                <CopyOutlined
                  onClick={() => copyToClipBoard(v.trackingNumber)}
                />
              </div>
              <div>
                <p className='m-0 p-0 text-blue-400'>{v.subtagMessage}</p>
              </div>
            </div>

            <div>{`${dayjs(v.shipmentDeliveryDate).format(
              'DD-MM-YYYY HH:mm'
            )} - ${v.subtagMessage}`}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='m-auto flex w-[1024px] flex-col gap-8 p-4'>
      <div className='text-xl font-bold'>Truy vấn đơn hàng</div>
      <Row>
        <Col xs={18}>
          <Spin spinning={isLoading}>
            {dataDelivery?.data && dataDelivery.data.length > 0 ? (
              <Collapse
                defaultActiveKey={[dataDelivery.data[0]]}
                expandIconPosition='right'
              >
                {dataDelivery.data.map((v, i) => (
                  <Panel header={renderHeader(v)} key={i}>
                    <div className='flex flex-col gap-4 '>
                      <p className='m-0 p-0'>{v.subtagMessage}</p>
                      <Progress
                        percent={
                          (v.checkpoints?.length / v.trackedCount) * 100 || 0
                        }
                        showInfo={false}
                      />
                      <p>{`${v.originCountryIso3} to ${v.descriptionCountryIso3}  ·  Transit to ${v.deliveryTime} days`}</p>
                      <Timeline className='pt-4'>
                        {v.checkpoints.map((checkpoints: any) => (
                          <Timeline.Item
                            color='green'
                            key={v.id}
                            dot={getStatusTracking(checkpoints.tag)}
                          >
                            <div>
                              <p className='m-0 p-0 font-bold'>
                                {checkpoints.message}
                              </p>

                              <p className='text-4 '>
                                {dayjs(checkpoints.checkpointTime).format(
                                  'DD-MM-YYYY HH:ss:mm'
                                )}
                                {' · '}
                                <span>{checkpoints.location}</span>
                              </p>
                            </div>
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </div>
                  </Panel>
                ))}
              </Collapse>
            ) : (
              <div className='text-center text-xl font-bold'>
                Không tìm thấy đơn hàng này trong hệ thống
              </div>
            )}

            {/* {dataDelivery && dataDelivery?.length > 0 ? (
              <Timeline>
                {dataDelivery.map((v) => (
                  <Timeline.Item
                    color='green'
                    key={v.id}
                    dot={getStatusTracking(v.tag)}
                  >
                    <div>
                      <p className='m-0 p-0 text-xl font-bold'>{v.message}</p>
                      <p className='text-4  m-0 p-0'>{v.slug.toUpperCase()}</p>
                      <p className='text-4 '>
                        {moment(v.checkpointTime).format('DD-MM-YYYY')}
                      </p>
                    </div>
                  </Timeline.Item>
                ))}
              </Timeline>
            ) : (
            
            )} */}
          </Spin>
        </Col>
        <Col xs={6}>
          <div className='flex flex-col gap-4 px-4'>
            <TextArea
              placeholder='Nhập mã đơn hàng'
              className='h-[200px]'
              defaultValue={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type='primary' onClick={handleSearch}>
              Tìm kiếm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TrackingContainer;
