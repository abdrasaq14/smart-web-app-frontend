import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectIsAuthenticated } from "../store/authSlice";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (!isAuthenticated.isAuthenticated) {
   return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
}


export default AuthGuard;