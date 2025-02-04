/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AppModal from "../feedBacks/AppModal";
import { CARD_TITLE } from "../../utils/constants";
import AppDateInput from "../Inputs/AppDate";
import { ButtonType, TextInputType } from "../../enums/componentEnums";
import AnimatedInput from "../Inputs/AppAnimatedInput";
import AppButton from "../Inputs/AppButton";
import { IDevice } from "../../utils/interfaces";
import * as Yup from "yup";
import useCustomFormik from "../../customHooks/useFormik";
import { enqueueSnackbar } from "notistack";
import { usePostData } from "../../customHooks/usePostData";
import { assetTypeOptions } from "../../utils/utils";
import AppSelect2 from "../Inputs/AppSelect2";
import YearPicker from "../Inputs/DatePickerCustom";

function EditDeviceModal({
  isModalOpen,
  closeModal,
  enableOutsideClick = true,
  data
}: // data
{
  isModalOpen: boolean;
  closeModal: () => void;
  enableOutsideClick?: boolean;
    data: IDevice;
}) {
  const initialValues = {
    asset_name: data.asset_name,
    asset_type: data.asset_type,
    asset_capacity: data.asset_capacity,
    gateway_serial: data.gateway_serial,
    tariff: data.tariff,
    transformer_year_of_manufacture: data.transformer_year_of_manufacture,
    address_of_tfo: data.address_of_tfo,
    type_of_position: data.type_of_position,
    nature_of_position: data.nature_of_position,
    company_id: data.company_id,
    co_ordinate: data.co_ordinate,
  };

    const validationSchema = Yup.object({
      asset_name: Yup.string().required("Device name is required"),
      asset_type: Yup.string().required("Device ID is required"),
      co_ordinate: Yup.string().required("co ordinate is required"),
      address_of_tfo: Yup.string().required("Address of TFO is required"),
      type_of_position: Yup.string().required("Type of position is required"),
      nature_of_position: Yup.string().required("Nature of position is required"),
      company_id: Yup.string().required("Company ID is required"),
      gateway_serial: Yup.string().required("Gateway serial is required"),
      tariff: Yup.number().required("Tariff is required"),
      transformer_year_of_manufacture: Yup.string().required(
        "Year of manufacture is required"
      ),
      asset_capacity: Yup.number().required("Asset capacity is required"),
    });
    const onSubmit = (values: any) => {
      console.log(values);
      mutate(values);
      // actions.resetForm(); // Reset the form after submission
  };
  
  const {
    handleSubmit,
    values,
    getFieldProps,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    resetForm,
    setSubmitting,
  } = useCustomFormik({ initialValues, validationSchema, onSubmit });
   const { mutate } = usePostData("/devices", "POST", {
      onSuccess: (data) => {
        console.log("Device added successfully:", data);
        enqueueSnackbar("Device has been added!", { variant: "success" });
        resetForm();
        setSubmitting(false);
        closeModal();
      },
      onError: (err) => {
        console.error("Error adding Device:", err);
        const errorMessages = Object.values(err.response?.data || {})
          .flat() // Flatten arrays of errors
          .join(" "); // Join all messages into a single string
        enqueueSnackbar(errorMessages || "Error adding Device", {
          variant: "error",
        });
        setSubmitting(false);
      },
   });
    const transformDateToYear = (date: any) => {
      return date.getFullYear();
    };
  return (
    <AppModal
      isOpen={isModalOpen}
      onClose={closeModal}
      closeOnOutsideClick={enableOutsideClick} // Enable/disable outside click close
    >
      <h2 className={CARD_TITLE}>Add Device</h2>
      <form onSubmit={handleSubmit} className="gap-4 flex flex-col items-start">
        <AnimatedInput
          placeholder="Device Name"
          {...getFieldProps("asset_name")}
          isErrored={!!errors.asset_name}
          isTouched={!!touched.asset_name}
          errorMessage={errors.asset_name}
        />

        <AppSelect2
          {...getFieldProps("asset_type")}
          name="asset_type"
          value={values.asset_type}
          isErrored={!!errors.asset_type}
          isTouched={!!touched.asset_type}
          errorMessage={errors.asset_type}
          label="Asset Type"
          options={assetTypeOptions}
        />
        <AnimatedInput
          placeholder="Asset Capacity (kVA)"
          {...getFieldProps("asset_capacity")}
          isErrored={!!errors.asset_capacity}
          isTouched={!!touched.asset_capacity}
          errorMessage={errors.asset_capacity}
          type={TextInputType.NUMBER}
        />
        <AnimatedInput
          placeholder="Gateway Serial"
          {...getFieldProps("gateway_serial")}
          isErrored={!!errors.gateway_serial}
          isTouched={!!touched.gateway_serial}
          errorMessage={errors.gateway_serial}
        />
        <AnimatedInput
          placeholder="Tariff"
          {...getFieldProps("tariff")}
          isErrored={!!errors.tariff}
          isTouched={!!touched.tariff}
          errorMessage={errors.tariff}
          type={TextInputType.NUMBER}
        />
        <YearPicker
          value={values.transformer_year_of_manufacture}
          isErrored={!!errors.transformer_year_of_manufacture}
          isTouched={!!touched.transformer_year_of_manufacture}
          errorMessage={errors.transformer_year_of_manufacture}
          label="Year of Manufacture"
          setFieldValue={(date: any) =>
            setFieldValue(
              "transformer_year_of_manufacture",
              transformDateToYear(date)
            )
          }
        />
        <AnimatedInput
          placeholder="Address of TFO"
          {...getFieldProps("address_of_tfo")}
          isErrored={!!errors.address_of_tfo}
          isTouched={!!touched.address_of_tfo}
          errorMessage={errors.address_of_tfo}
        />
        <AnimatedInput
          placeholder="Type of Position"
          {...getFieldProps("type_of_position")}
          isErrored={!!errors.type_of_position}
          isTouched={!!touched.type_of_position}
          errorMessage={errors.type_of_position}
        />
        <AnimatedInput
          placeholder="Nature of Position"
          {...getFieldProps("nature_of_position")}
          isErrored={!!errors.nature_of_position}
          isTouched={!!touched.nature_of_position}
          errorMessage={errors.nature_of_position}
        />
        <AnimatedInput
          placeholder="Co-ordinate"
          {...getFieldProps("co_ordinate")}
          isErrored={!!errors.co_ordinate}
          isTouched={!!touched.co_ordinate}
          errorMessage={errors.co_ordinate}
        />
        {/* <button
          type="submit"
          className="w-full mt-4 bg-primary-yellowMain text-white p-2 rounded-lg"
        >
          {isSubmitting ? "Submitting..." : "Add Device"}
        </button> */}
        <AppButton
          style={"w-full mt-4"}
          text={isSubmitting ? "" : "Add Device"}
          loader={{
            loading: isSubmitting,
            height: 4,
            width: 4,
          }}
          type={ButtonType.PRIMARY}
          handleClick={handleSubmit}
          disabled={isSubmitting}
        />
      </form>
    </AppModal>
  );
}

export default EditDeviceModal;
