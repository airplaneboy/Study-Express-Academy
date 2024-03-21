import { UserTest, columns } from '@/containers/TestOverviewTable';
import { DataTable } from '@/containers/DataTable';
import { getCurrentUser } from '@/lib/data/user';

export default async function TestsOverview() {
  const data: UserTest[] = (await getCurrentUser()).contentProgress.tests;

  return (
    <div className='flex items-center mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
