import ProfileItem from '@/components/ProfileItem';
import getUser from '@/lib/data/user';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { format } from 'date-fns';

const ProfileContent = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) return <span>You need to login to view profile</span>;

  let user;
  try {
    user = await getUser({ userId: (session?.user as any)?.id });
  } catch (error) {
    try {
      user = await getUser({ userId: (session?.user as any)?.username });
    } catch (error) {
      console.log(error);
      return (
        <span>
          Your information could not be fetched. Try logging in again, or try again later. If error persists, contact
          our support.
        </span>
      );
    }
  }

  const userData = [
    {
      property: 'First Name',
      value: user?.profile?.firstName,
    },
    {
      property: 'Last Name',
      value: user?.profile?.lastName,
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
      property: 'Country',
      value: user?.profile?.country?.name == 'Select Country' ? '' : user?.profile?.country?.name,
    },
    {
      property: 'Phone Number',
      value: user?.profile?.phone?.number,
    },
    {
      property: 'Gender',
      value: user?.profile?.gender,
    },
    {
      property: 'Birthday',
      value:
        user?.profile?.birthday == undefined
          ? 'not set'
          : format(new Date(user?.profile?.birthday), 'EEEE, dd MMMM yyyy'),
    },
    {
      property: 'Age',
      value: user?.profile?.age >= 1 ? user?.profile.age : 'invalid birthday',
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
      value: user?.selectedSubjects?.length,
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
      property: 'Date Joined',
      value: format(new Date(user?.createdAt), 'EEEE, dd MMMM yyyy'),
    },
    {
      property: 'Bio',
      value: user?.profile?.bio,
      style: 'whitespace-normal lg:text-justify text-right leading-tight',
    },
  ];

  const achievementData = user?.completedProgress?.achievements?.map((achievement: { data: { title: string } }) => {
    return { property: achievement?.data?.title, value: 'completed', style: '!overflow-visible !whitespace-normal ' };
  });

  const CourseData = user?.completedProgress?.courses?.map((course: { data: { title: string } }) => {
    return { property: course?.data?.title, value: 'completed', style: '!overflow-visible !whitespace-normal ' };
  });

  return (
    <div className='lg:flex justify-between gap-5 flex-wrap'>
      <ProfileItem title='User statistics ' stats={userData} />
      <div className='flex-1'>
        <ProfileItem title='Achievements ' stats={achievementData} />
        <ProfileItem title='Courses' stats={CourseData} />
      </div>
    </div>
  );
};

export default ProfileContent;
