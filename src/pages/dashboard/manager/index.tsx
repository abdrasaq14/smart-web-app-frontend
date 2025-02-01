import React from "react";
import Manager from "../../../components/Dashboards/Manager/home";
import { useParams } from "react-router-dom";

function ManagerHomePage() {
  const { id } = useParams();
    
  return <Manager company_id={id as string } />;
}

export default ManagerHomePage;
