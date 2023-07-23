import NavbarContent from './NavbarContent';
import getCourses from '../lib/data/courses';
import getSubjects from '@/lib/data/subjects';

const Navbar = async () => {
  return <NavbarContent coursesData={await getSubjects()}></NavbarContent>;
};

export default Navbar;
