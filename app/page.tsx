'use client';
import SignButton from '@/components/SignButton';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, update } = useSession();

  const sessionLog = () => console.log(session);

  const sessionUpdate = async () => await update({ email: 'james' });

  return (
    <main>
      <h1>Homepage</h1>
      <Link href='/protected' className='text-blue-500 hover:text-blue-700  my-10'>
        Protected Page
      </Link>
      <br />
      <button className='text-blue-500 hover:text-blue-700' onClick={() => sessionLog()}>
        log session
      </button>
      <br />
      <br />
      <button className='text-green-500 hover:text-green-700' onClick={() => sessionUpdate()}>
        update session
      </button>
      <br />
      <SignButton />
    </main>
  );
}
