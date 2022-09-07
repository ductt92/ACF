export const DATA_MOCK_DETAIL_VI = [
  {
    title: ' LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN ACF',
    describe:
      'Tổng công ty Cổ phần thương mại và dịch vụ Chuyển phát nhanh ACF, được thành lập từ tháng 10/2010 có trụ sở chính đặt tại Hà Nội và hệ thống các chi nhánh đặt tại Hồ Chí Minh',
    src: '/images/value1.jpg',
    slug: 'lich-su-hinh-thanh-va-phat-trien',
  },

  // {
  //   title: ' GIỚI THIỆU VỀ ACF',
  //   describe:
  //     'ACF – PLANET COURIER SERVICES. Tổng Công ty Cổ phần Thương Mại và Dịch vụ Chuyển phát nhanh ACF.',
  //   src: '/images/value2.jpg',
  //   slug: 'gioi-thieu-ve-acf',
  // },

  {
    title: ' DỊCH VỤ VẬN CHUYỂN ĐƯỜNG BIỂN',
    describe:
      'Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ngoài nước.',
    src: '/images/value3.jpg',
    slug: 'van-chuyen-duong-bien',
  },
];

export const DATA_MOCK_DETAIL_EN = [
  // {
  //   title: 'ABOUT ACF',
  //   describe:
  //     'ACF – PLANET COURIER SERVICES. ACF Commercial & Express Service Joint Stock Company.',
  //   src: '/images/value1.jpg',
  //   slug: 'lich-su-hinh-thanh-va-phat-trien',
  // },
  {
    title: 'SEA FREIGHT SERVICES',
    describe: 'International Sea Freight Services: ',
    src: '/images/value2.jpg',
    slug: 'gioi-thieu-ve-acf',
  },
  {
    title: 'GOODS BANNED FROM SENDING AND CONDITIONAL GOODS',
    describe:
      'In order not to interrupt business activities or avoid unfortunate incidents, ACF would like to send to customers a list of prohibited items, restrictions and conditional ...',
    src: '/images/value3.jpg',
    slug: 'van-chuyen-duong-bien',
  },
];

export const DATA_MOCK_MENU_VI = [
  {
    title: 'Dịch vụ sản phẩm',
    href: '/business-fields',
    submenu: [
      {
        title: 'Dịch vụ hàng xuất chuyển phát nhanh đi Quốc Tế',
        href: '/detail-post/dich-vu-van-chuyen-quoc-te',
      },
      {
        title: 'Dịch vụ hàng nhập Chuyển phát nhanh Quốc tế về Việt Nam',
        href: '/detail-post/dich-vu-hang-nhap-chuyen-phat-nhanh-quoc-te-ve-viet-nam',
      },
      {
        title: 'Dịch vụ vận chuyển đường hàng không Quốc Tế',
        href: '/detail-post/dich-vu-van-chuyen-duong-hang-khong',
      },
      {
        title: 'Dịch vụ vận chuyển ePackit/Dropshipping/FBM',
        href: '/detail-post/hang-nhap-quoc-te',
      },
      {
        title: 'Dịch vụ vận chuyển đường biển Trong nước và Quốc tế',
        href: '/detail-post/van-chuyen-duong-bien ',
      },
      {
        title: 'Dịch vụ vận chuyển hàng vào kho Amazon (FBA)',
        href: '/detail-post/cung-cap-dich-vu-logistic-cho-cac-nha-cung-ung-den-amaron',
      },
      {
        title: 'Dịch vụ vận tải đường bộ trong nước',
        href: '/detail-post/dich-vu-van-tai-trong-nuoc',
      },
      {
        title: 'Dịch vụ khai báo hải quan',
        href: '/detail-post/khai-bao-hai-quan',
      },
      {
        title: 'Dịch vụ Thương mại điện tử',
        href: '/detail-post/thuong-mai-dien-tu',
      },
    ],
  },

  {
    title: 'Hỗ trợ khách hàng',
    href: '/customer-supports',
    submenu: [
      {
        title: 'Trung tâm chăm sóc khách hàng',
        href: '/detail-post/dich-vu-cham-soc-khach-hang',
      },
      {
        title: 'Khiếu nại và giải quyết khiếu nại',
        href: '/detail-post/khieu-nai-va-giai-quyet',
        submenu: [
          {
            href: '/detail-post/quy-dinh-ve-xu-ly-khieu-nai',
            title: 'Quy trình xử lý khiếu nại',
          },
        ],
      },
      {
        title: 'Điều khoản quy định',
        href: '/detail-post/cac-dieu-kien-va-dieu-khoan-chap-nhan-hang-hoa',
      },
    ],
  },

  {
    title: 'Tra cứu và Báo giá',
    href: '/network',
    submenu: [
      {
        href: '/detail-post/mang-luoi-trong-nuoc',
        title: 'Tra cứu lộ trình đơn hàng',
      },
      {
        href: '/detail-post/mang-luoi-quoc-te',
        title: 'Báo giá dịch vụ theo yêu cầu',
      },
    ],
  },
  {
    title: 'Về chúng tôi',
    href: '/about',
    submenu: [
      {
        href: '/about',
        title: 'Thông tin chung',
        submenu: [
          {
            href: '/detail-post/gioi-thieu-ve-acf',
            title: 'Giới thiệu',
          },
          {
            href: '/detail-post/lich-su-hinh-thanh-va-phat-trien',
            title: 'Lịch sử hình thành và phát triển',
          },
          {
            href: '/detail-post/an-toan-va-bao-mat',
            title: 'An toàn và bảo mật',
          },
        ],
      },
      {
        href: '/ideology',
        title: 'Triết lý công ty',
        submenu: [
          {
            href: '/detail-post/tu-tuong-chu-dao-cua-doanh-nghiep',
            title: 'Tư tưởng chủ đạo',
          },
          {
            href: '/detail-post/gia-tri-van-hoa-cot-loi',
            title: 'Giá trị văn hóa cốt lõi',
          },
        ],
      },
      {
        href: '/detail-post/lich-su-hinh-thanh-va-phat-trien',
        title: 'Lịch sử hình thành và phát triển',
      },
      {
        href: '/detail-post/he-thong-mang-luoi',
        title: 'Hệ thống mạng lưới',
        submenu: [
          {
            href: '/detail-post/nang-luc-he-thong',
            title: 'Năng lực hệ thống',
          },
          {
            href: '/detail-post/nang-luc-thong-quan',
            title: 'Năng lực thông quan',
          },
          // {
          //   href: '/detail-post/he-thong-mang-luoi',
          //   title: 'Năng lực vận tải',
          // },
        ],
      },
      {
        href: '/detail-post/lich-su-hinh-thanh-va-phat-trien',
        title: 'Đội ngũ nhân viên',
      },
      {
        href: '/detail-post/lich-su-hinh-thanh-va-phat-trien',
        title: 'Đối tác',
      },
    ],
  },
  {
    title: 'Hỗ trợ thông tin',
    href: '/detail-post/lien-he-voi-chung-toi',
    submenu: [
      {
        href: '/detail-post/lien-he-voi-chung-toi',
        title: 'Thông tin liên hệ',
      },
    ],
  },
  {
    title: 'Cơ hội nghề nghiệp',
    href: '/recruitment',
  },
];

