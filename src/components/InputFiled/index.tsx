/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from 'antd';
import React from 'react';

import styles from './style.module.scss';
interface PropsInputFiled {
  label: string;
  placeholder?: string;
  name: string;
  type: string;
  value: any;
  onChange: (e: any) => void;
}

const InputFiled = (props: PropsInputFiled) => {
  const { label, placeholder, name, type, value, onChange } = props;
  return (
    <>
      <div className='p-[10px_0_6px] font-semibold text-[#222]'>
        {label && (
          <label style={{ fontSize: 12 }} htmlFor={name}>
            {label}
          </label>
        )}
      </div>
      <Input
        type={type}
        className={styles.inputType}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default InputFiled;
