import { ErrorMessage, Field } from "formik";
import { MostrarErrorCampo } from "./MostrarErrorCampo";

export const FormGroupText = ({ campo, label, placeholder }: Props) => {
  return (
    <>
      <div className="form-group">
        {label || <label htmlFor={campo}>{label}</label>}
        <Field
          name={campo}
          className="form-control"
          placeholder={placeholder}
        />
        <ErrorMessage name={campo}>
          {(mensaje) => <MostrarErrorCampo mensaje={mensaje} />}
        </ErrorMessage>
      </div>
    </>
  );
};

interface Props {
  campo: string;
  label?: string;
  placeholder?: string;
}