export const DATA_MOCK_MENU_EN = [
  {
    title: 'Products and services',
    href: '/business-fields',
    submenu: [
      {
        title: 'Express delivery service to International',
        href: '/detail-post/dich-vu-van-chuyen-quoc-te',
      },
      {
        title: 'Imported goods service International Courier to Vietnam',
        href: '/detail-post/dich-vu-hang-nhap-chuyen-phat-nhanh-quoc-te-ve-viet-nam',
      },
      {
        title: 'International Export Courier Service',
        href: '/detail-post/hang-nhap-quoc-te',
      },
      {
        title: 'International air freight service',
        href: '/detail-post/dich-vu-chuyen-hang-nguy-hiem',
      },
      {
        title: 'Shipping service ePackit/Dropshipping/FBM',
        href: '/detail-post/hang-nhap-quoc-te',
      },
      {
        title: 'Domestic and International sea freight services',
        href: '/detail-post/van-chuyen-duong-bien ',
      },
      {
        title: 'Shipping service to Amazon warehouse (FBA)',
        href: '/detail-post/cung-cap-dich-vu-logistic-cho-cac-nha-cung-ung-den-amaron',
      },
      {
        title: 'Domestic road transport service',
        href: '/detail-post/dich-vu-van-tai-trong-nuoc',
      },
      {
        title: 'Customs declaration service',
        href: '/detail-post/khai-bao-hai-quan',
      },
      {
        title: 'E-commerce service',
        href: '/detail-post/thuong-mai-dien-tu',
      },
    ],
  },

  {
    title: 'Customer supports',
    href: '/customer-supports',
    submenu: [
      {
        title: 'Customer care center',
        href: '/conditional-good',
        submenu: [
          {
            href: '/detail-post/hang-cam-gui-va-hang-co-dieu-kien',
            title: 'Conditional goods',
          },
          {
            title: 'Dangerous goods',
            href: '/detail-post/hang-hoa-nguy-hiem',
          },
        ],
      },
      {
        title: 'Terms and conditions',
        href: '/detail-post/cac-dieu-kien-va-dieu-khoan-chap-nhan-hang-hoa',
      },
      {
        title: 'Complaints and complaint handling',
        href: '/detail-post/dich-vu-cham-soc-khach-hang',
      },
    ],
  },

  {
    title: 'Lookup and Quote',
    href: '/network',
    submenu: [
      {
        href: '/detail-post/mang-luoi-trong-nuoc',
        title: 'Look up the order route',
      },
      {
        href: '/detail-post/mang-luoi-quoc-te',
        title: 'Service quote on request',
      },
    ],
  },
  {
    title: 'About us',
    href: '/about',
    submenu: [
      {
        href: '/about',
        title: 'General information',
        submenu: [
          // {
          //   href: '/detail-post/gioi-thieu-ve-acf',
          //   title: 'About ACF',
          // },
          {
            href: '/detail-post/lich-su-hinh-thanh-va-phat-trien',
            title: 'History of formation and development',
          },
          {
            href: '/detail-post/an-toan-va-bao-mat',
            title: 'Security & Safety',
          },
        ],
      },
      {
        href: '/ideology',
        title: 'Company philosophy',
        submenu: [
          {
            href: '/detail-post/tu-tuong-chu-dao-cua-doanh-nghiep',
            title: 'Main Ideology',
          },
          {
            href: '/detail-post/gia-tri-van-hoa-cot-loi',
            title: 'Core values',
          },
        ],
      },
      {
        href: '/detail-post/lich-su-hinh-thanh-va-phat-trien',
        title: 'History of formation and development',
      },
      {
        href: '/competence',
        title: 'Network system',
        submenu: [
          {
            href: '/detail-post/nang-luc-he-thong',
            title: 'System competence',
          },
          {
            href: '/detail-post/nang-luc-thong-quan',
            title: 'Customs Clearance Capacity',
          },
          {
            href: '/detail-post/he-thong-mang-luoi',
            title: 'Transport competence',
          },
        ],
      },
      {
        href: '/detail-post/lich-su-hinh-thanh-va-phat-trien',
        title: 'The staff',
      },
      {
        href: '/detail-post/lich-su-hinh-thanh-va-phat-trien',
        title: 'Partner',
      },
    ],
  },
  {
    title: 'Support information',
    href: '/detail-post/lien-he-voi-chung-toi',
    submenu: [
      {
        href: '/detail-post/lien-he-voi-chung-toi',
        title: 'Contact information',
      },
    ],
  },
  {
    title: 'Career opportunities',
    href: '/recruitment',
  },
];

