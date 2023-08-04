import { getSubject, getSubjects, getCourses } from '@/sanity/sanity-utils';

export default async function Test() {
  // const subjects = await getSubjects();
  const courses = await getCourses();
  // console.log(JSON.stringify(subject, null, 2));

  return <h1>{courses.map((course: any) => course.title)} </h1>;
}
