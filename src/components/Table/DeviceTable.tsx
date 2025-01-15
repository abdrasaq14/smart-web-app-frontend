import React from "react";
import TableTemplate from "./Table";
import CardLayout from "../Cards/CardLayout";
import { formatDateForDisplay } from "../../utils/formatters";
import { FiMoreVertical } from "react-icons/fi";
import EditDeviceModal from "../Modals/EditDeviceModal";

const data = {
  count: 6,
  next: null,
  previous: null,
  results: [
    {
      id: "AN21110075",
      name: "Device 2",
      location: "Location 2",
      co_ordinate: "6.436234164362555, 3.455412839562022",
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
      company_district: "District B",
      asset_type: "DT",
      asset_capacity: 500,
      tariff: {
        id: 1,
        name: "Band A",
        price: 54.08,
        daily_availability: "minimum 20hrs",
      },
      linked_at: "2022-11-22T09:42:45.580369Z",
      site: 596,
    },
    {
      id: "AN21110124",
      name: "Device 3",
      location: "Location3",
      co_ordinate: "6.434558640350198, 3.495712170885353",
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
      company_district: "District C",
      asset_type: "DT",
      asset_capacity: 500,
      tariff: {
        id: 1,
        name: "Band A",
        price: 54.08,
        daily_availability: "minimum 20hrs",
      },
      linked_at: "2022-11-22T09:43:08.469716Z",
      site: 597,
    },
    {
      id: "EHM21120333",
      name: "Device x",
      location: "Location4",
      co_ordinate: "6.43548519623505, 3.4167567407274206",
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
      company_district: "District D",
      asset_type: "Mixed",
      asset_capacity: 1000,
      tariff: {
        id: 1,
        name: "Band A",
        price: 54.08,
        daily_availability: "minimum 20hrs",
      },
      linked_at: "2022-11-22T09:43:44.854253Z",
      site: 598,
    },
    {
      id: "AN21110071",
      name: "Device 1",
      location: "Location 1",
      co_ordinate: "6.430005158640445, 3.4515174946027565",
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
      company_district: "District A",
      asset_type: "DT",
      asset_capacity: 500,
      tariff: {
        id: 1,
        name: "Band A",
        price: 54.08,
        daily_availability: "minimum 20hrs",
      },
      linked_at: "2022-11-22T09:42:10.453027Z",
      site: 595,
    },
  ],
};
const columns = [
  "Device ID",
  "Device Name",
  "Company",
  "Asset Type",
  "Asset Capacity",
  "Time/Date",
];
const tableData = data.results.map((item) => {
  return {
    "Device ID": item.id,
    "Device Name": item.name,
    Company: item.company.name,
    "Asset Type": item.asset_type,
    "Asset Capacity": item.asset_capacity,
    "Time/Date": formatDateForDisplay(item.linked_at),
  };
});
const DevicesTable = () => {
  const handleActionClick = (row: { [key: string]: string | number }) => {
    alert(`Action triggered for ${row.name}`);
  };
  const [editUserModal, setEditUserModal] = React.useState(false);
  return (
    <CardLayout title="" style="min-w-[550px] flex-1">
      <TableTemplate
        data={tableData}
        columns={columns}
        extraAction={true}
        extraActionIcon={<FiMoreVertical />}
        actionType="showPopUp"
        extraActionPopUpContent={
          <>
            <span className="w-full flex items-center justify-center cursor-pointer hover:bg-primary-blackLighter2 hover:rounded-full hover:px-4 hover:py-1">
              Delete
            </span>
            <span
              onClick={() => setEditUserModal(true)}
              className="w-full flex items-center justify-center cursor-pointer hover:bg-primary-blackLighter2 hover:rounded-full hover:px-4 hover:py-1"
            >
              Modify
            </span>
          </>
        }
        // onActionClick={handleActionClick}
      />
      <EditDeviceModal
        isModalOpen={editUserModal}
        closeModal={() => setEditUserModal(false)}
        enableOutsideClick={false}
      />
    </CardLayout>
  );
};

export default DevicesTable;
