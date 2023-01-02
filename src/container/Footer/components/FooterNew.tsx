import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import {
  MOCK_FOOTER_NEW_EN,
  MOCK_FOOTER_NEW_VI,
} from '@/contants/mock-data/mock-data';
const FooterNew = () => {
  const { lang, t } = useTranslation('common');
  const dataFooterNew = lang === 'vi' ? MOCK_FOOTER_NEW_VI : MOCK_FOOTER_NEW_EN;
  return (
    <div className='float-left w-[170px] sm:hidden lg:w-[20%]'>
      <h4 className='relative mb-0 pb-[5px] text-[17px] font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[83px] after:bg-white'>
        {t('New')}
      </h4>
      <ul className='float-left h-[135px] w-full pt-[20px]'>
        {dataFooterNew.map((value, index) => (
          <div key={index} className='flex items-center'>
            <li className='item-content mb-[3px] flex w-full'>
              <div style={{ height: '9px', width: '5', marginRight: '10px' }}>
                <Image
                  src='/images/mui_fut.png'
                  alt='[ico]'
                  height={9}
                  width={5}
                />
              </div>
              <Link href={value.href} passHref>
                <a className=' text-[14px] text-white'>{value.title}</a>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FooterNew;
