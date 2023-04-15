import { useEffect, useRef } from 'react';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';
import { NEXT_AUTH_STATUS } from '@/utils/general';
import { useRouter } from 'next/router';

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const { ok } = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (ok) {
      console.log('handleOnSubmit ok? ', ok);
      await router.push('/');
    }
  };

  useEffect(() => {
    console.log('session: ', session);
  }, [session]);

  useEffect(() => {
    if (NEXT_AUTH_STATUS.AUTHENTICATED === status)
      console.log('status: ', status);
    else console.log('status: ', status);
  }, [status]);

  const handleSignOut = async () => {
    const res = await signOut();
    console.log('res: ', res);
  };

  return (
    <div>
      <div>
        <input
          ref={emailRef}
          name={'email'}
          type="text"
          defaultValue={'some12@some.com'}
        />
        <input
          ref={passwordRef}
          name={'password'}
          type="text"
          defaultValue={'password'}
        />
      </div>
      <div>
        <button onClick={handleOnSubmit}>Sign In</button>
        {session && <button onClick={handleSignOut}>Sign Out</button>}
      </div>
    </div>
  );
};

export default SignIn;
