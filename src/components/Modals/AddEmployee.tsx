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
    label: "Employer's Department",
    options: ['operations', 'finance', 'admin', 'manager'],
  },
  {
    label: "Employee's Access level",
    options: ['Operation Manager', 'Finance Manager', 'Admin Manager', 'Manager'],
  },
  
];

function AddEmployeeModal({
  isModalOpen,
  closeModal,
  enableOutsideClick = true,
}: // data
{
  isModalOpen: boolean;
  closeModal: () => void;
  enableOutsideClick?: boolean;
  // data: {
  //   name: string;
  //   employee_id: string;
  //   phone_no: string;
  //   email: string;
  //   department: string;
  //   access_level: string;
  // };
}) {
  const [userInfo, setUserInfo] = useState({
    full_name: "",
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
      closeOnOutsideClick={enableOutsideClick} // Enable/disable outside click close
    >
      <h2 className={CARD_TITLE}>Add Employee</h2>
      <div className="gap-6 flex flex-col items-start">
        <AnimatedInput
          placeholder="Full name"
          value={userInfo.full_name}
          onChange={(value: any) =>
            setUserInfo({ ...userInfo, full_name: value })
          }
        />
        <AnimatedInput
          placeholder="Employee ID no."
          value={userInfo.employee_id}
          onChange={(value: any) =>
            setUserInfo({ ...userInfo, employee_id: value })
          }
        />
        <AnimatedInput
          placeholder="Employee phone number"
          value={userInfo.phone_no}
          onChange={(value: any) =>
            setUserInfo({ ...userInfo, phone_no: value })
          }
        />
        <AnimatedInput
          placeholder="Employee email address"
          value={userInfo.email}
          onChange={(value: any) => setUserInfo({ ...userInfo, email: value })}
        />

        {/* <div className="w-full flex flex-col items-start gap-10 mt-4">
          {employeeInformation.map((info, index) => (
            <AppSelect2 key={index} label={info.label} options={info.options} />
          ))}
        </div> */}

        <AppButton
          style={"w-full mt-4"}
          text="Add Employee"
          type={ButtonType.PRIMARY}
          handleClick={() => {}}
        />
      </div>
    </AppModal>
  );
}

export default AddEmployeeModal;
