import { headers } from 'next/headers';

export const revalidate = 0;

const page = () => {
  const headersList = headers();
  const referer = headersList.get('referer');
  console.log('---------------------------------------------------------------------------------');

  console.log(referer);
  console.log('---------------------------------------------------------------------------------');

  return <div>Referer: {referer}</div>;
};

export default page;
