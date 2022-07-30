/* eslint-disable no-constant-condition */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import ListBusiness from '@/container/BusinessFieldForm/components/ListBusiness';

import { BUSINESS_FIELDS, DETAIL_POST } from '@/contants/endpoint';
import {
  MOCK_DATA_POSTED_ARTICLES_EN,
  MOCK_DATA_POSTED_ARTICLES_VI,
} from '@/contants/mock-data/mock-data';

const ContentLeft = () => {
  const { lang, t } = useTranslation('common');

  const dataMockPost =
    lang === 'vi' ? MOCK_DATA_POSTED_ARTICLES_VI : MOCK_DATA_POSTED_ARTICLES_EN;

  const useRouterPath = () => {
    const router = useRouter();
    const route = router.pathname;
    return route;
  };
  const route = useRouterPath();
  const toPascalCase = (string: string) => {
    return string.replace(/\w+/g, function (w) {
      return w.toUpperCase();
    });
  };

  const useBreadcumbPath = () => {
    const route = useRouterPath();
    const removeQuestionMark = route.replace(/\?/g, '/');
    // eslint-disable-next-line no-useless-escape
    const removeEqual = removeQuestionMark.replace(/\=/g, '/');
    const pathToPascalCase = toPascalCase(removeEqual);
    return pathToPascalCase.split('/');
  };

  const breadcrumd = useBreadcumbPath();
  return (
    <div className='relative float-left w-[269px] p-[10px_10px_10px_0] lg:mt-[10px] lg:w-full lg:px-[10px]'>
      {route === DETAIL_POST ? (
        ''
      ) : (
        <div>
          {breadcrumd.map((route, index) => {
            return (
              <div key={index}>
                <Link href='' passHref>
                  <div className=' h-[20px] cursor-pointer bg-[#0066c8]'>
                    <a className='absolute inline-block pl-[10px] pb-[10px] pr-[15px] text-[14px] font-bold leading-[0px] text-white hover:text-[#fff]'>
                      {t(`${route}`)}
                    </a>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}

      {route === BUSINESS_FIELDS && <ListBusiness />}
      <div className='float-left mt-[19px] w-full border-[1px] border-[#bfbfbf] p-[10px]'>
        <h3 className='after:content relative border-b-[1px] border-[#e5e5e5] pb-[7px] text-[17px] font-semibold text-[#222] after:absolute after:left-0 after:bottom-0 after:mt-[3px] after:mb-[-1px] after:h-[2px] after:w-[76px] after:bg-[#ec3337]'>
          {t('PostedArticles')}
        </h3>
        <div className='float-left mt-[-4px]'>
          {dataMockPost.map((value, index) => {
            return (
              <>
                <div className='float-left mt-[10px] w-full' key={index}>
                  <Link href={`/detail-post/${value.slug}`} passHref>
                    <div>
                      <a className='float-left mr-[8px] object-cover object-center'>
                        <Image src={value.img} alt='' height={78} width={73} />
                      </a>
                      <a
                        className='float-left mt-[-3px] mb-[5px] w-[141px] text-[13px] font-semibold leading-[16px] text-[#222] '
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {value.title}
                      </a>
                    </div>
                  </Link>
                  <p
                    className='float-left w-[141px] text-[12px] font-[500] leading-[14px] lg:w-[calc(100%_-_86px)]'
                    style={{ fontFamily: 'Roboto', marginBottom: 0 }}
                  >
                    {value.disc}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className='float-left mt-[19px] w-full border-[1px] border-[#bfbfbf] p-[10px]'>
        <h3 className='after:content relative border-b-[1px] border-[#e5e5e5] pb-[7px] text-[17px] font-semibold text-[#222] after:absolute after:left-0 after:bottom-0 after:mt-[3px] after:mb-[-1px] after:h-[2px] after:w-[76px] after:bg-[#ec3337]'>
          {t('Video')}
        </h3>
        <div className='mt-[14px] h-[150px] w-full rounded-[2px]'></div>
      </div>
    </div>
  );
};

export default ContentLeft;
