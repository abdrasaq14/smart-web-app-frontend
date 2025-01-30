/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AppSearch from "../../Inputs/AppSearch";
import { CARD_GAP, CARD_TITLE } from "../../../utils/constants";
import CompaniesTable from "../../Table/CompaniesTable";
import AnimatedInput from "../../Inputs/AppAnimatedInput";
import AppButton from "../../Inputs/AppButton";
import { ButtonType, TextInputType } from "../../../enums/componentEnums";
import AppSelect2 from "../../Inputs/AppSelect2";
import * as Yup from "yup";
import useCustomFormik from "../../../customHooks/useFormik";
import AppInput from "../../Inputs/AppInput";
import { companyServiceTypeOptions, companyTypeOptions } from "../../../utils/utils";
import { usePostData } from "../../../customHooks/usePostData";
import { enqueueSnackbar } from "notistack";
function AdminCompanies() {
  const initialValues = {
    name: "",
    company_type: companyTypeOptions[0].value,
    phone_number: "",
    email: "",
    address: "",
    renewal_date: "",
    service_type: companyServiceTypeOptions[0].value,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Company name is required"),
    company_type: Yup.string().required("Company type is required"),
    phone_number: Yup.string().required("Phone number is required"),
    email: Yup.string().lowercase().required("Email is required"),
    address: Yup.string().required("Company address is required"),
    renewal_date: Yup.string().required("Renewal date is required"),
    service_type: Yup.string().required("Service type is required"),
  });

  const onSubmit = (values: any, actions: any) => {
    console.log(values);
    mutate({...values, users: []});
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
  console.log('FormErrors:', errors, values);
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[350px] lg:min-w-[30%] bg-white p-6 border border-l-primary-border shadow-lg rounded-lg"
        >
          <h2 className={CARD_TITLE}>Add Company</h2>

          <div className="w-full gap-6 flex flex-col items-start">
            <AnimatedInput
              {...getFieldProps("name")}
              isErrored={!!errors.name}
              isTouched={!!touched.name}
              errorMessage={errors.name}
              placeholder="Company Name"
            />
            <AppSelect2
              {...getFieldProps("company_type")}
              name="company_type"
              value={values.company_type}
              isErrored={!!errors.company_type}
              isTouched={!!touched.company_type}
              errorMessage={errors.company_type}
              label="Company Type"
              options={companyTypeOptions}
            />

            <AnimatedInput
              {...getFieldProps("phone_number")}
              isErrored={!!errors.phone_number}
              isTouched={!!touched.phone_number}
              errorMessage={errors.phone_number}
              placeholder="Company Phone Number"
            />
            <AnimatedInput
              {...getFieldProps("email")}
              isErrored={!!errors.email}
              isTouched={!!touched.email}
              errorMessage={errors.email}
              placeholder="Company email address"
            />
            <AnimatedInput
              {...getFieldProps("address")}
              isErrored={!!errors.address}
              isTouched={!!touched.address}
              errorMessage={errors.address}
              placeholder="Company address"
            />
            <AppInput
              {...getFieldProps("renewal_date")}
              onChange={handleChange}
              onBlur={handleBlur}
              type={TextInputType.DATE}
              topLabel="Company Renewal Date"
              value={values.renewal_date}
              error={errors.renewal_date as string}
            />
            {/* <AppDate2 label="Company Renewal Date" /> */}

            <AppSelect2
              {...getFieldProps("service_type")}
              name="service_type"
              value={values.service_type}
              label="Type of Service"
              options={companyServiceTypeOptions}
            />
            <button type="submit" className="w-full mt-4 bg-primary-yellowMain text-white p-2 rounded-lg">{
            isSubmitting ? "Submitting..." : "Add Company"
            }</button>
            {/* <AppButton
              style={"w-full mt-4"}
              text={isSubmitting ? "Submitting..." : "Add Company"}
              type={ButtonType.PRIMARY}
              disabled={isSubmitting}
              // handleClick={handleSubmit}
            /> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminCompanies;
