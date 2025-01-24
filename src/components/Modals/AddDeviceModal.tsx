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

const deviceInformation = [
  {
    label: "Company District",
    options: ['District A', 'District B', 'District C', 'District D'],
  },
  {
    label: "Company Zone",
    options: ['Oshodi', 'Agege', 'Iyan-Ipaja'],
  },
  {
    label: "Select Asset type",
    options: ['Transformer', 'Generator'],
  },
  {
    label: "Asset Capacity (kVA)",
    options: ['500', '600', '800'],
  },
];

function AddDeviceModal({
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
  const [deviceInfo, setDeviceInfo] = useState({
    device_name: "",
    device_id: "",
    location: "",
    coordinate: "",
    company: "",
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
      <h2 className={CARD_TITLE}>Edit Device</h2>
      <div className="gap-6 flex flex-col items-start">
        <AnimatedInput
          placeholder="Device ID"
          value={deviceInfo.device_id}
          onChange={(value: any) =>
            setDeviceInfo({ ...deviceInfo, device_id: value })
          }
        />
        <AnimatedInput
          placeholder="Device name"
          value={deviceInfo.device_name}
          onChange={(value: any) =>
            setDeviceInfo({ ...deviceInfo, device_name: value })
          }
        />
        <AnimatedInput
          placeholder="Device Location"
          value={deviceInfo.location}
          onChange={(value: any) =>
            setDeviceInfo({ ...deviceInfo, location: value })
          }
        />
        <AnimatedInput
          placeholder="Device co-ordinate"
          value={deviceInfo.coordinate}
          onChange={(value: any) =>
            setDeviceInfo({ ...deviceInfo, email: value })
          }
        />
        <AnimatedInput
          placeholder="Company name"
          value={deviceInfo.company}
          onChange={(value: any) =>
            setDeviceInfo({ ...deviceInfo, email: value })
          }
        />
        <div className="w-full flex flex-col items-start gap-10 mt-4">
          {deviceInformation.map((info, index) => (
            <AppSelect2 key={index} label={info.label} options={info.options} />
          ))}
        </div>

        <AppButton
          style={"w-full mt-4"}
          text="Add Device"
          type={ButtonType.PRIMARY}
          handleClick={() => {}}
        />
      </div>
    </AppModal>
  );
}

export default AddDeviceModal;
