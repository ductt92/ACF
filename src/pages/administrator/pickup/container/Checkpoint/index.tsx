import { Col, Form, FormInstance, Row, Select } from 'antd';
import React from 'react';

import VInput from '@/components/common/VInput';
import VSelect from '@/components/common/VSelect';

import { OpitionType } from '@/contants/types';
interface CheckPointProps {
  form: FormInstance;
  opition: Array<OpitionType>;
  bookingType: Array<OpitionType>;
}

const { Option } = Select;
const CheckPoint = ({ form, opition, bookingType }: CheckPointProps) => {
  return (
    <Form form={form}>
      <Row gutter={[16, 16]}>
        <Col xs={6}>
          <Form.Item name='customer_code'>
            <VInput label='Mã Khách hàng' disabled isHorizal />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item name='customer_full_name'>
            <VInput label='Tên khách hàng' disabled isHorizal />
          </Form.Item>
        </Col>
        <Col xs={6}>
          <Form.Item name='booking_type'>
            <VSelect label='Loại hàng hóa' isHorizal>
              {bookingType?.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={6}>
          <Form.Item name='booking_service_booking'>
            <VSelect label='Dịch vụ xuất' isHorizal>
              {opition?.map((v) => (
                <Option value={v.value} key={v.value}>
                  {v.label}
                </Option>
              ))}
            </VSelect>
          </Form.Item>
        </Col>
        <Col xs={6}>
          <Form.Item name='quantity'>
            <VInput label='Tổng số kiện' isHorizal />
          </Form.Item>
        </Col>
        <Col xs={6}>
          <Form.Item name='weight'>
            <VInput label='Tổng TL thực' disabled isHorizal />
          </Form.Item>
        </Col>
        <Col xs={6}>
          <Form.Item name='bulky_weight'>
            <VInput label='Tổng TL cồng kềnh' isHorizal />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Form.Item name='content_detail'>
            <VInput label='Nội dung chi tiết bưu phẩm bưu kiện' isHorizal />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={6}>
          <Form.Item name='booking_customs_declaration_number'>
            <VInput label='Tờ khai hải quan' isHorizal />
          </Form.Item>
        </Col>
        <Col xs={18}>
          <Form.Item name='booking_note'>
            <VInput label='Ghi chú' isHorizal />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default CheckPoint;
