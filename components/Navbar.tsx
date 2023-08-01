import getUser from '@/lib/data/user';
import NavbarContent from './NavbarContent';
import getSubjects from '@/lib/data/subjects';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <NavbarContent
      coursesData={await getSubjects()}
      userData={await getUser({ userId: (session?.user as any).id })}></NavbarContent>
  );
};

export default Navbar;
