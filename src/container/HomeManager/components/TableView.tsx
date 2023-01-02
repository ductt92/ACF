/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react';

interface TableViewProps {
  data: Array<any>;
  title: string;
}

const TableView = ({ data, title }: TableViewProps) => {
  return (
    <div className='mx-auto w-[1200px] bg-[#FBE51D] p-4 sm:w-full'>
      <p className='font-bold'>{title}</p>
      <div>
        <Row className='bg-[#E1DEDE]' gutter={[4, 4]}>
          <Col xs={4}>
            <p className='m-0 p-0 text-center font-bold'>Mã bill</p>
          </Col>
          <Col xs={8}>
            <p className='m-0 p-0 text-center font-bold'>Gửi từ </p>
          </Col>
          <Col xs={8}>
            <p className='m-0 p-0 text-center font-bold'>Gửi đến</p>
          </Col>
          <Col xs={4}>
            <p className='m-0 p-0 text-center font-bold'></p>
          </Col>
        </Row>
        {data.map((v) => {
          return (
            <Row
              key={v.booking_id}
              className='mb-2 bg-[#fff] p-2'
              gutter={[4, 4]}
            >
              <Col xs={4}>
                <p className='cate m-0 break-words p-0 text-center'>
                  {v.booking_code}
                </p>
              </Col>

              <Col xs={10}>
                <p className='m-0 break-words p-0'>{v.sender_name_en}</p>
                <p className='m-0 break-words p-0'>{v.sender_contact_person}</p>
                <p className='m-0 break-words p-0'>{v.sender_phone_number}</p>
                <p className='m-0 break-words p-0'>
                  {v.sender_postal_code && (
                    <span>{`${v.sender_postal_code},`}</span>
                  )}
                  {v.sender_province && <span>{`${v.sender_province},`}</span>}
                  {v.sender_country && <span>{`${v.sender_country}`}</span>}
                </p>
              </Col>

              <Col xs={10}>
                <p className='m-0 break-words p-0'>{v.receiver_name}</p>
                <p className='m-0 break-words p-0'>
                  {v.receiver_contact_person}
                </p>
                <p className='m-0 break-words p-0'>{v.receiver_phone_number}</p>
                <p className='m-0 break-words p-0'>
                  {v.receiver_postal_code && (
                    <span>{`${v.receiver_postal_code},`}</span>
                  )}
                  {v.receiver_province && (
                    <span>{`${v.receiver_province},`}</span>
                  )}
                  {v.receiver_country && <span>{`${v.receiver_country}`}</span>}
                </p>
              </Col>
            </Row>
          );
        })}

        <div className='flex flex-row items-center justify-end'>
          <Link href='/manager/booking'>
            <p className='cursor-pointer font-bold underline'>Xem tất cả</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableView;
