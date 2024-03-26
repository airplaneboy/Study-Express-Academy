import { getCurrentUser } from '@/lib/data/user';
import LineChart from '@/components/Charts/Line';
import { formatDistanceToNow } from 'date-fns';

const TestOverview = async ({ params }: { params: { slug: string } }) => {
  const user = await getCurrentUser();

  const test = user.contentProgress.tests.find((item: any) => item.slug == params.slug);

  const subItem: string | undefined = 'font-bold text-gray-800 text-sm';
  const item: string | undefined = 'flex justify-between py-2';
  return (
    <div>
      <LineChart
        title={`${test?.testTitle} Score Trend`}
        data={{
          labels: test.scores.map((score: any) => formatDistanceToNow(new Date(score.date))),
          datasets: [
            {
              data: test.scores.map((score: any) => score.average),
              label: 'Score Average',
              backgroundColor: '#3b82f6',
              borderColor: '#60a5fa',
              cubicInterpolationMode: 'monotone',
              tension: 0.4,
            },
          ],
        }}
      />

      <h2 className='mt-16 mb-2 text-center uppercase text-xl tracking-wider text-gray-800 font-extrabold'>
        More Information
      </h2>
      <ul className='flex flex-col text-gray-600 text-base divide-y'>
        <li className={item}>
          <span className={subItem}>Number of Times Taken: </span>
          {test?.numberOfTimesTaken}
        </li>
        <li className={item}>
          <span className={subItem}>Number of Times Passed: </span>
          {test?.numberOfTimesPassed}
        </li>
        <li className={item}>
          <span className={subItem}>Number of Questions: </span>
          {test?.numberOfQuestions}
        </li>
        <li className={item}>
          <span className={subItem}>Last test taken: </span>
          {formatDistanceToNow(test?.lastTaken, { addSuffix: true, includeSeconds: true })}
        </li>
      </ul>

      {/* <pre>{JSON.stringify(test, null, 2)}</pre> */}
    </div>
  );
};

export default TestOverview;
