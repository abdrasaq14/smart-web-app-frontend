import authRoutes from "./AuthRoutes";
import { useRoutes } from "react-router-dom";
import dashboardRoutes from "./DashboardRoutes";
import { IRoute } from "../interfaces/AppInterfaces";

const routes = [...authRoutes, ...dashboardRoutes];

export default routes;

export const RouteToRender = ({ route }: { route: IRoute[] }) => {
    console.log("route", route);
  const element = useRoutes(route);
  return element;
};
