/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import AppModal from "../feedBacks/AppModal";
import { CARD_TITLE } from "../../utils/constants";
import AppDateInput from "../Inputs/AppDate";
import { ButtonType, TextInputType } from "../../enums/componentEnums";
import AnimatedInput from "../Inputs/AppAnimatedInput";
import AppButton from "../Inputs/AppButton";
import * as Yup from "yup";
import useCustomFormik from "../../customHooks/useFormik";
import { enqueueSnackbar } from "notistack";
import { usePostData } from "../../customHooks/usePostData";
import AppSelect2 from "../Inputs/AppSelect2";
import { accessLevelsOptions } from "../../utils/utils";
import { IUser } from "../../utils/interfaces";
import { useQueryClient } from "@tanstack/react-query";
function AddEmployeeModal({
  isModalOpen,
  closeModal,
  enableOutsideClick = true,
  company_id,
  type,
  data,
}:
{
  isModalOpen: boolean;
  closeModal: () => void;
    enableOutsideClick?: boolean;
  company_id?: string;
    type: "add" | "edit";
  data?: IUser;
  }) {
  console.log("USerFromData", data);
  const queryClient = useQueryClient();
  const initialValues = type === "edit" && data ? {
    ...data,
  } :{
    first_name: "",
    last_name: "",
    employee_id: "",
    is_staff: false,
    is_active: true,
    email: "",
    access_level: accessLevelsOptions[0].value,
    phone_number: "",
    company_id
  };
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    employee_id: Yup.string().required("Employee ID is required"),
    email: Yup.string().required("Email is required"),
    access_level: Yup.string().required("Access level is required"),
    phone_number: Yup.string().required("Phone number is required"),
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
    setValues,
    resetForm,
    setSubmitting,
  } = useCustomFormik({ initialValues, validationSchema, onSubmit });

  const { mutate } = usePostData(
    type === "edit" ? `/users/${data?.id}` : "/users",
    type === "edit" ? "PUT" : "POST",
    {
      onSuccess: (data) => {
        console.log("Device added successfully:", data);
        queryClient.invalidateQueries({
          queryKey: ["/users", 'fetchAllUsers'],
        });
        enqueueSnackbar("User has been added!", { variant: "success" });
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
    }
  );

  useEffect(() => { 
    if (type === "edit" && data) {
      setValues({
        ...data,
        company_id: data.company.id,
      });
    }
  }, [data]);
  return (
    <AppModal
      isOpen={isModalOpen}
      onClose={closeModal}
      closeOnOutsideClick={enableOutsideClick} // Enable/disable outside click close
    >
      <h2 className={CARD_TITLE}>
        {type === "edit" ? "Edit user" : "Add Employee"}
      </h2>
      <div className="gap-6 flex flex-col items-start">
        <AnimatedInput
          {...getFieldProps("first_name")}
          placeholder="Employee first name"
          isErrored={!!errors.first_name}
          isTouched={!!touched.first_name}
          errorMessage={errors.first_name}
        />
        <AnimatedInput
          {...getFieldProps("last_name")}
          placeholder="Employee last name"
          isErrored={!!errors.last_name}
          isTouched={!!touched.last_name}
          errorMessage={errors.last_name}
        />

        <AnimatedInput
          {...getFieldProps("employee_id")}
          placeholder="Employee ID no."
          isErrored={!!errors.employee_id}
          isTouched={!!touched.employee_id}
          errorMessage={errors.employee_id}
        />

        <AnimatedInput
          {...getFieldProps("phone_number")}
          placeholder="Employee phone number"
          isErrored={!!errors.phone_number}
          isTouched={!!touched.phone_number}
          errorMessage={errors.phone_number}
        />
        <AnimatedInput
          {...getFieldProps("email")}
          placeholder="Employee email address"
          disabled={type === "edit"}
          isErrored={!!errors.email}
          isTouched={!!touched.email}
          errorMessage={errors.email}
        />
        <AppSelect2
          {...getFieldProps("access_level")}
          name="access_level"
          value={values.access_level}
          isErrored={!!errors.access_level}
          isTouched={!!touched.access_level}
          errorMessage={errors.access_level}
          label="Asset Type"
          options={accessLevelsOptions}
        />
        <AppButton
          style={"w-full mt-4"}
          text={
            isSubmitting ? "" : type === "edit" ? "Save Changes" : "Add Employee"
          }
          loader={{
            loading: isSubmitting,
            height: 4,
            width: 4,
          }}
          type={ButtonType.PRIMARY}
          handleClick={handleSubmit}
          disabled={isSubmitting}
        />
      </div>
    </AppModal>
  );
}

export default AddEmployeeModal;
