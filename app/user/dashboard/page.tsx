import getUser from '@/lib/data/user';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import RecentTopics from '@/components/Cards/RecentTopicsCard';
import Stats from '@/components/Cards/Stats';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) return <h1>You need to login to view profile</h1>;

  try {
    const user = await getUser({ userId: (session?.user as any)?.id });

    const numberOfCourses = user?.courses.length;
    const numberOfCompletedCourses = user?.completedCourses.length;
    const percentageOfCompletedCourses = Math.round((numberOfCompletedCourses / numberOfCourses) * 100);
    const numberOfAchievements = user?.achievements.length;

    const userStats = { percentageOfCompletedCourses, numberOfAchievements, numberOfCourses };

    return (
      <>
        <Stats userStats={userStats} />
        <RecentTopics />;
      </>
    );
  } catch (error) {
    console.log(error);
    return (
      <h1>
        Your information could not be fetched. Try logging in again, or try again later. If error persists, contact our
        support.
      </h1>
    );
  }
};

export default Dashboard;
