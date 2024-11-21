import { Link } from "react-router-dom";
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
import { useState } from "react";
import { smarteriseLogoNoText } from "../assets/logo";

const DashboardSidenav = ({ items }: { items: SideNavItem[] }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeLabel, setActiveLabel] = useState<string>("Home");
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-[#F7F7F7] ${
        isOpen ? "w-60" : "w-20"
      }  border-e-[0.4px] px-5 text-sm h-full fixed transition-width duration-300`}
    >
      <div className="flex justify-between items-center w-full mt-5">
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
      </div>
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
          <li key={item.label}>
            {" "}
            {/* Add key here for each item */}
            <Link to={item.link}>
              <div
                className={`${
                  activeLabel === item.label
                    ? "bg-primary-yellowMain text-primary-blackMain"
                    : "hover:bg-primary-yellowMain hover:text-white"
                } flex items-center justify-between p-2 space-x-2 rounded-md hover:cursor-pointer mt-3`}
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
