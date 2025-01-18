import AdminIndex from "../../../components/Dashboards/admin"
import { useAppSelector } from "../../../store/hooks";
import { selectAuthSlice } from "../../../store/authSlice";

function AdminIndexPage() {
  const isAuthenticated = useAppSelector(selectAuthSlice);
  return (
    <AdminIndex name={ isAuthenticated.user?.last_name || 'John'} />
  )
}

export default AdminIndexPage;