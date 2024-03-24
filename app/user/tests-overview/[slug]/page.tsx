import { getCurrentUser } from '@/lib/data/user';
import LineChart from '@/components/Charts/Line';
import { formatDistanceToNow } from 'date-fns';

const TestOverview = async ({ params }: { params: { slug: string } }) => {
  const user = await getCurrentUser();

  const test = user.contentProgress.tests.find((item: any) => item.slug == params.slug);

  return (
    <div>
      <LineChart
        data={{
          labels: test.scores.map((score: any) => formatDistanceToNow(new Date(score.date))),
          datasets: [
            {
              data: test.scores.map((score: any) => score.average),
              label: 'Score Average',
              backgroundColor: '#3b82f6',
              borderColor: '#60a5fa',
              interpolate: true,
            },
          ],
        }}
      />
    </div>
  );
};

export default TestOverview;
