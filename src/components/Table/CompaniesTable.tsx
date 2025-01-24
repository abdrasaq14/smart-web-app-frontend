import React, { useMemo } from "react";
import CardLayout from "../Cards/CardLayout";
import TableTemplate from "./Table";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import { COLORS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import Loader from "../feedBacks/loader";
import CardError from "../feedBacks/CardError";
import NoContent from "../feedBacks/NoContent";

// Define columns
const columns = ["Companies", "Date", "Users", "Phone Number", "Email address"];

// TypeScript interface for company data
interface Company {
  id: string;
  name: string;
  renewal_date: string;
  users: Array<{ id: string }>;
  phone_number: string;
  email: string;
}

function CompaniesTable() {
  const { data, isLoading, error } = useFetchData("/companies", {
    page: 1,
    page_size: 7,
  });

  const navigate = useNavigate();

  // Transform data into table rows (memoized for performance)
  const tableData = useMemo(() => {
    // @ts-ignore
    return data?.results.map((item: Company) => ({
      id: item.id,
      Companies: item.name,
      Date: item.renewal_date,
      Users: item.users.length,
      "Phone Number": item.phone_number,
      "Email address": item.email,
    }));
  }, [data]);

  // Single return statement using ternary operators
  return (
    <CardLayout title={"Companies"} style="min-w-[450px] flex-1">
      {isLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Loader />
        </div>
      ) : error ? (
        <CardError message="Error fetching companies" />
      ) : !tableData || tableData.length === 0 ? (
        <NoContent message="No companies found" />
      ) : (
        <TableTemplate
          data={tableData}
          columns={columns}
          columnToStyle={0}
          columnCustomStyle={{ color: COLORS.PRIMARY }}
          makeRowClickable={true}
          rowLink={(row) => navigate(`/companies/${row.id}`)}
        />
      )}
    </CardLayout>
  );
}

export default CompaniesTable;
