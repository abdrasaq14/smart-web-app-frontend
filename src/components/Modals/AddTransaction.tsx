import { useState } from "react";
import AppModal from "../feedBacks/AppModal";
import { CARD_TITLE } from "../../utils/constants";
import AppDateInput from "../Inputs/AppDate";
import { ButtonType, TextInputType } from "../../enums/componentEnums";
import AnimatedInput from "../Inputs/AppAnimatedInput";
import AppButton from "../Inputs/AppButton";
import AppSelect2 from "../Inputs/AppSelect2";
// import AppDate2 from "../Inputs/AppDate2";
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
      closeOnOutsideClick={enableOutsideClick} // Enable/disable outside click close
    >
      <h2 className={CARD_TITLE}>Add Transaction</h2>
      <div className="gap-6 flex flex-col items-start">
        {/* site information */}
        <span className="text-md">Site information</span>
        {/* <div className="w-full flex flex-col items-start gap-6">
          {siteInformation.map((info, index) => (
            <AppSelect2 key={index} label={info.label} options={info.options} />
          ))}
        </div> */}
        {/* Date */}
        <span className="text-md">Date</span>
        {/* <AppDate2 label="Select Date" /> */}

        {/* tarrif information */}
        {/* <span className="text-md">Tarrif information</span>
        {tarrifInformation.map((info, index) => (
          <AppSelect2 key={index} label={info.label} options={info.options} />
        ))} */}
        {/* Other info */}
        <AnimatedInput
          placeholder="Energy Biled (kWh)"
          value={transactionInfo.energy_billed}
          onChange={(value: any) =>
            setTransactionInfo({ ...transactionInfo, energy_billed: value })
          }
        />
        <AnimatedInput
          placeholder="Amount Biled incl. VAT (VGN)"
          value={transactionInfo.amount_billed}
          onChange={(value: any) =>
            setTransactionInfo({ ...transactionInfo, amount_billed: value })
          }
        />
        <AnimatedInput
          placeholder="Amount Collected (NGN)"
          value={transactionInfo.amount_collected}
          onChange={(value: any) =>
            setTransactionInfo({ ...transactionInfo, amount_collected: value })
          }
        />
        <AnimatedInput
          placeholder="Amount Reconciled (NGN)"
          value={transactionInfo.amount_reconciled}
          onChange={(value: any) =>
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
