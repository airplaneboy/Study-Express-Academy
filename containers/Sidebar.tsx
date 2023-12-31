import MainContent from './MainContent';
import SidebarContent from '../components/SidebarContent';

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarContent>
      <MainContent>{children}</MainContent>
    </SidebarContent>
  );
};

export default Sidebar;
