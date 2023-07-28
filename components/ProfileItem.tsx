const ProfileItem = ({
  stats,
  title,
}: {
  stats: { property: string; value: string; id?: string | number }[];
  title: string;
}) => {
  return (
    <div className='w-full border-2 rounded-2xl p-5 capitalize mb-5 '>
      <h2 className='text-lg font-bold mb-4 text-gray-700'>{title}</h2>
      <ul>
        {stats.map((stat) => {
          return (
            <li key={stat.id ? stat.id : stat.property} className='flex justify-between items-center'>
              <h5 className='text-gray-700 '>{stat.property}:</h5>
              <p className='text-gray-500'>{stat.value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileItem;
