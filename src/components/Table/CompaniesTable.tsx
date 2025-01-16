import React from "react";
import CardLayout from "../Cards/CardLayout";
import TableTemplate from "./Table";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import { formatDateForDisplay } from "../../utils/formatters";
import { COLORS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";

const columns = ["Companies", "Date", "Users", "Phone Number", "Email address"];
function CompaniesTable() {
  //   const { data, isLoading, error } = GetDashboardData("/sites", {
  //     page: 1,
  //     page_size: 7,
  //   });
  const data = {
    count: 5,
    next: null,
    previous: null,
    results: [
      {
        id: 1,
        name: "KBG Russia",
        company_type: "car_energy",
        service_type: "energy_monitoring",
        phone_number: "1234567890",
        email: "email@email.com",
        address: "Address",
        renewal_date: "2022-10-20",
        users: [
          {
            id: 34,
            access_level: "finance",
            email: "employee1@smarterise.com",
            first_name: "first_name1",
            last_name: "last_name1",
            employee_id: "id1.1",
            time: "2022-10-21T07:35:36.975679Z",
            phone_number: "2",
          },
          {
            id: 463,
            access_level: "admin",
            email: "vmadincea@gmail.com",
            first_name: "Vasi",
            last_name: "Madi",
            employee_id: "1",
            time: "2022-11-08T13:30:02.600058Z",
            phone_number: "1",
          },
          {
            id: 562,
            access_level: "admin",
            email: "james.cross@colibridigital.io",
            first_name: "James",
            last_name: "James",
            employee_id: "2",
            time: "2022-11-08T14:00:04.899021Z",
            phone_number: "2",
          },
          {
            id: 563,
            access_level: "admin",
            email: "alin.floare@colibridigital.io",
            first_name: "Alin",
            last_name: "Alin",
            employee_id: "3",
            time: "2022-11-08T14:05:40.037899Z",
            phone_number: "3",
          },
          {
            id: 595,
            access_level: "operation",
            email: "vasile.madincea@colibridigital.io",
            first_name: "Vasi",
            last_name: "Operational",
            employee_id: "42",
            time: "2022-11-09T08:12:50.486158Z",
            phone_number: "42",
          },
          {
            id: 628,
            access_level: "admin",
            email: "hasnain.ali@colibridigital.io",
            first_name: "hasnain",
            last_name: "ali",
            employee_id: "421",
            time: "2022-11-09T09:47:16.406534Z",
            phone_number: "1",
          },
          {
            id: 661,
            access_level: "admin",
            email: "l.adeosun@smarterise.com",
            first_name: "Love",
            last_name: "A",
            employee_id: "421",
            time: "2022-11-11T08:57:08.998766Z",
            phone_number: "1",
          },
          {
            id: 760,
            access_level: "admin",
            email: "c.eze@smarterise.com",
            first_name: "Chioma",
            last_name: "Eze",
            employee_id: "2888",
            time: "2022-11-11T15:27:29.539040Z",
            phone_number: "9388833",
          },
          {
            id: 1031,
            access_level: "manager",
            email: "chioma.eze1@stu.cu.edu.ng",
            first_name: "Tobiloba",
            last_name: "Folarin",
            employee_id: "38974",
            time: "2023-02-07T09:25:54.308858Z",
            phone_number: "08022765677",
          },
        ],
      },
      {
        id: 2,
        name: "KBG Russia",
        company_type: "car_energy",
        service_type: "energy_monitoring",
        phone_number: "1234567890",
        email: "email@email.com",
        address: "Address",
        renewal_date: "2022-10-20",
        users: [],
      },
      {
        id: 3,
        name: "Company1",
        company_type: "car_energy",
        service_type: "energy_monitoring",
        phone_number: "1",
        email: "vmadincea@gmail.com",
        address: "1",
        renewal_date: "2022-10-21",
        users: [],
      },
      {
        id: 34,
        name: "Chioma Eze",
        company_type: "car_energy",
        service_type: "energy_monitoring",
        phone_number: "+2349139230536",
        email: "chiomaaezee@gmail.com",
        address: "33, Wilmer Street, Off Isheri Road",
        renewal_date: "2022-11-09",
        users: [
          {
            id: 892,
            access_level: "manager",
            email: "demo@smarterise.com",
            first_name: "Demo",
            last_name: "Smarterise",
            employee_id: "1",
            time: "2022-11-16T15:47:10.292323Z",
            phone_number: "1",
          },
          {
            id: 793,
            access_level: "admin",
            email: "t.folayan@smarterise.com",
            first_name: "Tobiloba",
            last_name: "Fola",
            employee_id: "2888",
            time: "2022-11-15T10:07:01.170779Z",
            phone_number: "9388833",
          },
          {
            id: 1058,
            access_level: "operation",
            email: "demo1@smarterise.com",
            first_name: "Operations",
            last_name: "Utility",
            employee_id: "2244",
            time: "2023-04-19T08:10:21.429473Z",
            phone_number: "002244",
          },
          {
            id: 1057,
            access_level: "finance",
            email: "demo2@smarterise.com",
            first_name: "Finance",
            last_name: "Utility",
            employee_id: "1122",
            time: "2023-04-19T08:07:57.787071Z",
            phone_number: "001122",
          },
        ],
      },
      {
        id: 67,
        name: "a_company",
        company_type: "car_energy",
        service_type: "energy_monitoring",
        phone_number: "08022765677",
        email: "chiomasonia357@gmail.com",
        address:
          "2a, Aganga Williams Street, Off Abanikanda Street, Haruna Bus Stop",
        renewal_date: "2022-11-08",
        users: [],
      },
    ],
  };
  const tableData = data?.results.map((item: any) => {
      return {
        id: item.id,
      Companies: item.name,
      Date: item.renewal_date,
      Users: item.users.length,
      "Phone Number": item.phone_number,
      "Email address": item.email,
    };
  });
  const navigate = useNavigate();
  console.log("dataComingIn", data);
  return (
    <CardLayout title="" style="min-w-[450px] flex-1">
      <TableTemplate
        data={tableData}
        columns={columns}
        columnToStyle={0}
        columnCustomStyle={{ color: COLORS.PRIMARY }}
        makeRowClickable={true}
        rowLink={(row) => navigate(`${row.id}`)}
      />
    </CardLayout>
  );
}

export default CompaniesTable;
