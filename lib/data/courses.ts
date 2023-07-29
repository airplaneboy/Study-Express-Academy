import { fetchGET } from '@/utils/fetchOption';

const getCourses = async () => {
  const response = await fetchGET({ path: 'http://localhost:3000/api/v1/courses' });
  const courses = response?.courses;

  return courses;
};

export const getCourse = async ({ courseId }: { courseId: string }) => {
  const course = await fetchGET({ path: `http://localhost:3000/api/v1/courses/${courseId}` });
  return course;
};

export default getCourses;
