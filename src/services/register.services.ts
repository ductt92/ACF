/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpRequest from '@/utils/Http-request';

export const personRegister = (booking: any) => {
  return HttpRequest.post('customer/individual-customers', {
    ...booking,
  });
};

export const companyRegister = (booking: any) => {
  return HttpRequest.post('customer/business-customers', {
    ...booking,
  });
};
