import React from "react";
import TableTemplate from "./Table";
import CardLayout from "../Cards/CardLayout";

const data = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

const columns = ["name", "calories", "fat", "carbs", "protein"];

const AlertHistoryTable = () => {
  const handleActionClick = (row: { [key: string]: string | number }) => {
    alert(`Action triggered for ${row.name}`);
  };

  return (
    <CardLayout
      title="Power Consumption by District"
      style="min-w-[350px]  flex-1"
    >
      <TableTemplate
        data={data}
        columns={columns}
        extraAction={true}
        onActionClick={handleActionClick}
      />
    </CardLayout>
  );
};

export default AlertHistoryTable;
