import { HiCalendar, HiChartBar, HiFolder, HiHome, HiInbox, HiUsers } from 'react-icons/hi2';
import CardList from '@/containers/CardList';

const units = [
  { title: 'Dashboard', icon: HiHome, href: '/dashboard', image: '/assets/logo.svg', current: true },
  { title: 'Team', icon: HiUsers, href: '/team', image: '/assets/logo.svg', current: false },
  { title: 'Projects', icon: HiFolder, href: '/projects', image: '/assets/logo.svg', current: false },
  { title: 'Calendar', icon: HiCalendar, href: '/calender', image: '/assets/logo.svg', current: false },
  { title: 'Documents', icon: HiInbox, href: '/documents', image: '/assets/logo.svg', current: false },
  { title: 'Reports', icon: HiChartBar, href: '/reports', image: '/assets/logo.svg', current: false },
];

const lessons = [
  { title: 'Dashboard', icon: HiHome, href: '/dashboard', current: true },
  { title: 'Team', icon: HiUsers, href: '/team', current: false },
  { title: 'Projects', icon: HiFolder, href: '/projects', current: false },
  { title: 'Calendar', icon: HiCalendar, href: '/calender', current: false },
  { title: 'Documents', icon: HiInbox, href: '/documents', current: false },
  { title: 'Reports', icon: HiChartBar, href: '/reports', current: false },
];

const heading = 'Courses';

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
