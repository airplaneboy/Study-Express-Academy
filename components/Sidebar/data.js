import {
  HiHome,
  HiBell,
  HiUser,
  HiGlobeAlt,
  HiChartBar,
  HiDocumentText,
  HiGlobeEuropeAfrica,
  HiCog,
  HiOutlineHome,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineGlobeEuropeAfrica,
  HiOutlineCog,
} from 'react-icons/hi2';

const SidebarItemsList = [
  {
    heading: 'Courses',
    items: [
      {
        name: 'National Courses',
        icon: HiOutlineGlobeAlt,
        iconFill: HiGlobeAlt,
        href: '/main/national-courses',
        current: true,
        color: 'text-red-500',
      },
      {
        name: 'International Courses',
        icon: HiOutlineGlobeEuropeAfrica,
        iconFill: HiGlobeEuropeAfrica,
        href: '/main/international-courses',
        current: false,
        color: 'text-blue-500',
      },
    ],
  },

  {
    heading: 'Account Settings',
    items: [
      {
        name: 'Dashboard',
        icon: HiOutlineHome,
        iconFill: HiHome,
        href: '/main/main',
        current: false,
        color: 'text-purple-500',
      },
      {
        name: 'Notification',
        icon: HiOutlineBell,
        iconFill: HiBell,
        href: '/main/notifications',
        current: false,
        color: 'text-green-500',
      },
      {
        name: 'Profile',
        icon: HiOutlineUser,
        iconFill: HiUser,
        href: '/main/profile',
        current: false,
        color: 'text-yellow-500',
      },
      {
        name: 'Settings',
        icon: HiOutlineCog,
        iconFill: HiCog,
        href: '/main/settings',
        current: false,
        color: 'text-pink-500',
      },
    ],
  },
  {
    heading: 'Tests and Exams',
    items: [
      {
        name: 'Exam Information',
        icon: HiOutlineDocumentText,
        iconFill: HiDocumentText,
        href: '/main/test-information',
        current: false,
        color: 'text-indigo-500',
      },
      {
        name: 'Results',
        icon: HiOutlineChartBar,
        iconFill: HiChartBar,
        href: '/main/results',
        current: false,
        color: 'text-cyan-500',
      },
    ],
  },
];

export default SidebarItemsList;
