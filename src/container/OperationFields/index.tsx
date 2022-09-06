import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import styles from './styles.module.scss';

import {
  DATA_MOCK_FIELDS_EN,
  DATA_MOCK_FIELDS_VI,
} from '@/contants/mock-data/mock-data';

function OperationFields() {
  const { lang, t } = useTranslation('common');
  const dataField = lang === 'vi' ? DATA_MOCK_FIELDS_VI : DATA_MOCK_FIELDS_EN;
  return (
    <div className='sn:hidden'>
      <h1 className={styles.fieldsAffter}>
        <span className=' float-left border-b-[1px] border-yellow-primary font-semibold'>
          {t('Field')}
        </span>
      </h1>
      <div className=''>
        {dataField.map((value, index) => (
          <div key={index}>
            <div className={styles.contentField}>
              <Link href={value.href} passHref>
                <a className='float-left'>
                  <Image src={value.src} alt='' width='400' height='160' />
                </a>
              </Link>
              <div className={styles.boxContent}>
                <b className='float-left w-full text-[20px] font-semibold leading-[22px]'>
                  {value.title}
                </b>
                <p className='float-left mt-[10px] w-full pr-[7px] text-[14px] leading-[22px] text-[#222] '>
                  <Link href='/#' passHref>
                    <a className='font-semibold text-[#222] hover:text-black'>
                      {value.desc}
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OperationFields;
