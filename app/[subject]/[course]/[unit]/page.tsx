import CardList from '@/containers/CardList';
import { getUnit, getUnits } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const units = await getUnits();

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
        slug={unit?.slug}
      />
    );
  } catch (error) {
    notFound();
  }
};

export default Units;
