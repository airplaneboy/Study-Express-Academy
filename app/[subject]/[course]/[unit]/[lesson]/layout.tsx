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
  params: { lesson: string; unit: string };
}) {
  const lesson = await getLesson(params.lesson);
  const unitSlug = params.unit;

  if (lesson?.unit?.slug !== unitSlug) return notFound();

  try {
    return (
      <div className='sm:p-10 p-2 flex gap-10 max-w-7xl mx-auto'>
        <div className='max-md:hidden sticky top-[104px] h-[448px]'>
          <LessonSidebar lesson={lesson} params={params as any} />
        </div>

        <div className='sm:border-2 border-gray-300 flex-1 p-0 overflow-hidden rounded-2xl'>{children}</div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
