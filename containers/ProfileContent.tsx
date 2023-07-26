import ProfileItem from '@/components/ProfileItem';

const ProfileContent = () => {
  return (
    <div className='sm:flex items-center justify-between gap-5'>
      <ProfileItem />
      <ProfileItem />
    </div>
  );
};

export default ProfileContent;
