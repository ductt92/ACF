import { CalculationUnit, LevelStaff } from './common.constants';

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
  identifier: EIdentifierType;
  customerCode: string;
  staffId: string;
  gender: string;
  dob: string;
  addressDetail: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  user: string;
  staff: string;
  unit: string;

  //contract
  serviceRequest: string; // Dịch vụ yêu cầu enum EServiceRequest
  potentialRevenue: number; // Doanh thu tiềm năng
  paymentSchedule: string; // Lịch thanh toán công nợ kể từ ngày chốt bảng kê
  commitmentRate: number; // Tỷ lệ LNG Cam kết nếu xin giá riêng/Tháng
  expertise: boolean; // Thẩm định
  appraisalStaff: string; // Nhân viên thẩm định
  contractCode: string; // Mã hợp đồng
  contractName: string; // Tên hợp đồng
  typeContract: string; // Loại hợp đồng enum ETypeContract
  noteContract?: string; // ghi chú hợp đồng

  ///

  beneficiary?: string; // Tên người thụ hưởng
  jobTitle?: string; // Chức vụ làm việc
  beneficiaryPhone?: string; // Số điện thoại người thụ hưởng
  isDirectBeneficiary?: boolean; // Người trực tiếp hưởng hay người thân
  relationshipBeneficiaries?: string; // Quan hệ với người thụ hưởng
  beneficiaryAccountNumber?: string; // Số tài khoản thụ hưởng
  beneficiaryBank?: string; // Ngân hàng thụ hưởng
  lkdRate?: number; // Tỷ lệ LKD/Giá bán gốc chưa phụ phí
  beneficiaryNote?: string; // Ghi chú

  // Tài chính
  typeOfPayment?: string; // Loại thanh toán
  previousCosingFrom?: Date; // Kỳ chốt cước
  previousCosingTo?: Date;
  financeNote?: string; // Ghi chú

  // Thông tin gửi BK
  notifyEmail?: string; //Email BK theo thông tin KH
  notifyOtherEmail?: string; //Gửi BK theo danh sách Email bổ sung thêm ngoài email ban đầu
  notifyContactPerson?: string; // Người liên hệ
  bookingEmail?: string; //Email bảng kê
  bookingPhone?: string; //Số điện thoại
  bookingMobile?: string; //Số di động

  // Thông tin gửi hóa đơn điện tử
  orderEmailCustomer?: string; //Email hóa đơn theo thông tin KH
  orderOtherEmail?: string; // Gửi Hóa đơn theo danh sách Email bổ sung thêm ngoài email ban đầu
  orderContactPerson?: string; // Người liên hệ
  orderEmail?: string; //Email hóa đơn
  orderPhone?: string; //Số di động

  // Thông tin thu nợ
  debtContactPerson?: string; // Người liên hệ
  debtEmail?: string; // Email thu nợ
  debtPhone?: string; // Số điện thoại
  debtMobile?: string; // Số di động
  debtAddress?: string; // Địa chỉ thu nợ
}

export interface IManagementStaff {
  id?: string;
  staffId: string; // Tên nhân viên
  typeStaff: string; // Loại nhân viên
}

export enum ETypeStaff {
  DEBT_COLLECTOR = 'Nhân viên thu nợ', // Nhân viên thu nợ
  CODE_OPENING_STAFF = ' Nhân viên quản lý khách hàng', // Nhân viên mở mã
  FORWARDING_STAFF = ' Nhân viên giao nhận', // Nhân viên giao nhận
  BUSINESS_STAFF = 'Nhân viên kinh doanh', // Nhân viên kinh doanh
  TELESALE_STAFF = '"Nhân viên Dịch vụ khách hàng', // Nhân viên Telesales
  INVOICING_STAFF = 'Nhân viên xuất hóa đơn', // Nhân viên xuất hóa đơn
}
export interface IUser {
  id: string;
  unitId?: string;
  userId: string | null;
  fullName: string;
  detailAddress: string | null;
  commune: string;
  district: string;
  country: string;
  province: string;
  taxCode: string;
  contactPerson: string;
  phoneNumber: string;
  phoneCode: string;
  email: string;
  typeCustomer: CustomerType;
  type: NetWorkCustomerType;
  service: ServiceEnum;
  postalCode: string;
  state: string;
  note: string;
  fullNameEn: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  user: {
    id: string;
    username: string;
    roleId: string;
    status: string;
    createdAt: string | Date;
    updatedAt: string | Date;
  };
  unit: string | null;
  contract: [];
}

