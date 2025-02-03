import authRoutes from "./AuthRoutes";
import { Navigate, useRoutes } from "react-router-dom";
import dashboardRoutes from "./DashboardRoutes";
import { IRoute } from "../interfaces/AppInterfaces";
import adminRoutes from "./AdminRoute";

const routes = [
  ...authRoutes,
  ...dashboardRoutes,
  ...adminRoutes,
  // {
  //   path: "*",
  //   element: <Navigate to="/auth/login" replace />,
  //   children: []
  // },
];

export default routes;

export const RouteToRender = ({ route }: { route: IRoute[] }) => {
    console.log("route", route);
  const element = useRoutes(route);
  return element;
};
