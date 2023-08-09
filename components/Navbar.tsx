import getUser from '@/lib/data/user';
import NavbarContent from './NavbarContent';
// import getSubjects from '@/lib/data/subjects';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import React from 'react';
import { getSubjectsAndCourses } from '@/sanity/sanity-utils';

const Navbar = async () => {
  let user;

  // let session: any;
  // try {
  //   session = await getServerSession(authOptions);
  //   console.log(session);
  // } catch (error) {
  //   // console.log(error);
  // }
  try {
    user = await getUser({ userId: ((await getServerSession(authOptions))?.user as any)?.id });
    console.log(user);
  } catch (error) {
    console.log(error);
  }

  return (
    <NavbarContent
      coursesData={await getSubjectsAndCourses()}
      userData={user || { error: 'not-logged-in' }}></NavbarContent>
  );
};

export default React.memo(Navbar);