export enum EIdentifierType {
  TAX_CODE = 'Mã số thuế doanh nghiệp', // Mã số thuế doanh nghiệp
  PEOPLE_ID = 'Mã số căn cước công dân/ Chứng minh thư', // Mã số căn cước công dân/ Chứng minh thư
}

export enum ECustomerGroup {
  INDIVIDUAL = 'Cá nhân', // Cá nhân
  BUSINESS_AGENT = 'Đại lý kinh doanh', // Đại lý kinh doanh
  PROCESSING_ENTERPRISES = 'Doanh nghiệp chế xuất', // Doanh nghiệp chế xuất
  ORDINARY_BUSINESS = 'Doanh nghiệp thông thường', // Doanh nghiệp thông thường
}

export enum EServiceRequest {
  SPECIALIZE_LINE = 'Chuyên tuyến', // Chuyên tuyến
  DHL = 'DHL', // DHL
  UPS = 'UPS', // UPS
  FEDEX = 'FEDEX', //Fedex
  SEA_FRIEGHT = 'Sea Frieght', //Sea Frieght
  AIR_FRIEGHT = 'Air Frieght', //Air Frieght
  TRUCKING = 'TRUCKING', //TRUCKING
  CLEARANCE = 'Thông quan', //Thông quan
  UNOFFICIAL_QUOTA = 'Tiểu ngạch', //Tiểu ngạch
  BUY_IT = 'Mua hộ', //Mua hộ
  IMPORT_TAX_BAG = 'Nhập bao thuế', //Nhập bao thuế
  SPLIT_ENTRY = 'Nhập chia tách', //Nhập chia tách
}

export interface IContract {
  id?: string;
  serviceRequestId: string; // Dịch vụ yêu cầu /service/small-service
  potentialRevenueFrom: number; // Doanh thu tiềm năng từ
  potentialRevenueTo: number; // Doanh thu tiềm năng đến
  paymentSchedule: string; // Lịch thanh toán công nợ kể từ ngày chốt bảng kê
  commitmentRate: number; // Tỷ lệ LNG Cam kết nếu xin giá riêng/Tháng
  expertise: boolean; // Thẩm định
  appraisalStaff?: string; // Nhân viên thẩm định
  contractCode: string; // Mã hợp đồng
  contractName: string; // Tên hợp đồng
  typeContract: string; // Loại hợp đồng enum ETypeContract
  contractTermFrom?: Date; // Từ ngày
  contractTermTo?: Date; // Đến ngày
  fixedPriceCode?: string; // Mã bảng giá cố định // Enum EFixedPriceCode
  otherPrice?: number; // Giá khác
  countryContractId?: string; // Country hoặc Zone // /service/zone-small-service/:id
  discountRate?: number; // Tỷ lệ giảm giá (Đánh tỷ lệ %)
  noteContract?: string; // ghi chú hợp đồng
  priceListCode: string; // Mã bảng giá
  timeApplyFrom: Date; // Từ ngày
  timeApplyTo: Date; // Đến ngày
  surcharge: number; // Phụ phí xăng dầu áp dụng
  applicableRate: number; // Tý giá áp dụng
  notePriceList: string;
  files: any;
}

