import React from "react";
import TableTemplate from "./Table";
import CardLayout from "../Cards/CardLayout";
import { formatDateForDisplay } from "../../utils/formatters";
import { FiMoreVertical } from "react-icons/fi";

const data = {
  count: 26,
  next: "http://api.demo.powersmarter.net/api/users?page=2&page_size=10",
  previous: null,
  results: [
    {
      id: 1619,
      access_level: "other",
      email: "k.owolabi@smarterise.com",
      first_name: "Kunle",
      last_name: "Owolabi",
      companies: [
        {
          id: 166,
          name: "SBEE",
          company_type: "utility",
          service_type: "distribution_electrique",
          phone_number: "+22912345678",
          email: "test@sbee.com",
          address: "Cotonou",
          renewal_date: "2024-12-10",
        },
      ],
      employee_id: "45678",
      time: "2025-01-08T11:07:01.732795Z",
      phone_number: "09035716084",
      username: "auth0|677e5c583713fe96e4feefea",
    },
    {
      id: 34,
      access_level: "finance",
      email: "employee1@smarterise.com",
      first_name: "first_name1",
      last_name: "last_name1",
      companies: [
        {
          id: 1,
          name: "KBG Russia",
          company_type: "car_energy",
          service_type: "energy_monitoring",
          phone_number: "1234567890",
          email: "email@email.com",
          address: "Address",
          renewal_date: "2022-10-20",
        },
      ],
      employee_id: "id1.1",
      time: "2022-10-21T07:35:36.975679Z",
      phone_number: "2",
      username: "employee1@smarterise.com",
    },
    {
      id: 793,
      access_level: "admin",
      email: "t.folayan@smarterise.com",
      first_name: "Tobiloba",
      last_name: "Fola",
      companies: [
        {
          id: 34,
          name: "Chioma Eze",
          company_type: "car_energy",
          service_type: "energy_monitoring",
          phone_number: "+2349139230536",
          email: "chiomaaezee@gmail.com",
          address: "33, Wilmer Street, Off Isheri Road",
          renewal_date: "2022-11-09",
        },
      ],
      employee_id: "2888",
      time: "2022-11-15T10:07:01.170779Z",
      phone_number: "9388833",
      username: "auth0.637364c5a53accfc3d42e38d",
    },
    {
      id: 301,
      access_level: "operation",
      email: "alin.floare@colibridigital.com",
      first_name: "Alin",
      last_name: "Floare",
      companies: [],
      employee_id: null,
      time: "2022-11-04T08:43:07.282903Z",
      phone_number: null,
      username: "auth0.63592c6e76d6e7d8d855e84d",
    },
  ],
};

const columns = [
  "Users",
  "Company",
  "Employee ID",
  "Email address",
  "Department",
  "Time/Date",
];
const tableData = data.results.map((item) => {
  return {
    Users: `${item.first_name} ${item.last_name}`,
    Company: item.companies.map((company) => company.name).join(", "),
    "Employee ID": item.employee_id ?? "",
    "Email address": item.email,
    Department: item.access_level,
    "Time/Date": formatDateForDisplay(item.time),
  };
});
const UsersTable = () => {
  const handleActionClick = (row: { [key: string]: string | number }) => {
    alert(`Action triggered for ${row.name}`);
  };

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
            <span className="w-full flex items-center justify-center cursor-pointer hover:bg-primary-blackLighter2 hover:rounded-full hover:px-4 hover:py-1">
              Modify
            </span>
          </>
        }
        // onActionClick={handleActionClick}
      />
    </CardLayout>
  );
};

export default UsersTable;
