import React from "react";
import Operations from "../../../components/Dashboards/Operations/operations";
import { useParams } from "react-router-dom";
function OperationsPage() {
  const { id } = useParams();
  return <Operations company_id={id as string} />;
}

export default OperationsPage;
