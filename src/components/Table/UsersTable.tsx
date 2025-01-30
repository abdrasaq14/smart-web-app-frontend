/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import TableTemplate from "./Table";
import CardLayout from "../Cards/CardLayout";
import { formatDateForDisplay } from "../../utils/formatters";
import { FiMoreVertical } from "react-icons/fi";
import EditUserAccountModal from "../Modals/EditUserModal";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import CardError from "../feedBacks/CardError";
import Loader from "../feedBacks/loader";
import NoContent from "../feedBacks/NoContent";
import { IUser } from "../../utils/interfaces";

const columns = [
  "Users",
  "Company",
  "Employee ID",
  "Email address",
  "Department",
  "Time/Date",
];

const UsersTable = ({company_id}: {company_id?: string}) => {
  const { data, isLoading, error } = useFetchData(
    "/users",
    {
      page: 1,
      page_size: 7,
      company_id,
    },
    // @ts-ignore
    {
      refetchOnMount: true,
      refetchOnWindowFocus: "always",
      refetchInterval: 50000,
    }
  );
  console.log("CompanyData", data);
  const tableData = React.useMemo(() => { 
    // @ts-ignore
    return data?.results.map((item: IUser) => ({
      id: item.id,
      Users: `${item.first_name} ${item.last_name}`,
      Company: item.company.name,
      "Employee ID": item.employee_id,
      "Email address": item.email,
      Department: item.access_level,
      "Time/Date": formatDateForDisplay(item.created_at),
    }));
  }, [data, company_id]);
    
   
  const handleActionClick = (row: { [key: string]: string | number }) => {
    alert(`Action triggered for ${row.name}`);
  };
  const [editUserModal, setEditUserModal] = React.useState(false);
  return (
    <CardLayout title="" style="min-w-[550px] flex-1">
      {isLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Loader />
        </div>
      ) : error ? (
        <CardError message="Error fetching users" />
      ) : !tableData || tableData.length === 0 ? (
        <NoContent message="No user found" />
      ) : (
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
      )}

      <EditUserAccountModal
        isModalOpen={editUserModal}
        closeModal={() => setEditUserModal(false)}
        enableOutsideClick={false}
      />
    </CardLayout>
  );
};

export default UsersTable;
