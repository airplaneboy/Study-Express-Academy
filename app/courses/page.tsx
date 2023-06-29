import { HiCalendar, HiChartBar, HiFolder, HiHome, HiInbox, HiUsers } from 'react-icons/hi2';
import CardList from '@/containers/CardList';
import { block, For } from 'million/react';
import Link from 'next/link';
import Image from 'next/image';

const units = [
  { title: 'Dashboard', icon: HiHome, href: '/dashboard', current: true },
  { title: 'Team', icon: HiUsers, href: '/team', current: false },
  { title: 'Projects', icon: HiFolder, href: '/projects', current: false },
  { title: 'Calendar', icon: HiCalendar, href: '/calender', current: false },
  { title: 'Documents', icon: HiInbox, href: '/documents', current: false },
  { title: 'Reports', icon: HiChartBar, href: '/reports', current: false },
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

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Courses() {
  return <CardList contentArray={lessons} sidebarArray={units} sidebarHeading='Units' />;
}
