import { ICustomer } from '@/contants/types';
import HttpRequest from '@/utils/Http-request';

export const fetchCustomer = async ({
  page,
  pageSize,
  search,
}: {
  page: number;
  pageSize: number;
  search?: string;
}) => {
  const customer = HttpRequest.get('customer', {
    params: { page, pageSize, search },
  });
  return customer;
};

// create thong tin nhan vien
export const createCustomer = async (data: Partial<ICustomer>) => {
  const createStaff = HttpRequest.post('customer', { ...data });
  return createStaff;
};
