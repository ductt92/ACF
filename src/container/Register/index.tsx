/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs } from 'antd';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import styles from './style.module.scss';

import Breadcumb from '@/components/Breadcrumb';
import FormTrack from '@/components/FormTrack';

import Coprorate from './components/Coprorate';
import Personal from './components/Personal';

import BANNER from '~/images/bg_dangky.png';
const { TabPane } = Tabs;
const RegisterForm = () => {
  const { t } = useTranslation('common');
  return (
    <div className='m-auto w-[1174px] lg:w-full'>
      <div className='float-left w-[905px] lg:w-full'>
        <div className='relative w-full'>
          <Image src={BANNER} height={262} width={905} alt='[image]' />
        </div>
        <Breadcumb />
        <div className={styles.tabs}>
          <Tabs defaultActiveKey='1' type='card'>
            <TabPane tab={t('Personal')} key='1'>
              <Personal />
            </TabPane>
            <TabPane tab={t('Corporate')} key='2'>
              <Coprorate />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className='float-right lg:float-left lg:mb-[40px] lg:w-full'>
        <FormTrack />
      </div>
    </div>
  );
};

export default RegisterForm;
