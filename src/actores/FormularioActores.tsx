import { Form, Formik, FormikHelpers } from "formik";
import { actorCracionDTO } from "./actores.model";
import { FormGroupText } from "../utils/FormGroupText";
import { Button } from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FormGroupFecha } from "../utils/FormGroupFecha";
import { FormGroupImagen } from "../utils/FormGroupImagen";
import { FormGroupMarkdown } from "../utils/FormGroupMarkdown";

interface Props {
  modelo: actorCracionDTO;
  onSubmit(
    valores: actorCracionDTO,
    acciones: FormikHelpers<actorCracionDTO>
  ): void;
}

export const FormularioActores = (props: Props) => {
  return (
    <>
      <Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          nombre: Yup.string().required("Este campo es requerido"),
          fechaNacimiento: Yup.date().required('Este campo es requerido')
        })}
      >
        {(formikProps) => (
          <Form>
            <FormGroupText campo="nombre" label="Nombre" />
            <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento"/>
            <FormGroupImagen campo="foto" label="Foto" imagenURL={props.modelo.fotoURL} />
            <FormGroupMarkdown campo="biografia" label="Biografía"/>


            <Button disabled={formikProps.isSubmitting} type="submit">
              Salvar
            </Button>
            <Link className="btn btn-secondary">Cancelar</Link>
          </Form>
        )}
      </Formik>
    </>
  );
};
