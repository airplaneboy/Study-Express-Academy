import { groq } from 'next-sanity';
import client from './client-config';

//#region Subjects
export const getSubjectsSlug = async () =>
  await client(groq`*[_type =='subjects']| order(title asc){"slug":slug.current}`);

export const getSubjectsAndCourses = async () =>
  await client(groq`*[_type =='subjects']{_id,title,"slug":slug.current,courses[]->{_id, title, "slug":slug.current}}`);

export const getSubject = async (slug: string) =>
  await client(
    groq`*[_type =='subjects'&&slug.current==$slug][0]{_id,title,description,"slug":slug.current,courses[]->{title,_id,"slug":slug.current, units[]->{_id,title,"slug":slug.current}}}`,
    { slug }
  );

export const getSubjects = async () =>
  await client(
    groq`*[_type =='subjects']| order(title asc){courses[]->{title}, title, 'slug':slug.current,_id, description, animatedIcon, 'icon':icon.asset->url,_type}`
  );

export const getInternationalSubjects = async () =>
  await client(
    groq`*[_type =='internationalSubjects']| order(title asc){courses[]->{title}, title, 'slug':slug.current,_id, description, animatedIcon, 'icon':icon.asset->url,_type}`
  );

//#endregion

//#region Courses
export const getCoursesSlug = async () =>
  await client(groq`*[_type =='courses']| order(title asc){"slug":slug.current}`);

export const getRecentCourses = async () =>
  await client(
    groq`*[_type =='courses']| order(title asc){_id,title,description,subject->{"slug":slug.current},"slug":slug.current,units[0..4]->{title,_id,"slug":slug.current}}`
  );

export const getCourse = async (slug?: string) =>
  await client(
    groq`*[_type =='courses'&& slug.current==$slug][0]{_id,title,description,"slug":slug.current,subject->{"slug":slug.current}, units[]->{_id,title,"slug":slug.current,lessons[]->{_id, title,"slug":slug.current}}}`,

    {
      slug,
    }
  );

export const getCourses = async () =>
  await client(
    groq`*[_type =='courses']| order(title asc){instructor,subject->{title, "slug":slug.current},title,'slug':slug.current, _id,_type,description, 'icon':icon.asset->url,units[0..4]->{title,_id,"slug":slug.current, 'icon':icon.asset->url,unitColor}}`
  );
//#endregion

//#region Units
export const getUnitsSlug = async () => await client(groq`*[_type =='units']| order(title asc){"slug":slug.current}`);

export const getUnit = async (slug: string) =>
  await client(
    groq`*[_type =='units'&&slug.current==$slug][0]{_id,title,description,"slug":slug.current,'icon':icon.asset->url,unitColor,course->{"slug":slug.current}, lessons[]->{title,_id,"slug":slug.current, contents[]->{title,_id,"slug":slug.current,"numberOfQuestions":count(questions)}}}`,
    { slug }
  );
//#endregion

//#region Lessons
export const getLessonsSlug = async () =>
  await client(groq`*[_type =='lessons']| order(title asc){"slug":slug.current}`);

export const getLesson = async (slug: string) =>
  await client(
    groq`*[_type =='lessons'&&slug.current==$slug][0]{_id,title,description,unit->{title, "slug":slug.current},contents[]->{title, "slug":slug.current, _id,_type,"numberOfQuestions":count(questions)}}`,
    {
      slug,
    }
  );
//#endregion

//#region Videos
export const getVideosSlug = async () =>
  await client(groq`*[_type =='videos'] | order(title asc){"slug":slug.current}`);

export const getVideo = async (slug: string) =>
  await client(
    groq`*[_type =='videos'&&slug.current==$slug][0]{_id,title,description, url,"lesson":lesson->title,"slug":slug.current}`,
    {
      slug,
    }
  );
//#endregion

//#region Articles
export const getArticlesSlug = async () =>
  await client(groq`*[_type =='articles'] | order(_createdAt asc).slug.current`);

export const getArticle = async (slug: string) =>
  await client(
    groq`*[_type=='articles' && slug.current == $slug ] | order(_createdAt asc)[0]{_id, title, content,"lesson":lesson->title,"slug":slug.current}`,
    {
      slug,
    }
  );
//#endregion

//#region Tests
export const getTestsSlug = async () => await client(groq`*[_type =='tests'] | order(_createdAt asc).slug.current`);

export const getTest = async (slug: string) =>
  await client(
    groq`*[_type=='tests' && slug.current == $slug ] | order(_createdAt asc)[0]{_id,questions[]->{difficulty, answer, _id, question, questionContent, solution, options[]},title,"lesson":lesson->title, "slug":slug.current}`,
    {
      slug,
    }
  );
//#endregion

//#region Questions
export const getQuestionsId = async () => await client(groq`*[_type=='questions' && test->_id ==$testId]._id`);

export const getQuestion = async (questionId: string) =>
  await client(
    groq`*[_type=='questions' && _id ==$questionId][0]{question,questionContent, difficulty,options,solution, answer}`,
    {
      questionId,
    }
  );

export const getQuestionsByTest = async (testId: string) =>
  await client(groq`*[_type=='questions' && test->_id ==$testId] {question,questionContent, difficulty,options}`, {
    testId,
  });
//#endregion
