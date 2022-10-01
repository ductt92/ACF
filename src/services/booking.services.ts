import { BookingStatusPost, IMyBooking, IUser } from '@/contants/types';
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
}: {
  page: number;
  pageSize: number;
  search?: string;
  status?: BookingStatusPost;
}) => {
  const booking = HttpRequest.get('booking/my-booking', {
    params: { page, pageSize, search, status },
  });
  return booking as MyBookingResponse;
};

export const createBooking = async (data: Partial<IMyBooking>) => {
  const booking = HttpRequest.post('booking', {
    ...data,
  });
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
