import React from "react";
import Company from "../../../components/Dashboards/Admin/Company";
import { useParams } from "react-router-dom";
function CompanyPage() {
  const { id } = useParams();
  return <Company company_id={id as string} />;
}

export default CompanyPage;
