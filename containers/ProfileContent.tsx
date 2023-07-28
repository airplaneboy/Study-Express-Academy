import ProfileItem from '@/components/ProfileItem';
import getUser from '@/lib/data/user';
import { getServerSession } from 'next-auth';

const ProfileContent = async () => {
  const session = await getServerSession();

  if (!session?.user) return <h1>You need to login to view profile</h1>;

  let user;
  try {
    user = await getUser({ userId: session.user.email });

    console.log(user);
  } catch (error) {
    return (
      <h1>
        Your information could not be fetched. Try logging in again, or try again later. If error persists, contact our
        support.
      </h1>
    );
  }

  const userData = [
    {
      property: 'First Name',
      value: user?.profile.firstName,
    },
    {
      property: 'Last Name',
      value: user?.profile.lastName,
    },
    {
      property: 'Username',
      value: user?.username,
    },
    {
      property: 'Email',
      value: user?.email,
      style: 'lowercase',
    },

    {
      property: 'Role',
      value: user?.role,
    },
    {
      property: 'Verified',
      value: user?.verified?.toString(),
    },

    {
      property: 'Completed Lessons',
      value: user?.completedLessons?.length,
    },
    {
      property: 'Enrolled Courses',
      value: user?.courses?.length,
    },
    {
      property: 'Completed Courses',
      value: user?.completedCourses?.length,
    },
    {
      property: 'Completed Units',
      value: user?.completedUnits?.length,
    },
    {
      property: 'Achievements',
      value: user?.achievements?.length,
    },
    {
      property: 'Bio',
      value: user?.bio,
    },
  ];

  return (
    <div className='lg:flex justify-between gap-5'>
      <ProfileItem title='User statistics ' stats={userData} />
      <ProfileItem title='Achievements ' stats={[{ property: 'Date Created', value: '13th June, 2022', id: 1 }]} />
    </div>
  );
};

export default ProfileContent;
