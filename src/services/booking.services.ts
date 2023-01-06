/* eslint-disable @typescript-eslint/no-explicit-any */

import queryString from 'query-string';

import { QueryParams3 } from '@/contants/common.constants';
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

export interface ITrackingResponse {
  data?: any[];
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

export const fetchBookingAdmin = async ({
  page,
  pageSize,
  search,
  status,
  createBookingFrom,
  createBookingTo,
  isHandle,
}: QueryParams3) => {
  const bookingAdmin = await HttpRequest.get('booking', {
    params: {
      page,
      pageSize,
      search,
      status,
      createBookingFrom,
      createBookingTo,
      isHandle,
    },
  });
  return bookingAdmin as MyBookingResponse;
};

export const createBooking = async ({
  booking,
  handleSetId,
  handleSetStatus,
}: {
  booking: any;
  handleSetId: (id: string) => void;
  handleSetStatus: (value: BookingStatusPost) => void;
}) => {
  const bookings = await HttpRequest.post('booking', {
    ...booking,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //  @ts-ignore
  if (bookings.id) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    handleSetId(bookings.id);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    handleSetStatus(bookings.status);
  }
  return bookings as MyBookingResponse;
};

export const updateBooking = ({
  booking,
  id,
}: {
  booking: any;
  id: string;
}) => {
  const updateBookings = HttpRequest.put(`booking/update-booking/${id}`, {
    ...booking,
  });
  return updateBookings;
};

export const getBookingById = async (id: any) => {
  const booking = HttpRequest.get(`booking/${id}`);
  return booking as MyBookingResponse;
};

export const getStaffAll = async () => {
  return HttpRequest.get(`staffs/find-all-staff`);
};

export const fetchUser = () => {
  const users = HttpRequest.get(`customer/my-profile`);
  return users as unknown as IUser;
};

export const fetchCommoditiesTypeId = () => {
  const users = HttpRequest.get(`commodities-type`);
  return users;
};

export const fetchServicePartnerService = () => {
  const users = HttpRequest.get(`/service/partner-service`);
  return users;
};
export const fetchShippingType = () => {
  const users = HttpRequest.get(`shipping-item`);
  return users;
};

export const generateBill = (id: string) => {
  return HttpRequest.get('booking/generate-bill', {
    params: { bookingId: id },
  }).then((res) => {
    const blob = new Blob([new Uint8Array(res.data)]);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `bill-${new Date()}.pdf`;
    link.click();
  });
};

export const generateInvoicePatner = (id: string) => {
  return HttpRequest.get('booking/generate-partner-bill-invoice', {
    params: { bookingId: id },
  }).then((res) => {
    const blob = new Blob([new Uint8Array(res.data)]);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `bill-${new Date()}.pdf`;
    link.click();
  });
};

export const generateExcelBooking = ({
  createBookingFrom,
  createBookingTo,
}: {
  createBookingTo?: Date | string;
  createBookingFrom?: Date | string;
}) => {
  return HttpRequest.get('booking/generate-excel-booking', {
    params: { createBookingTo, createBookingFrom },
  }).then((res) => {
    const blob = new Blob([new Uint8Array(res.data)]);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `bill-${new Date()}.xlsx`;
    link.click();
  });
};

export const generateBillPatner = (id: string) => {
  return HttpRequest.get('booking/generate-partner-bill-v2', {
    params: { bookingId: id },
  }).then((res) => {
    const blob = new Blob([new Uint8Array(res.data)]);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `bill-${new Date()}.pdf`;
    link.click();
  });
};

export const generateSmallBill = (id: string) => {
  return HttpRequest.get('booking/generate-small-bill', {
    params: { bookingId: id },
  }).then((res) => {
    const blob = new Blob([new Uint8Array(res.data)]);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `bill-${new Date()}.pdf`;
    link.click();
  });
};

export const generateOrderCode = (id: string) => {
  return HttpRequest.get(`customer/generate-excel-price-list/${id}`).then(
    (res) => {
      const blob = new Blob([new Uint8Array(res.data)]);
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `bill-${new Date()}.xlsx`;
      link.click();
    }
  );
};
export const generateInvoice = (id: string) => {
  return HttpRequest.get('booking/generate-bill-invoice-v2', {
    params: { bookingId: id },
  }).then((res) => {
    const blob = new Blob([new Uint8Array(res.data)]);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `bill-${new Date()}.pdf`;
    link.click();
  });
};

export const fetchServicesBooking = () => {
  const users = HttpRequest.get(`service`);
  return users;
};

export const confirmBooking = (id: string) => {
  const confirmBooking = HttpRequest.patch(`booking/is-handle-booking/${id}`);
  return confirmBooking;
};

export const trackingBooking = ({
  search,
  page,
  pageSize,
  billCodes,
}: {
  search?: string;
  page: number;
  pageSize: number;
  billCodes: Array<string>;
}) => {
  if (billCodes && billCodes.length > 0) {
    const qs = queryString.stringify(
      { billCodes: billCodes },
      { arrayFormat: 'bracket' }
    );
    const confirmBooking = HttpRequest.get(`trackings?${qs}`, {
      params: {
        search,
        page,
        pageSize,
      },
    });
    return confirmBooking as unknown as ITrackingResponse;
  }
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
export const updateStatusBooking = async ({
  id,
  handleSetStatus,
}: {
  id: string;
  handleSetStatus: (status: BookingStatusPost) => void;
}) => {
  const resStatus = await HttpRequest.patch(`booking/confirm-booking/${id}`);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //  @ts-ignore
  handleSetStatus(resStatus.status);
  return resStatus;
};
export const cancelBill = async (id: string) => {
  const cancelBillOrder = await HttpRequest.patch(
    `booking/cancel-booking/${id}`
  );
  return cancelBillOrder;
};

export const myBookingHome = async () => {
  const myBookingHome = await HttpRequest.get(`booking/my-booking-home`);
  return myBookingHome as unknown as {
    bookingNotYetHandedOver: Array<any>;
    bookingHandedOver: Array<any>;
  };
};
