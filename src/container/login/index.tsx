import { useRouter } from 'next/router';
import { useState } from 'react';

import LoginForm, { FormValueType } from '@/components/LoginForm';

import { ADMINISTATOR, REFRESH_TOKEN } from '@/contants/endpoint';
import { ACCSESS_TOKEN, USER } from '@/contants/Storage';
import { UsersRole } from '@/contants/types';
import AuthenService from '@/services/Authen.service';
import storage from '@/utils/storage';

export default function LoginFormContainer() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { setItem } = storage();

  const handleOnSubmit = async (formValues: FormValueType) => {
    try {
      setLoading(true);
      setError('');
      const res = await AuthenService.login(formValues);
      if (res) {
        if (res.user.role.name === UsersRole.ADMIN) {
          setItem(ACCSESS_TOKEN, res.tokens.access.token);
          setItem(REFRESH_TOKEN, res.tokens.refresh.token);
          setItem(USER, JSON.stringify(res.user));
          setLoading(false);
          router.push(ADMINISTATOR);
        } else {
          setLoading(false);
          return setError('Login fail');
        }
      } else {
        router.push(ADMINISTATOR);
        setLoading(false);
        return setError('Login fail');
      }
    } catch (error) {
      setError('Login fail');
      setLoading(false);
    }
  };
  return (
    <LoginForm onSubmit={handleOnSubmit} loading={loading} errorMsg={error} />
  );
}
