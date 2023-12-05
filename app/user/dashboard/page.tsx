import { getCurrentUser } from '@/lib/data/user';
import RecentTopics from '@/components/Cards/RecentTopicsCard';
import Stats from '@/components/Cards/Stats';

const Dashboard = async () => {
  try {
    const user: { selectedSubjects: any[]; completedProgress: any } = await getCurrentUser();

    const numberOfCourses = user?.selectedSubjects.reduce(
      (acc: number, current: any) => acc + current.data.courses.length,
      0
    );
    const numberOfCompletedCourses = user?.completedProgress?.courses.length;
    let percentageOfCompletedCourses = Math.round((numberOfCompletedCourses / numberOfCourses) * 100);
    isNaN(percentageOfCompletedCourses) && (percentageOfCompletedCourses = 0);
    const numberOfAchievements = user?.completedProgress?.achievements.length;

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
      <span>
        Your information could not be fetched. Try logging in again, or try again later. If error persists, contact our
        support.
      </span>
    );
  }
};

export default Dashboard;
