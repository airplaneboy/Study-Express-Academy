import Image from 'next/image';
import Link from 'next/link';

const SidebarItems = ({ navigation, classNames }: { navigation: any; classNames: Function }) => {
  {
    /* Sidebar component, swap this element with another sidebar if you like */
  }
  return (
    <div className='flex-1 flex flex-col min-h-0 border-r border-gray-300 '>
      <div className='flex-1 flex flex-col pt-8 pb-4 overflow-y-auto'>
        <nav className='mt-5 flex-1 px-2 lg:space-y-3 space-y-1'>
          {navigation.map((item: any) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-50 text-indigo-700 font-bold '
                  : 'text-gray-600  hover:text-indigo-800 font-medium ',
                'group flex items-center px-4 py-2 text-md rounded-2xl h-11'
              )}
            >
              {item.current ? (
                <item.iconFill
                  className={classNames('mr-3 flex-shrink-0 h-6 w-6 text-indigo-700')}
                  aria-hidden='true'
                />
              ) : (
                <item.icon
                  className={classNames('text-gray-400 group-hover:text-indigo-800 mr-3 flex-shrink-0 h-6 w-6')}
                  aria-hidden='true'
                />
              )}

              {/* <item.icon
                className={classNames(
                  item.current ? 'text-indigo-900' : 'text-gray-400 group-hover:text-indigo-800',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden='true'
              /> */}

              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarItems;
