import { PlusOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { useRef } from 'react';

import styles from './styles.module.scss';

import {
  DATA_MOCK_DETAIL_TRACK_EN,
  DATA_MOCK_DETAIL_TRACK_VI,
} from '@/contants/mock-data/mock-data';
const { TextArea } = Input;

const TrackForm = () => {
  const { lang, t } = useTranslation('common');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchInput = useRef<any>(null);
  const dataMockDetails =
    lang === 'vi' ? DATA_MOCK_DETAIL_TRACK_VI : DATA_MOCK_DETAIL_TRACK_EN;
  const handleFocus = () => {
    searchInput.current.focus();
  };
  return (
    <>
      <Form>
        <div className={styles.wrappersTrack}>
          <div className='w-full shadow-[0_3px_7px_rgb(20,20,20,20/35%)]'>
            <div className=' min-h-[377px] w-full rounded bg-white shadow-md shadow-gray-500'>
              <div className='p-3'>
                <div className='mt-[22px] mb-2 w-full '>
                  <div className={styles.iconDoc}></div>
                  <span className='h-[45px] text-[15px] font-semibold'>
                    {t('Track').toUpperCase()}
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
                <div className='h-[40px] w-full bg-yellow-primary pt-[5px] text-center'>
                  <input
                    className='w-[80px] cursor-pointer border-[1px] border-white py-[4px] text-[16px] font-medium leading-[18px] text-white'
                    type='button'
                    value={t('Search')}
                    onClick={handleFocus}
                  />
                </div>
                <p className='pt-[13px] text-[12px] font-semibold leading-[16px]  text-[#222]'>
                  {t('Request')}
                </p>
                <ul>
                  {dataMockDetails.map((value, key) => (
                    <li key={key} className='mb-2'>
                      <span className='mr-2 inline-block h-[17px] w-[20px] items-center bg-yellow-primary pb-1 text-center text-[11px] leading-[16px] text-white'>
                        <PlusOutlined style={{ fontSize: '9px' }} />
                      </span>
                      <Link href={value.href || '#'} passHref>
                        <a className='text-[12px] font-semibold text-[#222]'>
                          {value.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
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

export default TrackForm;
