import type { FC } from 'react';
import { Footer, Navbar } from '../Components';
import { Outlet } from 'react-router';

interface LayoutProps {
  user: any;
}

const Layout: FC<LayoutProps> = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
