/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import TextLink from '@/components/links/TextLink';

interface ItemMenuProps {
  value: any;
  handleAction?: () => void;
}
const ItemMenu = ({ value, handleAction }: ItemMenuProps) => {
  return (
    <div onClick={handleAction && handleAction}>
      <TextLink href={value.href} label={value.title} />
    </div>
  );
};
export default ItemMenu;
