'use client';

import { signOut, signIn, useSession } from 'next-auth/react';

const SignButton = () => {
  const { data: session, status, update } = useSession();

  if (session?.user) {
    return (
      <>
        <button className='py-2 px-4 bg-red-700 my-2 rounded-full text-white' onClick={() => signOut()}>
          SignOut
        </button>
      </>
    );
  }

  return (
    <button className='py-2 px-4 bg-blue-700 my-2 rounded-full text-white' onClick={() => signIn()}>
      SignIn
    </button>
  );
};

export default SignButton;
