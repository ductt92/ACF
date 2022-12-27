/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'antd';
import React, { ChangeEvent, useRef } from 'react';
interface FileUploadProps {
  handleSetFileList: (data: any) => void;
  fileList: any;
}
const FileUpload = ({ handleSetFileList, fileList }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    handleSetFileList(e.target.files);
  };
  const handleUploadClick = () => {
    inputRef.current?.click();
  };
  const files = fileList ? [...fileList] : [];
  return (
    <div>
      <input
        type='file'
        ref={inputRef}
        accept='image/png,image/jpg,application/pdf'
        className='hidden'
        multiple
        onChange={handleFileChange}
      />
      {files.map((v: any) => (
        <p key={v.name} className='m-0 p-0'>
          {v.name}
        </p>
      ))}
      <Button onClick={handleUploadClick}>Chọn file</Button>
    </div>
  );
};

export default FileUpload;
