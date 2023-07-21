import CardList from '@/containers/CardList';
import { getSubject } from '@/lib/data/subjects';
import lowercase from 'lodash.lowercase';

const Subjects = async ({ params }: { params: { subject: string } }) => {
  const subject = await getSubject({ subjectId: lowercase(params.subject) });

  return <CardList contentHeader={subject.title} sidebarArray={subject.courses} sidebarHeader='Courses' />;
};

export default Subjects;
