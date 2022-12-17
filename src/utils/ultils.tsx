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

export const mockdataDemo = (id?: string) => {
  switch (id) {
    case '35178f8d-4f47-4e56-a743-26242790a11d':
      return SPECIALIZE_LINE;
    case '7aa5eaf6-0fb9-4738-b320-ec6d235e91a2':
      return DHL;
    case '4782d312-66e0-43ea-9ba1-7ffee07128e0':
    case '336247e8-050b-46a2-9a48-d6a6789716db':
      return Fedex;
    default:
      return [];
  }
};
