import { fetchGET } from '@/utils/fetchOption';

const getCourses = async () => {
  const response = await fetchGET({ path: '/api/v1/courses' });
  console.log('got the courses');

  return response?.courses;
};

export default getCourses;
