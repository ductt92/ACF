/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Spin, Table } from 'antd';
import { debounce } from 'lodash';
import React, { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { EMPLOYEE_COLUMNS } from '@/contants/columns/employee-colums';
import { QueryParams } from '@/contants/common.constants';
import { QUERY_EMPLOYEE } from '@/contants/query-key/employee.contants';
import { IStaff } from '@/contants/types';
import AdminLayOut from '@/layout/AdminLayOut';
import { fetchUsers } from '@/services/employee.services';

import ModalCreateEmployee from './components/ModalCreateEmployee';
import ModalEditEmployee from './components/ModalEditEmployee';

const QUERY_PARAMS: QueryParams = {
  page: 1,
  pageSize: 40,
  search: '',
};
const EmployeeContainer = () => {
  const [queries, setQueries] = useState<QueryParams>(QUERY_PARAMS);
  const [employee, setSlectEmployee] = useState<IStaff>();
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [isCreateEmployee, setCreateEmployee] = useState<boolean>(false);

  const {
    isLoading: isUserLoading,
    data: dataUser,
    isFetching: userFetching,
  } = useQuery([QUERY_EMPLOYEE.GET_EMPLOYEE], () => fetchUsers({ ...queries }));

  const handleSearch = debounce((value: string) => {
    setQueries((prev) => ({ ...prev, search: value }));
  }, 500);

  return (
    <div className='gap-4'>
      <div className=' gap-4'>
        <Input
          placeholder='Tìm kiếm...'
          prefix={<SearchOutlined />}
          className='mb-4 mr-4 w-[350px]'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleSearch(event.target.value)
          }
        />
        <Button onClick={() => setCreateEmployee(true)} type='primary'>
          Tạo mới nhân viên
        </Button>
      </div>
      <Spin spinning={isUserLoading || userFetching}>
        <Table
          columns={EMPLOYEE_COLUMNS}
          className='cursor-pointer'
          dataSource={dataUser?.data}
          pagination={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //  @ts-ignore
            current: dataUser?.pagination?.currentPage,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //  @ts-ignore
            total: dataUser?.pagination?.totalCount,
            showSizeChanger: false,
            defaultPageSize: QUERY_PARAMS.pageSize,
          }}
          bordered
          onRow={(record) => {
            return {
              onClick: async () => {
                await setSlectEmployee(record);
                await setIsOpenEdit(true);
              },
            };
          }}
          scroll={{ y: 700, x: 500 }}
        />
      </Spin>

      {isCreateEmployee && <ModalCreateEmployee onClose={setCreateEmployee} />}

      {isOpenEdit && (
        <ModalEditEmployee value={employee} onClose={setIsOpenEdit} />
      )}
    </div>
  );
};
EmployeeContainer.Layout = AdminLayOut;

export default EmployeeContainer;
