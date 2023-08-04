import { groq } from 'next-sanity';
import client from './client-config';

//#region Subjects
export const getSubjects = async () =>
  await client(
    groq`*[_type =='subjects']| order(title asc){_id,title,description,"slug":slug.current,courses[]->{title,_id}}`
  );

export const getSubject = async (slug: string) =>
  await client(
    groq`*[_type =='subjects'&&slug.current==$slug][0]{_id,title,description,"slug":slug.current,courses[]->{title,_id,"slug":slug.current, units[]->{_id,title,"slug":slug.current}}}`,
    { slug }
  );
//#endregion

//#region Courses
export const getCourses = async () =>
  await client(groq`*[_type =='courses']| order(title asc){_id,title,description,units[]->{title}}`);

export const getRecentCourses = async () =>
  await client(
    groq`*[_type =='courses']| order(title asc){_id,title,description,"slug":slug.current,units[]->{title,_id,"slug":slug.current}}`
  );

export const getCourse = async (title: string, slug?: string) =>
  await client(groq`*[_type =='courses'&&title==$title][0]{_id,title,description,units[]->{title}[0..4]}`, { title });
//#endregion

//#region Units
export const getUnits = async () =>
  await client(groq`*[_type =='units']| order(title asc){_id,title,description,lessons[]->{title}}`);

export const getUnit = async (title: string, slug?: string) =>
  await client(groq`*[_type =='units'&&title==$title][0]{_id,title,description,lessons[]->{title}}`, { title });
//#endregion

//#region Lessons
export const getLessons = async () =>
  await client(groq`*[_type =='lessons']| order(title asc){_id,title,description,unit->{title},contents[]->{title}}`);

export const getLesson = async (title: string, slug?: string) =>
  await client(groq`*[_type =='lessons'&&title==$title][0]{_id,title,description,unit->{title},contents[]->{title}}`, {
    title,
  });
//#endregion
