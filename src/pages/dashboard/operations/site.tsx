import OperationSite from "../../../components/Dashboards/Operations/site";
import { useParams } from "react-router-dom";
function SitePage() {
  const { id } = useParams();
  return <OperationSite site_id={id as string} />;
}

export default SitePage;
