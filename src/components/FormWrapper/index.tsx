import { Spin } from 'antd';
import { PropsWithChildren } from 'react';

type FormWrapperType = PropsWithChildren<{
  loading: boolean;
}>;

export default function FormWrapper({
  loading = false,
  children,
}: FormWrapperType) {
  return (
    <div>
      {loading && (
        <div className='pointer-events-none absolute inset-0 z-[100]	flex h-full w-full items-center justify-center	bg-[#fff] opacity-60	'>
          <Spin />
        </div>
      )}
      {children}
    </div>
  );
}
