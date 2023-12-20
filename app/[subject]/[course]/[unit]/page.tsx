import CardList from '@/containers/CardList';
import { getCurrentUser } from '@/lib/data/user';
import { getUnit, getUnitsSlug } from '@/sanity/sanity-utils';
import { concat } from 'lodash';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const units = await getUnitsSlug();

  return units.map((unit: { slug: string }) => ({
    unit: unit.slug,
  }));
}

const Units = async ({ params }: { params: { unit: string; course: string } }) => {
  try {
    const courseSlug = params.course;
    const unit = await getUnit(params.unit);

    //Get completed progress
    const user = await getCurrentUser();

    const userCompletedVideos = user?.contentProgress.videos.filter((item: any) => item.isCompleted == true);
    const userCompletedArticles = user?.contentProgress.articles;
    const userCompletedTests = user?.contentProgress.tests.filter((item: any) => item.isCompleted == true);

    const completedContents = concat(
      userCompletedArticles.map((item: any) => item.id),
      userCompletedTests.map((item: any) => item.id),
      userCompletedVideos.map((item: any) => item.id)
    );

    const completedLessons = user?.completedProgress.lessons;

    if (unit.course.slug !== courseSlug) return notFound();

    return (
      <CardList
        completedContents={completedContents}
        contentHeader={unit.title}
        sidebarArray={unit.lessons}
        sidebarHeader='Lessons'
        contentDescription={unit.description}
        contentArray='contents'
        slug={unit?.slug}
        completedLessons={completedLessons}
      />
    );
  } catch (error) {
    return notFound();
  }
};

export default Units;
