import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";
// import AuthGuard from "./AuthGuard";

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    // element: (
    //   <AuthGuard>
    //     <DashboardLayout />
    //   </AuthGuard>
    // ),
    children: [
      {
        path: "home",
        element: <DashboardPage />,
      },
    ],
  },
];

export default dashboardRoutes;
