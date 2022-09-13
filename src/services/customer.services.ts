import { ICustomer } from '@/contants/types';
import HttpRequest from '@/utils/Http-request';

export interface CustomerResponse {
  data?: ICustomer[];
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
  };
}

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
  return customer as CustomerResponse;
};

export const createCustomer = async (data: Partial<ICustomer>) => {
  const createStaff = HttpRequest.post('customer', { ...data });
  return createStaff;
};

export const updateCustomer = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<ICustomer>;
}) => {
  const updateStaff = HttpRequest.patch(`customer/${id}`, data);
  return updateStaff;
};
