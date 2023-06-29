import React from 'react';
import CardList from '@/containers/CardList';

const lessons = [
  { title: 'Dashboard', href: '/dashboard', image: '/assets/logo.svg', current: true },
  { title: 'Team', href: '/team', image: '/assets/logo.svg', current: false },
  { title: 'Projects', href: '/projects', image: '/assets/logo.svg', current: false },
  { title: 'Calendar', href: '/calender', image: '/assets/logo.svg', current: false },
  { title: 'Documents', href: '/documents', image: '/assets/logo.svg', current: false },
  { title: 'Reports', href: '/reports', image: '/assets/logo.svg', current: false },
];

const topics = [
  { title: 'Dashboard', href: '/dashboard', current: true },
  { title: 'Team', href: '/team', current: false },
  { title: 'Projects', href: '/projects', current: false },
  { title: 'Calendar', href: '/calender', current: false },
  { title: 'Documents', href: '/documents', current: false },
  { title: 'Reports', href: '/reports', current: false },
];

const Units = () => {
  return <CardList contentArray={topics} contentHeader='Unit Title' sidebarArray={lessons} sidebarHeader='Lessons' />;
};

export default Units;
