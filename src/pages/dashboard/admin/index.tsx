import AdminIndex from "../../../components/Dashboards/admin"
import { useAppSelector } from "../../../store/hooks";
import { selectAuthSlice } from "../../../store/authSlice";

function AdminIndexPage() {
  const userInfo = useAppSelector(selectAuthSlice);
  return (
    <AdminIndex name={userInfo.user?.last_name || 'John'} company_id={userInfo.user?.company.id as string } />
  )
}

export default AdminIndexPage;