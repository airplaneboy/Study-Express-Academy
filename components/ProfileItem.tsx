const ProfileItem = ({
  stats,
  title,
}: {
  stats: { property: string; value: string; id?: string | number; style?: string }[];
  title: string;
}) => {
  return (
    <div className='w-full border-y max-sm:pt-5 sm:border-2 sm:rounded-2xl p-2 sm:p-5  mb-5 capitalize h-max flex-1'>
      <span className='text-lg font-bold mb-4 text-gray-700 block'>{title}</span>
      {stats?.length <= 0 ? (
        <span className='italic text-gray-500 text-base'>No data</span>
      ) : (
        <ul className=''>
          {stats?.map((stat) => {
            return (
              <li
                key={stat.id ? stat.id : stat.property}
                className='flex justify-between items-center mb-1 shrink py-2'>
                <span className='block text-gray-700 capitalize'>{stat.property}:</span>
                <span
                  className={`block text-gray-500 lg:pl-5 truncate max-w-[10rem] sm:max-w-[15rem] lg:max-w-lg ${
                    stat?.style && stat?.style
                  }`}>
                  {stat.value}
                </span>
              </li>
            );
          }) || (
            <span className='block text-red-500 lg:pl-5 italic'>
              Your data could not be fetched at this moment. Please try again, or contact our support if the error
              persists.
            </span>
          )}
        </ul>
      )}
    </div>
  );
};

export default ProfileItem;
