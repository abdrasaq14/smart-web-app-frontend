import DashboardLayout from "../layouts/dashboardLayout";
import AccountPage from "../pages/dashboard/account";
import AdminIndexPage from "../pages/dashboard/admin";
import OperationsPage from "../pages/dashboard/operations";
// import AuthGuard from "./AuthGuard";

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <AdminIndexPage />,
      },
      {
        path: "my-account",
        element: <AccountPage />,
      },
      {
        path: "operations",
        element: <OperationsPage />,
      },
    ],
  },
];

export default dashboardRoutes;
