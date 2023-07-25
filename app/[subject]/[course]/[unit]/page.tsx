import CardList from '@/containers/CardList';
import getUnits, { getUnit } from '@/lib/data/units';
import lowercase from 'lodash.lowercase';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const units = await getUnits();

  return units.map((unit: { _id: string; title?: string }) => ({
    unit: unit.title ? unit.title : unit._id,
  }));
}

const Units = async ({ params }: { params: { unit: string } }) => {
  try {
    const unit = await getUnit({ unitId: lowercase(params.unit) });

    return (
      <CardList
        contentHeader={unit.title}
        sidebarArray={unit.lessons}
        sidebarHeader='Lessons'
        contentDescription={unit.description}
      />
    );
  } catch (error) {
    notFound();
  }
};

export default Units;
