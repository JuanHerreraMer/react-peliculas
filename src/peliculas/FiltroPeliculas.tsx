import { Field, Form, Formik } from "formik";
import { generosDTO } from "../generos/generos.model";
import { Button } from "../utils/Button";

export const FiltroPeliculas = () => {
  const valorInicial: filtroPeliculasForm = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  const generos: generosDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Drama" },
  ];

  return (
    <>
      <h3>Filtro de Peliculas</h3>

      <Formik
        initialValues={valorInicial}
        onSubmit={(valores) => console.log(valores)}
      >
        {(formikProps) => (
          <Form>
            <div className="form-inline">
              <div className="form-group mb-2">
                <label htmlFor="titulo" className="sr-only">
                  Título
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  placeholder="Titulo de la pelicula"
                  {...formikProps.getFieldProps("titulo")}
                />
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <select
                  className="form-control"
                  {...formikProps.getFieldProps("generoId")}
                >
                  <option value="0">--Seleccione un género--</option>
                  {generos.map((genero) => (
                    <option key={genero.id} value={genero.id}>
                      {genero.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mx sm-3 mb-2">
                <Field
                  className="form-check-input"
                  id="proximosEstrenos"
                  name="proximosEstrenos"
                  type="checkbox"
                />
                <label htmlFor="proximosEstrenos">Próximos Estrenos</label>
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <Field
                  className="form-check-input"
                  id="enCines"
                  name="enCines"
                  type="checkbox"
                />
                <label htmlFor="enCines">En Cine</label>
              </div>
              <Button
                onClick={() => formikProps.submitForm()}
                className="btn btn-primary mb-2 mx-sm-3"
              >
                Filtrar
              </Button>
              <Button
                onClick={() => formikProps.setValues(valorInicial)}
                className="btn btn-danger mb-2"
              >
                Limpiar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

interface filtroPeliculasForm {
  titulo: string;
  generoId: number;
  proximosEstrenos: boolean;
  enCines: boolean;
}
