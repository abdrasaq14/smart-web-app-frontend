import { useState } from "react";
import AppModal from "../feedBacks/AppModal";
import { CARD_TITLE } from "../../utils/constants";
import AppDateInput from "../Inputs/AppDate";
import { ButtonType, TextInputType } from "../../enums/componentEnums";
import AnimatedInput from "../Inputs/AppAnimatedInput";
import AppButton from "../Inputs/AppButton";
const GAP = "12px";
const siteInformation = [
  {
    label: "Select District",
    options: ["District A", "District B", "District C", "District D"],
  },
  {
    label: "Select Zone",
    options: ["Zone A", "Zone B", "Zone C", "Zone D"],
  },
  {
    label: "Select Site",
    options: ["Site A", "Site B", "Site C", "Site D"],
  },
];
const tarrifInformation = [
  {
    label: "Select Band",
    options: ["Band A", "Band B", "Band C", "Band D"],
  },
  {
    label: "Transaction Type",
    options: [
      "Transaction A",
      "Transaction B",
      "Transaction C",
      "Transaction D",
    ],
  },
];

function AddTransactionModal({
  isModalOpen,
  closeModal,
  enableOutsideClick = true,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  enableOutsideClick?: boolean;
}) {
  const [transactionInfo, setTransactionInfo] = useState({
    district: "",
    zone: "",
    site: "",
    band: "",
    transactionType: "",
    energy_billed: "",
    amount_billed: "",
    amount_collected: "",
    amount_reconciled: "",
  });
  return (
    <AppModal
      isOpen={isModalOpen}
      onClose={closeModal}
      closeOnOutsideClick={true} // Enable/disable outside click close
    >
      <h2 className={CARD_TITLE}>Add Transaction</h2>
      <div className="gap-6 flex flex-col items-start">
        {/* site information */}
        <span className="text-md">Site information</span>
        <div className="w-full flex flex-col items-start gap-6">
          {siteInformation.map((info, index) => (
            <Information
              key={index}
              label={info.label}
              options={info.options}
            />
          ))}
        </div>
        {/* Date */}
        <span className="text-md">Date</span>
        <div className="relative  flex flex-col items-start justify-center border border-primary-border rounded-lg w-full h-[2.5rem] p-2">
          <span className="absolute top-[-20px] left-2 bg-white px-2 py-1 text-sm text-primary-border">
            Select Date
          </span>
          <input
            type="date"
            className="w-full h-full border-none outline-none placeholder:text-primary-blackLighter cursor-pointer"
          />
        </div>

        {/* tarrif information */}
        <span className="text-md">Tarrif information</span>
        {tarrifInformation.map((info, index) => (
          <Information key={index} label={info.label} options={info.options} />
        ))}
        {/* Other info */}
        <AnimatedInput
          placeholder="Energy Biled (kWh)"
          value={transactionInfo.energy_billed}
          onChange={(value) =>
            setTransactionInfo({ ...transactionInfo, energy_billed: value })
          }
        />
        <AnimatedInput
          placeholder="Amount Biled incl. VAT (VGN)"
          value={transactionInfo.amount_billed}
          onChange={(value) =>
            setTransactionInfo({ ...transactionInfo, amount_billed: value })
          }
        />
        <AnimatedInput
          placeholder="Amount Collected (NGN)"
          value={transactionInfo.amount_collected}
          onChange={(value) =>
            setTransactionInfo({ ...transactionInfo, amount_collected: value })
          }
        />
        <AnimatedInput
          placeholder="Amount Reconciled (NGN)"
          value={transactionInfo.amount_reconciled}
          onChange={(value) =>
            setTransactionInfo({ ...transactionInfo, amount_reconciled: value })
          }
        />
        <AppButton
          style={"w-full mt-4"}
          text="Add Transaction"
          type={ButtonType.PRIMARY}
          handleClick={() => {}}
        />
      </div>
    </AppModal>
  );
}

export default AddTransactionModal;
const Information = ({
  label,
  options,
}: {
  label: string;
  options: string[];
}) => {
  return (
    <div className="relative  flex flex-col items-start justify-center border border-primary-border rounded-lg w-full h-[2.5rem] p-2">
      <span className="absolute top-[-20px] left-2 bg-white px-2 py-1 text-sm text-primary-border">
        {label}
      </span>
      <select
        defaultValue={options[0]}
        className="cursor-pointer flex items-center h-full w-full justify-center border-none outline-none rounded-md  text-primary-blackLighter"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
