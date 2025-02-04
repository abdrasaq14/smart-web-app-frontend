import React from "react";
import OperationSites from "../../../components/Dashboards/Operations/sites";
import { useParams } from "react-router-dom";
function OperationsSitePage() {
  const { id } = useParams();
  return <OperationSites company_id={id as string} />;
}

export default OperationsSitePage;
