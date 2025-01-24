/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import AppSearch from "../../Inputs/AppSearch";
import { CARD_GAP, CARD_TITLE } from "../../../utils/constants";
import CompaniesTable from "../../Table/CompaniesTable";
import AnimatedInput from "../../Inputs/AppAnimatedInput";
import AppButton from "../../Inputs/AppButton";
import { ButtonType, TextInputType } from "../../../enums/componentEnums";
import AppSelect2 from "../../Inputs/AppSelect2";
import AppDate2 from "../../Inputs/AppDate2";
import * as Yup from "yup";
import useCustomFormik from "../../../customHooks/useFormik";
import AppInput from "../../Inputs/AppInput";
function AdminCompanies() {
  const initialValues = {
    company_name: "",
    company_type: "",
    company_phone_number: "",
    company_email: "",
    company_address: "",
    renewal_date: "",
    service_type: "",
  };

  const validationSchema = Yup.object({
    company_name: Yup.string().required("Company name is required"),
    company_type: Yup.string().required("Company type is required"),
    company_phone_number: Yup.string().required("Phone number is required"),
    company_email: Yup.string().required("Email is required"),
    company_address: Yup.string().required("Company address is required"),
    renewal_date: Yup.string().required("Renewal date is required"),
    service_type: Yup.string().required("Service type is required"),
  });

  const onSubmit = (values: any, actions: any) => {
    console.log("Form Values:", values);
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
    isFieldInvalid,
    getFieldError,
  } = useCustomFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div className="flex flex-col w-full" style={{ gap: CARD_GAP }}>
      <div className="w-full flex justify-between">
        <h1 className="text-primary-blackMain font-bold text-2xl">Companies</h1>
        <div className="max-w-[80%] sm:max-w-[45%] flex-1">
          <AppSearch />
        </div>
      </div>
      <div
        className="w-full flex flex-col lg:flex-row flex-1 lg:min-w-[65%]"
        style={{ gap: CARD_GAP }}
      >
        <CompaniesTable />
        {/* Add company form */}
        <form className="flex flex-col max-w-[350px] lg:min-w-[30%] bg-white p-6 border border-l-primary-border shadow-lg rounded-lg">
          <h2 className={CARD_TITLE}>Add Company</h2>

          <div className="w-full gap-6 flex flex-col items-start">
            <AnimatedInput
              {...getFieldProps("company_name")}
              isErrored={!!errors.company_name}
              isTouched={!!touched.company_name}
              errorMessage={errors.company_name}
              placeholder="Company Name"
            />
            <AppSelect2
              name="company_type"
              value={values.company_type}
              label="Company Type"
              options={[]}
            />

            <AnimatedInput
              name="company_phone_number"
              placeholder="Company Phone Number"
              value={values.company_phone_number}
              onChange={handleChange}
            />
            <AnimatedInput
              name="company_email"
              placeholder="Company email address"
              value={values.company_email}
              onChange={handleChange}
            />
            <AnimatedInput
              name="company_address"
              placeholder="Company address"
              value={values.company_address}
              onChange={handleChange}
            />
            <AppInput
              name="company_name"
              onChange={handleChange}
              onBlur={handleBlur}
              type={TextInputType.DATE}
              topLabel="Company Renewal Date"
              value={values.renewal_date}
            />
            {/* <AppDate2 label="Company Renewal Date" /> */}
            <AnimatedInput
              name="service_type"
              placeholder="Type of service"
              value={values.service_type}
              onChange={handleChange}
            />

            <AppButton
              style={"w-full mt-4"}
              text="Add Company"
              type={ButtonType.PRIMARY}
              handleClick={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminCompanies;
