import { Link } from "react-router-dom";
import { FaUserTie, FaHardHat, FaChartLine } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

function AdminIndexPage({name}: {name: string}) {
  return (
    <div className="flex flex-col items-start justify-center mt-10 bg-white gap-4 p-8 rounded-lg border border-gray-300 min-h-[250px]">
      <h2 className="text-2xl font-semibold text-gray-700">Welcome {name},</h2>

      {/* Permission Options */}
      <div className="mt-8 flex gap-6 flex-wrap justify-center">
        <PermissionCard
          title="Senior Manager"
          icon={<FaUserTie size={40} />}
          bgColor="bg-yellow-400"
          to="/senior-manager-account/home"
        />
        <PermissionCard
          title="Operations"
          icon={<FaHardHat size={40} />}
          bgColor="bg-yellow-400"
          to="/operations/home"
        />
        <PermissionCard
          title="Finance"
          icon={<FaChartLine size={40} />}
          bgColor="bg-yellow-400"
          to="/finance/home"
        />
        <PermissionCard
          title="Admin"
          icon={<RiAdminFill size={40} />}
          bgColor="bg-yellow-400"
          to="/account-ui/home"
        />
      </div>

      <p className="text-sm text-gray-500 mt-2 self-end">
        To change your Permission type,{" "}
        <Link to="/" className="text-blue-500 underline">
          Contact Super Admin
        </Link>
      </p>
    </div>
  );
}

export default AdminIndexPage;

const PermissionCard = ({
  title,
  icon,
  bgColor,
  to,
}: {
  title: string;
  icon: any;
  bgColor: string;
  to: string;
}) => (
  <Link
    to={to}
    className={`w-40 h-40 rounded-lg shadow-md flex flex-col items-center justify-center relative text-gray-700 ${bgColor}`}
  >
    {icon}
    <h3 className="mt-4 text-lg font-medium text-gray-700">{title}</h3>
  </Link>
);
