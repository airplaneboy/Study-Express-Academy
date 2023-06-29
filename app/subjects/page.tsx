import CardList from '@/containers/CardList';

const subjects = [
  { title: 'Dashboard', href: '/dashboard', image: '/assets/logo.svg', current: true },
  { title: 'Team', href: '/team', image: '/assets/logo.svg', current: false },
  { title: 'Projects', href: '/projects', image: '/assets/logo.svg', current: false },
  { title: 'Calendar', href: '/calender', image: '/assets/logo.svg', current: false },
  { title: 'Documents', href: '/documents', image: '/assets/logo.svg', current: false },
  { title: 'Reports', href: '/reports', image: '/assets/logo.svg', current: false },
];

const courses = [
  { title: 'Dashboard', href: '/dashboard', current: true },
  { title: 'Team', href: '/team', current: false },
  { title: 'Projects', href: '/projects', current: false },
  { title: 'Calendar', href: '/calender', current: false },
  { title: 'Documents', href: '/documents', current: false },
  { title: 'Reports', href: '/reports', current: false },
];

const Subjects = () => {
  return (
    <CardList contentArray={courses} contentHeader='Subject Title' sidebarArray={subjects} sidebarHeader='Courses' />
  );
};

export default Subjects;
