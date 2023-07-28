import getUser from '@/lib/data/user';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProfileContent from '@/containers/ProfileContent';

const Profile = async () => {
  // const session = await getServerSession(authOptions);
  // const user = await getUser({ userId: (session?.user as any).id });

  return <ProfileContent></ProfileContent>;
};

export default Profile;
