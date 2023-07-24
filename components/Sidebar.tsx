import SidebarContent from './SidebarContent';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return <SidebarContent content={children}></SidebarContent>;
};

export default Sidebar;
