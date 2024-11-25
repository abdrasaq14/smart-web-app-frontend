import DownloadComponent from "../components/Download/Download";
import NotificationIcon from "../icons/Notification";
import { CiUser } from "react-icons/ci";
function NavBar() {
  return (
    <nav className="p-5 mb-5 w-full bg-inherit flex justify-between min-h-[5rem]">
      <div className="max-w-[70%] flex-1">
        <DownloadComponent />
      </div>
      <div className="flex items-start justify-center cursor-pointer">
        <span className="h-50 w-50 rounded-full p-1 flex items-center justify-center">
          <NotificationIcon  />
        </span>
        <span className="h-50 w-50 rounded-full border border-primary-border p-1 flex items-center justify-center">
          <CiUser size={20} className="text-primary-blackLight" />
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
