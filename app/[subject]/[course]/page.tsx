import CardList from '@/containers/CardList';
import { getCourse, getCoursesSlug } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';

// export async function generateStaticParams({ params }: { params: { subject: string } }) {
//   const courses = await getCoursesSlug();

//   return courses.map((course: { slug: string }) => ({
//     course: course.slug,
//   }));
// }

const Courses = async ({ params }: { params: { course: string; subject: string } }) => {
  try {
    const subjectSlug = params.subject;
    const course = await getCourse(params.course);

    if (course.subject.slug !== subjectSlug) return notFound();

    return (
      <CardList
        contentHeader={course.title}
        sidebarArray={course.units}
        sidebarHeader='Units'
        contentArray='lessons'
        contentDescription={course.description}
        slug={course?.slug}
      />
    );
  } catch (error) {
    notFound();
  }
};

export default Courses;
