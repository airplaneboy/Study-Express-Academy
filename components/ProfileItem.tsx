const ProfileItem = () => {
  return (
    <div className='w-full border-2 rounded-2xl p-5 capitalize'>
      <h2 className='text-lg font-bold'>User statistics</h2>
      <ul>
        <li className='flex justify-between items-center'>
          <h5>Date Joined:</h5>
          <p>12th June, 2021</p>
        </li>
      </ul>
    </div>
  );
};

export default ProfileItem;
