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
        name: 'Domestic',
        icon: HiOutlineGlobeAlt,
        iconFill: HiGlobeAlt,
        href: '/user/domestic',
        color: 'text-red-500',
        bgColor: 'bg-red-50',
        hoverColor: 'hover:text-red-500',
        groupHoverColor: 'group-hover:text-red-500',
      },
      {
        name: 'International',
        icon: HiOutlineGlobeEuropeAfrica,
        iconFill: HiGlobeEuropeAfrica,
        href: '/user/international',
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        hoverColor: 'hover:text-blue-500',
        groupHoverColor: 'group-hover:text-blue-500',
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
        href: '/user/dashboard',
        color: 'text-purple-500',
        bgColor: 'bg-purple-50',
        hoverColor: 'hover:text-purple-500',
        groupHoverColor: 'group-hover:text-purple-500',
      },
      {
        name: 'Notifications',
        icon: HiOutlineBell,
        iconFill: HiBell,
        href: '/user/notifications',
        color: 'text-green-500',
        bgColor: 'bg-green-50',
        hoverColor: 'hover:text-green-500',
        groupHoverColor: 'group-hover:text-green-500',
      },
      {
        name: 'Profile',
        icon: HiOutlineUser,
        iconFill: HiUser,
        href: '/user/profile',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50',
        hoverColor: 'hover:text-yellow-500',
        groupHoverColor: 'group-hover:text-yellow-500',
      },
      {
        name: 'Settings',
        icon: HiOutlineCog,
        iconFill: HiCog,
        href: '/user/settings',
        color: 'text-pink-500',
        bgColor: 'bg-pink-50',
        hoverColor: 'hover:text-pink-500',
        groupHoverColor: 'group-hover:text-pink-500',
      },
    ],
  },
  {
    heading: 'Tests and Exams',
    items: [
      {
        name: 'Tests Overview',
        icon: HiOutlineDocumentText,
        iconFill: HiDocumentText,
        href: '/user/tests-overview',
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        hoverColor: 'hover:text-blue-500',
        groupHoverColor: 'group-hover:text-blue-500',
      },
      {
        name: 'Results',
        icon: HiOutlineChartBar,
        iconFill: HiChartBar,
        href: '/user/results',
        color: 'text-cyan-500',
        bgColor: 'bg-cyan-50',
        hoverColor: 'hover:text-cyan-500',
        groupHoverColor: 'group-hover:text-cyan-500',
      },
    ],
  },
];

export default SidebarItemsList;
