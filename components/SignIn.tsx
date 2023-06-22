import Link from 'next/link';

const SignIn = ({ value, href, image }: { value: string; href: string; image: any }) => {
  return (
    <div>
      <Link
        href={href}
        className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
      >
        <span className='sr-only'>{value}</span>
        {image}
      </Link>
    </div>
  );
};

export default SignIn;
