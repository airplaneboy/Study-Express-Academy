import { fetchGET } from '@/utils/fetchOption';

const getSubjects = async () => {
  const response = await fetchGET({
    path: 'https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/subjects',
  });
  const subjects = response?.subjects;

  return subjects;
};

export const getSubject = async ({ subjectId }: { subjectId: string }) =>
  await fetchGET({
    path: `https://study-express-academy-git-master-airplaneboys-projects.vercel.app/api/v1/subjects/${subjectId}`,
  });

export default getSubjects;
