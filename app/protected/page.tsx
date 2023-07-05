import Link from 'next/link';
import React from 'react';

const Protected = () => {
  return (
    <div>
      You have accessed the protected route <br />
      <Link href='/' className='text-blue-500 hover:text-blue-800'>
        Go back
      </Link>
    </div>
  );
};

export default Protected;
