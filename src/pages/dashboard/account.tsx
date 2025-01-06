import Account from "../../components/Dashboards/account";
import { FaUserTie } from "react-icons/fa";

function AccountPage() {
  return (
    <Account userId="JB005" role={{type: 'Admin', icon: <FaUserTie />}} firstName="Victory" lastName="Onah" email="owoga@tesla.com" company="Tesla Enterpise" />
  );
}

export default AccountPage;
