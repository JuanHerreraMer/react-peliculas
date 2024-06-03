import { Field } from "formik";

interface Props {
  label: string;
  campo: string;
}

export default function FormGroupCheckbox({ label, campo }: Props) {
  return (
    <div className="form-group form-check">
      <Field
        className="form-check-input"
        id={campo}
        name={campo}
        type="checkbox"
      />
      <label htmlFor={campo}>{label}</label>
    </div>
  );
}
