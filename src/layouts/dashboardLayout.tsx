import { Outlet } from "react-router-dom";
import DashboardSidenav from "./SideBar";

import NavBar from "./NavBar";
import { useState } from "react";
import { sideBarItems } from "../utils/utils";
import { useLocation } from "react-router-dom";
import { routesToHidNavBar } from "../utils/utils";


function DashboardLayout()
{
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const isNavBarHidden = routesToHidNavBar.includes(location.pathname);
  const toggleNav = () => setIsSidebarOpen(!isSidebarOpen);
  console.log("location", location.pathname, isNavBarHidden);
  return (
    <div className="">
      <DashboardSidenav
        items={sideBarItems}
        isOpen={isSidebarOpen}
        toggleNav={toggleNav}
      />
      <div
        className={`${isSidebarOpen ? 'ml-60': 'ml-20'} flex flex-col items-center justify-center bg-white min-h-full`}
      >
        <NavBar showDownload={!isNavBarHidden } />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
