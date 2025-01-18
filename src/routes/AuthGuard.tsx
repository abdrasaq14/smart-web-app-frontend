import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectAuthSlice } from "../store/authSlice";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAppSelector(selectAuthSlice);
  if (!isAuthenticated.isAuthenticated) {
   return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
}


export default AuthGuard;