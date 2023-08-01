const ProfileItem = ({
  stats,
  title,
}: {
  stats: { property: string; value: string; id?: string | number; style?: string }[];
  title: string;
}) => {
  return (
    <div className='w-full border-2 rounded-2xl p-5  mb-5 capitalize h-max flex-1'>
      <h2 className='text-lg font-bold mb-4 text-gray-700 '>{title}</h2>
      <ul className=''>
        {stats.map((stat) => {
          return (
            <li key={stat.id ? stat.id : stat.property} className='flex justify-between items-center mb-1 shrink'>
              <h5 className='text-gray-700 capitalize'>{stat.property}:</h5>
              <p
                className={`text-gray-500 py-2 lg:pl-5 truncate max-w-[10rem] sm:max-w-[15rem] lg:max-w-lg ${
                  stat?.style && stat?.style
                }`}>
                {stat.value}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileItem;
