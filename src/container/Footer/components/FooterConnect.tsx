import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import {
  MOCK_FOOTER_CONTACT_EN,
  MOCK_FOOTER_CONTACT_VI,
} from '@/contants/mock-data/mock-data';
const FooterConnect = () => {
  const { lang, t } = useTranslation('common');
  const dataFooterContact =
    lang === 'vi' ? MOCK_FOOTER_CONTACT_VI : MOCK_FOOTER_CONTACT_EN;
  return (
    <div className='float-left inline-block w-[436px] pl-[30px] sm:w-full sm:py-[10px] sn:pl-[10px] md:w-[40%]'>
      <h4 className='relative mb-0 pb-[5px] text-[17px] font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[83px] after:bg-white'>
        {t('Connect')}
      </h4>
      {dataFooterContact.map((value, index) => (
        <div key={index}>
          <h5 className='pt-[17px] pb-[10px] text-[16px] font-normal text-white'>
            {value.city}
          </h5>
          <span className=' mb-[10px] flex items-center whitespace-pre-line bg-[url(/images/f1.png)] bg-no-repeat pl-[25px] text-[14px] leading-4'>
            <span>
              {value.street} <br />
              {value.locality}
            </span>
          </span>
          <span className='inline-block w-[40.5%] min-w-[160px]  bg-[url(/images/f2.png)] bg-no-repeat pl-[25px] text-[14px]'>
            {value.phone}
          </span>
          <span className='mt-2 inline-block w-[40.5%] min-w-[160px] bg-[url(/images/f2.png)] bg-no-repeat pl-[25px] text-[14px]'>
            {value.callCenter}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FooterConnect;
