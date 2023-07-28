import ProfileItem from '@/components/ProfileItem';
import getUser from '@/lib/data/user';
import { getServerSession } from 'next-auth';

const userData = [
  {
    property: 'First Name',
    value: "user's first name",
  },
];

const ProfileContent = async () => {
  const session = await getServerSession();

  if (!session?.user) return <h1>You need to login</h1>;

  try {
    const user = await getUser({ userId: session.user.email });
    console.log(user);
  } catch (error) {
    return (
      <h1>
        Your information could not be fetched. Try logging in again, or try again later. If error persists, contact our
        support.
      </h1>
    );
  }

  return (
    <div className='sm:flex items-center justify-between gap-5'>
      <ProfileItem title='User statistics ' stats={userData} />
      <ProfileItem title='User statistics ' stats={[{ property: 'Date Created', value: '13th June, 2022', id: 1 }]} />
    </div>
  );
};

export default ProfileContent;
