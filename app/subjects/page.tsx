import CardList from '@/containers/CardList';
import getSubjects from '@/lib/data/subjects';
import getCourses from '@/lib/data/courses';

const Subjects = async () => {
  const subjects = await getSubjects();
  const courses = await getCourses();

  return (
    <CardList contentArray={courses} contentHeader='All Subjects' sidebarArray={subjects} sidebarHeader='Subjects' />
  );
};

export default Subjects;
