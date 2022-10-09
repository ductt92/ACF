/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { DetailsBookingPost, IInvoiceDetails } from '@/contants/types';
import { fetchUser } from '@/services/booking.services';

import InVoice from '../Invoice';
import TabsBooking from '../TabsBooking';

interface ViewBookingProps {
  data: any;
}

const Viewbooking = ({ data }: ViewBookingProps) => {
  const [viewBooking] = Form.useForm();
  const [detailsInvoice, setDetailsInvoice] = useState<Array<IInvoiceDetails>>(
    []
  );
  const [detailsBooking, setDetailsBooking] = useState<
    Array<DetailsBookingPost>
  >([]);
  const { data: userData } = useQuery(['getuser'], () => fetchUser());

  useEffect(() => {
    viewBooking.setFieldsValue({
      ...data,
      estimatedDate: moment(data?.estimatedDate),
      estimateHour: moment(data?.estimateHour, 'HH:mm'),
    });

    setDetailsBooking(data?.bookingDetail || []);
    setDetailsInvoice(data?.invoice?.invoiceDetail || []);
  }, [data, viewBooking]);

  const handleDeleteRow = (id: any) => {
    const res = detailsBooking.filter((x, index) => id !== index);
    setDetailsBooking(res);
  };

  const handleDeleteInvoice = (id: any) => {
    const res = detailsInvoice.filter((x, index) => id !== index);
    setDetailsInvoice(res);
  };

  const handleUpdateBookingInvoice = (form: any) => {
    const res = detailsInvoice.map((x, index) => {
      if (form.idKey === index) {
        const { idKey, ...resetForm } = form;
        return resetForm;
      } else {
        return x;
      }
    });
    setDetailsInvoice(res);
  };

  const handleAddBookingDetails = (form: any) => {
    const {
      bulkyWeight,
      calculationUnit,
      commoditiesTypeId,
      description,
      height,
      longs,
      note,
      originItem,
      quantity,
      shippingItemEn,
      shippingItemViId,
      weight,
      width,
    } = form;
    const resForm = {
      bulkyWeight,
      calculationUnit,
      commoditiesTypeId,
      description,
      height,
      longs,
      note,
      originItem,
      quantity,
      shippingItemEn,
      shippingItemViId,
      weight,
      width,
    };
    setDetailsBooking((prev) => [...prev, resForm]);
  };

  const handleAddInvoiceDetails = (resForm: any) => {
    setDetailsInvoice((prev) => [...prev, resForm]);
  };
  const handleUpdateBookingDetails = (form: any) => {
    const res = detailsBooking.map((x, index) => {
      if (form.idKey === index) {
        const { idKey, ...resetForm } = form;
        return resetForm;
      } else {
        return x;
      }
    });

    setDetailsBooking(res);
  };

  const handleChangeInfoSender = (name: string, value: any) => {
    console.log(name, value);
    // setDetailsBooking((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };
  const handleChangeInfoRecei = (name: string, value: any) => {
    console.log(name);
  };

  return (
    <Tabs type='card'>
      <Tabs.TabPane tab='Booking' key='Booking'>
        <TabsBooking
          form={viewBooking}
          userData={userData}
          handleDeleteRow={handleDeleteRow}
          detailsBooking={detailsBooking}
          handleChangeInfoSender={handleChangeInfoSender}
          handleAddBookingDetails={handleAddBookingDetails}
          handleUpdateBookingDetails={handleUpdateBookingDetails}
          handleChangeInfoRecei={handleChangeInfoRecei}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab='Invoice' key='invoice'>
        <InVoice
          form={viewBooking}
          dataUser={userData}
          detailsInvoice={detailsInvoice}
          handleAddInvoiceDetails={handleAddInvoiceDetails}
          handleDeleteInvoice={handleDeleteInvoice}
          handleUpdateBookingInvoice={handleUpdateBookingInvoice}
        />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Viewbooking;
