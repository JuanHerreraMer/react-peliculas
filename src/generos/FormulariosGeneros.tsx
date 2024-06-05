import { Form, Formik, FormikHelpers } from "formik";
import { FormGroupText } from "../utils/FormGroupText";
import { Button } from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { generoCreacionDTO } from "./generos.model";

export const FormulariosGeneros = (props: Props) => {
  return (
    <>
      <Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          nombre: Yup.string().required("Este campo es requerido")
          .max(50, 'La longitud máxima es de 50 caracteres')
          // .primeraLetraMayuscula(),
        })}
      >
        {(formikProps) => (
          <Form>
            <FormGroupText
              campo="nombre"
              label="Nombre"
              placeholder="Nombre genero"
            />
            <Button disabled={formikProps.isSubmitting} type="submit">
              Salvar
            </Button>
            <Link className="btn btn-secondary" to={"/Generos"}>
              Cancelar
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

interface Props {
  modelo: generoCreacionDTO;
  onSubmit(
    valores: generoCreacionDTO,
    accion: FormikHelpers<generoCreacionDTO>
  ): void;
}
