import Image from 'next/image';
import Link from 'next/link';

const SidebarItems = ({ navigation, classNames }: { navigation: any; classNames: Function }) => {
  {
    /* Sidebar component, swap this element with another sidebar if you like */
  }
  return (
    <div className='flex-1  flex flex-col min-h-0 border-r border-gray-300 '>
      <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
        <nav className='mt-5 flex-1 px-2 space-y-1'>
          {navigation.map((item: any) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-200 text-indigo-800 font-bold '
                  : 'text-gray-600 hover:bg-indigo-100 hover:text-gray-900 font-medium ',
                'group flex items-center px-2 py-2 text-md rounded-md h-11'
              )}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-indigo-800',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden='true'
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarItems;
