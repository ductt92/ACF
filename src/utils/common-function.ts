import dayjs from 'dayjs';
import { identity, pickBy } from 'lodash';
import querystring, { StringifyOptions } from 'query-string';

import { FORMAT_DATE_DD_MM_YYYY } from '@/contants/common.constants';

export const formatDateRequest = (date: string | Date | undefined) => {
  return dayjs(date).format().toString();
};

export const formatRangeDate = (date: Date | string) => {
  return dayjs(date, FORMAT_DATE_DD_MM_YYYY).toISOString();
};

export function toQuery(
  url: string,
  params?: object,
  option?: StringifyOptions
) {
  const trulyParams = pickBy(params, identity);
  return `${url}?${querystring.stringify(
    trulyParams || {},
    option || { arrayFormat: 'bracket' }
  )}`;
}

export const dataDHL = [
  {
    value: 1,
    label:
      'Kiện hàng quá trọng (Khoản phụ phí cố định áp dụng cho mỗi kiện hàng, bao gồm pallet có cân nặng hoặc trọng lượng thể tích vượt quá 70kg)',
  },
  {
    value: 2,
    label:
      'Kiện hàng quá khổ (Một khoản phụ phí cố định sẽ được áp dụng trên mỗi gói hàng, tính bao gồm cả pallet, có kích thước một cạnh đơn vượt quá 120cm)',
  },
  {
    value: 3,
    label:
      'Pallet không xếp chồng (Khoản phụ phí cố định này áp dụng cho mỗi pallet trong một lô hàng không xếp chồng lên nhau, hoặc do người gửi yêu cầu, hoặc do hình dạng, vật chứa hay cách đóng gói)',
  },
  {
    value: 4,
    label:
      'Điều chỉnh địa chỉ (Một khoản phụ phí cố định được áp dụng cho mỗi chuyến hàng khi thông tin địa chỉ tại nơi đến được cung cấp bởi người gửi không đầy đủ, không được cập nhật mới hoặc không chính xác dẫn đến việc DHL không thể giao hàng) Khi đó, DHL sẽ tìm kiếm và xác định địa chỉ chính xác để hoàn tất việc giao hàng',
  },
  {
    value: 5,
    label:
      'Điểm đến bị hạn chế (Phụ phí này được áp dụng cho những lô hàng là hàng hóa được vận chuyển đến hoặc nhập khẩu từ những quốc gia cụ thể đang chịu lệnh cấm vận kinh tế từ Hội đồng Bảo an Liên Hiệp Quốc.Các Quốc gia bị ảnh hưởng (subject to change): Cộng hòa Trung Phi, Cộng hòa dân chủ Congo, Iran, Iraq, Bắc Triều Tiên, Libya, Somalia, Syria,Yemen)',
  },
  {
    value: 6,
    label:
      'Rủi ro cao (Phụ phí được áp dụng khi vận chuyển đến một quốc gia mà DHL phải vận hành ở mức rủi ro cao do tình trạng chiến tranh bất ổn và mối đe dọa khủng bố liên tục.Các Quốc gia bị ảnh hưởng (subject to change): Afghanistan, Iraq, Libya, Somalia, Mali, Niger, Sudan, Syria, Ukraine và Yemen)',
  },
  {
    value: 7,
    label:
      'Phát hàng đến khu vực vùng sâu, vùng xa (Phụ phí này được áp dụng cho lô hàng giao đến địa điểm vùng sâu vùng xa hoặc khó tiếp cận)',
  },
  {
    value: 8,
    label:
      'Nhận hàng tại các địa điểm vùng sâu, vùng xa (Nhận hàng tại khu vực vùng sâu, vùng xa)',
  },
];

