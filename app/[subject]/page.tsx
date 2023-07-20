import CardList from '@/containers/CardList';
import { getSubject } from '@/lib/data/subjects';
import getCourses from '@/lib/data/courses';
import getUnits from '@/lib/data/units';

const Subjects = async ({ params }: { params: { subject: string } }) => {
  const subject = await getSubject({ subjectId: params.subject });

  return <CardList contentHeader={subject.title} sidebarArray={subject.courses} sidebarHeader='Courses' />;
};

export default Subjects;
