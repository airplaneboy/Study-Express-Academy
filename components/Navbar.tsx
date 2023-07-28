import NavbarContent from './NavbarContent';
import getSubjects from '@/lib/data/subjects';

const Navbar = async () => {
  return <NavbarContent coursesData={await getSubjects()}></NavbarContent>;
};

export default Navbar;
