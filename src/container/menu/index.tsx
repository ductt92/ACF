/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import styles from '../../components/dropdown/dropdown.module.scss';

import Dropdown from '@/components/dropdown';

interface IProps {
  href: string;
  depthLevel: number;
  items: any;
}

const Menu = (props: IProps) => {
  const { href, depthLevel, items } = props;
  const [dropdown, setDropdown] = useState<boolean>(false);

  const ref = useRef<any>(null);
  useEffect(() => {
    const handler = (e: any) => {
      if (dropdown && ref.current && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  return (
    <>
      <div
        className='grib grid-cols-3 gap-2'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
      >
        <Link href={`${href}`} passHref>
          <div
            className={`${styles.hoverDropdown}  cursor-pointer px-[35px] py-2 sn:px-[10px] `}
          >
            {items.submenu ? (
              <>
                {depthLevel > 0 ? (
                  <BiChevronRight
                    style={{
                      fontSize: 19,
                      display: 'inline-block',
                      color: 'red',
                      position: 'absolute',
                      left: -2,
                      top: 0,
                    }}
                  />
                ) : (
                  <span className='arrow' />
                )}
                {items.title}

                <Dropdown
                  depthLevel={depthLevel}
                  submenus={items.submenu}
                  dropdown={dropdown}
                />
              </>
            ) : (
              <div>
                {depthLevel > 0 ? (
                  <BiChevronRight
                    style={{
                      fontSize: 19,
                      display: 'inline-block',
                      color: 'red',
                      position: 'absolute',
                      left: -2,
                      top: 0,
                    }}
                  />
                ) : (
                  <span className='arrow' />
                )}
                {items.title}
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Menu;
