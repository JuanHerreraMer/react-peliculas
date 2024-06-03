import { pelicula } from "./peliculas.model";
import css from "./ListadoPeliculas.module.css";
import { PeliculaIndividual } from "./PeliculaIndividual";
import { ListadoGenerico } from "../utils/ListadoGenerico";

interface listadoPeliculasProps {
  peliculas?: pelicula[];
}

export const ListadoPeliculas = (props: listadoPeliculasProps) => {
  return (
    <ListadoGenerico listado={props.peliculas}>
      <div className={css.div}>
        {props.peliculas?.map((pelicula) => (
          <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </ListadoGenerico>
  );
};
