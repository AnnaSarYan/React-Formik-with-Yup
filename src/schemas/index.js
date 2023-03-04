import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  export const advancedSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "First Name must be at least 3 characters long")
      .required("Required"),
    lastName: yup
      .string()
      .min(3, "Last Name must be at least 3 characters long")
      .required("Required"),
    teamNameNumber: yup
      .string()
      .oneOf(["cp-1", "cp-2", "cp-3", "cp-4", "cp-5", "other"], "Team name/number")
      .required("Required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Required"),
      password: yup
      .string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    acceptedTos: yup
      .boolean()
      .oneOf([true], "Please accept the terms of service"),
  });
  