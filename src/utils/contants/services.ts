/* eslint-disable @typescript-eslint/no-explicit-any */

import { BookingType } from '@/contants/types';
import HttpRequest from '@/utils/Http-request';

export type QUERY = {
  orderBy: string;
  search?: string;
  page: number;
  pageSize: number;
};
export type ResponseType = {
  booking_id: string;
  booking_type: BookingType;
  booking_code: string;
  booking_service_booking: string;
  booking_partner_service: string;
  booking_customs_declaration_number?: string;
  booking_note?: string;
  content_detail: string;
  weight: number;
  bulky_weight: number;
  quantity: number;
  customer_code: string;
  customer_full_name: string;
  pu_delivery_id?: string;
  status: number;
  booking_detail: [BookingDetailPU];
};

export type resPUDelivery = {
  data: Array<Delivery>;
  pagination: {
    currentPage: number;
    pageSize: number;
    totalPage: number;
    totalCount: number;
  };
};

export type Delivery = {
  id: string;
  type: BookingType;
  service_booking_id: string;
  content_detail: string;
  customs_declaration_number: string;
  note: string;
  booking_id: string;
  status: number;
  booking_code: string;
  booking_address: string;
  customer_code: string;
  customer_full_name: string;
  weight: number;
  bulky_weight: number;
  quantity: number;
  staff_code: string;
  staff_full_name: string;
};

export type responsePU = {
  data: Array<PU>;
  pagination: {
    currentPage: number;
    pageSize: number;
    totalPage: number;
    totalCount: number;
  };
};
export type PU = {
  pud_status: number;
  pu_delivery_id: string;
  booking_code: string;
  customer_code: string;
  customer_full_name: string;
  pud_type: BookingType;
  service_booking_id: string;
  content_detail: string;
  weight: number;
  bulky_weight: number;
  quantity: number;
  note: string;
  staff_code: string;
  staff_full_name: string;
};

export type BookingDetailPU = {
  quantity: number;
  weight: number;
  bulky_weight: number;
  height: number;
  width: number;
  longs: number;
};
export const getDelivery = (search?: string) => {
  if (search) {
    const delivery = HttpRequest.get(
      `booking/get-booking-delivery?search=${search}`
    );
    return delivery as unknown as Array<ResponseType>;
  }
};
export const getStatisticalDelivery = () => {
  const delivery = HttpRequest.get(`pu-deliveries/statistical-delivery`);
  return delivery as unknown as Array<ResponseType>;
};

export const getDeliverySearchPu = (search?: string) => {
  if (search) {
    const delivery = HttpRequest.get(
      `pu-deliveries/delivery-op?search=${search} `
    );
    return delivery as unknown as Delivery;
  }
};

export const getDeliveryConfirm = ({ id, data }: { id: string; data: any }) => {
  const delivery = HttpRequest.patch(`pu-deliveries/op-confirm-booking/${id}`, {
    ...data,
  });
  return delivery;
};

export const getPU = ({
  orderBy = 'createdAt_DESC',
  search,
  page,
  pageSize,
}: QUERY) => {
  const delivery = HttpRequest.get(`pu-deliveries/booking-pickup`, {
    params: {
      orderBy,
      search,
      page,
      pageSize,
    },
  });
  return delivery as unknown as responsePU;
};

export const getPUDelivery = ({
  orderBy = 'createdAt_DESC',
  search,
  page,
  pageSize,
}: QUERY) => {
  const delivery = HttpRequest.get(`pu-deliveries/delivery`, {
    params: {
      orderBy,
      search,
      page,
      pageSize,
    },
  });
  return delivery as unknown as resPUDelivery;
};

export const pathPU = ({ id, data }: { id: string; data: any }) => {
  // pu_delivery_id
  const delivery = HttpRequest.patch(
    `pu-deliveries/pickup-confirm-booking/${id}`,
    { ...data }
  );
  return delivery;
};

export const getPUId = async ({
  id,
  handleCallBack,
}: {
  id?: string;
  handleCallBack: (data: any) => void;
}) => {
  if (id) {
    const delivery = await HttpRequest.get(`pu-deliveries/${id}`);
    handleCallBack(delivery);
    return delivery;
  }
};

export const getPUIdDelivery = async ({
  id,
  handleCallBack,
}: {
  id?: string;
  handleCallBack: (data: any) => void;
}) => {
  if (id) {
    const delivery = await HttpRequest.get(
      `pu-deliveries/delivery-op?id=${id}`
    );
    handleCallBack(delivery);
    return delivery;
  }
};

export const postPu = async (data: any) => {
  const delivery = await HttpRequest.post(`pu-deliveries`, data);
  return delivery;
};

export const patchPUOP = async ({
  id,
  handelCallback,
}: {
  id: string;
  handelCallback: (data: any) => void;
}) => {
  const delivery = await HttpRequest.patch(`pu-deliveries/forward-op/${id}`);
  handelCallback(delivery);
  return delivery;
};
