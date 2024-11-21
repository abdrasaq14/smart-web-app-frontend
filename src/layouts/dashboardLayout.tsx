import { Outlet } from "react-router-dom";
import DashboardSidenav from "./SideBar";
import HomeIcon from "../icons/Home";
import SiteIcon from "../icons/Site";
import ActivityLogIcon from "../icons/ActivityLog";
import MyAccountIcon from "../icons/MyAccount";

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
function DashboardLayout() {
  return (
    <div className="">
      <DashboardSidenav items={sideBarItems}/>
      <div className="flex justify-between items-center text h-[5rem]">
       
        {/* choose language  */}
        {/* <div className="rounded-md border w-[3rem] h-[20px]">
          <BsGlobe2 />
          <span className="text-xs">Choose language</span>
          <IoIosArrowDown />
        </div> */}
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
