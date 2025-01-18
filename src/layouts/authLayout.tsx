import { Outlet } from "react-router-dom";
import { smarteriseLogo } from "../assets/logo";
import { IoIosLogOut } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";

function AuthLayout() {
  const { logout } = useAuth0();
  return (
    <div className="auth-layout-bg min-h-[100vh] overflow-hidden">
      <div className="bg-white bg-opacity-80 min-h-[100vh] p-6 flex flex-col">
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
        <div className="relative flex-1 flex flex-col items-center justify-center">
          <span className="absolute cursor-pointer right-5 top-5">
            <IoIosLogOut
              size={22}
              className=""
              onClick={() =>
                logout({ returnTo: `${window.location.origin}/auth/login}` })
              }
            />
          </span>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
