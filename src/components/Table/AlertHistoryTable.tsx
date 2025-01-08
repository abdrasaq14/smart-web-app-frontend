import React from "react";
import TableTemplate from "./Table";
import CardLayout from "../Cards/CardLayout";

const data = [
  {
    "Date/Time": "2021-09-01 12:00:00",
    "Alert ID": "ABU-235LK",
    Site: "Oshodi",
    Zone: "Oshodi",
    District: "District A",
    Activity: "Overloading",
    Status: "Resolved",
  },
  {
    "Date/Time": "2021-09-01 12:00:00",
    "Alert ID": "ABU-235LK",
    Site: "Oshodi",
    Zone: "Oshodi",
    District: "District A",
    Activity: "Overloading",
    Status: "Resolved",
  },
  {
    "Date/Time": "2021-09-01 12:00:00",
    "Alert ID": "ABU-235LK",
    Site: "Oshodi",
    Zone: "Oshodi",
    District: "District A",
    Activity: "Overloading",
    Status: "Resolved",
  },
  {
    "Date/Time": "2021-09-01 12:00:00",
    "Alert ID": "ABU-235LK",
    Site: "Oshodi",
    Zone: "Oshodi",
    District: "District A",
    Activity: "Overloading",
    Status: "Resolved",
  },
];

const columns = [
  "Date/Time",
  "Alert ID",
  "Site",
  "Zone",
  "District",
  "Activity",
  "Status",
];

const AlertHistoryTable = () => {
  const handleActionClick = (row: { [key: string]: string | number }) => {
    alert(`Action triggered for ${row.name}`);
  };

  return (
    <CardLayout title="Alert History" style="min-w-[450px] flex-1">
      <TableTemplate
        data={data}
        columns={columns}
        extraAction={true}
        columnToStyle={1}
        columnCustomStyle={{ color: "#EE4033" }}
        onActionClick={handleActionClick}
      />
    </CardLayout>
  );
};

export default AlertHistoryTable;