export const dataFedex = [
  {
    value: 1,
    label:
      'Phụ phí ngoài khu vực giao hàng/nhận hàng (Các lô hàng quốc tế của FedEx Express được giao đến hoặc nhận từ các vùng xa xôi, khó tiếp cận sẽ bị tính phụ phí ngoài vùng giao hoặc nhận hàng)',
  },
  {
    value: 2,
    label:
      'Kích thước (Có cạnh dài nhất lớn hơn 121 cm, Có cạnh dài thứ hai lớn hơn 76 cm, hoặc Có chiều dài và chu vi lớn hơn 266 cm (D + 2R + 2C))',
  },
  {
    value: 3,
    label: 'Khối lượng (Có Khối lượng thực tế lớn hơn 31 kg)',
  },
  {
    value: 4,
    label: `Đóng gói - Không được đóng hoàn toàn trong thùng vận chuyển\n
- Được đóng trong thùng vận chuyển không làm bằng vật liệu ván sợi (bìa cứng) gợn sóng, bao gồm nhưng không giới hạn ở kim loại, gỗ, vải bạt, da, nhựa cứng, nhựa mềm hoặc xốp polystyrene giãn nở (ví dụ: xốp)
- Được đóng trong thùng vận chuyển bọc co hoặc quấn bằng dây quấn căng
- Có hình tròn hoặc hình trụ, bao gồm (nhưng không giới hạn) ống gửi thư, lon, xô, thùng, lốp xe, thùng phuy hoặc xô lớn
- Được buộc bằng dải kim loại, nhựa hoặc vải, hoặc có bánh xe, con lăn, tay cầm hoặc dây đai (ví dụ: xe đạp) (bao gồm cả các gói hàng mà bề mặt bên ngoài được bọc lỏng lẻo hoặc có bộ phận nhô ra bên ngoài bề mặt)`,
    children: [
      { label: 'Không được đóng hoàn toàn trong thùng vận chuyển', value: '1' },
      {
        label:
          'Được đóng trong thùng vận chuyển không làm bằng vật liệu ván sợi (bìa cứng) gợn sóng, bao gồm nhưng không giới hạn ở kim loại, gỗ, vải bạt, da, nhựa cứng, nhựa mềm hoặc xốp polystyrene giãn nở (ví dụ: xốp)',
        value: '2',
      },
      {
        label:
          'Được đóng trong thùng vận chuyển bọc co hoặc quấn bằng dây quấn căng',
        value: '3',
      },
      {
        label:
          'Có hình tròn hoặc hình trụ, bao gồm (nhưng không giới hạn) ống gửi thư, lon, xô, thùng, lốp xe, thùng phuy hoặc xô lớn',
        value: '4',
      },
      {
        label:
          'Được buộc bằng dải kim loại, nhựa hoặc vải, hoặc có bánh xe, con lăn, tay cầm hoặc dây đai (ví dụ: xe đạp) (bao gồm cả các gói hàng mà bề mặt bên ngoài được bọc lỏng lẻo hoặc có bộ phận nhô ra bên ngoài bề mặt)',
        value: '5',
      },
      {
        label:
          'Có thể vướng vào hoặc gây hư hỏng cho các gói hàng khác hoặc hệ thống phân loại của FedEx.',
        value: '6',
      },
    ],
  },
  {
    value: 5,
    label:
      'Hàng hóa nặng (Phụ phí áp dụng đối với lô hàng chứa bất kỳ đơn vị xử lý hàng nặng nào có cạnh dài nhất lớn hơn 157 cm.)',
  },
  {
    value: 6,
    label:
      'Phí hàng quá khổ (Phí hàng quá khổ áp dụng đối với lô hàng chứa các gói hàng dài quá 243 cm hoặc có chiều dài* và chu vi (D+2R+2C) quá 330 cm)',
  },
];

export const dataUPS = [
  {
    value: 1,
    label:
      'Phí AHC là phụ phí Giao Nhận cộng thêm cho các thùng hàng vượt quá mức cho phép của UPS (Tính trên một kiện). Áp dụng cho một trong các trường hợp :',
    children: [
      {
        value: '1',
        label: 'Cạnh dài nhất vượt quá 122cm (hoặc cạnh dài thứ 2 vượt 76cm) ',
      },
      {
        value: '2',
        label: 'Cân nặng (Gross weight) > 32kg ',
      },
      {
        value: '3',
        label:
          'Kiện hàng đóng bằng gỗ/ kim loại/ xốp… (Không đóng bằng thùng carton)',
      },
      {
        value: '4',
        label: 'Kiện hàng đóng có hình trụ/ hình tròn, méo mó…',
      },
    ],
  },
  {
    value: 2,
    label:
      'Phí LPS là phụ phí Hàng Kích Thước Lớn trên các chuyến bay của UPS (Tính trên một kiện). Áp dụng cho một trong các trường hợp :Công thức: [ Tổng 2 chiều ngắn nhất * 2 + Chiều dài nhất ] = A Nếu 300 <A< 400 / Gói hàng có kích thước lớn có trọng lượng tính cước tối thiểu là 40 kg',
  },
  {
    value: 3,
    label:
      'Phí thay đổi địa chỉ đối vưới các lô hàng đã và đang trong quá trình vận chuyển và phát hàng, khách hàng muốn thay đổi địa chỉ phát hàng (Tính trên một kiện hoặc một bưu phẩm) nếu địa chỉ phát hàng không đúng với địa chỉ đã cung cấp trên bill.',
  },
  {
    value: 4,
    label:
      'Phí EAS/ phí RAS là Phí Vùng sâu vùng xa áp dụng cho các lô hàng phát đến địa chỉ xa và không có trong phân bổ vùng được phát tại nhà của hãng (Tính trên 1 bưu phẩm nếu trọng lượng dưới 50kg và tính theo kg nếu trọng lượng trên 50kg)',
  },
  {
    value: 5,
    label: 'Phí Phát hàng ở địa chỉ cá nhân (Tính trên 1 bưu phẩm)',
  },
  {
    value: 6,
    label:
      'Phí trả thuế hộ (Tính trên 1 bưu phẩm) nếu người gởi yêu cầu trả thuế và các phí thông quan liên quan cho người nhận. Phí trả thuế hộ vẫn được tính kể cả khi không phát sinh thuế nhập khẩu và các phí thông quan liên quan',
  },
];
