/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { WarningOutlined } from '@ant-design/icons';
import {
  AutoComplete,
  Button,
  Col,
  Form,
  Modal,
  notification,
  Row,
  Spin,
  Table,
} from 'antd';
import { debounce } from 'lodash';
import React, { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { BookingType, OpitionType } from '@/contants/types';
import { fetchServicesBooking } from '@/services/booking.services';

import CheckPoint from './Checkpoint';
import InfoCheckpoint from './InfoCheckPoint';
import ModalCreatInfo from './InfoCheckPoint/ModalInfo/ModalCreate';
import { rendeColumsPickup } from '../../../../utils/contants/columns.contants';
import { QUERY_KEY } from '../../../../utils/contants/query-key';
import {
  BookingDetailPU,
  getDelivery,
  getPU,
  getPUId,
  patchPUOP,
  pathPU,
  postPu,
  QUERY,
} from '../../../../utils/contants/services';

const QUERY_PARAMS: QUERY = {
  page: 1,
  pageSize: 20,
  search: '',
  orderBy: 'createdAt_DESC',
};
const PickUpContainer = () => {
  const [form] = Form.useForm();
  const [search, setSearch] = useState<any>();

  const [infoForm] = Form.useForm();
  const [infoCheckPoint, setInfoCheckPoint] = useState<Array<BookingDetailPU>>(
    []
  );

  const [queries, setQueries] = useState<QUERY>(QUERY_PARAMS);

  const [id, setId] = useState<any>();
  const [bookingId, setBookingId] = useState<any>();

  const [open, setOpen] = useState<boolean>(false);
  const [idRowClick, setIdRowClick] = useState();
  const [status, setStatus] = useState<number>();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [idKey, setIdKey] = useState();

  const queryClient = useQueryClient();

  const bookingType = Object.entries(BookingType).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const {
    data: dataPU,
    isLoading: loadingPu,
    isFetching: fetchingPU,
  } = useQuery([QUERY_KEY.GET_DATA, queries], () => getPU(queries));

  const { data: dataSerivicesBooknig } = useQuery(
    [QUERY_KEY.GET_PU, queries],
    () => fetchServicesBooking()
  );

  const OpitionServiceBooking = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    if (dataSerivicesBooknig?.length < 0) {
      return [];
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      return dataSerivicesBooknig?.map((v) => ({
        value: v.id,
        label: v.name,
      }));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
  }, [dataSerivicesBooknig]);

  const { data, isLoading, isFetching } = useQuery(
    [QUERY_KEY.GET_DATA, { search }],
    () => getDelivery(search)
  );

  const { isLoading: loadingPuById, isFetching: fetchingPuById } = useQuery(
    [QUERY_KEY.GET_DATA, idRowClick],
    () => getPUId({ id: idRowClick, handleCallBack: handleCallBackGet })
  );

  const { mutate: updatePu } = useMutation(pathPU, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_PU]);
      notification.success({
        message: 'Cập nhật thành công',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'Cập nhật thất bại',
        placement: 'top',
      });
    },
  });
  const { mutate: updatePuOP } = useMutation(patchPUOP, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_PU]);
      notification.success({
        message: 'Cập nhật thành công',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'Cập nhật thất bại',
        placement: 'top',
      });
    },
  });

  const { mutate: addPu } = useMutation(postPu, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_DATA]);
      notification.success({
        message: 'Cập nhật thành công',
        placement: 'top',
      });
    },
    onError: () => {
      notification.error({
        message: 'Cập nhật thất bại',
        placement: 'top',
      });
    },
  });

  const options = useMemo(() => {
    if (isLoading || isFetching || !data) {
      return [];
    } else {
      return data?.map((values) => ({
        ...values,
        value: values.booking_code,
      }));
    }
  }, [data, isFetching, isLoading]);

  const handleSearch = debounce((value?: string) => {
    setSearch(value);
  }, 500);

  const handleSelect = (e: any) => {
    const value = options.find((f) => f.booking_code === e);
    form.setFieldsValue({
      ...value,
      booking_type: bookingType?.find((x) => x.value === value?.booking_type),
      booking_service_booking: OpitionServiceBooking?.find(
        (x: OpitionType) => x.value === value?.booking_service_booking
      ),
    });

    setInfoCheckPoint(value?.booking_detail || []);
    setBookingId(value?.booking_id);
    setId(value?.pu_delivery_id);
    setStatus(value?.status || 0);
  };

  const handleDelete = (id: any) => {
    const res = infoCheckPoint.filter((x, index) => id !== index);
    setInfoCheckPoint(res);
  };

  const handleCallBackGet = (data: any) => {
    form.setFieldsValue({
      ...data,
      booking_type: bookingType?.find((x) => x.value === data?.type),
      booking_service_booking: OpitionServiceBooking?.find(
        (x: OpitionType) => x.value === data?.service_booking_id
      ),
      booking_customs_declaration_number: data?.customs_declaration_number,
      booking_note: data?.note,
    });
    setStatus(data?.status || 0);
    setInfoCheckPoint(
      data?.details?.map((v: any) => ({
        ...v,
        bulky_weight: v.bulkyWeight,
      })) || []
    );
    setBookingId(data?.id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleOK = async () => {
    if (bookingId) {
      const res = await form.validateFields();
      const customData = {
        details: infoCheckPoint.map(
          ({ quantity, weight, bulky_weight, height, width, longs }) => {
            return {
              bulkyWeight: parseFloat(bulky_weight?.toString()),
              quantity: parseFloat(quantity?.toString()),
              weight: parseFloat(weight?.toString()),
              height: parseFloat(height?.toString()),
              width: parseFloat(width?.toString()),
              longs: parseFloat(longs?.toString()),
            };
          }
        ),
        type: res.booking_type?.value,
        quantity: res.quantity,
        serviceBookingId: res.booking_service_booking?.value,
        contentDetail: res.content_detail,
        customsDeclarationNumber: res.booking_customs_declaration_number,
        note: res.booking_note,
      };
      addPu({ ...customData, bookingId });
      form.resetFields();
      handleSelect('');
      setId(undefined);
      handleSearch('');
    }
  };

  const handleConfirm = () => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <WarningOutlined className='text-red-700' />,
      content: 'Xác nhận đã lấy hàng',
      okText: 'Đồng ý',
      cancelText: 'Không',
      onOk: handleOK,
    });
  };

  const handlePagination = (pagination: { current?: number }) => {
    setQueries((prev) => ({
      ...prev,
      page: pagination.current || 0,
    }));
  };

  const updatePickUp = async () => {
    if (id || bookingId) {
      const res = await form.validateFields();
      const customData = {
        details: infoCheckPoint.map(
          ({ quantity, weight, bulky_weight, height, width, longs }) => {
            return {
              bulkyWeight: parseFloat(bulky_weight?.toString()),
              quantity: parseFloat(quantity?.toString()),
              weight: parseFloat(weight?.toString()),
              height: parseFloat(height?.toString()),
              width: parseFloat(width?.toString()),
              longs: parseFloat(longs?.toString()),
            };
          }
        ),
        type: res.booking_type?.value,
        quantity: res.quantity,
        serviceBookingId: res.booking_service_booking?.value,
        contentDetail: res.content_detail,
        customsDeclarationNumber: res.booking_customs_declaration_number,
        note: res.booking_note,
      };
      updatePu({
        id: id || bookingId,
        data: customData,
      });
    }
  };

  const handleUpdateStatus = (status: any) => {
    console.log(status);
  };
  const handleClickOp = () => {
    if (bookingId) {
      updatePuOP({
        id: bookingId,
        handelCallback: handleUpdateStatus,
      });
    }
  };

  const handleAddItem = async () => {
    const ress = await infoForm.validateFields();
    setInfoCheckPoint((prev) => [...prev, ress]);
    setOpen(false);

    infoForm.resetFields();
  };

  const handleUpdate = (data: any) => {
    setIsUpdate(true);
    setIdKey(data.idKey);
    infoForm.setFieldsValue({
      ...data,
      bulky_weight: data?.bulkyWeight,
    });
  };

  const handleUpdateItem = async () => {
    const form = await infoForm.validateFields();

    const res = infoCheckPoint.map((x, index) => {
      if (idKey === index) {
        const { bulkyWeight, ...resetForm } = form;
        return resetForm;
      } else {
        return x;
      }
    });

    setInfoCheckPoint(res);
    setIdKey(undefined);
    setIsUpdate(false);
  };
  const spinning =
    isLoading ||
    isFetching ||
    fetchingPU ||
    loadingPu ||
    loadingPuById ||
    fetchingPuById;
  return (
    <Spin spinning={spinning}>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-end'>
          <Table
            columns={rendeColumsPickup(OpitionServiceBooking)}
            rowKey='key'
            onChange={handlePagination}
            className='cursor-pointer px-6'
            dataSource={dataPU?.data}
            pagination={{
              current: dataPU?.pagination?.currentPage,
              total: dataPU?.pagination?.totalCount,
              showSizeChanger: false,
              defaultPageSize: QUERY_PARAMS.pageSize,
            }}
            bordered
            onRow={(record) => {
              return {
                onClick: async () => {
                  setIdRowClick(record.pu_delivery_id);
                },
              };
            }}
            scroll={{ y: 700, x: 800 }}
          />
          <Button
            className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
            disabled={status !== 2}
            onClick={handleClickOp}
          >
            Chuyển tiếp bộ phận OP
          </Button>
        </div>
        <AutoComplete
          options={options}
          placeholder='Check point mã bưu phẩm, bưu kiện'
          onChange={(e) => handleSearch(e)}
          className='w-[300px]'
          onSelect={(e: any) => handleSelect(e)}
        />
        <Row gutter={[16, 16]}>
          <Col xs={14}>
            <CheckPoint
              form={form}
              opition={OpitionServiceBooking}
              bookingType={bookingType}
            />
            <Button
              className='h-8 rounded-md bg-[#FBE51D] px-4 outline-none'
              onClick={handleConfirm}
              disabled={status !== null}
            >
              Xác nhận đã lấy hàng từ khách hàng
            </Button>
          </Col>
          <Col xs={10}>
            <InfoCheckpoint
              data={infoCheckPoint}
              status={status}
              handleDelete={handleDelete}
              handleOpenCreate={handleOpenModal}
              handleUpdatePickUp={updatePickUp}
              handleUpdate={handleUpdate}
            />
          </Col>
        </Row>

        {(open || isUpdate) && (
          <ModalCreatInfo
            isUpdate={isUpdate}
            form={infoForm}
            handleAddItem={isUpdate ? handleUpdateItem : handleAddItem}
            handleCancel={isUpdate ? () => setIsUpdate(false) : handleClose}
          />
        )}
      </div>
    </Spin>
  );
};

export default PickUpContainer;
