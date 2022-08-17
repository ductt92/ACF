import { LevelStaff } from './common.constants';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type dataLogin = {
  password: string;
  username: string;
};

export enum TYPE_FIELD {
  TEXT = 'text',
  IMAGE = 'image',
  LINK = 'link',
}
export enum GENDER {
  Male = 'Nam',
  Female = 'Nữ',
  Other = 'Khác',
}

export interface IStaff {
  id?: string;
  unitId?: string;
  userId?: string;
  fullName: string;
  departmentId: string;
  position?: string;
  gender: string;
  dayOfBirth: Date | string;
  placeOfBirth: string;
  temporaryAddress: string;
  permanentAddress: string;
  ethnic: string;
  religion: string;
  nationality: string;
  level: LevelStaff;
  marital: Marital;
  element?: string;
  email: string;
  phoneNumber: string;
  phoneCode: string;
  peopleId: string;
  issueDate: Date | string;
  issuePlace: string;
  region: string;
  taxCode?: string;
  bankAccountNumber?: string;
  bankCode?: string;
  socialInsuranceId?: string;
  healthInsuranceId?: string;
  unionBookNumber?: string;
  insuranceParticipationDate?: Date | string;
  issueInsuranceDate?: Date | string;
}

export interface IUnits {
  id?: string;
  companyId: string;
  name: string;
}

export enum Marital { // Tình trạng hôn nhân
  SINGLE = 'Độc thân',
  MARRIRED = 'Đã kết hôn',
}

export interface ICustomer {
  id?: string;
  unitId?: string;
  userId?: string;
  fullName: string;
  detailAddress: string;
  commune: string;
  district: string;
  province: string;
  country: string;
  taxCode: string;
  contactPerson: string;
  phoneNumber: string;
  phoneCode: string;
  email: string;
  typeCustomer: CustomerType;
  service: ServiceEnum;
  type: NetWorkCustomerType;
  postalCode?: string;
  state?: string;
  note?: string;
}

export enum CustomerType { // Loại khách hàng
  DOMESTIC_COMPANY = 'Doanh nghiệp trong nước', //'Doanh nghiệp trong nước',
  FOREIGN_JOINT_VENTURE_ENTERPRISE = 'Doanh nghiệp liên doanh nước ngoài', //'Doanh nghiệp liên doanh nước ngoài',
  ENTERPRISES_FOREIGN_CAPITAL = 'Doanh nghiệp 100% vốn nước ngoài', //'Doanh nghiệp 100% vốn nước ngoài',
  PRIVATE_ENTERPRISE = 'Doanh nghiệp tư nhân, hộ cá thể', //'Doanh nghiệp tư nhân, hộ cá thể',
  STATE_ENTERPRISES = 'Doanh nghiệp nhà nước', //'Doanh nghiệp nhà nước',
  REPRESENTATIVE_OFFICE = 'Văn phòng đại diện', //'Văn phòng đại diện',
  INDIVIDUAL_CUSTOMER = 'Khách hàng cá nhân', //'Khách hàng cá nhân',
}

export enum ServiceEnum { // Dịch vụ sử dụng
  EXPORT_SERVICE_EXPRESS = 'Dịch vụ hàng xuất Chuyển phát nhanh', //'Dịch vụ hàng xuất Chuyển phát nhanh',
  IMPORT_SERVICE_EXPRESS = 'Dịch vụ hàng nhập Chuyển phát nhanh', //'Dịch vụ hàng nhập Chuyển phát nhanh',
  AIR_CARGO_SERVICE = 'Dịch vụ Air Cargo (Hàng không quốc tế)', //'Dịch vụ Air Cargo (Hàng không quốc tế)',
  FORWARDING_SERVICE = 'Dịch vụ Forwarding (Vận tải quốc tế)', //'Dịch vụ Forwarding (Vận tải quốc tế)',
  CUSTOMS_CLEARANCE_SERVICE = 'Dịch vụ Thông quan hải quan', //'Dịch vụ Thông quan hải quan',
  TRUCKING_SERVICE = 'Dịch vụ Trucking trong nước', //'Dịch vụ Trucking trong nước',
  ECOMMERCE_SERVICE = 'Dịch vụ Thương mại điện tử', //'Dịch vụ Thương mại điện tử',
  DOMESTIC_SERVICE = 'Dịch vụ Nội địa', //'Dịch vụ Nội địa',
  ORTHER_SERVICE = 'Dịch vụ khác', //'Dịch vụ khác',
}

export enum NetWorkCustomerType { // Loại khách hàng vào mạng
  REGULAR_CUSTOMER = 'Khách hàng thường xuyên', //'Khách hàng thường xuyên',
  LOT_CUSTOMER = 'Khách hàng lô', //'Khách hàng lô',
  RETAIL_CUSTOMER = 'Khách hàng lẻ', //'Khách hàng lẻ',
  TRIAL_CUSTOMER = 'Khách hàng dùng thử', //'Khách hàng dùng thử',
}
