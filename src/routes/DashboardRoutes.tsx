import DashboardLayout from "../layouts/dashboardLayout";
import AccountPage from "../pages/dashboard/account";
import AdminIndexPage from "../pages/dashboard/admin";
import OperationsPage from "../pages/dashboard/operations";
import ActivityLogPage from "../pages/dashboard/operations/activityLog";
import SitePage from "../pages/dashboard/operations/site";
import OperationsSitePage from "../pages/dashboard/operations/sites";
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
        path: "operations/home",
        element: <OperationsPage />,
      },
      {
        path: "operations/sites",
        element: <OperationsSitePage />,
      },
      {
        path: "operations/sites/:id",
        element: <SitePage />,
      },
      {
        path: "operations/activity-log",
        element: <ActivityLogPage />,
      },
    ],
  },
];

export default dashboardRoutes;
