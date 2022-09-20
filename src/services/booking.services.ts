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
}: {
  page: number;
  pageSize: number;
  search?: string;
}) => {
  const booking = HttpRequest.get('booking/my-booking', {
    params: { page, pageSize, search },
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
