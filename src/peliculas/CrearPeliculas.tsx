import { cineDTO } from "../cines/cines.model";
import { generosDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export const CrearPeliculas = ({}: Props) => {
  const generos: generosDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Drama" },
    { id: 3, nombre: "Comedia" },
  ];

  const cines: cineDTO[] = [
    { id: 1, nombre: "Agora" },
    { id: 2, nombre: "Sambil" },
  ];

  return (
    <>
      <h3>Crear Película</h3>
      <FormularioPeliculas
        actoresSeleccionados={[]}
        cinesNoSeleccionados={cines}
        cinesSeleccionados={[]}
        generosNoSeleccionados={generos}
        generosSeleccionados={[]}
        modelo={{ titulo: "", enCines: false, trailer: "" }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
};

interface Props {}
