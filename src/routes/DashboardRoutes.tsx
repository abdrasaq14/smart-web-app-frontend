import DashboardLayout from "../layouts/dashboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";
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
      {
        path: "author",
        element: <DashboardPage />,
      },
    ],
  },
];

export default dashboardRoutes;
