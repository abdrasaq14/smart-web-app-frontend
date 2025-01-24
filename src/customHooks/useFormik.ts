/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import * as Yup from "yup";

/**
 * useCustomFormik Hook
 * A reusable hook for managing forms with Formik.
 *
 * @param {Object} options - Configuration options for the form.
 * @param {Object} options.initialValues - The initial values for the form fields.
 * @param {Object} options.validationSchema - Yup validation schema for the form.
 * @param {Function} options.onSubmit - Callback function for form submission.
 * @returns {Object} - Formik props and helper methods for form handling.
 */
const useCustomFormik = ({
  initialValues,
  validationSchema,
  onSubmit,
}: {
  initialValues: { [key: string]: any };
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: { [key: string]: any }, actions: any) => void;
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: true,
  });

  return {
    ...formik,
    isFieldInvalid: (field: string) =>
      formik.touched[field] && !!formik.errors[field],
    getFieldError: (field: string) =>
      formik.touched[field] && formik.errors[field] ? formik.errors[field] : "",
  };
};

export default useCustomFormik;
