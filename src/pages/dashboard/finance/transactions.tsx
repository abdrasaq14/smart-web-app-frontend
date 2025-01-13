import React from "react";
import TransactionHistoryTable from "../../../components/Table/TransactionHistoryTable";
import AppSearch from "../../../components/Inputs/AppSearch";
import { CARD_GAP } from "../../../utils/constants";

function TransactionsPage() {
  return (
    <div className="flex flex-col w-full" style={{ gap: CARD_GAP }}>
      <div className="w-full flex justify-between">
        <h1 className="text-primary-blackMain font-bold text-2xl">
          Transaction
        </h1>
        <div className="max-w-[80%] sm:max-w-[45%] flex-1">
          <AppSearch />
        </div>
      </div>
      <div className="w-full">
        <TransactionHistoryTable />
      </div>
    </div>
  );
}

export default TransactionsPage;
