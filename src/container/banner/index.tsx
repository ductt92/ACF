import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const BannerContainer = () => {
  const { t } = useTranslation('common');
  const contactPhone = t(`ContactPhone`);
  const hotLine = t(`HotLine`);
  return (
    <>
      <Link href='/' passHref>
        <a>
          <Image
            src='/images/logo-acf.png'
            width={110}
            height={70}
            alt='[logo]'
          />
        </a>
      </Link>
      <div className='sn:hidden'>
        <Image src='/images/adv.png' width={165} height={74} alt='[logo]' />
        <Image src='/images/adv1.png' width={165} height={74} alt='[logo]' />
        <Image src='/images/adv2.png' width={165} height={74} alt='[logo]' />
      </div>
      <div className='hotline mr-[40px] flex gap-5 xxs:hidden'>
        <div className='flex items-center gap-2	leading-[15px]'>
          <Image
            src='/images/ic_phone.png'
            width={22}
            height={22}
            alt='[ico]'
          />
          <div>
            <div className='text-[12px] font-semibold text-[#454545]'>
              {contactPhone}
            </div>
            <div className='text-[14px] font-semibold text-[#595959]'>
              (+84) 968 02 22 57
            </div>
          </div>
        </div>
        <div className='flex items-start gap-2 leading-[15px]'>
          <Image
            src='/images/ic_address.png'
            width={16}
            height={23}
            alt='[ico]'
          />
          <div>
            <div className='text-[12px] font-semibold text-[#454545]'>
              {hotLine}
            </div>
            <div className='text-[14px] font-semibold text-[#595959]'>
              19008972
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContainer;
