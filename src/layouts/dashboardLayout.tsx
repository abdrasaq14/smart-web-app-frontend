import { Outlet } from "react-router-dom";
import DashboardSidenav from "./SideBar";
import HomeIcon from "../icons/Home";
import SiteIcon from "../icons/Site";
import ActivityLogIcon from "../icons/ActivityLog";
import MyAccountIcon from "../icons/MyAccount";
import NavBar from "./NavBar";
import { useState } from "react";

const sideBarItems = [
  {
    label: "Home",
    link: "/dashboard/home",
    icon: HomeIcon,
  },
  {
    label: "Site",
    link: "/dashboard/site",
    icon: SiteIcon,
  },
  {
    label: "Activity Log",
    link: "/dashboard/activity-log",
    icon: ActivityLogIcon,
  },
  {
    label: "My Account",
    link: "/dashboard/my-account",
    icon: MyAccountIcon,
  }
]
function DashboardLayout()
{
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const toggleNav = () => setIsSidebarOpen(!isSidebarOpen);
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
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
