/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AttemptFail from '@/components/Icon/AttemptFail';
import Delivered from '@/components/Icon/Delivered';
import Exception from '@/components/Icon/Exception';
import Expired from '@/components/Icon/Expired';
import InfoReceived from '@/components/Icon/InfoReceived';
import InTransit from '@/components/Icon/InTransit';
import OutForDelivery from '@/components/Icon/OutForDelivery';
import Pending from '@/components/Icon/Pending';
import PickUpIcon from '@/components/Icon/PickUpIcon';

export enum StatusType {
  Pending = 'Pending',
  InfoReceived = 'InfoReceived',
  InTransit = 'InTransit',
  OutForDelivery = 'InTransit',
  AttemptFail = 'AttemptFail',
  Delivered = 'Delivered',
  AvailableForPickup = 'AvailableForPickup',
  Exception = 'Exception',
  Expired = 'Expired',
}

export const getStatusTracking = (status: StatusType) => {
  switch (status) {
    case StatusType.AvailableForPickup:
      return <PickUpIcon />;
    case StatusType.InfoReceived:
      return <InfoReceived />;
    case StatusType.Pending:
      return <Pending />;
    case StatusType.InTransit:
      return <InTransit />;
    case StatusType.OutForDelivery:
      return <OutForDelivery />;
    case StatusType.AttemptFail:
      return <AttemptFail />;
    case StatusType.Delivered:
      return <Delivered />;
    case StatusType.Exception:
      return <Exception />;

    default:
      return <Expired />;
  }
};
const SPECIALIZE_LINE = [
  'Japan',
  'HongKong',
  'Taiwan',
  'China 1',
  'China 2',
  'Singapore',
  'Korea',
  'Thailand',
  'USA',
  'EU',
];

const DHL = [
  'Zone 1',
  'Zone 2',
  'Zone 3',
  'Zone 4',
  'Zone 5',
  'Zone 6',
  'Zone 7',
  'Zone 8',
  'Zone 9',
  'Zone 10',
];

const Fedex = [
  'Zone A',
  'Zone B',
  'Zone C',
  'Zone D',
  'Zone E',
  'Zone F',
  'Zone G',
  'Zone H',
];

export enum EServiceRequest {
  SPECIALIZE_LINE = 'SPECIALIZE_LINE', // Chuyên tuyến
  DHL = 'DHL', // DHL
  UPS = 'UPS', // UPS
  FEDEX = 'FEDEX', //Fedex
  SEA_FRIEGHT = 'SEA_FRIEGHT', //Sea Frieght
  AIR_FRIEGHT = 'AIR_FRIEGHT', //Air Frieght
  TRUCKING = 'TRUCKING', //TRUCKING
  CLEARANCE = 'CLEARANCE', //Thông quan
  UNOFFICIAL_QUOTA = 'UNOFFICIAL_QUOTA', //Tiểu ngạch
  BUY_IT = 'BUY_IT', //Mua hộ
  IMPORT_TAX_BAG = 'IMPORT_TAX_BAG', //Nhập bao thuế
  SPLIT_ENTRY = 'SPLIT_ENTRY', //Nhập chia tách
}
export const mockdataDemo = (id?: EServiceRequest) => {
  switch (id) {
    case EServiceRequest.SPECIALIZE_LINE:
      return SPECIALIZE_LINE;
    case EServiceRequest.DHL:
    case EServiceRequest.UPS:
      return DHL;
    case EServiceRequest.FEDEX:
      return Fedex;
    default:
      return [];
  }
};
