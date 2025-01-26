/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AppModal from "../feedBacks/AppModal";
import { CARD_TITLE } from "../../utils/constants";
import AppDateInput from "../Inputs/AppDate";
import { ButtonType, TextInputType } from "../../enums/componentEnums";
import AnimatedInput from "../Inputs/AppAnimatedInput";
import AppButton from "../Inputs/AppButton";
import * as Yup from "yup";
import AppSelect2 from "../Inputs/AppSelect2";
import AppDate2 from "../Inputs/AppDate2";
import useCustomFormik from "../../customHooks/useFormik";
import { usePostData } from "../../customHooks/usePostData";
import { enqueueSnackbar } from "notistack";
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
const initialValues = {
  device_name: "",
  device_id: "",
  location: "",
  coordinate: "",
  company: "",
  email: "",
  department: "",
  access_level: "",
  };
  
  const validationSchema = Yup.object({
    device_name: Yup.string().required("Device name is required"),
    device_id: Yup.string().required("Device ID is required"),
    location: Yup.string().required("Location is required"),
    coordinate: Yup.string().required("Coordinate is required"),
    company: Yup.string().required("Company name is required"),
    email: Yup.string().required("Email is required"),
  })
    const onSubmit = (values: any, actions: any) => {
      console.log(values);
      mutate({ ...values, users: [] });
      actions.resetForm(); // Reset the form after submission
    };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    getFieldProps,
    errors,
    touched,
    isSubmitting,
  } = useCustomFormik({ initialValues, validationSchema, onSubmit });
  console.log("FormErrors:", errors, values);
  const { mutate } = usePostData(
     "/companies",
     "POST",
     {
       onSuccess: (data) => {
         console.log("Company added successfully:", data);
         enqueueSnackbar("Company has been added!", { variant: "success" });
       },
       onError: (err) => {
         console.error("Error adding company:", err);
         const errorMessages = Object.values(err.response?.data || {})
           .flat() // Flatten arrays of errors
           .join(" "); // Join all messages into a single string
         enqueueSnackbar(errorMessages || "Error adding company", { variant: "error" });
       },
     }
  );
  
  return (
    <AppModal
      isOpen={isModalOpen}
      onClose={closeModal}
      closeOnOutsideClick={enableOutsideClick} // Enable/disable outside click close
    >
      <h2 className={CARD_TITLE}>Add Device</h2>
      <form onSubmit={handleSubmit} className="gap-6 flex flex-col items-start">
        <AnimatedInput
          placeholder="Device ID"
         {...getFieldProps('device_id')}
        />
        <AnimatedInput
          placeholder="Device name"
          {...getFieldProps('device_name')}
        />
        <AnimatedInput
          placeholder="Device Location"
          {...getFieldProps('location')}  
        />
        <AnimatedInput
          placeholder="Device co-ordinate"
          {...getFieldProps('coordinate')}
        />
        <AnimatedInput
          placeholder="Company name"
          {...getFieldProps('company')}
        />
        {/* <div className="w-full flex flex-col items-start gap-10 mt-4">
          {deviceInformation.map((info, index) => (
            <AppSelect2 key={index} label={info.label} options={info.options} />
          ))}
        </div> */}

        <AppButton
          style={"w-full mt-4"}
          text="Add Device"
          type={ButtonType.PRIMARY}
          handleClick={() => {}}
        />
      </form>
    </AppModal>
  );
}

export default AddDeviceModal;
