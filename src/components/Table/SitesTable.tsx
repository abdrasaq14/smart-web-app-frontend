import React from "react";
import CardLayout from "../Cards/CardLayout";
import TableTemplate from "./Table";
import { GetDashboardData } from "../../customHooks/useGetDashboardData";
import { formatDateForDisplay } from "../../utils/formatters";
import { COLORS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";

const columns = [
  "Asset Name",
  "Site",
  "Asset Type",
  "Asset co-ordinate",
  "Asset Capacity",
  "Time/Date",
  "",
];
function SitesTable() {
  //   const { data, isLoading, error } = GetDashboardData("/sites", {
  //     page: 1,
  //     page_size: 7,
  //   });
  const data = {
    count: 6,
    next: null,
    previous: null,
    results: [
      {
        id: 595,
        name: "Device 1",
        asset_name: "Device 1",
        asset_type: "DT",
        asset_co_ordinate: "6.430005158640445, 3.4515174946027565",
        asset_capacity: 500,
        under_maintenance: false,
        is_active: true,
        time: "2022-11-22T09:42:10.440826Z",
        company: {
          id: 1,
          name: "KBG Russia",
          company_type: "car_energy",
          service_type: "energy_monitoring",
          phone_number: "1234567890",
          email: "email@email.com",
          address: "Address",
          renewal_date: "2022-10-20",
          users: [34, 463, 562, 563, 595, 628, 661, 760, 1031],
        },
      },
      {
        id: 596,
        name: "Device 2",
        asset_name: "Device 2",
        asset_type: "DT",
        asset_co_ordinate: "6.436234164362555, 3.455412839562022",
        asset_capacity: 500,
        under_maintenance: false,
        is_active: true,
        time: "2022-11-22T09:42:45.571554Z",
        company: {
          id: 1,
          name: "KBG Russia",
          company_type: "car_energy",
          service_type: "energy_monitoring",
          phone_number: "1234567890",
          email: "email@email.com",
          address: "Address",
          renewal_date: "2022-10-20",
          users: [34, 463, 562, 563, 595, 628, 661, 760, 1031],
        },
      },
      {
        id: 597,
        name: "Device 3",
        asset_name: "Device 3",
        asset_type: "DT",
        asset_co_ordinate: "6.434558640350198, 3.495712170885353",
        asset_capacity: 500,
        under_maintenance: false,
        is_active: true,
        time: "2022-11-22T09:43:08.466445Z",
        company: {
          id: 1,
          name: "KBG Russia",
          company_type: "car_energy",
          service_type: "energy_monitoring",
          phone_number: "1234567890",
          email: "email@email.com",
          address: "Address",
          renewal_date: "2022-10-20",
          users: [34, 463, 562, 563, 595, 628, 661, 760, 1031],
        },
      },
      {
        id: 598,
        name: "Device x",
        asset_name: "Device x",
        asset_type: "Mixed",
        asset_co_ordinate: "6.43548519623505, 3.4167567407274206",
        asset_capacity: 1000,
        under_maintenance: false,
        is_active: true,
        time: "2022-11-22T09:43:44.850594Z",
        company: {
          id: 34,
          name: "Chioma Eze",
          company_type: "car_energy",
          service_type: "energy_monitoring",
          phone_number: "+2349139230536",
          email: "chiomaaezee@gmail.com",
          address: "33, Wilmer Street, Off Isheri Road",
          renewal_date: "2022-11-09",
          users: [892, 793, 1058, 1057],
        },
      },
      {
        id: 628,
        name: "Device y",
        asset_name: "Device y",
        asset_type: "DT",
        asset_co_ordinate: "6.464792122751952, 3.4414100989345977",
        asset_capacity: 500,
        under_maintenance: false,
        is_active: true,
        time: "2022-11-29T18:45:59.542465Z",
        company: {
          id: 34,
          name: "Chioma Eze",
          company_type: "car_energy",
          service_type: "energy_monitoring",
          phone_number: "+2349139230536",
          email: "chiomaaezee@gmail.com",
          address: "33, Wilmer Street, Off Isheri Road",
          renewal_date: "2022-11-09",
          users: [892, 793, 1058, 1057],
        },
      },
      {
        id: 661,
        name: "C025",
        asset_name: "C025",
        asset_type: "DT",
        asset_co_ordinate: "6.368362, 2.484064",
        asset_capacity: 500,
        under_maintenance: false,
        is_active: true,
        time: "2024-12-11T00:20:40.399264Z",
        company: {
          id: 166,
          name: "SBEE",
          company_type: "utility",
          service_type: "distribution_electrique",
          phone_number: "+22912345678",
          email: "test@sbee.com",
          address: "Cotonou",
          renewal_date: "2024-12-10",
          users: [1222, 1486, 1255, 1519, 1552, 1619, 1387, 1426, 1428],
        },
      },
    ],
  };
  const tableData = data?.results.map((item: any) => {
    return {
      id: item.id,
      "Asset Name": item.asset_name,
      Site: item.site || "N/A",
      "Asset Type": item.asset_type,
      "Asset co-ordinate": item.asset_co_ordinate,
      "Asset Capacity": item.asset_capacity,
      "Time/Date": formatDateForDisplay(item.time),
    };
  });
  const navigate = useNavigate();
  console.log("dataComingIn", data);
  return (
    <CardLayout title="Alert History" style="min-w-[450px] flex-1">
      <TableTemplate
        data={tableData}
        columns={columns}
        columnToStyle={0}
        columnCustomStyle={{ color: COLORS.PRIMARY }}
        makeRowClickable={true}
        extraAction={true}
        onActionClick={(row) => navigate(`${row.id}`)}
        extraActionIcon={<MdOpenInNew />}
      />
    </CardLayout>
  );
}

export default SitesTable;
