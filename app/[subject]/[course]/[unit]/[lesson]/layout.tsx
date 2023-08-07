import LessonSidebar from '@/components/LessonSidebar';
import { getLesson, getLessonsSlug } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const lessons = await getLessonsSlug();

  return lessons.map((lesson: { slug: string }) => ({
    lesson: lesson.slug,
  }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lesson: string };
}) {
  const lesson = await getLesson(params.lesson);

  const lessonExample = {
    contents: [
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
      { _id: 'englishID', title: 'English Lessons', slug: 'second-page-slug' },
      {
        _id: 'adjfasdladkj',
        title: 'longer english title lesson. this is just to test how far this can go.',
        slug: 'page-slug',
      },
    ],
  };

  try {
    return (
      <div className='sm:p-10 p-2 flex gap-10'>
        <LessonSidebar lesson={lesson} params={params as any} />

        <div className='sm:border-2 border-gray-300 flex-1 sm:p-4 p-0 overflow-hidden rounded-2xl'>{children}</div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
