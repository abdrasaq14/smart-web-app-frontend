import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/auth/Login";

const authRoutes = [
  {
    path: "/auth",
    element: <AuthLayout/>,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <LoginPage />,
      },
    ],
  },
];

export default authRoutes;
