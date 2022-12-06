import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import BannerContainer from '@/container/banner';
import Menu from '@/container/menu';

import {
  DATA_MOCK_MENU_EN,
  DATA_MOCK_MENU_VI,
} from '@/contants/mock-data/mock-data';
const HeaderHome = () => {
  const { lang } = useTranslation('common');
  const dataMenu = lang === 'vi' ? DATA_MOCK_MENU_VI : DATA_MOCK_MENU_EN;
  return (
    <div>
      {/* <div className='relative flex h-[37px] items-center justify-center bg-[#f3f3f3]'>
        <TopBar styledButton='border border-red-500	flex items-center' />
      </div> */}
      <div className='h-[150px] w-full '>
        <BannerContainer />
      </div>

      <nav className='w-full border-[#efbd2b] bg-[#efbd2b] sm:hidden'>
        <ul className='menu-header relative m-auto flex w-[1170px] lg:w-full lg:max-w-[991px]'>
          {dataMenu.map((v, key) => {
            const depthLevel = 0;
            return (
              <div key={key}>
                <li className='flex h-full flex-row border-l-[1px] border-white text-white'>
                  <div className='flex h-[42px] cursor-pointer items-center  font-bold text-white transition-none hover:bg-white hover:text-black sn:px-[20px]'>
                    <Menu
                      items={v}
                      key={key}
                      href={v.href}
                      depthLevel={depthLevel}
                    />
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderHome;
