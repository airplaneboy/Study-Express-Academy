import CardList from '@/containers/CardList';
import { getUnit } from '@/lib/data/units';
import lowercase from 'lodash.lowercase';
import { notFound } from 'next/navigation';

const Units = async ({ params }: { params: { unit: string } }) => {
  try {
    const unit = await getUnit({ unitId: lowercase(params.unit) });

    return <CardList contentHeader={unit.title} sidebarArray={unit.lessons} sidebarHeader='Lessons' />;
  } catch (error) {
    notFound();
  }
};

export default Units;
