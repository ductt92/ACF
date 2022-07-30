import React from 'react';

import styles from './dropdown.module.scss';

import Menu from '@/container/menu';

interface PropsDropDown {
  depthLevel: number;
  submenus: Array<{ title: string; href: string }>;
  dropdown: boolean;
}
const Dropdown = ({ depthLevel, submenus, dropdown }: PropsDropDown) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? `${styles.dropdownSubmenu}` : '';
  return (
    <ul
      className={`${styles.dropdown} ${dropdownClass} ${
        dropdown ? `${styles.show}` : ''
      }`}
    >
      {submenus.map((submenu, key) => (
        <Menu
          items={submenu}
          key={key}
          href={submenu.href}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
