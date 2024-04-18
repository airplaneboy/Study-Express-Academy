import { fetchGET } from '@/utils/fetchOption';

const getCourses = async () => {
  const response = await fetchGET({
    path: 'https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/courses',
  });
  const courses = response?.courses;

  return courses;
};

export const getCourse = async ({ courseId }: { courseId: string }) => {
  const course = await fetchGET({
    path: `https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/courses/${courseId}`,
  });
  return course;
};

export default getCourses;
