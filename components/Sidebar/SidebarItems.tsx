import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItems = ({ navigation, classNames }: { navigation: any; classNames: Function }) => {
  const pathname = usePathname();

  return (
    <aside className='flex-1 flex flex-col min-h-0  '>
      <div className='flex-1 flex flex-col pt-8 pb-4 max-xl:overflow-y-auto border-r border-gray-200'>
        <nav className='mt-5 flex-1 px-2 max-md:px-7 lg:space-y-5 space-y-1'>
          {navigation.map((object: any) => {
            const { heading, items } = object;

            return (
              <div key={heading} className='flex flex-col gap-1'>
                <span className='font-extrabold uppercase text-xs font-inter text-gray-500'>{heading}</span>
                <div>
                  {items.map((item: any) => {
                    const isActive = pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          isActive
                            ? ` font-bold ${item.color} ${item.bgColor}`
                            : `text-gray-600 ${item.hoverColor} font-medium `,
                          'group flex items-center px-4 py-2 text-base transition-all rounded-2xl h-11 mb-1 '
                        )}>
                        {/* Icons */}
                        {isActive ? (
                          <item.iconFill
                            className={classNames(`transition-all mr-3 flex-shrink-0 h-6 w-6 ${item.color}`)}
                            aria-hidden='true'
                          />
                        ) : (
                          <item.icon
                            className={classNames(
                              `transition-all text-gray-400 mr-3 flex-shrink-0 h-6 w-6 ${item.groupHoverColor}`
                            )}
                            aria-hidden='true'
                          />
                        )}
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default SidebarItems;
