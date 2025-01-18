import AuthLayout from "../layouts/authLayout";
import LoginPage from "../pages/auth/Login";
import Logout from "../pages/auth/Logout";
import PostLogin from "../pages/auth/PostLogin";

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
      {
        path: "post-login",
        element: <PostLogin />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
];

export default authRoutes;
