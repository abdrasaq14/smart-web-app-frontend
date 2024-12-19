import HomeIcon from "../icons/Home";
import SiteIcon from "../icons/Site";
import ActivityLogIcon from "../icons/ActivityLog";
import MyAccountIcon from "../icons/MyAccount";

export const sideBarItems = [
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
  },
];

export const routesToHidNavBar = ["/dashboard/my-account"];
export const generateAccountInfo = (
  firstName: string,
  lastName: string,
  email: string,
  company: string
) => {
  return [
    {
      tag: "First Name",
      value: firstName,
    },
    {
      tag: "Last Name",
      value: lastName,
    },
    {
      tag: "Email",
      value: email,
    },
    {
      tag: "Company",
      value: company,
    },
  ];
};
