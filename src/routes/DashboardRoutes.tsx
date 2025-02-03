import DashboardLayout from "../layouts/dashboardLayout";
import AccountPage from "../pages/dashboard/account";
import AdminIndexPage from "../pages/dashboard/admin";
import AdminCompaniesPage from "../pages/dashboard/admin/companies";
import CompanyPage from "../pages/dashboard/admin/company";
import DevicesPAge from "../pages/dashboard/admin/devices";
import AdminHomePage from "../pages/dashboard/admin/home";
import UsersPage from "../pages/dashboard/admin/users";
import FinancePage from "../pages/dashboard/finance";
import TransactionsPage from "../pages/dashboard/finance/transactions";
import ManagerHomePage from "../pages/dashboard/manager";
import OperationsPage from "../pages/dashboard/operations";
import ActivityLogPage from "../pages/dashboard/operations/activityLog";
import SitePage from "../pages/dashboard/operations/site";
import OperationsSitePage from "../pages/dashboard/operations/sites";
import AuthGuard from "./AuthGuard";

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      // {
      //   path: "home",
      //   element: <AdminIndexPage />,
      // },
      {
        path: "admin/home/:id",
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
        path: "admin/devices",
        element: <DevicesPAge />,
      },
      {
        path: "my-account",
        element: <AccountPage />,
      },
      {
        path: "operations/home/:id",
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
        path: "operations/activity-log/:id",
        element: <ActivityLogPage />,
      },

      // finance
      {
        path: "finance/home/:id",
        element: <FinancePage />,
      },
      {
        path: "finance/transactions",
        element: <TransactionsPage />,
      },

      // Senior Manager
      {
        path: "senior-manager/home/:id",
        element: <ManagerHomePage />,
      },
    ],
  },
];

export default dashboardRoutes;
// headers {'alg': 'RS256', 'typ': 'JWT', 'kid': 'GAXgzp9ZIH_E0hSprsL0v'}
