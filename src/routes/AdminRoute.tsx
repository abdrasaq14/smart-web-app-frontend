import AdminIndexPage from "../pages/dashboard/admin";
import AuthGuard from "./AuthGuard";
import AdminLayout from "../layouts/adminLayout";
const adminRoutes = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <AdminLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "/",
        element: <AdminIndexPage />,
      },
    ],
  },
];

export default adminRoutes;
