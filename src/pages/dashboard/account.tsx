import Account from "../../components/Dashboards/account";
import { FaUserTie } from "react-icons/fa";
import { useAppSelector } from "../../store/hooks";
import { selectAuthSlice } from "../../store/authSlice";

function AccountPage() {
  const userInfo = useAppSelector(selectAuthSlice).user;
  return (
    <Account
      userId={userInfo?.id || ""}
      role={{ type: userInfo?.access_level || '', icon: <FaUserTie /> }}
      firstName={userInfo?.first_name || ""}
      lastName={userInfo?.last_name || ""}
      email={userInfo?.email || ""}
      company={userInfo?.company.name || ""}
    />
  );
}

export default AccountPage;