export enum ETypeContract {
  INDEFINITE = 'Không xác định',
  TIME_LIMIT = 'Giới hạn thời gian',
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

export enum EFixedPriceCode {
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  P4 = 'P4',
  P5 = 'P5',
  P6 = 'P6',
  P7 = 'P7',
  P8 = 'P8',
  P9 = 'P9',
  P10 = 'P10',
  OTHER_PRICE = 'Giá khác',
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

export interface InVoiceDetailss {
  typeItemInvoice: InvoiceItemType;
  invoiceType: InvoiceType;
  senderInformation: string;
  receiverInformation: string;
  importers: string;
  invoiceDate: string | Date;
  invoiceNumber: string;
  serviceId: string;
  totalNetWeight: number;
  totalBulkyWeight: number;
  goodsSize: string;
  totalBaleNumber: string;
  currencyId: string;
  reasonExport: string;
  note: string;
  invoiceDetail: IInvoiceDetail;
}
export interface BookingPost {
  total: string;
  vat: string;
  amount: string;
  receiverNote: string;
  receiverCountry: string;
  receiverContactPerson: string;
  receiverDepartment: string;
  receiverPhoneNumber: string;
  otherDeliveryConditions: string;
  note: string;
  receiverPostalCode: string;
  receiverAddress: string;
  payment: string;
  typeOfPaymentId: string;
  partnerBillCode: string;
  oderAccountForeign: string;
  customsDeclarationNumber: string;
  type: CommoditiesType;
  deliveryConditionId: string;
  serviceBookingId: string;
  estimatedDate: string | Date;
  estimateHour: string | Date;
  senderNameVi: string;
  senderNameEn: string;
  senderAddressVi: string;
  senderAddressEn: string;
  senderContactPerson: string;
  senderDepartment: string;
  senderPhoneNumber: string;
  senderNote: string;
  bookingDetail: Array<DetailsBookingPost>;
  receiverName: string;
  isCustomsDeclaration: boolean;
  receiverProvince: string;
  typeItemInvoice: InvoiceItemType;
  invoiceType: InvoiceType;
  senderInformation: string;
  receiverInformation: string;
  importers: string;
  invoiceDate: string | Date;
  invoiceNumber: string;
  serviceId: string;
  totalNetWeight: number;
  totalBulkyWeight: number;
  goodsSize: string;
  totalBaleNumber: string;
  currencyId: string;
  reasonExport: string;
  goodsName: string;
  describe: string;
  quantity: number;
  unitOfMeasure: string;
  price: number;
  totalMoney: number;
  weight: number;
  originOfGoods: string;
  HSCode: string;
  importProceduresPerson: string;
  noteInvoice: string;
  senderPostalCode: string;
  senderProvince: string;
  senderCountry: string;
  isInvoice: boolean;
  isCustomerCreateDeclaration: boolean;
}
export interface IMyBooking {
  booking: {
    customsDeclarationNumber: string;
    type: CommoditiesType;
    serviceBookingId: string;
    partnerBillCode: string;
    estimatedDate: string | Date;
    estimateHour: string | Date;
    deliveryConditionId: string;
    otherDeliveryConditions: string;
    note: string;
    payment: string;
    oderAccountForeign: string;
    typeOfPaymentId: string;
    isCustomsDeclaration: boolean;
    senderNameVi: string;
    senderNameEn: string;
    senderAddressVi: string;
    senderAddressEn: string;
    senderContactPerson: string;
    senderDepartment: string;
    senderPhoneNumber: string;
    senderNote: string;
    receiverName: string;
    receiverAddress: string;
    receiverPostalCode: string;
    receiverCountry: string;
    receiverContactPerson: string;
    receiverDepartment: string;
    receiverPhoneNumber: string;
    receiverNote: string;
    total: number;
    vat: number;
    amount: number;
    bookingDetail: Array<DetailsBookingPost>;
  };
  invoice: {
    invoiceDetail: IInvoiceDetail;
  };
}
export interface IInvoiceDetail {
  goodsName: string;
  describe: string;
  quantity: number;
  unitOfMeasure: string;
  price: number;
  totalMoney: number;
  weight: number;
  originOfGoods: string;
  HSCode: string;
}
export enum CommoditiesType { // Loại hàng hóa
  LICENSE = 'Chứng từ', //Chứng từ
  GARMENT = 'May mặc', //May mặc
  MACHANICAL = ' Cơ khí', // Cơ khí
  ELECTRONIC_COMPONENTS = 'Linh kiện điện tử', //Linh kiện điện tử
  PLASTIC_RUBBER = 'Nhựa, cao su', //Nhựa, cao su
  FOOD = 'Thực phẩm', // Thực phẩm
  OTHER = 'Khác', //Khác
}

export enum BookingStatus {
  NOT_YET_HANDED_OVER = 'Chưa bàn giao', // Chưa bàn giao
  HANDED_OVER = 'Đã bàn giao', // Đã bàn giao
  DONE = 'Giao hàng thành công', // Giao hàng thành công
  CANCEL = 'Đã hủy', // Đã hủy
}

export enum BookingStatusPost {
  NOT_YET_HANDED_OVER = 'NOT_YET_HANDED_OVER', // Chưa bàn giao
  HANDED_OVER = 'HANDED_OVER', // Đã bàn giao
  DONE = 'DONE', // Giao hàng thành công
  CANCEL = 'CANCEL', // Đã hủy
}
export interface OpitionType {
  label: string;
  value: string;
}

export interface AddressCustomer {
  senderNameVi: string;
  senderAddressVi: string;
  senderProvince: string;
  senderCountry: string;
  senderPhoneNumber: string;
  senderPostalCode: string;
}

export interface ReceiverCustome {
  receiverPostalCode: string;
  receiverName: string;
  receiverPhoneNumber: string;
  receiverCountry: string;
  province: string;
  receiverAddress: string;
}

export interface DetailsBookingPost {
  commoditiesTypeId: string;
  shippingItemViId: string;
  description: string;
  originItem: string;
  shippingItemEn: string;
  quantity: number;
  weight: number;
  height: number;
  width: number;
  longs: number;
  bulkyWeight: number;
  numb22?: number;
  calculationUnit: CalculationUnit;
  note: string;
}

export enum InvoiceItemType {
  Commercial_Goods = 'Hàng hoá mậu dịch,',
  Non_Commercial_Goods = 'Hàng hóa phi mậu dịch',
}
export enum InvoiceType {
  Non_Commercial_Invoice = 'Non Commercial Invoice',
  Commercial_Invoice = 'Commercial Invoice',
}
export enum TypeOfPayment {
  PREPAID = 'Thanh toán tại Việt Nam', //Thanh toán tại Việt Nam
  COLLECT_CHARGE = 'Thanh toán tại nước nhận theo order từ đầu nước ngoài', // Thanh toán tại nước nhận theo order từ đầu nước ngoài
  TELEGRAPHIC_TRANSFER_REMITTANCE = ' Chuyển tiền bằng Điện chuyển tiền', // Chuyển tiền bằng Điện chuyển tiền
  MAIL_TRANSFER_REMITTANCE = 'Chuyển tiền bằng Thư chuyển tiền', // Chuyển tiền bằng Thư chuyển tiền
  CASH_AGAINST_DOCUMENT = 'Trả tiền lấy chứng từ', // Trả tiền lấy chứng từ
  COLLECTION = 'Nhờ thu', // Nhờ thu
  LETTER_OF_CREDIT = 'Tín dụng thư', // Tín dụng thư
}
export enum ETypePayment {
  CASH = 'CASH', // Tiền mặt
  TRANSFER = 'TRANSFER', // Chuyển khoản
}

export type BookingDetails = {
  id: string;
  bookingId: string;
  commoditiesType: CommoditiesType;
  name: string;
  description: string;
  quantity: number;
  weight: number;
  height: number;
  width: number;
  longs: number;
  bulkyWeight: number;
  createdAt: string | Date;
  updatedAt: string | Date;
};
export enum UsersRole {
  USER = 'user',
  STAFF = 'staff',
  ADMIN = 'admin',
}
export enum BookingType {
  LICENSE = 'Chứng từ', //Chứng từ,
  COMMODITY = 'Hàng hóa', //Hàng hóa,
}

export interface IInvoiceDetails {
  nameGood: string;
  desGood: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  total: number;
  weight: number;
  hsCode: string;
  originOfGoods: string;
  totalMoney: string;
}

export enum UnitOfMeasure {
  Set = 'Set',
  Piece = 'Piece',
  Pcs = 'Pcs',
  Met = 'Met',
  Roll = 'Roll',
  Box = 'Box',
  Bottle = 'Bottle',
}

export const mockData = [
  { value: 1, label: 'ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT ' },
  { value: 2, label: 'CÁC SẢN PHẨM THỰC VẬT' },
  {
    value: 3,
    label:
      'CHẤT BÉO VÀ DẦU CÓ NGUỒN GỐC TỪ ĐỘNG VẬT HOẶC THỰC VẬT VÀ CÁC SẢN PHẨM TÁCH TỪ CHÚNG; CHẤT BÉO ĂN ĐƯỢC ĐÃ CHẾ BIẾN; CÁC LOẠI SÁP ĐỘNG VẬT HOẶC THỰC VẬT',
  },
  {
    value: 4,
    label:
      'THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ CÁC LOẠI NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN',
  },
  { value: 5, label: 'KHOÁNG SẢN' },
  {
    value: 6,
    label:
      'SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HOÁ CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN',
  },
  {
    value: 7,
    label:
      'PLASTIC VÀ CÁC SẢN PHẨM BẰNG PLASTIC; CAO SU VÀ CÁC SẢN PHẨM BẰNG CAO SU',
  },
  {
    value: 8,
    label:
      'DA SỐNG, DA THUỘC, DA LÔNG VÀ CÁC SẢN PHẨM TỪ DA; YÊN CƯƠNG VÀ BỘ ĐỒ YÊN CƯƠNG; HÀNG DU LỊCH, TÚI XÁCH TAY VÀ CÁC LOẠI ĐỒ CHỨA TƯƠNG TỰ; CÁC MẶT HÀNG TỪ RUỘT ĐỘNG VẬT (TRỪ RUỘT CON TẰM)',
  },
  {
    value: 9,
    label:
      'GỖ VÀ CÁC MẶT HÀNG BẰNG GỖ; THAN TỪ GỖ; LIE VÀ CÁC SẢN PHẨM BẰNG LIE; CÁC SẢN PHẨM TỪ RƠM, CỎ GIẤY HOẶC CÁC VẬT LIỆU TẾT BỆN KHÁC; CÁC SẢN PHẨM BẰNG LIỄU GAI VÀ SONG MÂY',
  },
  {
    value: 10,
    label:
      'PBỘT GIẤY TỪ GỖ HOẶC TỪ NGUYÊN LIỆU XƠ SỢI XENLULO KHÁC; GIẤY LOẠI HOẶC BÌA LOẠI THU HỒI (PHẾ LIỆU VÀ VỤN THỪA); GIẤY VÀ BÌA VÀ CÁC SẢN PHẨM CỦA CHÚNG',
  },
  { value: 11, label: 'NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT' },
  {
    value: 12,
    label:
      'GIÀY, DÉP, MŨ VÀ CÁC VẬT ĐỘI ĐẦU KHÁC, Ô, DÙ, BA TOONG, GẬY TAY CẦM CÓ THỂ CHUYỂN THÀNH GHẾ, ROI GẬY ĐIỀU KHIỂN, ROI ĐIỀU KHIỂN SÚC VẬT THỒ KÉO VÀ CÁC BỘ PHẬN CỦA CÁC LOẠI HÀNG TRÊN; LÔNG VŨ CHẾ BIẾN VÀ CÁC SẢN PHẨM LÀM TỪ LÔNG VŨ CHẾ BIẾN; HOA NHÂN TẠO; CÁC SẢN PHẨM LÀM TỪ TÓC NGƯỜI',
  },
  {
    value: 13,
    label:
      'SẢN PHẨM BẰNG ĐÁ, THẠCH CAO, XI MĂNG, AMIĂNG, MICA HOẶC CÁC VẬT LIỆU TƯƠNG TỰ; ĐỒ GỐM; THUỶ TINH VÀ CÁC SẢN PHẨM BẰNG THUỶ TINH',
  },
  {
    value: 14,
    label:
      'NGỌC TRAI TỰ NHIÊN HOẶC NUÔI CẤY, ĐÁ QUÝ HOẶC ĐÁ BÁN QUÝ, KIM LOẠI QUÝ, KIM LOẠI ĐƯỢC DÁT PHỦ KIM LOẠI QUÝ, VÀ CÁC SẢN PHẨM CỦA CHÚNG; ĐỒ TRANG SỨC LÀM BẰNG CHẤT LIỆU KHÁC; TIỀN KIM LOẠI',
  },
  { value: 15, label: 'KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN' },
  {
    value: 16,
    label:
      'MÁY VÀ CÁC TRANG THIẾT BỊ CƠ KHÍ; THIẾT BỊ ĐIỆN; CÁC BỘ PHẬN CỦA CHÚNG; THIẾT BỊ GHI VÀ TÁI TẠO ÂM THANH, THIẾT BỊ GHI VÀ TÁI TẠO HÌNH ẢNH, ÂM THANH TRUYỀN HÌNH VÀ CÁC BỘ PHẬN VÀ PHỤ KIỆN CỦA CÁC THIẾT BỊ TRÊN',
  },
  {
    value: 17,
    label:
      'XE CỘ, PHƯƠNG TIỆN BAY, TÀU THUYỀN VÀ CÁC THIẾT BỊ VẬN TẢI LIÊN HỢP',
  },
  {
    value: 18,
    label:
      'DỤNG CỤ, THIẾT BỊ VÀ MÁY QUANG HỌC, NHIẾP ẢNH, ĐIỆN ẢNH, ĐO LƯỜNG, KIỂM TRA, CHÍNH XÁC, Y TẾ HOẶC PHẪU THUẬT; ĐỒNG HỒ THỜI GIAN VÀ ĐỒNG HỒ CÁ NHÂN; NHẠC CỤ; CÁC BỘ PHẬN VÀ PHỤ KIỆN CỦA CHÚNG',
  },
  { value: 19, label: 'VŨ KHÍ VÀ ĐẠN; CÁC BỘ PHẬN VÀ PHỤ KIỆN CỦA CHÚNG' },
  { value: 19, label: 'CÁC TÁC PHẨM NGHỆ THUẬT, ĐỒ SƯU TẦM VÀ ĐỒ CỔ' },
  { value: 21, label: 'CÁC MẶT HÀNG KHÁC' },
];
