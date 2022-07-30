import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import styles from './style.module.scss';
const Breadcumb = () => {
  const { t } = useTranslation('common');
  const useRouterPath = () => {
    const router = useRouter();
    const route = router.pathname;
    return route;
  };

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
    <div>
      <div className='absolute bottom-auto ml-[24px] mt-[-21px] h-[48px] w-[857px] rounded-[5px] bg-[#fff] px-[18px] shadow-2xl lg:mx-[10px] lg:w-[calc(100%_-_20px)]'>
        <ul className='border-#e5e5e5 flex w-full items-center border-b-[1px] pt-[7px]'>
          <li className={styles.breadcrumd}>
            <Link href='/' passHref>
              <a className='text-[15px] font-bold text-[#2a2a2a]'>
                {t('Home')}
              </a>
            </Link>
          </li>
          {breadcrumd.map((route, index) => {
            return (
              <li key={index}>
                <Link href='' passHref>
                  <p className='mb-0 pl-[1px]  pr-[15px] text-[15px] font-bold text-[#2a2a2a]'>
                    {t(`${route}`)}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcumb;
