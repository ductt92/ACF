/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from 'antd';
import React from 'react';

interface TableViewProps {
  data: Array<any>;
  title: string;
}

const TableView = ({ data, title }: TableViewProps) => {
  return (
    <div className='mx-auto w-[1200px] bg-[#FBE51D] p-4 '>
      <p className='font-bold'>{title}</p>
      <div>
        <Row className='bg-[#E1DEDE]'>
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
            <Row key={v.booking_id} className='mb-2 bg-[#fff]'>
              <Col xs={4}>
                <p>{v.booking_code}</p>
              </Col>

              <Col xs={8}>
                <p className='m-0 p-0'>{v.sender_name_en}</p>
                <p className='m-0 p-0'>{v.sender_contact_person}</p>
              </Col>

              <Col xs={8}>
                <p>{v.booking_id}</p>
              </Col>
              <Col
                xs={4}
                className='flex flex-row items-center justify-center p-4'
              >
                <Button className='rounded-md bg-[#FBE51D]'>Chỉnh sửa</Button>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default TableView;
