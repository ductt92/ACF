import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
interface ITextLink {
  href: string;
  label: string;
  styleLabel?: string;
  styleBody?: string;
}

const TextLink = ({
  href,
  label,
  styleLabel,
  styleBody,
  ...props
}: ITextLink) => {
  return (
    <div className={clsx('', styleBody)} style={{ fontFamily: 'Roboto' }}>
      <Link href={href} {...props}>
        <a
          className={clsx(
            ' text-[16px] font-medium text-[#222] hover:text-[#222]',
            styleLabel
          )}
        >
          {label}
        </a>
      </Link>
    </div>
  );
};

export default TextLink;
