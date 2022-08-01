import { useRouter } from 'next/router';
import { useState } from 'react';

import LoginForm, { FormValueType } from '@/components/LoginForm';

import { ADMINISTATOR } from '@/contants/endpoint';
import AuthenService from '@/services/Authen.service';

export default function LoginFormContainer() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleOnSubmit = async (formValues: FormValueType) => {
    try {
      setLoading(true);
      setError('');
      const res = await AuthenService.login(formValues);
      if (!res) {
        setLoading(false);
        return setError('Login fail');
      }
      setLoading(false);
      router.push(ADMINISTATOR);
    } catch (error) {
      setError('Login fail');
      setLoading(false);
    }
  };
  return (
    <LoginForm onSubmit={handleOnSubmit} loading={loading} errorMsg={error} />
  );
}
