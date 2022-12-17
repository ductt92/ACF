import { Button, Col, Row, Spin, Timeline } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { trackingBooking } from '@/services/booking.services';
import { getStatusTracking } from '@/utils/ultils';

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

  console.log(dataDelivery);

  const handleSearch = () => {
    router.push(`/tracking/${search}`);
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

  return (
    <div className='m-auto flex w-[1024px] flex-col gap-8 p-4'>
      <div className='text-xl font-bold'>Truy vấn đơn hàng</div>
      <Row>
        <Col xs={18}>
          <Spin spinning={isLoading}>
            {dataDelivery && dataDelivery?.length > 0 ? (
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
              <div className='text-center text-xl font-bold'>
                Không tìm thấy đơn hàng này trong hệ thống
              </div>
            )}
          </Spin>
        </Col>
        <Col xs={6}>
          <div className='flex flex-col gap-4'>
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
