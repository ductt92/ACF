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
  unitId: string;
  userId?: string;
  fullName: string;
  departmentId: string;
  position?: string;
  gender?: string;
  dayOfBirth?: Date;
  placeOfBirth?: string;
  temporaryAddress?: string;
  permanentAddress?: string;
  ethnic?: string;
  religion?: string;
  nationality?: string;
  level?: string;
  marital?: string;
  element?: string;
  email: string;
  phoneNumber: string;
  phoneCode: string;
  peopleId: string;
  issueDate?: Date;
  issuePlace?: string;
  region?: string;
  taxCode?: string;
  bankAccountNumber?: string;
  bankCode?: string;
  socialInsuranceId?: string;
  healthInsuranceId?: string;
  unionBookNumber?: string;
  insuranceParticipationDate?: Date;
  issueInsuranceDate?: Date;
}

export interface IUnits {
  id?: string;
  companyId: string;
  name: string;
}