export const DATA_MOCK_IMG_SLIDER = [
  {
    img_src: '/images/banner2-chuyen-phat-nhanh-acf.png',
  },
];
export const DATA_MOCK_DETAIL_TRACK_EN: Array<{
  title?: string;
  href?: string;
}> = [];
export const DATA_MOCK_DETAIL_TRACK_VI: Array<{
  title?: string;
  href?: string;
}> = [];
export const DATA_MOCK_FIELDS_EN = [
  {
    title: 'AIR CARGO ',
    desc: 'Air Cargo Service',
    href: '/#',
    // src: '/images/hang-khong.png',
    src: '/images/Air-Cargo.jpg',
  },
  {
    title: 'COURIER',
    desc: 'International Courier Service',
    href: '/#',
    src: '/images/International.jpg',
  },
  {
    title: 'CUSTOMER',
    desc: 'Customs declaration service',
    href: '/#',
    src: '/images/Customs.jpg',
  },
  {
    title: 'FORWARDING',
    desc: 'Logistics and Shipping Services',
    href: '/#',
    src: '/images/Logistics.jpg',
  },
];
export const DATA_MOCK_FIELDS_VI = [
  {
    title: 'AIR CARGO',
    desc: 'Dịch vụ vận chuyển hàng không',
    href: '/detail-post/dich-vu-van-chuyen-duong-hang-khong',
    src: '/images/Air-Cargo.jpg',
  },
  {
    title: 'COURIER',
    desc: 'Dịch vụ chuyển phát nhanh Quốc tế',
    href: '/detail-post/dich-vu-hang-nhap-chuyen-phat-nhanh-quoc-te-ve-viet-nam',
    src: '/images/International.jpg',
  },
  {
    title: 'CUSTOMER',
    desc: 'Dịch vụ khai báo Hải Quan',
    href: '/detail-post/khai-bao-hai-quan',
    src: '/images/Customs.jpg',
  },
  {
    title: 'FORWARDING',
    desc: 'Dịch vụ vận chuyển đường biển',
    href: '/detail-post/van-chuyen-duong-bien',
    src: '/images/Logistics.jpg',
  },
];

