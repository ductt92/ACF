import { IStaff } from '@/contants/types';
import HttpRequest from '@/utils/Http-request';

type ResponseType = {
  data: Array<IStaff>;
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
  };
};

// type UserType = {
//   id: string,
//   roleId: string,
//   status: string,
//   updatedAt: string,
//   createdAt: string
// }

export const fetchUsers = async ({
  page,
  pageSize,
  search,
}: {
  page: number;
  pageSize: number;
  search?: string;
}) => {
  const users: ResponseType = HttpRequest.get('staffs', {
    params: { page, pageSize, search },
  });
  return users;
};

// create thong tin nhan vien
export const createStaffs = async (data: Partial<IStaff>) => {
  const createStaff = HttpRequest.post('users/staff', { ...data });
  return createStaff;
};

// update thong tin nhan vien
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
