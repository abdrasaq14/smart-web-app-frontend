import { Outlet } from "react-router-dom";
import DashboardSidenav from "./SideBar";

import NavBar from "./NavBar";
import { useState } from "react";
import { getSideBarItems, routesToShowSearch } from "../utils/utils";
import { useLocation } from "react-router-dom";
import { routesToHidNavBar } from "../utils/utils";
import { PAGE_PADDING, ROLE } from "../utils/constants";
import GeneralLayout from "./GeneralLayout";
import { selectAuthSlice } from "../store/authSlice";
import { useAppSelector } from "../store/hooks";

function DashboardLayout() {
  const { user} = useAppSelector(selectAuthSlice);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const isNavBarHidden = routesToHidNavBar.includes(location.pathname);
  const showSearch = routesToShowSearch.includes(location.pathname);
  const toggleNav = () => setIsSidebarOpen(!isSidebarOpen);
  console.log("location", location.pathname, showSearch);
  return (
    <GeneralLayout>
      <div className="h-full">
        <DashboardSidenav
          items={getSideBarItems(user?.access_level as ROLE, location.pathname, user?.company?.id as string)}
          isOpen={isSidebarOpen}
          toggleNav={toggleNav}
        />
        <div
          className={`${
            isSidebarOpen ? "ml-60" : "ml-20"
          } flex flex-col items-center justify-center bg-white min-h-full`}
          style={{ padding: PAGE_PADDING }}
        >
          <NavBar showDownload={!isNavBarHidden} showSearch={showSearch} />
          <div className="w-full h-full min-h-[100vh] ">
            <Outlet />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default DashboardLayout;
