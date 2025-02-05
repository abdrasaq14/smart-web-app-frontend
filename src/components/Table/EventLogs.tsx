import React from "react";
import TableTemplate from "./Table";
import CardLayout from "../Cards/CardLayout";

const data = {
  results: [
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
  ],
};

const columns = [
  "Date/Time",
  "Alert ID",
  "Site",
  "Zone",
  "District",
  "Activity",
  "Status",
];
const tableData = data.results.map((item) => {
  return {
    "Date/Time": item["Date/Time"],
    "Alert ID": item["Alert ID"],
    Site: item.Site,
    Zone: item.Zone,
    District: item.District,
    Activity: item.Activity,
    Status: item.Status,
  };
});
const EventLogTable = () => {
  const handleActionClick = (row: { [key: string]: string | number }) => {
    alert(`Action triggered for ${row.name}`);
  };

  return (
    <CardLayout title="" style="min-w-[550px] flex-1">
      <TableTemplate
        data={tableData}
        columns={columns}
        extraAction={true}
        columnToStyle={1}
        columnCustomStyle={{ color: "#EE4033" }}
        onActionClick={handleActionClick}
           totalCount={20}
        page={1}
        onPageChange={(page) => console.log(page)}
      />

    </CardLayout>
  );
};

export default EventLogTable;
