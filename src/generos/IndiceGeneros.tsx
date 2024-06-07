import { urlGeneros } from "../utils/endpoints";
import { generosDTO } from "./generos.model";
import IndiceEntidad from "../utils/IndiceEntidad";

export const IndiceGeneros = () => {
  return (
    <>
      <IndiceEntidad<generosDTO>
        url={urlGeneros}
        urlCrear="generos/crear"
        titulo="Géneros"
        nombreEntidad="Género"
      >
        {(generos, botones) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {generos?.map((genero) => (
                <tr key={genero.id}>
                  <td>{botones(`generos/editar/${genero.id}`, genero.id)}</td>
                  <td>{genero.nombre}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndiceEntidad>
    </>
  );
};
