import { useFormik } from "formik";
import * as Yup from "yup"; // For validation schema
import {
  ButtonType,
  HeadingType,
  TextInputType,
} from "../../enums/componentEnums";
import AppButton from "../Inputs/AppButton";
import AppInput from "../Inputs/AppInput";
import AppHeading from "../texts/Headings";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      // Handle form submission (e.g., send values to an API)
    },
  });

  return (
    <div
      style={{
        boxShadow: "0px 0px 21px 0px rgba(0, 0, 0, 0.08)",
      }}
      className="md:h-[40%] max-h-[420px] md:w-[50%] max-w-[400px] p-10 rounded-3xl bg-white flex flex-col items-center justify-center"
    >
      <AppHeading
        text="Login to continue"
        type={HeadingType.MAIN}
        style="mb-5"
      />
      <form
        className="w-full flex flex-col"
        onSubmit={formik.handleSubmit}
      >
        {/* Email Input */}
        <AppInput
          type={TextInputType.EMAIL}
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          style={formik.touched.email && formik.errors.email ? "" : "mb-5"}
        />

        {/* Password Input */}
        <AppInput
          type={TextInputType.PASSWORD}
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />

        {/* Submit Button */}
        <AppButton
          type={formik.isValid ? ButtonType.PRIMARY : ButtonType.DISABLED}
          text="Login"
          handleClick={() => { }}
          style={!formik.touched.password  ? "mt-5" : ""}
        />
      </form>
    </div>
  );
}

export default Login;
