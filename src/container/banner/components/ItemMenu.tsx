/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import TextLink from '@/components/links/TextLink';

const ItemMenu = ({ value }: { value: any }) => {
  return (
    <div>
      <TextLink href={value.href} label={value.title} />
    </div>
  );
};
export default ItemMenu;
