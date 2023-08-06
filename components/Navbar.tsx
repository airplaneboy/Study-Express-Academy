import getUser from '@/lib/data/user';
import NavbarContent from './NavbarContent';
// import getSubjects from '@/lib/data/subjects';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import React from 'react';
import { getSubjectsAndCourses } from '@/sanity/sanity-utils';

const Navbar = async () => {
  let session: any;

  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    // console.log(error);
  }

  return (
    <NavbarContent
      coursesData={await getSubjectsAndCourses()}
      userData={session?.user && (await getUser({ userId: (session?.user as any)?.id }))}></NavbarContent>
  );
};

export default React.memo(Navbar);
