const PageNavigation = ({ navigation, classNames }: { navigation: any; classNames: Function }) => {
  return (
    <div className='max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4'>
      {navigation.map((item: any) => (
        <a
          key={item.name}
          href={item.href}
          aria-current={item.current ? 'page' : undefined}
          className={classNames(
            item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
            'block rounded-md py-2 px-3 text-base font-medium'
          )}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default PageNavigation;