export const MOCK_IMAGE_SLIDER = [
  {
    src: '/images/viettel.jpeg',
  },
  {
    src: '/images/ohsung-global-logistics.jpeg',
  },
  {
    src: '/images/dai-su-quan-nhat-ban-tai-viet-nam.jpeg',
  },
  {
    src: '/images/toyota.jpeg',
  },
  {
    src: '/images/Runon.jpeg',
  },
  {
    src: '/images/hitachi.jpeg',
  },
  {
    src: '/images/happy-cargo.jpeg',
  },
];
export const MOCK_FOOTER_CONTACT_EN = [
  {
    city: 'ACF HANOI',
    street: 'Long Canh Villa 95, Vinhomes Thang Long,',
    locality: 'An Khanh Str, Hoai Duc Dist, Ha Noi, Vietnam',
    phone: '(+84) 968 022 257',
    callCenter: '19008972',
  },
];
export const MOCK_FOOTER_CONTACT_VI = [
  {
    city: 'CÔNG TY TNHH DỊCH VỤ VÀ THƯƠNG MẠI ACF',
    street: 'Biệt thự Long Cảnh 95, Vinhomes Thăng Long,',
    locality: 'An Khánh, Hoài Đức, Hà Nội.',
    phone: '(+84) 968 02 22 57',
    callCenter: '19008972',
  },
];
export const MOCK_FOOTER_SUPPORT_EN = [
  {
    title: 'Help and support',
    href: '/detail-post/nhan-biet-va-ngan-ngua-gian-lan',
  },
  {
    title: 'Frequently Asked Questions',
    href: '/detail-post/cau-hoi-thuong-gap',
  },
  {
    title: 'Contact us',
    href: '/detail-post/lien-he-voi-chung-toi',
  },

  {
    title: 'Find ACF . service points',
    href: '/detail-post/trach-nhiem-doanh-nghiep',
  },
];
export const MOCK_FOOTER_SUPPORT_VI = [
  {
    title: 'Giúp đỡ và hỗ trợ',
    href: '/detail-post/nhan-biet-va-ngan-ngua-gian-lan',
  },
  {
    title: 'Câu hỏi thường gặp',
    href: '/detail-post/cau-hoi-thuong-gap',
  },
  {
    title: 'Liên hệ với chúng tôi',
    href: '/detail-post/lien-he-voi-chung-toi',
  },
  {
    title: 'Tìm điểm dịch vụ ACF',
    href: '/detail-post/trach-nhiem-doanh-nghiep',
  },
];
export const MOCK_FOOTER_INFORMATION_EN = [
  {
    title: 'Terms and condition',
    href: '/detail-post/dieu-khoan-su-dung-tai-acf',
  },
  {
    title: 'Notice of Privacy',
    href: '/detail-post/chinh-sach-bao-mat',
  },
];
export const MOCK_FOOTER_INFORMATION_VI = [
  {
    title: 'Điều khoản và điều kiện',
    href: '/detail-post/dieu-khoan-su-dung-tai-acf',
  },
  {
    title: 'Thông báo về Quyền riêng tư',
    href: '/detail-post/chinh-sach-bao-mat',
  },
];
export const MOCK_FOOTER_NEW_VI = [
  {
    title: 'Nhận thức về gian lận',
    href: '/detail-post/nhan-biet-va-ngan-ngua-gian-lan',
  },
  {
    title: 'Thông tin quan trọng',
    href: '/company-new',
  },
];
export const MOCK_FOOTER_NEW_EN = [
  {
    title: 'Fraud awareness',
    href: '/detail-post/nhan-biet-va-ngan-ngua-gian-lan',
  },
  {
    title: 'Important Information',
    href: '/company-new',
  },
];
export const MOCK_IMAGE_SOCIAL = [
  {
    src: '/images/sc1.png',
    url: '',
    href: '/#',
  },
  {
    src: '/images/sc2.png',
    url: '',
    href: '/#',
  },
  {
    src: '/images/sc3.png',
    url: '',
    href: '/#',
  },
  {
    src: '/images/sc4.png',
    url: '',
    href: '/#',
  },
];

export const MOCK_DATA_LIST_BUSINESS_EN = [
  {
    title: 'Express delivery service to International',
    href: '/detail-post/dich-vu-van-chuyen-quoc-te',
  },
  {
    title: 'Imported goods service International Courier to Vietnam',
    href: '/detail-post/dich-vu-hang-nhap-chuyen-phat-nhanh-quoc-te-ve-viet-nam',
  },
  {
    title: 'International Export Courier Service',
    href: '/detail-post/hang-nhap-quoc-te',
  },
  {
    title: 'International air freight service',
    href: '/detail-post/dich-vu-chuyen-hang-nguy-hiem',
  },
  {
    title: 'Shipping service ePackit/Dropshipping/FBM',
    href: '/detail-post/hang-nhap-quoc-te',
  },
  {
    title: 'Domestic and International sea freight services',
    href: '/detail-post/van-chuyen-duong-bien ',
  },
  {
    title: 'Shipping service to Amazon warehouse (FBA)',
    href: '/detail-post/cung-cap-dich-vu-logistic-cho-cac-nha-cung-ung-den-amaron',
  },
  {
    title: 'Domestic road transport service',
    href: '/detail-post/dich-vu-van-tai-trong-nuoc',
  },
  {
    title: 'Customs declaration service',
    href: '/detail-post/khai-bao-hai-quan',
  },
  {
    title: 'E-commerce service',
    href: '/detail-post/thuong-mai-dien-tu',
  },
];

