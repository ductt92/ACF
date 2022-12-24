import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Spin, Table } from 'antd';
import { debounce } from 'lodash';
import React, { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { CUSTOMER_COLUMNS } from '@/contants/columns/customer-columns';
import { QueryParams } from '@/contants/common.constants';
import { QUERY_CUSTOMER } from '@/contants/query-key/customer.contants';
import { ICustomer } from '@/contants/types';
import AdminLayOut from '@/layout/AdminLayOut';
import { fetchCustomer } from '@/services/customer.services';

import ModalCreateCustomer from './container/ModalCreateCustomer';
import ModalEditCustomer from './container/ModalEditCustomer';
const QUERY_PARAMS: QueryParams = {
  page: 1,
  pageSize: 40,
  search: '',
};

const CustomerPage = () => {
  const [queries, setQueries] = useState<QueryParams>(QUERY_PARAMS);
  const [customer, setCustomer] = useState<ICustomer>();
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [isCreate, setCreate] = useState<boolean>(false);

  const {
    isLoading: isUserLoading,
    data: dataCustomer,
    isFetching: customerFetching,
  } = useQuery([QUERY_CUSTOMER.GET_CUSTOMER], () =>
    fetchCustomer({ ...queries })
  );
  const handleClose = () => {
    setCreate(false);
  };

  const handleSearch = debounce((value: string) => {
    setQueries((prev) => ({ ...prev, search: value }));
  }, 500);

  return (
    <div>
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
          <Button type='primary' onClick={() => setCreate(true)}>
            Tạo mới khách hàng
          </Button>
        </div>
        <Spin spinning={isUserLoading || customerFetching}>
          <Table
            columns={CUSTOMER_COLUMNS}
            className='cursor-pointer'
            dataSource={dataCustomer?.data}
            pagination={{
              current: dataCustomer?.pagination?.currentPage,
              total: dataCustomer?.pagination?.totalCount,
              showSizeChanger: false,
              defaultPageSize: QUERY_PARAMS.pageSize,
            }}
            bordered
            onRow={(record) => {
              return {
                onClick: async () => {
                  await setCustomer(record);
                  await setIsOpenEdit(true);
                },
              };
            }}
            scroll={{ y: 700, x: 500 }}
          />
        </Spin>
        {isCreate && <ModalCreateCustomer onClose={handleClose} />}
        {isOpenEdit && (
          <ModalEditCustomer
            onClose={() => setIsOpenEdit(false)}
            value={customer}
          />
        )}
      </div>
    </div>
  );
};

CustomerPage.Layout = AdminLayOut;

export default CustomerPage;
