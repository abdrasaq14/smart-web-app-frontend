import DashboardLayout from "../layouts/dashboardLayout";
import AccountPage from "../pages/dashboard/account";
import AdminIndexPage from "../pages/dashboard/admin";
import AdminCompaniesPage from "../pages/dashboard/admin/companies";
import CompanyPage from "../pages/dashboard/admin/company";
import AdminHomePage from "../pages/dashboard/admin/home";
import UsersPage from "../pages/dashboard/admin/users";
import FinancePage from "../pages/dashboard/finance";
import TransactionsPage from "../pages/dashboard/finance/transactions";
import ManagerHomePage from "../pages/dashboard/manager";
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
        path: "admin/home",
        element: <AdminHomePage />,
      },
      {
        path: "admin/companies",
        element: <AdminCompaniesPage />,
      },
      {
        path: "admin/companies/:id",
        element: <CompanyPage />,
      },
      {
        path: "admin/users",
        element: <UsersPage />,
      },
      {
        path: "my-account",
        element: <AccountPage />,
      },
      {
        path: "operations/home",
        element: <OperationsPage />,
      },
      // operations
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

      // finance
      {
        path: "finance/home",
        element: <FinancePage/>
      },
      {
        path: "finance/transactions",
        element: <TransactionsPage/>
      },

      // Senior Manager
      {
        path: "senior-manager/home",
        element: <ManagerHomePage />,
      }
    ],
  },
];

export default dashboardRoutes;
