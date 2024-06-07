import EditarEntidad from "../utils/EditarEntidad";
import { urlGeneros } from "../utils/endpoints";
import { FormulariosGeneros } from "./FormulariosGeneros";
import { generoCreacionDTO, generosDTO } from "./generos.model";

export const EditarGenero = () => {
  return (
    <>
      <EditarEntidad<generoCreacionDTO, generosDTO>
        url={urlGeneros}
        urlIndice="/generos"
        nombreEntidad="Géneros"
      >
        {(entidad, editar) => (
          <FormulariosGeneros
            modelo={entidad}
            onSubmit={async (valores) => {
              await editar(valores);
            }}
          />
        )}
      </EditarEntidad>
    </>
  );
};

