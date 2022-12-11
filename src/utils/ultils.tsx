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
