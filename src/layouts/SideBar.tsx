import { Link, useLocation } from "react-router-dom";
import {
  MdArrowDownward,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import {
  SideNavItem,
  SideNavItemChild,
} from "../interfaces/ComponentInterfaces";
import { smarteriseLogo } from "../assets/logo";
import { useEffect, useState } from "react";
import { smarteriseLogoNoText } from "../assets/logo";
import { PAGE_PADDING } from "../utils/constants";

const DashboardSidenav = ({
  items,
  isOpen,
  toggleNav,
}: {
  items: SideNavItem[];
  isOpen: boolean;
  toggleNav: () => void;
}) => {
  const location = useLocation(); // Get the current route
  const [activeLabel, setActiveLabel] = useState<string>("");

  // Update activeLabel based on the current route
  useEffect(() => {
    const activeItem = items.find((item) => location.pathname.includes(item.link));
    if (activeItem) {
      setActiveLabel(activeItem.label);
    }
  }, [location.pathname, items]);
  // const toggleNav = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div
      className={`bg-[#F7F7F7] ${
        isOpen ? "w-60" : "w-20"
      }  border-e-[1px] border-primary-border text-sm h-full fixed transition-width duration-300`}
      style={{ padding: PAGE_PADDING }}
    >
      <Link to='/' className="flex justify-between items-center w-full">
        {isOpen ? (
          <img
            src={smarteriseLogo}
            alt="Smarterise logo"
            className="max-w-[180px]"
          />
        ) : (
          <img
            src={smarteriseLogoNoText}
            alt="smarterise logo"
            className="max-h-20"
          />
        )}
      </Link>
      <button
        className="absolute top-[4%] right-[-10px] rounded-full h-5 w-5 flex items-center justify-center bg-primary-yellowMain text-primary-blackMain p-1 font-semibold"
        onClick={toggleNav}
      >
        {isOpen ? (
          <MdOutlineKeyboardArrowLeft />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )}
      </button>
      <ul className="mt-10 space-y-5 text-primary-blackMain">
        {items.map((item) => (
          <li key={item.label} className="text-lg">
            {" "}
            {/* Add key here for each item */}
            <Link to={item.link}>
              <div
                className={`${
                  activeLabel === item.label
                    ? "bg-primary-yellowMain text-primary-blackMain"
                    : "hover:bg-primary-yellowMain hover:text-white"
                } flex items-center justify-between ${
                  isOpen
                    ? "px-3 py-1"
                    : "flex items-center !justify-center px-5 py-2"
                } space-x-2 rounded-3xl hover:cursor-pointer mt-3 text-[14px] font-semibold`}
                onClick={() => setActiveLabel(item.label)}
              >
                <div className="flex items-center space-x-2 text-white">
                  <item.icon className="text-lg icon transition-all" />
                  {isOpen && (
                    <span
                      className={`text-primary-blackMain ${
                        activeLabel === item.label
                          ? "text-primary-blackMain"
                          : "group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </div>
                {item.children && <MdArrowDownward />}
              </div>
            </Link>
            {item.children && activeLabel === item.label && (
              <div
                className="pl-8 pt-2 flex flex-col gap-3 text-sm"
                style={{ marginTop: 0 }}
              >
                {item.children.map((child: SideNavItemChild) => (
                  <Link key={child.label} to={child.href}>
                    {" "}
                    {/* Add key here for each child */}
                    <span
                      className={`text-accent-dark3 hover:text-purple-main`}
                    >
                      {child.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidenav;
