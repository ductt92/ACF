/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';

import ContentLeft from '@/components/ContentLeft';
import FormCustomerRequest from '@/components/FormCustomerRequest';
import InforPost from '@/components/InforPost';

import { DATA_POST_EN, DATA_POST_VI } from '@/contants/common.constants';

const DetailPost = () => {
  const router = useRouter();
  const { lang, t } = useTranslation('common');

  const data = lang === 'vi' ? DATA_POST_VI : DATA_POST_EN;
  const post = data.find((x) => x.slug === router.query.slug);

  return (
    <div className='m-auto w-[1174px] lg:w-full'>
      <div className='float-left'>
        <div className='float-left w-[905px] lg:w-full'>
          <InforPost data={post?.img} />
        </div>
        <div className='float-right lg:float-left lg:mb-[5px] lg:w-full'>
          <FormCustomerRequest />
        </div>
      </div>
      <ContentLeft />
      <div className='float-left w-[905px] lg:w-full lg:px-[10px]'>
        <div className='float-left mb-[30px] h-auto pl-[18px] text-[14px] leading-[22px] text-[#222] lg:w-full'>
          <h1 className='p-[22px_0_20px] text-[29px] font-semibold leading-[32px] text-[#006cb5]'>
            {post?.title}
          </h1>
          <div>
            <div
              style={{
                height: 'auto',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <img src={post?.img2} alt='' />
            </div>
            {post?.desc?.map((value, index) => {
              return (
                <div key={index}>
                  <p>{value.name}</p>
                  <p className='mb-0 py-1'>{value.desc1}</p>
                  <p className='mb-0 py-1'>{value.desc2}</p>
                  <p className='mb-0 py-1'>{value.desc3}</p>
                  <p className='text-right text-[14px] font-bold'>
                    {value.desc4}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {post?.desc ? (
          <>
            <div className='relative float-left mt-[15px] w-full'>
              <span className='float-left w-[174px] border-b-[1px] border-[#006cb5] pl-[20px] pb-[8px] text-[15px] font-semibold text-[#222]'>
                {t('Share')}
              </span>
              <div className='absolute left-[200px] top-[-8px] flex items-center'>
                <div className='m-[0_2px_5px] bg-[rgb(59,_89,_152)] p-[8px]'>
                  <Link href='/#'>
                    <a>
                      <FaFacebookF
                        style={{
                          width: '25px',
                          height: '25px',
                          color: '#fff',
                        }}
                      />
                    </a>
                  </Link>
                </div>
                <div className='m-[0_2px_5px] bg-[rgb(29,_161,_242)] p-[8px]'>
                  <Link href='/#'>
                    <a>
                      <FaTwitter
                        style={{
                          width: '25px',
                          height: '25px',
                          color: '#fff',
                        }}
                      />
                    </a>
                  </Link>
                </div>
                <div className='m-[0_2px_5px] bg-[rgb(132,_132,_132)] p-[8px]'>
                  <Link href='/#'>
                    <a>
                      <FaEnvelope
                        style={{
                          width: '25px',
                          height: '25px',
                          color: '#fff',
                        }}
                      />
                    </a>
                  </Link>
                </div>
                <div className='m-[0_2px_5px] bg-[rgb(203,_32,_39)] p-[8px]'>
                  <Link href='/#'>
                    <a>
                      <FaPinterestP
                        style={{
                          width: '25px',
                          height: '25px',
                          color: '#fff',
                        }}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='float-left mt-[42px]'>
              <h2 className='mb-[30px] mt-[15px]'>
                <span className='border-b-[1px] border-[#ec3235] pb-[3px] text-[29px] font-semibold text-[#ec3235]'>
                  {t('RelatedNews')}
                </span>
              </h2>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default DetailPost;
