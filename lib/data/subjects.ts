import { fetchGET } from '@/utils/fetchOption';

const getSubjects = async () => {
  const response = await fetchGET({ path: 'http://localhost:3000/api/v1/subjects' });
  const subjects = response?.subjects;

  return subjects;
};

export const getSubject = async ({ subjectId }: { subjectId: string }) =>
  await fetchGET({ path: `http://localhost:3000/api/v1/subjects/${subjectId}` });

export default getSubjects;
