import { Outlet } from "react-router-dom";
import { smarteriseLogo } from "../assets/logo";

function DashboardLayout() {
  return (
    <div className="min-h-[100vh]">
      <div className="bg-white bg-opacity-80 min-h-[100vh] p-6">
        <div className="flex justify-between items-center text h-[5rem]">
          {/* logo section */}
          <div className="max-w-[200px]">
            <img src={smarteriseLogo} alt="Smarterise Logo" />
          </div>
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
    </div>
  );
}

export default DashboardLayout;
