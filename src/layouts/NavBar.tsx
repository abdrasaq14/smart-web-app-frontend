import DownloadComponent from "../components/Download/Download";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { PAGE_PADDING } from "../utils/constants";
function NavBar({showDownload}: {showDownload: boolean}) {
  return (
    <nav
      className="mb-10 w-full bg-inherit flex justify-between min-h-[5rem]"
    >
      {showDownload && (
        <div className="max-w-[70%] flex-1">
          <DownloadComponent />
        </div>
      )}
      <div
        className={`flex items-center gap-2 ${
          showDownload ? "justify-center" : "ml-auto"
        } cursor-pointer`}
      >
        <span className="h-50 w-50 rounded-full border border-primary-border p-1 flex items-center justify-center">
          <IoIosNotificationsOutline
            size={22}
            className="text-primary-blackLighter"
          />
        </span>
        <span className="h-50 w-50 rounded-full border border-primary-border p-1 flex items-center justify-center">
          <CiUser size={22} className="text-primary-blackLighter" />
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
