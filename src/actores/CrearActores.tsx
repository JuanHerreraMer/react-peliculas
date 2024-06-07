import axios from "axios";
import { FormularioActores } from "./FormularioActores";
import { actorCracionDTO } from "./actores.model";
import { urlActores } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";
import MostrarErrores from "../utils/MostrarErrores";
import { useState } from "react";

export const CrearActores = (props: Props) => {
  const [errores, setErrores] = useState<string[]>([]);
  const history = useNavigate();

  async function crear(actor: actorCracionDTO) {
    try {
      await axios.post(urlActores, actor);
      history("/actores");
    } catch (error) {
      setErrores(error.data);
    }
  }

  return (
    <>
      <h3>Crear Actores</h3>
      <MostrarErrores errores={errores} />
      <FormularioActores
        modelo={{ nombre: "", fechaNacimiento: undefined }}
        onSubmit={async (valores) => await crear(valores)}
      />
    </>
  );
};

interface Props {}
