import NavbarContent from './NavbarContent';
import getCourses from '../lib/data/courses';

const Navbar = async () => {
  return <NavbarContent coursesData={await getCourses()}></NavbarContent>;
};

export default Navbar;
