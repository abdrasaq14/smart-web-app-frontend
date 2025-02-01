import React from "react";
import Manager from "../../../components/Dashboards/Manager/home";
import { useParams } from "react-router-dom";

function AdminHomePage() {
  const { id } = useParams();
    
  return <Manager company_id={ id as string} />;
}

export default AdminHomePage;