export const MOCK_DATA_LIST_BUSINESS_VI = [
  {
    title: 'Dịch vụ hàng xuất chuyển phát nhanh đi Quốc Tế',
    href: '/detail-post/dich-vu-van-chuyen-quoc-te',
  },
  {
    title: 'Dịch vụ hàng nhập Chuyển phát nhanh Quốc tế về Việt Nam',
    href: '/detail-post/dich-vu-hang-nhap-chuyen-phat-nhanh-quoc-te-ve-viet-nam',
  },
  {
    title: 'Dịch vụ vận chuyển đường hàng không Quốc Tế',
    href: '/detail-post/dich-vu-van-chuyen-duong-hang-khong',
  },
  {
    title: 'Dịch vụ vận chuyển ePackit/Dropshipping/FBM',
    href: '/detail-post/hang-nhap-quoc-te',
  },
  {
    title: 'Dịch vụ vận chuyển đường biển Trong nước và Quốc tế',
    href: '/detail-post/van-chuyen-duong-bien ',
  },
  {
    title: 'Dịch vụ vận chuyển hàng vào kho Amazon (FBA)',
    href: '/detail-post/cung-cap-dich-vu-logistic-cho-cac-nha-cung-ung-den-amaron',
  },
  {
    title: 'Dịch vụ vận tải đường bộ trong nước',
    href: '/detail-post/dich-vu-van-tai-trong-nuoc',
  },
  {
    title: 'Dịch vụ khai báo hải quan',
    href: '/detail-post/khai-bao-hai-quan',
  },
  {
    title: 'Dịch vụ Thương mại điện tử',
    href: '/detail-post/thuong-mai-dien-tu',
  },
];

export const MOCK_DATA_POSTED_ARTICLES_EN = [
  // {
  //   id: '2',
  //   img: '/images/gia-tri-cot-loi.jpeg',
  //   title: 'About ACF',
  //   disc: 'ACF – PLANET COURIER SERVICES. ACF Commercial & Express Service ...',
  //   slug: 'gioi-thieu-ve-acf',
  // },
  {
    id: '3',
    img: '/images/hang-khong.png',
    title: 'Instructions for printing waybill',
    disc: 'ACF instructs customers about the details of how to Print Bill ...',
    slug: 'huong-dan-in-van-don',
  },
];

export const MOCK_DATA_POSTED_ARTICLES_VI = [
  // {
  //   id: '2',
  //   img: '/images/gia-tri-cot-loi.jpeg',
  //   title: 'Giới thiệu về ACF',
  //   disc: 'ACF – PLANET COURIER SERVICES. Tổng Công ty Cổ phần Thương Mại ...',
  //   slug: 'gioi-thieu-ve-acf',
  // },
  {
    id: '3',
    img: '/images/hang-khong.png',
    title: 'Chuyển phát nhanh chuyên tuyến Quốc tế ACF ',
    disc: 'ACF cung cấp tới khách hàng dịch vụ chuyển phát nhanh chuyên ...',
    slug: 'huong-dan-in-van-don',
  },
];

