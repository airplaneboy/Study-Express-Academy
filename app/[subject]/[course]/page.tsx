import CardList from '@/containers/CardList';
import getCourses, { getCourse } from '@/lib/data/courses';
import lowercase from 'lodash.lowercase';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course: { _id: string; title?: string }) => ({
    course: course.title ? course.title : course._id,
  }));
}

const Courses = async ({ params }: { params: { course: string } }) => {
  try {
    const course = await getCourse({ courseId: lowercase(params.course) });

    return (
      <CardList
        contentHeader={course.title}
        sidebarArray={course.units}
        sidebarHeader='Units'
        contentArray='lessons'
        contentDescription={course.description}
      />
    );
  } catch (error) {
    notFound();
  }
};

export default Courses;
