import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import React, { useRef } from 'react';

import styles from './style.module.scss';

import Button from '@/components/buttons/Button';
const CustomerRequest = () => {
  const { t } = useTranslation('common');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchInput = useRef<any>(null);
  const handleFocus = () => {
    searchInput.current.focus();
  };
  return (
    <div className='ml-[43px]'>
      <h2 className='mt-[75px] mb-0 flex w-full items-center text-[29px] font-semibold tracking-tight text-[#ec3235]'>
        <span className='float-left mb-[12px] mr-[7px] block border-b-[1px] border-[#ec3235]'>
          {t('CustomerRequest')}
        </span>
        <Image src='/images/ic_linhvuc.png' alt='' height={36} width={58} />
      </h2>
      <p className='mb-[35px] text-[14px] text-black'>{t('DescFuntion')}</p>
      <input
        type='text'
        placeholder={t('EnterCode')}
        ref={searchInput}
        className={styles.inputRequest}
      />
      <input type='button' value='' className={styles.buttonRequest} />
      <Button
        className='float-left ml-[80px] mt-[29px] rounded-none border-0 bg-[#ec3236] text-[12px] hover:bg-[#ec3236]'
        style={{ width: 'max-content', height: '32px' }}
        onClick={handleFocus}
      >
        {t('MultipleSearch')}
        <span className='ml-[15px] mb-1 text-[20px]'>&raquo;</span>
      </Button>
    </div>
  );
};

export default CustomerRequest;
