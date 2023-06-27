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
      },
      {
        name: 'International Courses',
        icon: HiOutlineGlobeEuropeAfrica,
        iconFill: HiGlobeEuropeAfrica,
        href: '/main/international-courses',
        current: false,
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
      },
      {
        name: 'Notification',
        icon: HiOutlineBell,
        iconFill: HiBell,
        href: '/main/notifications',
        current: false,
      },
      {
        name: 'Profile',
        icon: HiOutlineUser,
        iconFill: HiUser,
        href: '/main/profile',
        current: false,
      },
      {
        name: 'Settings',
        icon: HiOutlineCog,
        iconFill: HiCog,
        href: '/main/settings',
        current: false,
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
      },
      {
        name: 'Results',
        icon: HiOutlineChartBar,
        iconFill: HiChartBar,
        href: '/main/results',
        current: false,
      },
    ],
  },
];

export default SidebarItemsList;
