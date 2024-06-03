import { Form, Formik, FormikHelpers } from "formik";
import { cineCreacionDTO } from "./cines.model";
import * as Yup from "yup";
import { FormGroupText } from "../utils/FormGroupText";
import { Button } from "../utils/Button";
import { Link } from "react-router-dom";
import MapaFormulario from "../utils/MapaFormulario";
import { coordenadaDTO } from "../utils/coordenadas.model";

interface Props {
  modelo: cineCreacionDTO;
  onSubmit(
    valores: cineCreacionDTO,
    acciones: FormikHelpers<cineCreacionDTO>
  ): void;
}

export const FormularioCines = (props: Props) => {
  function transformarCoordenadas(): coordenadaDTO[] | undefined {
    if (props.modelo.latitud && props.modelo.longitud) {
      const respuesta: coordenadaDTO = {
        lat: props.modelo.latitud,
        lng: props.modelo.longitud,
      };
      return [respuesta];
    }

    return undefined;
  }

  return (
    <>
      <Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          nombre: Yup.string().required("Este campo es requerido"),
        })}
      >
        {(formikProps) => (
          <Form>
            <FormGroupText label="Nombre" campo="nombre" />

            <div style={{ marginBottom: "1rem" }}>
              <MapaFormulario
                campoLat="latitud"
                campoLng="longitud"
                coords={transformarCoordenadas()}
              />
            </div>

            <Button disabled={formikProps.isSubmitting} type="submit">
              Salvar
            </Button>
            <Link className="btn btn-secondary" to={"/Cines"}>
              Cancelar
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};
