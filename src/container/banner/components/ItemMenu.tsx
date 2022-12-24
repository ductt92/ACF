/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import TextLink from '@/components/links/TextLink';

const ItemMenu = ({ value }: { value: any }) => {
  return <TextLink href={value.href} label={value.title} />;
};
export default ItemMenu;
