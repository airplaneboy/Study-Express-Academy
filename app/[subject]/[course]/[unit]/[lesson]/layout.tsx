import LessonSidebar from '@/components/LessonSidebar';
import { getCurrentUser } from '@/lib/data/user';
import { getLesson, getLessonsSlug } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';
import concat from 'lodash/concat';

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
  params: { lesson: string; unit: string };
}) {
  const lesson = await getLesson(params.lesson);
  const user = await getCurrentUser();

  const userCompletedVideos = user?.contentProgress.videos.filter((item: any) => item.isCompleted == true);
  const userCompletedArticles = user?.contentProgress.articles;
  const userCompletedTests = user?.contentProgress.tests.filter((item: any) => item.isCompleted == true);

  const completedContents = concat(
    userCompletedArticles.map((item: any) => item.id),
    userCompletedTests.map((item: any) => item.id),
    userCompletedVideos.map((item: any) => item.id)
  );

  if (lesson?.unit?.slug !== params.unit) return notFound();

  try {
    return (
      <div className='sm:p-10 p-2 flex gap-10 max-w-7xl mx-auto'>
        <div className='max-md:hidden sticky top-[104px] h-[448px]'>
          <LessonSidebar completedContents={completedContents} lesson={lesson} params={params as any} />
        </div>

        <div className='sm:border-2 border-gray-300 flex-1 p-0 overflow-hidden rounded-2xl'>{children}</div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
