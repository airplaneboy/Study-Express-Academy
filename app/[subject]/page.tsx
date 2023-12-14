import CardList from '@/containers/CardList';
import { getSubjectsSlug, getSubject } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';

export const dynamicParams = true; // true | false,

export async function generateStaticParams() {
  const subjects = await getSubjectsSlug();

  return subjects.map((subject: { slug: string }) => ({
    subject: subject.slug,
  }));
}

const Subjects = async ({ params }: { params: { subject: string } }) => {
  try {
    const subject = await getSubject(params.subject);

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
