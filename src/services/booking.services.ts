/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryParams3 } from '@/contants/common.constants';
import { IMyBooking, IUser } from '@/contants/types';
import HttpRequest from '@/utils/Http-request';

export interface MyBookingResponse {
  data?: IMyBooking[];
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
  };
}

export const fetchBooking = async ({
  page,
  pageSize,
  search,
  status,
  createBookingFrom,
  createBookingTo,
}: QueryParams3) => {
  const booking = HttpRequest.get('booking/my-booking', {
    params: {
      page,
      pageSize,
      search,
      status,
      createBookingTo,
      createBookingFrom,
    },
  });
  return booking as MyBookingResponse;
};

export const createBooking = async (data: any) => {
  const booking = HttpRequest.post('booking', {
    ...data,
  });
  return booking as MyBookingResponse;
};
export const getBookingById = async (id: any) => {
  const booking = HttpRequest.get(`booking/${id}`);
  return booking as MyBookingResponse;
};

export const fetchUser = () => {
  const users = HttpRequest.get(`customer/my-profile`);
  return users as unknown as IUser;
};

export const fetchCommoditiesTypeId = () => {
  const users = HttpRequest.get(`commodities-type`);
  return users;
};
export const fetchShippingType = () => {
  const users = HttpRequest.get(`shipping-item`);
  return users;
};

export const fetchServicesBooking = () => {
  const users = HttpRequest.get(`service`);
  return users;
};

export const fetchDeliveryCondition = () => {
  const users = HttpRequest.get(`delivery-conditions`);
  return users;
};

export const fetchTypeOfPayment = () => {
  const users = HttpRequest.get(`type-of-payment`);
  return users;
};

export const fetchCurrentUnit = () => {
  const users = HttpRequest.get(`currency-unit`);
  return users;
};
