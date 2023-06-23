const UserNavigation = ({ userNavigation }: { userNavigation: any }) => {
  return (
    <div className='mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4'>
      {userNavigation.map((item: any) => (
        <a
          key={item.name}
          href={item.href}
          className='block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900'
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default UserNavigation;
