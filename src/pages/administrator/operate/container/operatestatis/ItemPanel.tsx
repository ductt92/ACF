/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from 'antd';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import {
  fetchServicePartnerService,
  fetchServicesBooking,
} from '@/services/booking.services';
import {
  renderStatis,
  renderSumStauts,
} from '@/utils/contants/columns.contants';
import { BookingType } from '@/contants/types';

const ItemPanel = ({
  values,
  isSum,
}: {
  values: Array<any>;
  isSum: boolean;
}) => {
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
  const { data: PartnerServices } = useQuery(
    ['fetchServicePartnerService'],
    () => fetchServicePartnerService()
  );

  const OpitionServicePartner = useMemo(() => {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [PartnerServices]);

  const OpitionType = Object.entries(BookingType).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  return (
    <div>
      <Table
        columns={
          isSum
            ? renderSumStauts({ opitionPartner: OpitionServicePartner,opitionType:OpitionType })
            : renderStatis({
                optionServices: OpitionServiceBooking,
                opitionServicesPartner: OpitionServicePartner,
              })
        }
        dataSource={values || []}
        pagination={false}
      />
    </div>
  );
};

export default ItemPanel;
