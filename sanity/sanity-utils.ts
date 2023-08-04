import { groq } from 'next-sanity';
import client from './client-config';

//#region Subjects
export const getSubjects = async () =>
  await client(groq`*[_type =='subjects']| order(title asc){title,description,courses[]->{title}}`);

export const getSubject = async (title: string, slug?: string) =>
  await client(groq`*[_type =='subjects'&&title==$title][0]{title,description,courses[]->{title}}`, { title });
//#endregion

//#region Courses
export const getCourses = async () =>
  await client(groq`*[_type =='courses']| order(title asc){title,description,units[]->{title}}`);

export const getCourse = async (title: string, slug?: string) =>
  await client(groq`*[_type =='courses'&&title==$title][0]{title,description,units[]->{title}}`, { title });
//#endregion

//#region Units
export const getUnits = async () =>
  await client(groq`*[_type =='units']| order(title asc){title,description,lessons[]->{title}}`);

export const getUnit = async (title: string, slug?: string) =>
  await client(groq`*[_type =='units'&&title==$title][0]{title,description,lessons[]->{title}}`, { title });
//#endregion

//#region Lessons
export const getLessons = async () =>
  await client(groq`*[_type =='lessons']| order(title asc){title,description,unit->{title},contents[]->{title}}`);

export const getLesson = async (title: string, slug?: string) =>
  await client(groq`*[_type =='lessons'&&title==$title][0]{title,description,unit->{title},contents[]->{title}}`, {
    title,
  });
//#endregion
