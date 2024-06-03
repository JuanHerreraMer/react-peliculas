import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./peliculas.model";
import * as Yup from "yup";
import { FormGroupText } from "../utils/FormGroupText";
import FormGroupCheckbox from "../utils/FormGroupCheckbox";
import { FormGroupFecha } from "../utils/FormGroupFecha";
import { FormGroupImagen } from "../utils/FormGroupImagen";
import { Button } from "../utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, {
  selectorMultipleModel,
} from "../utils/SelectorMultiple";
import { generosDTO } from "../generos/generos.model";
import { useState } from "react";
import { cineDTO } from "../cines/cines.model";
import TypeAheadActores from "../actores/TypeAheadActores";
import { ActorPeliculaDTO } from "../actores/actores.model";

interface Props {
  modelo: peliculaCreacionDTO;
  onSubmit(
    valores: peliculaCreacionDTO,
    acciones: FormikHelpers<peliculaCreacionDTO>
  ): void;
  generosSeleccionados: generosDTO[];
  generosNoSeleccionados: generosDTO[];
  cinesSeleccionados: cineDTO[];
  cinesNoSeleccionados: cineDTO[];
  actoresSeleccionados: ActorPeliculaDTO[];
}

export default function FormularioPeliculas({
  modelo,
  onSubmit,
  generosSeleccionados,
  generosNoSeleccionados,
  cinesSeleccionados: cinesSelecs,
  cinesNoSeleccionados: cinesNoSelecs,
  actoresSeleccionados: actsSelecs,
}: Props) {
  const [genSeleccionados, setGenSeleccionados] = useState(
    mapear(generosSeleccionados)
  );
  const [genNoSeleccionados, setGenNoSeleccionados] = useState(
    mapear(generosNoSeleccionados)
  );

  const [cinesSeleccionados, setCinesSeleccionados] = useState(
    mapear(cinesSelecs)
  );
  const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(
    mapear(cinesNoSelecs)
  );

  const [actoresSeleccionados, setAcotoresSeleccionados] =
    useState<ActorPeliculaDTO[]>(actsSelecs);

  function mapear(
    arreglo: { id: number; nombre: string }[]
  ): selectorMultipleModel[] {
    return arreglo.map((valor) => {
      return { llave: valor.id, valor: valor.nombre };
    });
  }

  return (
    <Formik
      initialValues={modelo}
      onSubmit={(valores, acciones) => {
        valores.generosIds = genSeleccionados.map((valor) => valor.llave);
        valores.cinesIds = cinesSeleccionados.map((valor) => valor.llave);
        valores.actores = actoresSeleccionados;
        onSubmit(valores, acciones);
      }}
      validationSchema={Yup.object({
        titulo: Yup.string().required("Este campo es requerido"),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText label="Título" campo="titulo" />
          <FormGroupCheckbox label="En cines" campo="enCines" />
          <FormGroupText label="Trailer" campo="trailer" />
          <FormGroupFecha label="Fecha Lanzamiento" campo="fechaLanzamiento" />
          <FormGroupImagen
            label="Poster"
            campo="poster"
            imagenURL={modelo.posterURL}
          />

          <div className="form-group">
            <TypeAheadActores
              onAdd={(actores) => {
                setAcotoresSeleccionados(actores);
              }}
              actores={actoresSeleccionados}
              listadoUI={(actor: ActorPeliculaDTO) => (
                <>
                  <div className="form-inline">
                    {/* {actor.nombre} /{" "} */}
                    <div className="input-group input-group-sm mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">{actor.nombre}</div>
                      </div>
                      <input
                        className="form-control form-control-sm"
                        placeholder="Personaje"
                        type="text"
                        value={actor.personaje}
                        onChange={(e) => {
                          const indice = actoresSeleccionados.findIndex(
                            (x) => x.id === actor.id
                          );
                          const actores = [...actoresSeleccionados];
                          actores[indice].personaje = e.currentTarget.value;
                          setAcotoresSeleccionados(actores);
                        }}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span
                            className="badge badge-pill badge-danger pointer"
                            onClick={() => {
                              const actores = actoresSeleccionados.filter(
                                (x) => x !== actor
                              );
                              setAcotoresSeleccionados(actores);
                            }}
                          >
                            X
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            />
          </div>

          <div className="form-group">
            <label>Géneros:</label>
            <SelectorMultiple
              seleccionados={genSeleccionados}
              noSeleccionados={genNoSeleccionados}
              onChange={(seleccionados, noSeleccionados) => {
                setGenNoSeleccionados(noSeleccionados);
                setGenSeleccionados(seleccionados);
              }}
            />
          </div>

          <div className="form-group">
            <label>Cines:</label>
            <SelectorMultiple
              seleccionados={cinesSeleccionados}
              noSeleccionados={cinesNoSeleccionados}
              onChange={(seleccionados, noSeleccionados) => {
                setCinesNoSeleccionados(noSeleccionados);
                setCinesSeleccionados(seleccionados);
              }}
            />
          </div>

          <Button disabled={formikProps.isSubmitting} type="submit">
            Enviar
          </Button>
          <Link className="btn btn-secondary" to="/">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}
