import { ACCSESS_TOKEN, REFRESH_TOKEN, USER } from '@/contants/Storage';

type StorageType = 'session' | 'local';

type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => string;
  setItem: (key: string, value: string, type?: StorageType) => boolean;
  removeItem: (key: string, type?: StorageType) => void;
  location: (key: string) => void;
  removeAll: () => void;
};

const storage = (): UseStorageReturnValue => {
  const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' =>
    `${type ?? 'local'}Storage`;

  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

  const getItem = (key: string, type?: StorageType): string => {
    return isBrowser ? window[storageType(type)][key] : '';
  };

  const setItem = (key: string, value: string, type?: StorageType): boolean => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, value);
      return true;
    }

    return false;
  };

  const removeItem = (key: string, type?: StorageType): void => {
    if (isBrowser) {
      window[storageType(type)].removeItem(key);
    }
  };

  const removeMultiple = (list: Array<string>): void => {
    list.forEach((item) => {
      removeItem(item);
    });
  };

  const removeAll = () => {
    const list = [ACCSESS_TOKEN, USER, REFRESH_TOKEN];
    removeMultiple(list);
  };

  const location = (href: string): void => {
    if (isBrowser) {
      window.location.href = href;
    }
  };

  return {
    getItem,
    setItem,
    removeItem,
    location,
    removeAll,
  };
};

export default storage;
