/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import TableTemplate from "./Table";
import CardLayout from "../Cards/CardLayout";
import { formatDateForDisplay } from "../../utils/formatters";
import { FiMoreVertical } from "react-icons/fi";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import { IDevice } from "../../utils/interfaces";
import CardError from "../feedBacks/CardError";
import Loader from "../feedBacks/loader";
import NoContent from "../feedBacks/NoContent";
import AddDeviceModal from "../Modals/AddDeviceModal";

const columns = [
  "Device ID",
  "Device Name",
  "Company",
  "Asset Type",
  "Asset Capacity",
  "Time/Date",
];

const DevicesTable = ({ company_id }: { company_id?: string }) => {
  const [page, setPage] = React.useState(1);
  const ROWS_PER_PAGE = 7;
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const { data, isLoading, error }: any = useFetchData(
    ["/devices", 'fetchAllDevices'],
    "/devices",
    {
      page,
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
  const tableData = React.useMemo(() => {
    // @ts-ignore
    return data?.results.map((item: IDevice) => ({
      "Device ID": item.id,
      "Device Name": item.asset_name,
      Company: item.company.name,
      "Asset Type": item.asset_type,
      "Asset Capacity": item.asset_capacity,
      "Time/Date": formatDateForDisplay(item.created_at),
      ...item
    }));
  }, [data, company_id]);

  console.log("DataTEsting", data, page);
  const [editDeviceModal, setEditDeviceModal] = React.useState(false);
  const [selectedDevice, setSelectedDevice] = React.useState<IDevice | null>(null);
  return (
    <CardLayout title="" style="min-w-[550px] flex-1">
      {isLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Loader />
        </div>
      ) : error ? (
        <CardError message="Error fetching devices" />
      ) : !tableData || tableData.length === 0 ? (
        <NoContent message="No devices found" />
      ) : (
        <TableTemplate
          data={tableData}
          columns={columns}
          extraAction={true}
          extraActionIcon={<FiMoreVertical />}
          actionType="showPopUp"
          extraActionPopUpContent={(row) => (
            <>
              <span className="w-full flex items-center justify-center cursor-pointer hover:bg-primary-blackLighter2 hover:rounded-full hover:px-4 hover:py-1">
                Delete
              </span>
              <span
                onClick={() => {
                  setEditDeviceModal(true);
                  setSelectedDevice(row);
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

      <AddDeviceModal
        isModalOpen={editDeviceModal}
        closeModal={() => setEditDeviceModal(false)}
        enableOutsideClick={false}
        type="edit"
        data={selectedDevice as IDevice}
      />
    </CardLayout>
  );
};

export default DevicesTable;
