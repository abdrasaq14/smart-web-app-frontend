import { useState } from "react";
import AppModal from "../feedBacks/AppModal";
import { CARD_TITLE } from "../../utils/constants";
import AppDateInput from "../Inputs/AppDate";
import { ButtonType, TextInputType } from "../../enums/componentEnums";
import AnimatedInput from "../Inputs/AppAnimatedInput";
import AppButton from "../Inputs/AppButton";
import AppSelect2 from "../Inputs/AppSelect2";
import AppDate2 from "../Inputs/AppDate2";
const GAP = "12px";

const employeeInformation = [
  {
    label: "Employer's Deoartment",
    options: ["operations", "finance", "admin", "manager"],
  },
  {
    label: "Employee's Access level",
    options: ["Zone A", "Zone B", "Zone C", "Zone D"],
  },
];

function ModifyUserAccountModal({
  isModalOpen,
  closeModal,
  enableOutsideClick = true,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  enableOutsideClick?: boolean;
}) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    employee_id: "",
    phone_no: "",
    email: "",
    department: "",
    access_level: "",
  });
  return (
    <AppModal
      isOpen={isModalOpen}
      onClose={closeModal}
      closeOnOutsideClick={true} // Enable/disable outside click close
    >
      <h2 className={CARD_TITLE}>Edit Account</h2>
      <div className="gap-6 flex flex-col items-start">
        <AnimatedInput
          placeholder="Employee Name"
          value={userInfo.name}
          onChange={(value) =>
            setUserInfo({ ...userInfo, name: value })
          }
        />
        <AnimatedInput
          placeholder="Employee ID"
          value={userInfo.employee_id}
          onChange={(value) =>
            setUserInfo({ ...userInfo, employee_id: value })
          }
        />
        <AnimatedInput
          placeholder="Phone Number"
          value={userInfo.phone_no}
          onChange={(value) =>
            setUserInfo({ ...userInfo, phone_no: value })
          }
        />
        <AnimatedInput
          placeholder="Email"
          value={userInfo.email}
          onChange={(value) =>
            setUserInfo({ ...userInfo, email: value })
          }
        />
        <div className="w-full flex flex-col items-start gap-10 mt-4">
          {employeeInformation.map((info, index) => (
            <AppSelect2 key={index} label={info.label} options={info.options} />
          ))}
        </div>

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

export default ModifyUserAccountModal;
