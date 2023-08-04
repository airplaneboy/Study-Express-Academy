import CardList from '@/containers/CardList';
import { getSubjects, getSubject } from '@/sanity/sanity-utils';
// import getSubjects, { getSubject } from '@/lib/data/subjects';
import lowercase from 'lodash.lowercase';
import { notFound } from 'next/navigation';

export const dynamicParams = true; // true | false,

export async function generateStaticParams() {
  const subjects = await getSubjects();

  return subjects.map((subject: { slug: string }) => ({
    subject: subject.slug,
  }));
}

const Subjects = async ({ params }: { params: { subject: string } }) => {
  // const subject = await getSubject({ subjectId: lowercase(params.subject) });
  try {
    const subject = await getSubject(params.subject);
    // console.log(JSON.stringify(subject, null, 2));

    return (
      <CardList
        contentHeader={subject.title}
        sidebarArray={subject?.courses}
        slug={subject?.slug}
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
