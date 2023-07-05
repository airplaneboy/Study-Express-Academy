import SignButton from '@/components/SignButton';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <Link href='/protected' className='text-blue-500 hover:text-blue-700  my-10'>
        Protected Page
      </Link>
      <br />
      <SignButton />
    </main>
  );
}
