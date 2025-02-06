/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import CardLayout from "../Cards/CardLayout";
import TableTemplate from "./Table";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import { formatDateForDisplay } from "../../utils/formatters";
import { COLORS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import CardError from "../feedBacks/CardError";
import Loader from "../feedBacks/loader";
import NoContent from "../feedBacks/NoContent";

const columns = [
  "Asset Name",
  "Asset Type",
  "Asset co-ordinate",
  "Asset Capacity",
  "Time/Date",
  "",
];
function SitesTable({ company_id }: { company_id: string }) {
  const [page, setPage] = React.useState(1);
  const ROWS_PER_PAGE = 7;

  const { data, isLoading, error }: any = useFetchData(['/devices', 'fetchAllDevices'], "/devices", {
    page,
    page_size: ROWS_PER_PAGE,
    company_id,
  });

  const tableData = useMemo(() => {
    // @ts-ignore
    return data?.results.map((item: any) => {
      return {
        id: item.id,
        "Asset Name": item.asset_name,
        "Asset Type": item.asset_type,
        "Asset co-ordinate": item.co_ordinate,
        "Asset Capacity": item.asset_capacity,
        "Time/Date": formatDateForDisplay(item.created_at),
      };
    });
  }, [data]);
  const navigate = useNavigate();
  console.log("dataComingIn", data);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  return (
    <CardLayout title="" style="min-w-[450px] flex-1">
      {isLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Loader />
        </div>
      ) : error ? (
        <CardError message="Error fetching sites" />
      ) : !tableData || tableData.length === 0 ? (
        <NoContent message="No sites found" />
      ) : (
        <TableTemplate
          data={tableData}
          columns={columns}
          columnToStyle={0}
          columnCustomStyle={{ color: COLORS.PRIMARY }}
          makeRowClickable={true}
          rowLink={(row) => navigate(`/dashboard/operations/site/${row.id}`)}
          extraAction={true}
          actionType="openLink"
          onActionClick={(row) =>
            navigate(`/dashboard/operations/site/${row.id}`)
          }
          extraActionIcon={<MdOpenInNew />}
          totalCount={data?.total_pages}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={ROWS_PER_PAGE}
        />
      )}
    </CardLayout>
  );
}

export default SitesTable;
