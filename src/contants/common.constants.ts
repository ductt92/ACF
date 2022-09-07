export const BASE_URL = 'https://api.acf.vn';

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

export interface QueryParams {
  page: number;
  search?: string;
  pageSize: number;
}

export interface QueryParams2 {
  page?: number;
  search?: string;
  pageSize?: number;
  startDate?: string | Date;
  endDate?: string | Date;
}

export const QUERY_PARAMS: QueryParams = {
  page: 1,
  pageSize: 10,
  search: '',
};
export const FORMAT_DATE_DD_MM_YYYY = 'DD/MM/YYYY';

export const QUERY_PARAMS_2: QueryParams2 = {
  page: 1,
  pageSize: 10,
  search: '',
  startDate: '',
  endDate: '',
};
export enum LevelStaff { // Trình độ nhân viên
  MASTER = 'Thạc sĩ', //
  UNIVERSITY = ' Đại học', // Đại học
  COLLEGE = 'Cao đẳng', // Cao đẳng
  INTERMEDIATE = 'Trung cấp', // Trung cấp
  HIGH_SCHOOL = 'Trung học phổ thông', // Trung học phổ thông
  FREELANCE_WORKERS = 'Lao động tự do', // Lao động tự do
}

export const DATA_POST_EN = [
  {
    id: '10',
    slug: 'chuyen-phat-nhanh-chuyen-tuyen-quoc-te-acf',
    title:
      'ACF International specialized Routes Express: Japan, Hongkong, Singapore, Korea, Thailand',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
      },
    ],
    img: '/images/banner-6.jpeg',
    img2: '/images/acf.png',
  },
  {
    id: '11',
    slug: 'dich-vu-cpn-quoc-te-khac',
    title: 'Others international Express Services',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
    img: '/images/banner-7.jpeg',
    img2: '/images/acf.png',
  },
  {
    id: '12',
    slug: 'dich-vu-chuyen-hang-nguy-hiem',
    title: 'Dangerous goods services',
    img: '/images/banner-5.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '13',
    slug: 'dich-vu-thong-quan',
    title: 'Customs clearrance services',
    img: '/images/banner-9.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '14',
    slug: 'dich-vu-hang-nhap-chuyen-phat-nhanh-quoc-te-ve-viet-nam',
    title: 'Dịch vụ hàng nhập Chuyển phát nhanh Quốc tế về Việt Nam',
    img: '/images/chuyen-phat-nhanh.png',
    img2: '/images/chuyen-phat-nhanh.png',
    desc: [
      {
        name: 'Khi gửi hàng với ACF từ Nước Ngoài về Việt Nam, Quý khách đang gửi hàng với các chuyên gia trong lĩnh vực vận chuyển hàng hóa quốc tế và dịch vụ giao nhận! ACF cung cấp đa dạng các dịch vụ vận chuyển hàng hóa cùng các giải pháp gửi hàng và theo dõi lô hàng phù hợp với từng nhu cầu của Quý khách.',
        desc1:
          'ACF làm thủ tục thông quan theo thông tư 100/2010/TT - BTC về chuyển phát nhanh qua đường hàng không và thông tư 36/2011/TT - BTC quy định thủ tục hải quan đối với hàng hóa xuất khẩu, nhập khẩu, quá cảnh gửi qua dịch vụ chuyển phát nhanh đường bộ',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '15',
    slug: 'hang-nhap-quoc-te',
    title: 'Dịch vụ vận chuyển ePackit/Dropshipping/FBM',
    img: '/images/hang-nhap.png',
    img2: '/images/hang-nhap.png',
    desc: [
      {
        name: 'ACF là một trong những đơn vị vận chuyển hang đầu cũng cấp dịch vụ ePackit/Dropshipping/FBM từ Việt Nam đi Mỹ. Với sứ mệnh là cầu nối cho các nhà bán lẻ của Việt Nam tiếp với thị trường toàn cầu, ACF luôn nỗ lực hàng ngày để cung cấp dịch vụ giao hàng quốc tế giá rẻ nhất thúc đẩy ngành thương mại điện tử Việt Nam ra Thế giới',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '16',
    slug: 'cung-cap-dich-vu-logistic-cho-cac-nha-cung-ung-den-amaron',
    title: 'Dịch vụ vận chuyển hàng vào kho Amazon (FBA)',
    img: '/images/amazon.png',
    img2: '/images/amazon2.png',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '17',
    slug: 'dich-vu-chuyen-phat-nhanh-noi-dia',
    title: 'Express Service',
    img: '/images/banner-11.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '18',
    slug: 'van-chuyen-duong-bien',
    title: 'Dịch vụ vận chuyển đường biển',
    img: '/images/duong_bien.png',
    img2: '/images/duong-bien.png',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '19',
    slug: 'huong-dan-gui-hang-hoa-buu-pham',
    title: 'Instructions for sending goods and package',
    img: '/images/banner-5.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '20',
    slug: 'huong-dan-in-van-don',
    title: 'Instructions for printing waybill',
    img: '/images/hinh-anh-xam.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '21',
    slug: 'tu-van-dong-goi',
    title: 'Packaging guidelines',
    img: '/images/banner-12.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '22',
    slug: 'cac-dieu-kien-va-dieu-khoan-chap-nhan-hang-hoa',
    title: 'Conditions and terms of acceptance of goods',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '23',
    slug: 'hang-cam-gui-va-hang-co-dieu-kien',
    title: 'Goods banned from sending and conditional goods',
    img: '/images/banner-5.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '24',
    slug: 'dich-vu-cham-soc-khach-hang',
    title: 'Trung tâm chăm sóc khách hàng',
    img: '/images/banner-14.jpeg',

    desc: [
      {
        name: 'Để biết thêm chi tiết và được tư vấn cụ thể hơn về dịch vụ, Quý Khách vui lòng liên hệ với bộ phận Dịch vụ Khách Hàng hoặc Đại diện Kinh Doanh của ACF để được hỗ trợ nhanh nhất theo các địa chỉ liên hệ như sau:',
        desc1: 'Call Center : 1900 8972',
        desc2: 'Hotline : +84 968 022 257',
        desc3: 'Email Center : Support@acf.vn',
        desc4: '',
      },
    ],
  },
  {
    id: '25',
    slug: 'khieu-nai-va-giai-quyet',
    title: 'Khiếu nại và giải quyết',
    img: '/images/hinh-anh-xam.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '26',
    slug: 'mang-luoi-trong-nuoc',
    title: 'Tra cứu lộ trình đơn hàng',
    img: '/images/hinh-anh-xam.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '7',
    slug: 'mang-luoi-quoc-te',
    title: 'Báo giá dịch vụ theo yêu cầu',
    img: '/images/hinh-anh-xam.jpeg',
    img2: '/images/thong-quan.jpeg',
    desc: [
      {
        name: '',
        desc1: 'Hotline : +84 968 022 257',
        desc2: 'Zalo : 0968 022  257/ ID : ACFlogistics',
        desc3: 'Email Center : Support@acf.vn',
        desc4: '',
      },
    ],
  },
  {
    id: '28',
    slug: 'tu-tuong-chu-dao-cua-doanh-nghiep',
    title: 'The main idea of the enterprise',
    img: '/images/banner-5.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '29',
    slug: 'nang-luc-he-thong',
    title: 'System capacity',
    img: '/images/banner-5.jpeg',
    img2: '/images/acf.png',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '30',
    slug: 'nang-luc-thong-quan',
    title: 'Customs clearance capacity',
    img: '/images/banner-5.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '31',
    slug: 'lien-he-voi-chung-toi',
    title: 'Contact',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        desc1: 'Hotline : +84 968 022 257',
        desc2: 'Zalo : 0968 022  257/ ID : ACFlogistics',
        desc3: 'Email Center : Support@acf.vn',
        name: '',
      },
    ],
  },
  {
    id: '32',
    slug: 'dich-vu-van-chuyen-quoc-te',
    title: 'Dịch vụ hàng xuất Chuyển phát nhanh đi Quốc Tế ',
    img: '/images/thong-quan.png',
    desc: [
      {
        desc1: 'Hotline : +84 968 022 257',
        desc2: 'Zalo : 0968 022  257/ ID : ACFlogistics',
        desc3: 'Email Center : Support@acf.vn',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '33',
    slug: 'trach-nhiem-doanh-nghiep',
    title: 'Trách nhiệm Doanh nghiệp',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '34',
    slug: 'nhan-biet-va-ngan-ngua-gian-lan',
    title: 'Nhận biết và Ngăn ngừa gian lận',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '35',
    slug: 'chinh-sach-bao-mat',
    title: 'Chính sách bảo mật',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '36',
    slug: 'cau-hoi-thuong-gap',
    img: '/images/hinh-anh-xam.jpeg',
  },
  {
    id: '37',
    slug: 'dich-vu',
    img: '/images/banner-5.jpeg',
  },
  {
    id: '38',
    slug: 'hang-hoa-nguy-hiem',
    img: '/images/banner-12.jpeg',
    title: 'Hàng hóa nguy hiểm',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '1',
    slug: 'dich-vu-van-chuyen-duong-hang-khong',
    title: 'Dịch vụ vận chuyển đường hàng không Quốc Tế',
    img: '/images/banner-8.jpeg',
    img2: '/images/hang-khong.png',
    desc: [
      {
        name: 'Tại ACF, chúng tôi không chỉ cung cấp dịch vụ vận chuyển hàng hóa xuất khẩu đến các nước trên thế giới mà còn vận chuyển hàng hóa nhập khẩu từ các nước khác vào Việt Nam thông qua đường hàng không. Chúng tôi cung cấp các dịch vụ vận chuyển hàng không nhằm đáp ứng nhu cầu rộng mở của quý khách hàng bao gồm các chuyến bay trực tiếp và quá cảnh.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '2',
    slug: 'van-chuyen-duong-bien',
    title: 'Dịch vụ vận chuyển đường biển',
    img: '/images/duong_bien.png',
    desc: [
      {
        name: 'ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '3',
    slug: 'dich-vu-cham-soc-khach-hang',
    title: 'Trung tâm chăm sóc khách hàng',
    img: '/images/banner-14.jpeg',

    desc: [
      {
        name: 'Để biết thêm chi tiết và được tư vấn cụ thể hơn về dịch vụ, Quý Khách vui lòng liên hệ với bộ phận Dịch vụ Khách Hàng hoặc Đại diện Kinh Doanh của ACF để được hỗ trợ nhanh nhất theo các địa chỉ liên hệ như sau:',
        desc1: 'Call Center : 1900 8972',
        desc2: 'Hotline : +84 968 022 257',
        desc3: 'Email Center : Support@acf.vn',
      },
    ],
  },

  {
    id: '5',
    slug: 'mang-luoi-quoc-te',
    title: 'Báo giá dịch vụ theo yêu cầu',
    img: '/images/hinh-anh-xam.jpeg',
    img2: '/images/thong-quan.jpeg',
    desc: [
      {
        name: '',
        desc1: 'Hotline : +84 968 022 257',
        desc2: 'Zalo : 0968 022  257/ ID : ACFlogistics',
        desc3: 'Email Center : Support@acf.vn',
        desc4: '',
      },
    ],
  },
  {
    id: '6',
    slug: 'mang-luoi-trong-nuoc',
    title: ' Tra cứu lộ trình đơn hàng',
    img: '/images/hinh-anh-xam.jpeg',
    img2: '/images/thong-quan.jpeg',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  // {
  //   id: '7',
  //   slug: 'gioi-thieu-ve-acf',
  //   title: 'ABOUT ACF',
  //   img: '/images/hinh-anh-xam.jpeg',
  //   img2: '/images/thong-quan.jpeg',
  //   desc: [
  //     {
  //       name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
  //       desc1:
  //         'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
  //       desc2:
  //         'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
  //       desc3:
  //         'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
  //       desc4: '',
  //     },
  //   ],
  // },
  {
    id: '8',
    slug: 'he-thong-mang-luoi',
    title: 'Hệ thống mạng lưới',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1:
          'ACF có khả năng thực hiện chuyển phát và giao nhận hàng hóa đến tất cả các khu vực, vùng lãnh thổ trên thế giới.',
        desc2:
          'Đặc biệt, ACF có hệ thống chi nhánh, đại lý  tại nhiều quốc gia khác. Sở hữu những lợi thế về mạng lưới chuyển phát nhanh quốc tế, ACF đảm bảo khả năng đáp ứng đa dạng yêu cầu của khách hàng cũng như mang đến chất lượng dịch vụ tốt hơn, thời gian vận chuyển nhanh hơn đồng thời chi phí vận chuyển cũng được tiết kiệm hơn. ',
        desc3: '',
        desc4: '',
      },
    ],
  },

  {
    id: '37',
    slug: 'dieu-khoan-su-dung-tai-acf',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '40',
    slug: 'quy-dinh-ve-xu-ly-khieu-nai',
    title: 'Quy định về xử lý khiếu nại',
    img: '/images/banner-15.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '41',
    slug: 'lich-su-hinh-thanh-va-phat-trien',
    title: 'Lịch sử hình thành và Phát triển ACF',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '42',
    slug: 'an-toan-va-bao-mat',
    img: '/images/banner-15.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '43',
    img: '/images/hinh-anh-xam.jpeg',
    slug: 'gia-tri-van-hoa-cot-loi',
    title: 'Core Values',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '44',
    img: '/images/banner_cate.png',
    slug: 'tu-tuong-chu-dao-cua-doanh-nghiep',
    title: 'The main idea of the enterprise',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '45',
    img: '/images/banner_cate.png',
    slug: 'video-hinh-anh',
  },
  {
    id: '46',
    img: '/images/banner-1.jpeg',
    slug: 'kinh-doanh-thuc-chien-va-nhung-bai-hoc-kinh-nghiem',
    title: 'Kinh doanh thực chiến và những bài học kinh nghiệm',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '47',
    img: '/images/banner-15.jpeg',
    slug: 'chuong-trinh-tam-thien-nguyen-giup-do-nguoi-ngheo',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '48',
    img: '/images/banner-15.jpeg',
    slug: 'hanh-trinh-thien-nguyen-xuan-am-ap-tet-se-chia',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '49',
    img: '/images/banner-1.jpeg',
    slug: 'thong-bao-lich-nghi-tet-nguyen-dan-2022',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '50',
    img: '/images/banner-1.jpeg',
    slug: 'tam-biet-nam-cu-qua-don-nam-moi-binh-an',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '51',
    img: '/images/banner-1.jpeg',
    slug: 'acf-tong-ket-cuoi-nam-2020-chao-xuan-2021-vung-tam-vuon-tam',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '52',
    img: '/images/van-tai-trong-nuoc.png',
    slug: 'dich-vu-van-tai-trong-nuoc',
    title: 'Dịch vụ vận tải đường bộ trong nước',
    img2: '/images/van-tai-trong-nuoc.png',
    desc: [
      {
        name: 'ACF chúng tôi cung cấp dịch vụ vận tải đường bộ trong nước ( từ vận chuyển Bắc Nam đến vận chuyển nội thành) bằng xe tải và xe container trên từng chuyến hang',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '53',
    img: '/images/hai-quan.png',
    slug: 'khai-bao-hai-quan',
    title: 'Dịch vụ khai báo hải quan',
    img2: '/images/hai-quan.png',
    desc: [
      {
        name: 'Với nhiều quy định về Hải Quan như hiện nay ở Việt Nam, chúng tôi - ACF, với bề dày kinh nghiêm vốn có của mình, sẽ thay mặt khách hàng tiến hành thủ tục thông quan hàng hóa xuất nhập khẩu một cách nhanh gọn và chính xác.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '54',
    img: '/images/thuong-mai-dien-tu.png',
    slug: 'thuong-mai-dien-tu',
    title: 'Dịch vụ Thương mại điện tử',
    img2: '/images/thuong-mai-dien-tu.png',
    desc: [
      {
        name: 'ACF cam kết mang đến mọi chất lượng, dịch vụ tốt nhất trong giao nhận hàng hóa. Chúng tôi hướng đến mục tiêu xây dựng nên một dịch vụ giao nhận trong thương mại điện tử tốt nhất, cung cấp cho khách hàng mọi tiện ích tối đa.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
];
export const DATA_POST_VI = [
  {
    id: '54',
    img: '/images/thuong-mai-dien-tu.png',
    slug: 'thuong-mai-dien-tu',
    title: 'Dịch vụ Thương mại điện tử',
    img2: '/images/thuong-mai-dien-tu.png',
    desc: [
      {
        name: 'ACF cam kết mang đến mọi chất lượng, dịch vụ tốt nhất trong giao nhận hàng hóa. Chúng tôi hướng đến mục tiêu xây dựng nên một dịch vụ giao nhận trong thương mại điện tử tốt nhất, cung cấp cho khách hàng mọi tiện ích tối đa.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '53',
    img: '/images/hai-quan.png',
    slug: 'khai-bao-hai-quan',
    title: 'Dịch vụ khai báo hải quan',
    img2: '/images/hai-quan.png',
    desc: [
      {
        name: 'Với nhiều quy định về Hải Quan như hiện nay ở Việt Nam, chúng tôi - ACF, với bề dày kinh nghiêm vốn có của mình, sẽ thay mặt khách hàng tiến hành thủ tục thông quan hàng hóa xuất nhập khẩu một cách nhanh gọn và chính xác.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '52',
    img: '/images/van-tai-trong-nuoc.png',
    slug: 'dich-vu-van-tai-trong-nuoc',
    title: 'Dịch vụ vận tải đường bộ trong nước',
    img2: '/images/van-tai-trong-nuoc.png',
    desc: [
      {
        name: 'ACF chúng tôi cung cấp dịch vụ vận tải đường bộ trong nước ( từ vận chuyển Bắc Nam đến vận chuyển nội thành) bằng xe tải và xe container trên từng chuyến hang',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '49',
    img: '/images/banner-1.jpeg',
    slug: 'thong-bao-lich-nghi-tet-nguyen-dan-2022',
    title: 'THÔNG BÁO LỊCH NGHỈ TẾT NGUYÊN ĐÁN 2022',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '50',
    img: '/images/banner-1.jpeg',
    slug: 'tam-biet-nam-cu-qua-don-nam-moi-binh-an',
    title: 'Tạm biệt năm cũ qua – Đón năm mới bình an',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
        img: '/images/thong-quan.jpeg',
        img2: '/images/acf.png',
      },
    ],
  },
  {
    id: '51',
    img: '/images/banner-1.jpeg',
    slug: 'acf-tong-ket-cuoi-nam-2020-chao-xuan-2021-vung-tam-vuon-tam',
    title: 'ACF tổng kết cuối năm 2020 – Chào xuân 2021: Vững tâm vươn tầm',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '47',
    img: '/images/banner-15.jpeg',
    slug: 'chuong-trinh-tam-thien-nguyen-giup-do-nguoi-ngheo',
    title: 'Chương trình: "Tâm thiện nguyện giúp đỡ người nghèo"',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '48',
    img: '/images/banner-15.jpeg',
    slug: 'hanh-trinh-thien-nguyen-xuan-am-ap-tet-se-chia',
    title: 'Hành trình thiện nguyện "Xuân ấm áp - Tết sẻ chia"',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },

  {
    id: '46',
    img: '/images/banner-1.jpeg',
    slug: 'kinh-doanh-thuc-chien-va-nhung-bai-hoc-kinh-nghiem',
    title: 'Kinh doanh thực chiến và những bài học kinh nghiệm',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '45',
    img: '/images/banner_cate.png',
    slug: 'video-hinh-anh',
  },
  {
    id: '43',
    img: '/images/hinh-anh-xam.jpeg',
    slug: 'gia-tri-van-hoa-cot-loi',
    title: 'Giá trị văn hóa cốt lõi',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '44',
    img: '/images/banner_cate.png',
    slug: 'tu-tuong-chu-dao-cua-doanh-nghiep',
    title: 'Tư tưởng chủ đạo của Doanh nghiệp',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '42',
    slug: 'an-toan-va-bao-mat',
    title: 'An toàn và bảo mật',
    img: '/images/banner-15.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '1',
    slug: 'dich-vu-van-chuyen-duong-hang-khong',
    title: 'Dịch vụ vận chuyển đường hàng không Quốc Tế',
    img: '/images/banner-8.jpeg',
    img2: '/images/hang-khong.png',
    desc: [
      {
        name: 'Tại ACF, chúng tôi không chỉ cung cấp dịch vụ vận chuyển hàng hóa xuất khẩu đến các nước trên thế giới mà còn vận chuyển hàng hóa nhập khẩu từ các nước khác vào Việt Nam thông qua đường hàng không. Chúng tôi cung cấp các dịch vụ vận chuyển hàng không nhằm đáp ứng nhu cầu rộng mở của quý khách hàng bao gồm các chuyến bay trực tiếp và quá cảnh.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '2',
    slug: 'van-chuyen-duong-bien',
    title: 'Dịch vụ vận chuyển đường biển',
    img: '/images/duong_bien.png',
    img2: '/images/duong-bien.png',
    desc: [
      {
        name: 'ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '3',
    slug: 'dich-vu-cham-soc-khach-hang',
    title: 'Trung tâm chăm sóc khách hàng',
    img: '/images/banner-14.jpeg',

    desc: [
      {
        name: 'Để biết thêm chi tiết và được tư vấn cụ thể hơn về dịch vụ, Quý Khách vui lòng liên hệ với bộ phận Dịch vụ Khách Hàng hoặc Đại diện Kinh Doanh của ACF để được hỗ trợ nhanh nhất theo các địa chỉ liên hệ như sau:',
        desc1: 'Call Center : 1900 8972',
        desc2: 'Hotline : +84 968 022 257',
        desc3: 'Email Center : Support@acf.vn',
        desc4: '',
      },
    ],
  },

  {
    id: '5',
    slug: 'mang-luoi-quoc-te',
    title: 'Báo giá dịch vụ theo yêu cầu',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: 'Hotline : +84 968 022 257',
        desc2: 'Zalo : 0968 022  257/ ID : ACFlogistics',
        desc3: 'Email Center : Support@acf.vn',
        desc4: '',
      },
    ],
  },
  {
    id: '6',
    slug: 'mang-luoi-trong-nuoc',
    title: 'Tra cứu lộ trình đơn hàng',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  // {
  //   id: '7',
  //   slug: 'gioi-thieu-ve-acf',
  //   title: 'Giới thiệu về ACF',
  //   img: '/images/hinh-anh-xam.jpeg',
  //   desc: [
  //     {
  //       name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
  //       desc1:
  //         'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
  //       desc2:
  //         'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
  //       desc3:
  //         'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
  //       desc4: '',
  //     },
  //   ],
  // },
  {
    id: '8',
    slug: 'he-thong-mang-luoi',
    title: 'Hệ thống mạng lưới',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1:
          'ACF có khả năng thực hiện chuyển phát và giao nhận hàng hóa đến tất cả các khu vực, vùng lãnh thổ trên thế giới.',
        desc2:
          'Đặc biệt, ACF có hệ thống chi nhánh, đại lý  tại nhiều quốc gia khác. Sở hữu những lợi thế về mạng lưới chuyển phát nhanh quốc tế, ACF đảm bảo khả năng đáp ứng đa dạng yêu cầu của khách hàng cũng như mang đến chất lượng dịch vụ tốt hơn, thời gian vận chuyển nhanh hơn đồng thời chi phí vận chuyển cũng được tiết kiệm hơn. ',
        desc3: '',
        desc4: '',
      },
    ],
  },

  {
    id: '10',
    slug: 'chuyen-phat-nhanh-chuyen-tuyen-quoc-te-acf',
    title:
      'ACF International specialized Routes Express: Japan, Hongkong, Singapore, Korea, Thailand',
    img: '/images/banner-6.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '11',
    slug: 'dich-vu-cpn-quoc-te-khac',
    title: 'Others international Express Services',
    img: '/images/banner-7.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '12',
    slug: 'dich-vu-chuyen-hang-nguy-hiem',
    title: 'Dangerous goods services',
    img: '/images/banner-5.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '13',
    slug: 'dich-vu-thong-quan',
    title: 'Customs clearrance services',
    img: '/images/banner-9.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '14',
    slug: 'dich-vu-hang-nhap-chuyen-phat-nhanh-quoc-te-ve-viet-nam',
    title: 'Dịch vụ hàng nhập Chuyển phát nhanh Quốc tế về Việt Nam',
    img: '/images/chuyen-phat-nhanh.png',
    img2: '/images/chuyen-phat-nhanh.png',
    desc: [
      {
        name: 'Khi gửi hàng với ACF từ Nước Ngoài về Việt Nam, Quý khách đang gửi hàng với các chuyên gia trong lĩnh vực vận chuyển hàng hóa quốc tế và dịch vụ giao nhận! ACF cung cấp đa dạng các dịch vụ vận chuyển hàng hóa cùng các giải pháp gửi hàng và theo dõi lô hàng phù hợp với từng nhu cầu của Quý khách.',
        desc1:
          'ACF làm thủ tục thông quan theo thông tư 100/2010/TT - BTC về chuyển phát nhanh qua đường hàng không và thông tư 36/2011/TT - BTC quy định thủ tục hải quan đối với hàng hóa xuất khẩu, nhập khẩu, quá cảnh gửi qua dịch vụ chuyển phát nhanh đường bộ',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '15',
    slug: 'hang-nhap-quoc-te',
    title: 'Dịch vụ vận chuyển ePackit/Dropshipping/FBM',
    img: '/images/hang-nhap.png',
    img2: '/images/hang-nhap.png',
    desc: [
      {
        name: 'ACF là một trong những đơn vị vận chuyển hang đầu cũng cấp dịch vụ ePackit/Dropshipping/FBM từ Việt Nam đi Mỹ. Với sứ mệnh là cầu nối cho các nhà bán lẻ của Việt Nam tiếp với thị trường toàn cầu, ACF luôn nỗ lực hàng ngày để cung cấp dịch vụ giao hàng quốc tế giá rẻ nhất thúc đẩy ngành thương mại điện tử Việt Nam ra Thế giới',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '16',
    slug: 'cung-cap-dich-vu-logistic-cho-cac-nha-cung-ung-den-amaron',
    title: 'Dịch vụ vận chuyển hàng vào kho Amazon (FBA)',
    img: '/images/amazon.png',
    img2: '/images/amazon2.png',
    desc: [
      {
        name: 'ACF cung cấp dịch vụ vận chuyển hàng hóa và kho vận từ Việt Nam đến sàn Amazon tại Mỹ cho các nhà sản xuất Việt Nam muốn mở rộng thị phần ra quốc tế.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '17',
    slug: 'dich-vu-chuyen-phat-nhanh-noi-dia',
    title: 'Dịch vụ chuyển phát nhanh Nội Địa chuyên nghiệp',
    img: '/images/banner-11.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '18',
    slug: 'van-chuyen-duong-bien',
    title: 'Dịch vụ vận chuyển đường biển',
    img: '/images/duong_bien.png',
    img2: '/images/duong-bien.png',
    desc: [
      {
        name: 'ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '19',
    slug: 'huong-dan-gui-hang-hoa-buu-pham',
    title: 'Instructions for sending goods and package',
    img: '/images/banner-5.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '20',
    slug: 'huong-dan-in-van-don',
    title: 'Hướng dẫn in Vận đơn',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '21',
    slug: 'tu-van-dong-goi',
    title: 'Tư vấn đóng gói',
    img: '/images/banner-12.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '22',
    slug: 'cac-dieu-kien-va-dieu-khoan-chap-nhan-hang-hoa',
    title: 'Các điều kiện và điều khoản chấp nhận hàng hóa',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '23',
    slug: 'hang-cam-gui-va-hang-co-dieu-kien',
    title: 'Hàng cấm gửi & hàng có điều kiện',
    img: '/images/banner-5.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '24',
    slug: 'dich-vu-cham-soc-khach-hang',
    title: 'Trung tâm chăm sóc khách hàng',
    img: '/images/banner-14.jpeg',

    desc: [
      {
        name: 'Để biết thêm chi tiết và được tư vấn cụ thể hơn về dịch vụ, Quý Khách vui lòng liên hệ với bộ phận Dịch vụ Khách Hàng hoặc Đại diện Kinh Doanh của ACF để được hỗ trợ nhanh nhất theo các địa chỉ liên hệ như sau:',
        desc1: 'Call Center : 1900 8972',
        desc2: 'Hotline : +84 968 022 257',
        desc3: 'Email Center : Support@acf.vn',
        desc4: '',
      },
    ],
  },

  {
    id: '25',
    slug: 'khieu-nai-va-giai-quyet',
    title: 'Khiếu nại và giải quyết',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        name: '',
      },
    ],
  },
  {
    id: '26',
    slug: 'mang-luoi-trong-nuoc',
    title: 'Tra cứu lộ trình đơn hàng',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '27',
    slug: 'mang-luoi-quoc-te',
    title: 'Báo giá dịch vụ theo yêu cầu',
    img: '/images/banner-5.jpeg',
    img2: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: 'Hotline : +84 968 022 257',
        desc2: 'Zalo : 0968 022  257/ ID : ACFlogistics',
        desc3: 'Email Center : Support@acf.vn',
      },
    ],
  },
  {
    id: '28',
    slug: 'tu-tuong-chu-dao-cua-doanh-nghiep',
    title: 'The main idea of the enterprise',
    img: '/images/banner-5.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '29',
    slug: 'nang-luc-he-thong',
    title: 'System capacity',
    img: '/images/banner-5.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '30',
    slug: 'nang-luc-thong-quan',
    title: 'Customs clearance capacity',
    img: '/images/banner-5.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '31',
    slug: 'dich-vu-van-chuyen-quoc-te',
    title: 'Dịch vụ hàng xuất Chuyển phát nhanh đi Quốc Tế ',
    img: '/images/thong-quan.png',
    img2: '/images/thong-quan.png',
    desc: [
      {
        name: 'Khi gửi hàng với ACF từ Việt Nam đi Nước Ngoài, Quý khách đang gửi hàng với các chuyên gia trong lĩnh vực vận chuyển hàng hóa quốc tế và dịch vụ giao nhận! ACF cung cấp đa dạng các dịch vụ đóng gói và vận chuyển nhanh hàng hóa cùng các giải pháp gửi hàng và theo dõi lô hàng phù hợp với từng nhu cầu của Quý khách.',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '36',
    slug: 'cau-hoi-thuong-gap',
    img: '/images/hinh-anh-xam.jpeg',
  },
  {
    id: '35',
    slug: 'chinh-sach-bao-mat',
    title: 'Chính sách bảo mật',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '37',
    slug: 'dich-vu',
    img: '/images/banner-5.jpeg',
  },
  {
    id: '38',
    slug: 'dieu-khoan-su-dung-tai-acf',
    img: '/images/hinh-anh-xam.jpeg',
    title: 'Điều khoản sử dụng tại ACF',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
  {
    id: '32',
    slug: 'lien-he-voi-chung-toi',
    title: 'Liên hệ với chúng tôi',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: 'Hotline : +84 968 022 257',
        desc2: 'Zalo : 0968 022  257/ ID : ACFlogistics',
        desc3: 'Email Center : Support@acf.vn',
        desc4: '',
      },
    ],
  },
  {
    id: '33',
    slug: 'trach-nhiem-doanh-nghiep',
    title: 'Trách nhiệm Doanh nghiệp',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '38',
    slug: 'hang-hoa-nguy-hiem',
    img: '/images/banner-12.jpeg',
    title: 'Hàng hóa nguy hiểm',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '39',
    slug: 'nhan-biet-va-ngan-ngua-gian-lan',
    title: 'Nhận biết và Ngăn ngừa gian lận',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '40',
    slug: 'quy-dinh-ve-xu-ly-khieu-nai',
    title: 'Quy trình về xử lý khiếu nại',
    img: '/images/banner-15.jpeg',
    desc: [
      {
        name: 'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.Dịch vụ vận chuyển đường biển chuyên nghiệp.Với bề dày kinh nghiệm gần 10 năm trong lĩnh vực vận chuyển, ACF tự hào cung cung cấp giải pháp dịch vụ vận tải biển trọn gói, nhanh chóng và an toàn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ đi kèm như thông quan hàng hóa, lưu kho bãi, kiểm tra hàng hóa với gói cước cạnh tranh và tối ưu nhất.',
        desc1:
          'Với sự am hiểu về thủ tục hải quan, xuất nhập khẩu hàng hóa, nắm rõ quy trình thông quan hàng hóa. ACF đã và đang cung cấp các dịch vụ khai báo hải quan trọn gói, cung cấp giao nhận hàng hóa xuất nhập khẩu, giúp quý khách hàng, doanh nghiệp thông quan hàng hóa nhanh chóng nhằm đảm bảo việc kinh doanh của doanh nghiệp và đối tác được thuận lợi.',
        desc2:
          'Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao/gia tăng của Quý khách, ACF luôn củng cố, phát triển đội ngũ nhân viên có nền tảng kiến thưc sâu rộng và bề dày kinh nghiệm nhiều năm trong hoạt động chuyển phát. Hơn thế nữa, ACF mở rộng, cung cấp đa dạng các loại dịch vụ hải quan khác nhau để đảm bảo quá tình thông quan diễn ra nhanh chóng và hiệu quả nhất',
        desc3:
          'Trên tất cả, sự am hiểu và nắm chắc  những quy định trong quy trình khai báo hải quan của ACF sẽ giúp Quý Khách hoàn toàn có thể chuyên tâm điều hành hoạt động kinh doanh của mình, mà không cần phải lo lắng về hàng hóa khi đã tin tưởng giao phó cho ',
        desc4: '',
      },
    ],
  },
  {
    id: '41',
    slug: 'lich-su-hinh-thanh-va-phat-trien',
    title: 'Lịch sử hình thành và Phát triển ACF',
    img: '/images/hinh-anh-xam.jpeg',
    desc: [
      {
        name: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      },
    ],
  },
];
