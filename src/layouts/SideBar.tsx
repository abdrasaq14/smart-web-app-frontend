"use client";
import { Link } from "react-router-dom";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdArrowDownward,
} from "react-icons/md";
import {
  SideNavItem,
  SideNavItemChild,
} from "../interfaces/ComponentInterfaces";
import { smarteriseLogo } from "../assets/logo";
import { useState } from "react";

const DashboardSidenav = ({ items }: { items: SideNavItem[] }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={` ${
        isOpen ? "w-80" : "w-20"
      } overflow-auto border-e-[0.4px] border-r-purple-main px-5 bg-white text-accent-dark3 font-satoshiRegular text-sm h-full fixed transition-width duration-300`}
    >
      <div className="flex justify-between items-center w-full mt-5">
        <img
          src={smarteriseLogo}
          alt="Landmark logo"
          width={164}
          height={64}
        />
        <button onClick={toggleNav}>
          {isOpen ? (
            <MdKeyboardDoubleArrowLeft className="text-2xl font-satoshiRegular" />
          ) : (
            <MdKeyboardDoubleArrowRight className="text-2xl font-satoshiRegular" />
          )}
        </button>
      </div>

      <ul className="mt-10 space-y-5">
        {items.map((item) => (
          <li key={item.label}>
            {" "}
            {/* Add key here for each item */}
            <Link to={item.href}>
              <div
                className={`${
                  activeLabel === item.label
                    ? "bg-purple-main text-white"
                    : "hover:bg-purple-main hover:text-white"
                } flex items-center justify-between p-2 space-x-2 rounded-md group hover:cursor-pointer mt-3`}
                onClick={() => setActiveLabel(item.label)}
              >
                <div className="flex items-center space-x-2 text-white">
                  <item.icon className="text-lg icon transition-all" />
                  {isOpen && (
                    <span
                      className={`text-accent-dark3 ${
                        activeLabel === item.label
                          ? "text-white"
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
