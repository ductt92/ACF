import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import {
  MOCK_DATA_LIST_BUSINESS_EN,
  MOCK_DATA_LIST_BUSINESS_VI,
} from '@/contants/mock-data/mock-data';

const ListBusiness = () => {
  const { lang } = useTranslation('common');
  const dataList =
    lang === 'vi' ? MOCK_DATA_LIST_BUSINESS_VI : MOCK_DATA_LIST_BUSINESS_EN;

  return (
    <div>
      <ul className='border-[1px] border-[#bfbfbf]'>
        {dataList.map((v, index) => {
          return (
            <Link href={`/detail-post/${v.slug}`} key={index}>
              <li className='border-t-[1px] border-[#bfbfbf]'>
                <a
                  className='block h-auto bg-[#fff] p-[10px_16px_10px_7px] text-[14px] font-bold leading-[21px] text-[#222] hover:text-[#ec3236] active:text-[#ec3236]'
                  style={{ fontFamily: 'Roboto' }}
                >
                  {v.title}
                </a>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ListBusiness;
