import CardList from '@/containers/CardList';
import getSubjects, { getSubject } from '@/lib/data/subjects';
import lowercase from 'lodash.lowercase';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const subjects = await getSubjects();

  return subjects.map((subject: { _id: string; title?: string }) => ({
    subject: subject.title ? subject.title : subject._id,
  }));
}

const Subjects = async ({ params }: { params: { subject: string } }) => {
  try {
    const subject = await getSubject({ subjectId: lowercase(params.subject) });

    return (
      <CardList
        contentHeader={subject.title}
        sidebarArray={subject.courses}
        contentArray='units'
        sidebarHeader='Courses'
        contentDescription={subject.description}
      />
    );
  } catch (error) {
    notFound();
  }
};

export default Subjects;
