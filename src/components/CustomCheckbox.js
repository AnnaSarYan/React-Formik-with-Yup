import { useField } from "formik";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={`checkbox-input ${meta.touched && meta.error ? "input-error" : ""}`}
        />
        <span>I agree to the Terms of Service and Privancy Policy.</span>
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomCheckbox;