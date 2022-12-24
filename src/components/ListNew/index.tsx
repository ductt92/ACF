/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import styles from './style.module.scss';
interface IProps {
  title: string;
  img: string;
  desc: string;
  time: string;
  slug: any;
}
const ListNew = (props: IProps) => {
  const { title, img, desc, time, slug } = props;
  const { t } = useTranslation('common');
  return (
    <>
      <div className='float-left mr-[15px] mb-[42px] h-[374px] w-[282px] hover:shadow-2xl smm:mb-[10px] smm:w-[100%] lg:mr-0  lg:px-[10px]'>
        <Link href={`/detail-post/${slug}`} passHref>
          <a>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '168px',
                float: 'left',
              }}
            >
              <Image src={img} alt='' objectPosition='center' layout='fill' />
            </div>
          </a>
        </Link>
        <div className='border-#bfbfbf float-left h-[205px] border-[1px] border-t-0 p-[0_15px]'>
          <span className='float-left w-full pt-[16px] text-[11px] font-semibold text-[#222]'>
            <b className='pr-[5px] text-[#ec3337]'>Ngày đăng:</b>
            {time}
          </span>
          <Link href={`/detail-post/${slug}`}>
            <h3
              className={`${styles.title} float-left mt-[8px] mb-[12px] h-[38px] leading-[19px]`}
            >
              <a className=' text-[17px] font-semibold text-[#222] hover:text-[#222]'>
                {title}
              </a>
            </h3>
          </Link>

          <p className='float-left mb-0 h-[50px] text-[14px] font-medium leading-[16px] text-[#222]'>
            {desc}
          </p>
          <Link href={`/detail-post/${slug}`}>
            <a className='float-left mt-[20px] h-[31px] w-[125px] border-[1px] border-[#bfbfbf] bg-[url(/images/xct.png)] bg-[85px_center] bg-no-repeat pl-[29px] text-[15px] font-semibold leading-[31px] text-[#222] hover:border-[#ec3337] hover:bg-[#ec3337] hover:bg-[url(/images/xct_hover.png)] hover:text-[#fff]'>
              {t('Detail')}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListNew;
