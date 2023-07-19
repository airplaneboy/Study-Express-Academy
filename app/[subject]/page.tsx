import CardList from '@/containers/CardList';
import { getSubject } from '@/lib/data/subjects';
import getCourses from '@/lib/data/courses';
import getUnits from '@/lib/data/units';

const Subjects = async ({ params }: { params: { subject: string } }) => {
  const subject = await getSubject({ subjectId: params.subject });
  console.log(subject);
  console.log(subject.courses);

  // const courses = await getCourses();
  const units = await getUnits();

  return (
    <CardList
      contentArray={units}
      contentHeader={subject.title}
      sidebarArray={subject.courses}
      sidebarHeader='Courses'
    />
  );
};

export default Subjects;
