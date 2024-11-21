import authRoutes from "./AuthRoutes";
import { useRoutes } from "react-router-dom";
import dashboardRoutes from "./DashboardRoutes";

const routes = [...authRoutes, ...dashboardRoutes];

export default routes;

export const RouteToRender = ({ route }: { route: any }) => {
    console.log("route", route);
  const element = useRoutes(route);
  return element;
};
