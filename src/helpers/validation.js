import * as yup from "yup";

export const registerValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Enter your confirm password")
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"),

  name: yup.string("Enter your name").required("Name is required"),
  gender: yup.string("Choose your gender").required("Gender is required"),
  dob: yup
    .date("Enter your date of birth")
    .default(new Date("2001-01-01"))
    .min(
      new Date("1975-01-01"),
      `Your dob should be equal or later than ${new Date("1975-01-01")}`
    )
    .max(
      new Date("2008-01-01"),
      `Your dob should be equal or earlier than ${new Date("2008-01-01")}`
    )
    .required("DOB is required"),
});

export const loginValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
