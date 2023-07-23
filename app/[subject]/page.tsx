import CardList from '@/containers/CardList';
import { getSubject } from '@/lib/data/subjects';
import lowercase from 'lodash.lowercase';
import { notFound } from 'next/navigation';

const Subjects = async ({ params }: { params: { subject: string } }) => {
  try {
    const subject = await getSubject({ subjectId: lowercase(params.subject) });

    return <CardList contentHeader={subject.title} sidebarArray={subject.courses} sidebarHeader='Courses' />;
  } catch (error) {
    notFound();
  }
};

export default Subjects;
