'use client';
import SignButton from '@/components/SignButton';
// import Link from 'next/link';
import { Link } from 'react-scroll';
import { useSession } from 'next-auth/react';
import courses from '@/lib/data/courses';

export default function Home() {
  const { data: session, update } = useSession();

  const sessionLog = () => console.log(session?.user);

  const sessionUpdate = async () => await update({ email: 'james' });

  const sendPatch = async () => {
    const response = await fetch('http://localhost:3000/api/v1/users/agarasulaimany1000@gmail.com/profile', {
      method: 'PATCH',
      body: JSON.stringify({ firstName: 'jake' }),
      cache: 'no-store',
    });
    console.log(await response.json());
  };

  return (
    <main>
      <h1>Homepage</h1>
      {/* <Link href='/protected' className='text-blue-500 hover:text-blue-700  my-10'>
        Protected Page
      </Link> */}
      <Link to='third' smooth={true} duration={500} activeClass='active' spy={true} offset={-500}>
        Go to the link
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
        onClick={async () => console.log(await courses())}>
        get courses
      </button>
      <br />
      <br />
      <SignButton />
      <br />

      <div>
        <button
          className='py-2 px-4 bg-purple-700 my-2 rounded-full text-white'
          onClick={() => {
            sendPatch();
          }}>
          send patch request
        </button>
      </div>

      <div className='bg-black text-white h-screen' id='first'>
        this is the content
      </div>
      <div className='bg-black text-white h-screen mt-10' id='second'>
        this is the second content
      </div>
      <div className='bg-black text-white h-screen mt-10' id='third'>
        this is the third content
      </div>
    </main>
  );
}
