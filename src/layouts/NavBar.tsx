import DownloadComponent from "../components/Download/Download";
import { IoIosLogOut, IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar({showDownload, showSearch}: {showDownload: boolean, showSearch?: boolean}) {
  	const { logout } = useAuth0();
  return (
    <nav className="mb-10 items-start lg:items-center w-full bg-inherit flex flex-col sm:flex-row justify-between min-h-[5rem]">
      {showDownload && (
        <div className="max-w-[70%] flex-1">
          <DownloadComponent />
        </div>
      )}
      {/* {showSearch && (
        <div className="max-w-[80%] sm:max-w-[45%] flex-1 flex items-center justify-center  bg-primary-border p-2 rounded-full h-[2.5rem]">
          <input type="search" placeholder="Search for asset name, site and more" className="w-full h-full p-2 outline-none border-none bg-inherit placeholder:text-primary-placeholder placeholder:text-sm"/>
        </div>
      )} */}

      <div
        className={`flex items-center gap-2 ${
          showDownload ? "justify-center" : "ml-auto"
        } cursor-pointer`}
      >
        <span className="h-50 w-50 rounded-full border text-primary-blackLighter border-primary-blackLighter2 p-1 flex items-center justify-center hover:bg-primary-blackLighter2 hover:text-primary-blackMain">
          <IoIosNotificationsOutline size={22} className="" />
        </span>
        <span className="h-50 w-50 rounded-full border border-primary-border p-1 flex items-center justify-center hover:bg-primary-blackLighter2 hover:text-primary-blackMain">
          <CiUser size={22} className="" />
        </span>
        <span className="h-50 w-50 rounded-full border border-primary-border p-1 flex items-center justify-center text-primary-blackLighter hover:bg-primary-blackLighter2 hover:text-primary-blackMain">
          <IoIosLogOut size={22} className="" onClick={() => logout({ returnTo: `${window.location.origin}/auth/login` })} />
          {/* <CiUser size={22} className="text-primary-blackLighter" /> */}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
