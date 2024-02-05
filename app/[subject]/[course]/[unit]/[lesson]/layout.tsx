import LessonSidebar from '@/components/LessonSidebar';
import { getCurrentUser, updateCurrentUser } from '@/lib/data/user';
import { getLesson, getLessonsSlug } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';
import concat from 'lodash/concat';
import intersection from 'lodash/intersection';

// export async function generateStaticParams() {
//   const lessons = await getLessonsSlug();

//   return lessons.map((lesson: { slug: string }) => ({
//     lesson: lesson.slug,
//   }));
// }

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lesson: string; unit: string };
}) {
  const lesson = await getLesson(params.lesson);
  const user = await getCurrentUser();

  // console.log(lesson);

  const userCompletedVideos = user?.contentProgress.videos.filter((item: any) => item.isCompleted == true);
  const userCompletedArticles = user?.contentProgress.articles;
  const userCompletedTests = user?.contentProgress.tests.filter((item: any) => item.isCompleted == true);

  const completedContents = concat(
    userCompletedArticles.map((item: any) => item.id),
    userCompletedTests.map((item: any) => item.id),
    userCompletedVideos.map((item: any) => item.id)
  );

  if (lesson?.unit?.slug !== params.unit) return notFound();

  const isLessonCompleted = user?.completedProgress.lessons.some((item: any) => item.id == lesson._id);

  if (
    !isLessonCompleted &&
    intersection(lesson?.contents?.map((item: any) => item._id), completedContents)?.length == lesson?.contents?.length
  ) {
    user?.completedProgress.lessons.push({ id: lesson?._id, createdAt: new Date(Date.now()).toISOString() });
    await updateCurrentUser({ data: { completedProgress: { lessons: user?.completedProgress.lessons } } });
  }

  try {
    return (
      <div className='relative sm:static sm:py-10 md:p-10 p-2 flex flex-col-reverse sm:flex-row gap-10 sm:gap-5 md:gap-10 max-w-7xl mx-auto'>
        <div className='sticky top-[104px] h-[448px] sm:max-w-[50%] md:max-w-none'>
          <LessonSidebar completedContents={completedContents} lesson={lesson} params={params as any} />
        </div>

        <div className='border-b-2 border-dashed sm:border-2 p-0 overflow-hidden sm:rounded-2xl'>{children}</div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
