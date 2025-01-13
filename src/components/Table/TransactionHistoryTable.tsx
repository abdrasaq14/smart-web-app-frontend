import React from "react";
import TableTemplate from "./Table";
import CardLayout from "../Cards/CardLayout";
import { COLORS } from "../../utils/constants";

const data = {
  results: [
    {
      site: "Eko Hotel",
      subscription: "Paid",
      date: "2021-09-01 12:00:00",
      amount_billed: "Oshodi",
      amount_bought: "District A",
      duration: "2 days",
    },
    {
      site: "Eko Hotel",
      subscription: "Paid",
      date: "2021-09-01 12:00:00",
      amount_billed: "Oshodi",
      amount_bought: "District A",
      duration: "2 days",
    },
    {
      site: "Eko Hotel",
      subscription: "Pending",
      date: "2021-09-01 12:00:00",
      amount_billed: "Oshodi",
      amount_bought: "District A",
      duration: "2 days",
    },
  ],
};

const columns = [
  "Site",
  "Subscription",
  "Date/Time",
  "Amount Billed",
  "Amount Bought",
  "Duration",
];
const tableData = data.results.map((item) => {
  return {
    Site: item.site,
    Subscription: item.subscription,
    "Date/Time": item.date,
    "Amount Billed": item.amount_billed,
    "Amount Bought": item.amount_bought,
    Duration: item.duration,
  };
});
const TransactionHistoryTable = () => {
  const handleActionClick = (row: { [key: string]: string | number }) => {
    alert(`Action triggered for ${row.name}`);
  };

  const styleCell = (value: string | number, column: string) => {
    if (column === "Subscription") {
      return {
        color: value === "Paid" ? "green" : COLORS.RED,
        fontWeight: "bold",
      };
    }
    return {};
  };

  return (
    <CardLayout title="Financial Performance" style="min-w-[550px] flex-1">
      <TableTemplate
        data={tableData}
        columns={columns}
        styleCell={styleCell} // Apply conditional cell styling based on value
      />
    </CardLayout>
  );
}
export default TransactionHistoryTable
