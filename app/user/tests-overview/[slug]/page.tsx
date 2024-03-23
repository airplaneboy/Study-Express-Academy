import { getCurrentUser } from '@/lib/data/user';
const Test = async ({ params }: { params: { slug: string } }) => {
  const user = await getCurrentUser();

  const res = user.contentProgress.tests.find((item: any) => item.slug == params.slug);
  console.log(res);
  return <div>hello, {user.profile.firstName}</div>;
};

export default Test;
