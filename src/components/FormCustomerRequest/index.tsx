import { Form, Input } from 'antd';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { useRef } from 'react';

import styles from './styles.module.scss';

const { TextArea } = Input;

const FormCustomerRequest = () => {
  const { t } = useTranslation('common');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchInput = useRef<any>(null);
  const handleFocus = () => {
    searchInput.current.focus();
  };
  return (
    <>
      <Form>
        <div className={styles.wrappersRequest}>
          <div className='w-full shadow-[0_3px_7px_rgb(20,20,20,20/35%)]'>
            <div className=' min-h-[295px] w-full rounded bg-white shadow-md shadow-gray-500'>
              <div className='p-3'>
                <div className='mt-[20px] mb-2 w-full '>
                  <div className={styles.iconDoc}></div>
                  <span className='h-[45px] text-[15px] font-semibold'>
                    {t('CustomerRequest').toUpperCase()}
                  </span>
                </div>

                <TextArea
                  rows={4}
                  placeholder={t('Tracking')}
                  ref={searchInput}
                  style={{
                    borderRadius: '0',
                    background: '#f5f5f5',
                    fontStyle: 'italic',
                    fontWeight: '500',
                  }}
                />

                <input
                  className={styles.btnSearch}
                  type='button'
                  value={t('Search2')}
                  onClick={handleFocus}
                />
                <p className='mb-0 pt-[13px] text-[12px] font-semibold leading-[16px]  text-[#222]'>
                  {t('Request2')}
                </p>
              </div>

              <div className={styles.bottomTrack}>
                <div
                  className={styles.iconDoc}
                  style={{ marginTop: '22px' }}
                ></div>
                <Link href='/detail-post/lien-he-voi-chung-toi' passHref>
                  <span className='h-[45px] text-[15px] font-semibold'>
                    {t('Contact').toUpperCase()}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default FormCustomerRequest;
