import { getSubject, getSubjects, getCourses } from '@/sanity/sanity-utils';

export default async function Test() {
  // const subjects = await getSubjects();
  const subject = await getCourses();
  console.log(JSON.stringify(subject, null, 2));

  return <h1>Test Page</h1>;
}
