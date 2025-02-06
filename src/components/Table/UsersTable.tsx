/* eslint-disable @typescript-eslint/no-explicit-any */
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
import AddEmployeeModal from "../Modals/AddEmployee";

const columns = [
  "Users",
  "Company",
  "Employee ID",
  "Email address",
  "Department",
  "Time/Date",
];

const UsersTable = ({ company_id }: { company_id?: string }) => {
  const ROWS_PER_PAGE = 7;
  const { data, isLoading, error }: any = useFetchData(
    ['/users', 'fetchAllUsers'],
    "/users",
    {
      page: 1,
      page_size: ROWS_PER_PAGE,
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
      'User ID': item.id,
      Users: `${item.first_name} ${item.last_name}`,
      Company: item.company.name,
      "Employee ID": item.employee_id,
      "Email address": item.email,
      Department: item.access_level,
      "Time/Date": formatDateForDisplay(item.created_at),
      ...item
    }));
  }, [data, company_id]);

  const [page, setPage] = React.useState(1);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const [editUserModal, setEditUserModal] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState<IUser | null>(null);
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
          extraActionPopUpContent={(row:IUser) => (
            <>
              <span className="w-full flex items-center justify-center cursor-pointer hover:bg-primary-blackLighter2 hover:rounded-full hover:px-4 hover:py-1">
                Delete
              </span>
              <span
                onClick={() => {
                  setEditUserModal(true);
                  setUserDetails(row);
                }}
                className="w-full flex items-center justify-center cursor-pointer hover:bg-primary-blackLighter2 hover:rounded-full hover:px-4 hover:py-1"
              >
                Modify
              </span>
            </>
          )}
          totalCount={data?.total_pages}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={ROWS_PER_PAGE}
        />
      )}
      <AddEmployeeModal
        isModalOpen={editUserModal}
        closeModal={() => setEditUserModal(false)}
        enableOutsideClick={false}
        type="edit"
        data={userDetails as IUser}
      />

    </CardLayout>
  );
};

export default UsersTable;
