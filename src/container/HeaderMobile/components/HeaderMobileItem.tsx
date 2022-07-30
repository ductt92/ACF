/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import styles from '../style.module.scss';
interface PropsItem {
  item: any;
  depthLevel: number;
  onClick?(): void;
}

const HeaderMobileItem = (props: PropsItem) => {
  const { item, depthLevel, onClick } = props;
  const [subnav, setSubnav] = useState<boolean>(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <div>
      <li
        className={
          subnav && depthLevel > 0
            ? `${styles.activeSubmenu}`
            : styles.menuChildren
        }
        onClick={item.submenu && showSubnav}
      >
        <Link href={item.href} prefetch={false}>
          <a
            className='inline-block text-[15px] font-bold text-[#2a2a2a]'
            onClick={onClick}
          >
            {item.title}
          </a>
        </Link>
        {subnav && (
          <ul className={`${styles.ulSubMenu}  ${styles.subMenu}`}>
            {item.submenu.map((child: any, key: number) => {
              return (
                <li key={key} className='w-[250px] min-w-[198px] pt-[15px]'>
                  <Link href={child.href} passHref>
                    <a className={styles.beforeText} onClick={onClick}>
                      <BiChevronRight
                        style={{
                          fontSize: 19,
                          display: 'inline-block',
                          color: 'red',
                          marginBottom: 5,
                        }}
                      />

                      {child.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    </div>
  );
};

export default HeaderMobileItem;
