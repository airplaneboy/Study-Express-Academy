import CardList from '@/containers/CardList';
import { getCourse } from '@/lib/data/courses';
import lowercase from 'lodash.lowercase';
import { notFound } from 'next/navigation';

const Courses = async ({ params }: { params: { course: string } }) => {
  try {
    const course = await getCourse({ courseId: lowercase(params.course) });

    return (
      <CardList contentHeader={course.title} sidebarArray={course.units} sidebarHeader='Units' contentArray='lessons' />
    );
  } catch (error) {
    notFound();
  }
};

export default Courses;
