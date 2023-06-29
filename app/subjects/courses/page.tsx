import { HiCalendar, HiChartBar, HiFolder, HiHome, HiInbox, HiUsers } from 'react-icons/hi2';
import CardList from '@/containers/CardList';

const units = [
  { title: 'Dashboard', href: '/dashboard', image: '/assets/logo.svg', current: true },
  { title: 'Team', href: '/team', image: '/assets/logo.svg', current: false },
  { title: 'Projects', href: '/projects', image: '/assets/logo.svg', current: false },
  { title: 'Calendar', href: '/calender', image: '/assets/logo.svg', current: false },
  { title: 'Documents', href: '/documents', image: '/assets/logo.svg', current: false },
  { title: 'Reports', href: '/reports', image: '/assets/logo.svg', current: false },
];

const lessons = [
  { title: 'Dashboard', href: '/dashboard', current: true },
  { title: 'Team', href: '/team', current: false },
  { title: 'Projects', href: '/projects', current: false },
  { title: 'Calendar', href: '/calender', current: false },
  { title: 'Documents', href: '/documents', current: false },
  { title: 'Reports', href: '/reports', current: false },
];

function onLinkClick(id: string) {
  document.getElementById(id)?.scrollIntoView();
}

export default function Courses() {
  return (
    <>
      <CardList contentArray={lessons} sidebarArray={units} sidebarHeader='Units' contentHeader='Courses' />
    </>
  );
}
