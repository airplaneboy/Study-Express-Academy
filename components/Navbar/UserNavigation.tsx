import Link from 'next/link';

const UserNavigation = ({ userNavigation }: { userNavigation: any }) => {
  return (
    <div className='mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4'>
      {userNavigation.map((item: any) => (
        <Link
          key={item.name}
          href={item?.href}
          onClick={item?.onClick}
          className='block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900'
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default UserNavigation;
