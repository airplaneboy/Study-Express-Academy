import CardList from '@/containers/CardList';
import { getUnit, getUnitsSlug } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const units = await getUnitsSlug();

  return units.map((unit: { slug: string }) => ({
    unit: unit.slug,
  }));
}

const Units = async ({ params }: { params: { unit: string } }) => {
  try {
    const unit = await getUnit(params.unit);

    return (
      <CardList
        contentHeader={unit.title}
        sidebarArray={unit.lessons}
        sidebarHeader='Lessons'
        contentDescription={unit.description}
        contentArray='contents'
        slug={unit?.slug}
      />
    );
  } catch (error) {
    notFound();
  }
};

export default Units;
