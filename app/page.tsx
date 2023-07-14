'use client';
import SignButton from '@/components/SignButton';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import courses from '@/components/data/Courses';
import { useEffect } from 'react';
import getUsers from '@/lib/getSomedata';

console.log('i was here ');
export default function Home() {
  console.log('no i inside');

  // const { data: session, update } = useSession();

  // const sessionLog = () => console.log(session);

  // const sessionUpdate = async () => await update({ email: 'james' });

  return (
    <main>
      {/* <div>
        {coursesData.map((items: any) => {
          return <h1 key={items.title}>{items.title}</h1>;
        })}
      </div> */}

      <h1>Homepage</h1>
      {/* <Link href='/protected' className='text-blue-500 hover:text-blue-700  my-10'>
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
      <br />
      <button
        className='py-2 px-4 bg-green-700 my-2 rounded-full text-white'
        onClick={async () => console.log(await courses())}
      >
        get courses
      </button>
      <br />
      <br />
      <SignButton /> */}
    </main>
  );
}
