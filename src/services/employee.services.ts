/* eslint-disable @typescript-eslint/no-explicit-any */
import { IStaff } from '@/contants/types';
import HttpRequest from '@/utils/Http-request';

export interface CustomerResponse {
  data?: IStaff[];
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
  };
}
export const fetchUsers = async ({
  page,
  pageSize,
  search,
}: {
  page: number;
  pageSize: number;
  search?: string;
}) => {
  const users = HttpRequest.get('staffs', {
    params: { page, pageSize, search },
  });
  return users as CustomerResponse;
};

// create thong tin nhan vien
export const createStaffs = async (data: Partial<IStaff>) => {
  const createStaff = HttpRequest.post('users/staff', { ...data });
  return createStaff;
};

export const updatePartnerBillCode = async ({
  id,
  handleSetBillCode,
  data,
}: {
  id: string;
  data: any;
  handleSetBillCode: (bill: string) => void;
}) => {
  const updatePartnerBillCode = await HttpRequest.patch(
    `booking/update-partner-bill-code/${id}`,
    { ...data }
  );
  if (updatePartnerBillCode) {
    handleSetBillCode(id);
  }
  return updatePartnerBillCode;
};

export const updateStaff = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<IStaff>;
}) => {
  const updateStaff = HttpRequest.patch(`staffs/${id}`, { ...data });
  return updateStaff;
};