export const DATA_BUSINESS_FIELD_EN = [
  {
    id: 1,
    img: '/images/business1.jpeg',
    slug: 'dich-vu-van-chuyen-duong-hang-khong',
    time: '11/04/2019 13:44:00',
    title: 'PROVIDING LOGISTICS SERVICE FOR SUPPLIERS TO AMAZON',
    desc: 'ACF provides freight and warehousing services from Vietnam to Amazon in the US and Japan for ...',
  },
  {
    id: 2,
    img: '/images/value3.jpg',
    slug: 'van-chuyen-duong-bien',
    time: '10/04/2019 09:23:22',
    title: 'SEA FREIGHT SERVICES',
    desc: ' International Sea Freight Services:',
  },
];
export const DATA_BUSINESS_FIELD_LI = [
  {
    id: 1,
    img: '/images/business1.jpeg',
    slug: 'dich-vu-van-chuyen-duong-hang-khong',
    time: '11/04/2019 13:44:00',
    title: 'DỊCH VỤ VẬN CHUYỂN ĐƯỜNG HÀNG KHÔNG',
    desc: 'ACF cung cấp dịch vụ vận chuyển hàng hóa và kho vận  từ Việt Nam đến sàn Amazon tại Mỹ và Nhật cho ...',
  },
  {
    id: 2,
    img: '/images/value3.jpg',
    time: '10/04/2019 09:23:22',
    slug: 'van-chuyen-duong-bien',
    title: 'DỊCH VỤ VẬN CHUYỂN ĐƯỜNG BIỂN',
    desc: ' Vận tải đường biển là hình thức vận tải ra đời sớm nhất ở Việt Nam chuyên chở hàng hóa trong và ...',
  },
];
export const DATA_CUSTOMER_SUPPORT_EN = [
  {
    id: 1,
    img: '/images/CustomerS1.jpeg',
    slug: 'dich-vu-cham-soc-khach-hang',
    time: '11/04/2019 09:36:16',
    title: 'CUSTOMER CARE SERVICES',
    desc: 'ACF always listens to all customers suggestions and wishes. We hope to give all our customers the ...',
  },
];
export const DATA_CONDTIONAL_LI = [
  {
    id: 1,
    img: '/images/Thumbnail2.jpeg',
    slug: 'hang-cam-gui-va-hang-co-dieu-kien',
    time: '11/04/2019 13:44:00',
    title: 'HÀNG CẤM GỬI & HÀNG CÓ ĐIỀU KIỆN',
    desc: 'Để không làm gián đoạn hoạt động kinh doanh hay tránh được những sự cố không đáng tiếc, ACF xin ...',
  },
  {
    id: 2,
    img: '/images/Thumbnail3.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'hang-hoa-nguy-hiem',
    title: 'HÀNG HÓA NGUY  HIỂM',
    desc: 'Bạn có biết rằng rất nhiều các sản phẩm như pin, các chất axit, chất rắn dễ cháy, sơn móng tay, ...',
  },
];
export const DATA_CONDTIONAL_EN = [
  {
    id: 1,
    img: '/images/Thumbnail2.jpeg',
    slug: 'hang-cam-gui-va-hang-co-dieu-kien',
    time: '11/04/2019 13:44:00',
    title: ' GOODS BANNED FROM SENDING AND CONDITIONAL GOODS',
    desc: 'In order not to interrupt business activities or avoid unfortunate incidents, ACF would like to ...',
  },
];
export const DATA_SOCIETY_LI = [
  {
    id: 1,
    img: '/images/Thumbnail2.jpeg',
    slug: 'hang-cam-gui-va-hang-co-dieu-kien',
    time: '11/04/2019 13:44:00',
    title: 'HÀNG CẤM GỬI & HÀNG CÓ ĐIỀU KIỆN',
    desc: 'Để không làm gián đoạn hoạt động kinh doanh hay tránh được những sự cố không đáng tiếc, ACF xin ...',
  },
  {
    id: 2,
    img: '/images/Thumbnail3.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'hang-hoa-nguy-hiem',
    title: 'HÀNG HÓA NGUY  HIỂM',
    desc: 'Bạn có biết rằng rất nhiều các sản phẩm như pin, các chất axit, chất rắn dễ cháy, sơn móng tay, ...',
  },
];
export const DATA_CHARITY_LI = [
  {
    id: 1,
    img: '/images/Thumbnail9.jpeg',
    slug: 'hanh-trinh-thien-nguyen-xuan-am-ap-tet-se-chia',
    time: '11/04/2019 13:44:00',
    title: 'HÀNH TRÌNH THIỆN NGUYỆN "XUÂN ẤM ÁP - TẾT SẺ CHIA"',
    desc: 'Năm mới, Tết đến, xuân về là lúc con người ta không chỉ hướng về cội nguồn quê hương, về gia đình, ...',
  },
  {
    id: 2,
    img: '/images/Thumbnail10.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'chuong-trinh-tam-thien-nguyen-giup-do-nguoi-ngheo',
    title: 'CHƯƠNG TRÌNH: "TÂM THIỆN NGUYỆN GIÚP ĐỠ NGƯỜI NGHÈO"',
    desc: '"Máu của ai cũng có màu đỏ, con người ai cũng đều có nhu cầu được hạnh phúc. Con người đều có mong ...',
  },
];
export const DATA_CHARITY_EN = [
  {
    id: 1,
    img: '/images/Thumbnail9.jpeg',
    slug: 'hanh-trinh-thien-nguyen-xuan-am-ap-tet-se-chia',
    time: '11/04/2019 13:44:00',
    title: 'HÀNH TRÌNH THIỆN NGUYỆN "XUÂN ẤM ÁP - TẾT SẺ CHIA"',
    desc: 'Năm mới, Tết đến, xuân về là lúc con người ta không chỉ hướng về cội nguồn quê hương, về gia đình, ...',
  },
  {
    id: 2,
    img: '/images/Thumbnail10.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'chuong-trinh-tam-thien-nguyen-giup-do-nguoi-ngheo',
    title: 'CHƯƠNG TRÌNH: "TÂM THIỆN NGUYỆN GIÚP ĐỠ NGƯỜI NGHÈO"',
    desc: '"Máu của ai cũng có màu đỏ, con người ai cũng đều có nhu cầu được hạnh phúc. Con người đều có mong ...',
  },
];
export const DATA_COMPANY_NEW_EN = [
  {
    id: 1,
    img: '/images/hinh-anh-xam.jpeg',
    slug: 'thong-bao-lich-nghi-tet-nguyen-dan-2022',
    time: '11/04/2019 13:44:00',
    title: '',
    desc: '',
  },
  {
    id: 2,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'tam-biet-nam-cu-qua-don-nam-moi-binh-an',
    title: '',
    desc: '',
  },
  {
    id: 3,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'acf-tong-ket-cuoi-nam-2020-chao-xuan-2021-vung-tam-vuon-tam',
    title: '',
    desc: '',
  },
];
export const DATA_COMPANY_NEW_LI = [
  {
    id: 1,
    img: '/images/hinh-anh-xam.jpeg',
    slug: 'thong-bao-lich-nghi-tet-nguyen-dan-2022',
    time: '11/04/2019 13:44:00',
    title: 'THÔNG BÁO LỊCH NGHỈ TẾT NGUYÊN ĐÁN 2022',
    desc: 'Kính gửi: Quý Đối tác, Quý Khách hàng!',
  },
  {
    id: 2,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'tam-biet-nam-cu-qua-don-nam-moi-binh-an',
    title: 'TẠM BIỆT NĂM CŨ QUA – ĐÓN NĂM MỚI BÌNH AN',
    desc: 'Năm 2021 đã đi qua với nhiều sóng gió và biến chuyển của dịch bệnh, của những dấu mốc chưa từng có ...',
  },
  {
    id: 3,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'acf-tong-ket-cuoi-nam-2020-chao-xuan-2021-vung-tam-vuon-tam',
    title: 'ACF TỔNG KẾT CUỐI NĂM 2020 – CHÀO XUÂN 2021: VỮNG TÂM VƯƠN TẦM',
    desc: 'Xuân về, cả đất trời như dệt gấm, thêu hoa. Hơi thở của mùa xuân đang hiện diện trên khắp mọi vùng ...',
  },
];
export const DATA_IDEOLOGY_LI = [
  {
    id: 1,
    img: '/images/hinh-anh-xam.jpeg',
    slug: 'gia-tri-van-hoa-cot-loi',
    time: '11/04/2019 13:44:00',
    title: 'GIÁ TRỊ VĂN HÓA CỐT LÕI',
    desc: 'Giá trị văn hóa cốt lõi là kim chỉ nam định hướng tầm nhìn chiến lược đồng thời là nền tảng chuẩn ...',
  },
  {
    id: 2,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'tu-tuong-chu-dao-cua-doanh-nghiep',
    title: 'TƯ TƯỞNG CHỦ ĐẠO CỦA DOANH NGHIỆP',
    desc: 'Tư tưởng chủ đạo của Doanh nghiệp, Khách hàng là Ông chủ: Dịch vụ của ACF phải đáp ứng vượt trội sự ...',
  },
];
export const DATA_COMPETENCE_LI = [
  // {
  //   id: 1,
  //   img: '/images/hinh-anh-xam.jpeg',
  //   slug: 'he-thong-mang-luoi',
  //   time: '11/04/2019 13:44:00',
  //   title: 'NĂNG LỰC VẬN TẢI',
  //   desc: 'Với việc đầu tư mở rộng mạng lưới trên toàn quốc, phục vụ khách hàng với hệ thống máy móc, phần mềm ...',
  // },
  {
    id: 2,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'nang-luc-thong-quan',
    title: 'NĂNG LỰC THÔNG QUAN',
    desc: 'ACF có giấy phép thông quan theo thông tư 100/2010/TT - BTC về chuyển phát nhanh qua đường hàng ...',
  },
  {
    id: 2,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'nang-luc-he-thong',
    title: 'NĂNG LỰC HỆ THỐNG',
    desc: 'ACF constantly invests in expanding network around the nation, serving customer with the ...',
  },
];
export const DATA_COMPETENCE_EN = [
  {
    id: 1,
    img: '/images/hinh-anh-xam.jpeg',
    slug: 'he-thong-mang-luoi',
    time: '11/04/2019 13:44:00',
    title: 'CUSTOMS CLEARANCE CAPACITY',
    desc: 'ACF has a customs clearance license under Circular 100/2010/TT - BTC on airfreight express delivery ...',
  },
  {
    id: 2,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'nang-luc-thong-quan',
    title: 'NĂNG LỰC THÔNG QUAN',
    desc: 'ACF có giấy phép thông quan theo thông tư 100/2010/TT - BTC về chuyển phát nhanh qua đường hàng ...',
  },
  {
    id: 2,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'nang-luc-he-thong',
    title: 'NĂNG LỰC HỆ THỐNG',
    desc: 'ACF là đại diện tại Việt Nam của Mạng lưới Chuyển phát nhanh Quốc tế Skynet, mạng lưới lớn thứ 5 ...',
  },
];
export const DATA_IDEOLOGY_EN = [
  {
    id: 1,
    img: '/images/hinh-anh-xam.jpeg',
    slug: 'gia-tri-van-hoa-cot-loi',
    time: '11/04/2019 13:44:00',
    title: 'CORE VALUES',
    desc: 'ACF represents Skynet in Vietnam and has an international network of 209 countries. With its ...',
  },
  {
    id: 2,
    img: '/images/hinh-anh-xam.jpeg',
    time: '10/04/2019 14:09:47',
    slug: 'tu-tuong-chu-dao-cua-doanh-nghiep',
    title: 'THE MAIN IDEA OF THE ENTERPRISE',
    desc: 'Ideology of the Enterprise, the Customer is the Boss: The service of ACF must exceed customer ...',
  },
];
export const DATA_CUSTOMER_SUPPORT_VI = [
  {
    id: 1,
    img: '/images/CustomerS1.jpeg',
    slug: 'dich-vu-cham-soc-khach-hang',
    time: '11/04/2019 09:36:16',
    title: 'DỊCH VỤ CHĂM SÓC KHÁCH HÀNG',
    desc: 'ACF luôn lắng nghe mọi góp ý và nguyện vọng của khách hàng. Chúng tôi mong muốn đem đến cho tất cả ...',
  },
];
export const DATA_NETWORK_EN = [
  {
    id: '1',
    img: '/images/mang-luoi-quoc-te.jpeg',
    slug: 'mang-luoi-quoc-te',
    time: '03/09/2018 10:26:09',
    title: 'CUSTOMER CARE SERVICES',
    desc: 'ACF represents Skynet in Vietnam and has an international network of 209 countries. With its ...',
  },
  {
    id: '2',
    img: '/images/hang-khong.png',
    slug: 'mang-luoi-trong-nuoc',
    time: '10/04/2019 14:33:34',
    title: ' DOMESTIC NETWORK',
    desc: 'With the domestic courier network of ACF covered the city, county, town of the big district, and ...',
  },
];
export const DATA_NETWORK_VI = [
  {
    id: '1',
    img: '/images/mang-luoi-quoc-te.jpeg',
    slug: 'mang-luoi-quoc-te',
    time: '11/04/2019 09:36:16',
    title: 'MẠNG LƯỚI QUỐC TẾ',
    desc: 'ACF là đại diện tại Việt Nam của mạng lưới chuyển phát nhanh Quốc tế Skynet. ACF có khả năng thực ...',
  },
];
export const DATA_ABOUT_EN = [
  // {
  //   id: '1',
  //   img: '/images/value2.jpg',
  //   slug: 'gioi-thieu-ve-acf',
  //   time: '19/03/2019 15:05:40',
  //   title: 'ABOUT ACF',
  //   desc: 'ACF – PLANET COURIER SERVICES. PSC Commercial & Express Service Joint Stock Company.',
  // },
  // {
  //   id: '2',
  //   img: '/images/adv.png',
  //   slug: 'he-thong-mang-luoi',
  //   time: '13/08/2018 13:29:10',
  //   title: 'TRANSPORTATION CAPACITY',
  //   desc: 'ACF constantly invests in expanding network around the nation, serving customer with the ...',
  // },
];
export const DATA_ABOUT_VI = [
  // {
  //   id: '1',
  //   img: '/images/value2.jpg',
  //   slug: 'gioi-thieu-ve-acf',
  //   time: '19/03/2019 15:05:40',
  //   title: 'GIỚI THIỆU VỀ ACF',
  //   desc: 'ACF – PLANET COURIER SERVICES. Tổng Công ty Cổ phần Thương Mại và Dịch vụ Chuyển phát nhanh ACF.',
  // },
  // {
  //   id: '2',
  //   img: '/images/adv.png',
  //   slug: 'he-thong-mang-luoi',
  //   time: '10/04/2019 14:33:34',
  //   title: 'NĂNG LỰC VẬN TẢI',
  //   desc: 'Với việc đầu tư mở rộng mạng lưới trên toàn quốc, phục vụ khách hàng với hệ thống máy móc, phần mềm ...',
  // },
];
export const DATA_RECRUITMENT_EN = [];
export const DATA_RECRUITMENT_VI = [];

export const DATA_TOP_VI = [
  {
    title: 'Chính sách bảo mật',
    href: '/detail-post/chinh-sach-bao-mat',
  },
  {
    href: '/detail-post/dieu-khoan-su-dung-tai-acf',
    title: 'Điều khoản sử dụng tại ACF',
  },
];
export const DATA_TOP_EN = [
  {
    title: 'Policy',
    href: '/detail-post/chinh-sach-bao-mat',
  },
  {
    title: 'Terms of use',
    href: '/detail-post/dieu-khoan-su-dung-tai-acf',
  },
];
