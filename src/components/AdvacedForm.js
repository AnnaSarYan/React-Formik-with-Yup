import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName:"", teamNameNumber: "", email:"", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form-component">
            <div className="first-last-name">
            <CustomInput
            label="FirstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            className="text-input input"
          />
            <CustomInput
            label="LastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="text-input input"
          />
            </div>
          <CustomSelect
            label="Team name/number"
            name="teamNameNumber"
            placeholder="Please select a job"
          >
            <option value="">Please select your team name/number</option>
            <option value="cp-1">cp-1</option>
            <option value="cp-2">cp-2</option>
            <option value="cp-3">cp-3</option>
            <option value="cp-4">cp-4</option>
            <option value="cp-5">cp-5</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomInput
            label="Emmail Addres"
            name="email"
            type="email"
            placeholder="Email Addres"
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
          <span className="or">OR</span>
          <button disabled={isSubmitting} href="#" class="google-sign-in">
           <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" class="google-icon"></img>
          Continue with Google
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;