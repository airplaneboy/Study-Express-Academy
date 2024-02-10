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
      // <div className='sm:h-[calc(100vh_-_64px_-_56px)] relative sm:static p-2 sm:py-10 md:p-10 flex flex-col-reverse sm:flex-row gap-10 sm:gap-5 md:gap-10 max-w-7xl mx-auto'>
      <div className='relative sm:static p-2 sm:px-6 sm:py-10 md:p-10 flex flex-col-reverse md:flex-row gap-10 sm:gap-5 md:gap-3 max-w-7xl mx-auto'>
        {/* <div className='mb-20 sm:mb-0 md:max-h-[calc(100vh_-_64px_-_40px_-_58px)] md:pb-10 md:sticky top-[104px] '> */}
        <LessonSidebar completedContents={completedContents} lesson={lesson} params={params as any} />
        {/* </div> */}

        <div className='sm:h-60 md:min-h-[calc(100vh_-_64px_-_40px_-_58px_-_40px)] md:h-[auto] border-b-2 border-dashed sm:border-2 p-0 sm:rounded-2xl overflow-x-hidden md:mb-10'>
          {children}
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
