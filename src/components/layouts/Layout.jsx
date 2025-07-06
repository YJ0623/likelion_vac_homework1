import { Outlet } from 'react-router-dom';
import { NavBar } from './Navbar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;