import React from "react";
import DevicesTable from "../../../components/Table/DeviceTable";
import { useParams } from "react-router-dom";
function DevicesPAge() {
  const { id } = useParams();
  return <DevicesTable company_id={id} />;
}

export default DevicesPAge;
