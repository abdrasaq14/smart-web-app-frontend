/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useMemo } from "react";
import CardLayout from "../Cards/CardLayout";
import TableTemplate from "./Table";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import { COLORS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import Loader from "../feedBacks/loader";
import CardError from "../feedBacks/CardError";
import NoContent from "../feedBacks/NoContent";
import { ICompany } from "../../utils/interfaces";

// Define columns
const columns = ["Companies", "Date", "Users", "Phone Number", "Email address"];

// TypeScript interface for company data

function CompaniesTable() {
  const [page, setPage] = React.useState(1);

  const ROWS_PER_PAGE = 7;
  const { data, isLoading, error }: any = useFetchData(
    ["/companies", "fetchAllCompanies"],
    "/companies", {
    page,
    page_size: ROWS_PER_PAGE,
  });

  const navigate = useNavigate();

  // Transform data into table rows (memoized for performance)
  const tableData = useMemo(() => {
    // @ts-ignore
    return data?.results.map((item: ICompany) => ({
      id: item.id,
      Companies: item.name,
      Date: item.renewal_date,
      Users: item.users.length,
      "Phone Number": item.phone_number,
      "Email address": item.email,
    }));
  }, [data]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
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
          rowLink={(row) => navigate(`${row.id}`)}
          totalCount={data?.total_pages}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={ROWS_PER_PAGE}
        />
      )}
    </CardLayout>
  );
}

export default CompaniesTable;
