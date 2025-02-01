import FinanceHome from "../../../components/Dashboards/Finance/Home";
import { useParams } from "react-router-dom";
function FinancePage() {
  const { id } = useParams();
  return <FinanceHome company_id={id as string} />;
}

export default FinancePage;
