import React, { useState } from "react";
import TransactionHistoryTable from "../../../components/Table/TransactionHistoryTable";
import AppSearch from "../../../components/Inputs/AppSearch";
import { CARD_GAP } from "../../../utils/constants";
import AddTransactionModal from "../../../components/Modals/AddTransaction";

function TransactionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div className="flex flex-col w-full" style={{ gap: CARD_GAP }}>
      <div className="w-full flex justify-between">
        <div className="flex gap-2">
          <h1 className="text-primary-blackMain font-bold text-2xl">
            Transaction
          </h1>
          {/* Add transaction button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex gap-2 items-center justify-center text-primary-blackMain text-[12px] px-2 py-1 rounded-md  bg-primary-yellowMain"
          >
            <span className="bg-primary-blackLight text-white rounded-md px-1 py-[0.2px]  border border-primary-blackMain">
              +
            </span>
            Create Transaction
          </button>
        </div>
        <div className="max-w-[80%] sm:max-w-[45%] flex-1">
          <AppSearch />
        </div>
      </div>
      <div className="w-full">
        <TransactionHistoryTable />
      </div>
      <AddTransactionModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        enableOutsideClick={false}
      />
    </div>
  );
}

export default TransactionsPage;
