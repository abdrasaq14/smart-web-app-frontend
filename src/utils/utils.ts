import HomeIcon from "../icons/Home";
import SiteIcon from "../icons/Site";
import ActivityLogIcon from "../icons/ActivityLog";
import MyAccountIcon from "../icons/MyAccount";
import TransactionsIcon from "../icons/Transactions";
export const ROLE = "operations";
const financeSideBarItems = [
  {
    label: "Home",
    link: "/dashboard/home",
    icon: HomeIcon,
  },
  {
    label: "Transactions",
    link: "/dashboard/finance/transactions",
    icon: TransactionsIcon,
  },
  {
    label: "My Account",
    link: "/dashboard/my-account",
    icon: MyAccountIcon,
  },
];
export const operationsSideBarItems = [
  {
    label: "Home",
    link: "/dashboard/operations/home",
    icon: HomeIcon,
  },
  {
    label: "Site",
    link: "/dashboard/operations/sites",
    icon: SiteIcon,
  },
  {
    label: "Activity Log",
    link: "/dashboard/operations/activity-log",
    icon: ActivityLogIcon,
  },
  {
    label: "My Account",
    link: "/dashboard/my-account",
    icon: MyAccountIcon,
  },
];

export const seniorManagerSideBarItems = [
  {
    label: "Home",
    link: "/dashboard/admin/home",
    icon: HomeIcon,
  },
  {
    label: "Companies",
    link: "/dashboard/admin/companies",
    icon: ActivityLogIcon,
  },
  {
    label: "Users",
    link: "/dashboard/admin/users",
    icon: ActivityLogIcon,
  },
  {
    label: "Devices",
    link: "/dashboard/my-account",
    icon: MyAccountIcon,
  },
]
export const getSideBarItems = (role: string) => { 
  switch (role) {
    case "operations":
      return operationsSideBarItems;
    case "finance":
      return financeSideBarItems;
    case "seniorManager":
      return seniorManagerSideBarItems;
    default:
      return [];
  }
}
export const routesToHidNavBar = ["/dashboard/my-account"];
export const routesToShowSearch = ["/dashboard/operations/sites"];
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
