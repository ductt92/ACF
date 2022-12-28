/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { BASE_URL } from '@/contants/common.constants';
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

export const getStaff = async () => {
  const staff = HttpRequest.get('staffs/find-all-staff');
  return staff;
};

export const getSmallServices = () => {
  const smallServices = HttpRequest.get('service/small-service');
  return smallServices;
};
export const getCountry = (id?: string) => {
  if (id) {
    const smallServices = HttpRequest.get(`service/zone-small-service/${id}`);
    return smallServices;
  }
};

export const uploadFile = async (data: any) => {
  const upload = await axios({
    method: 'post',
    url: `${BASE_URL}/upload-file`,
    data,
  });

  return upload;
};

export const getCompanies = async () => {
  const companies = HttpRequest.get('companies');
  return companies;
};
export const getServices = async () => {
  const service = HttpRequest.get('service');
  return service;
};

export const getUnit = async () => {
  const units = HttpRequest.get('units');
  return units;
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
