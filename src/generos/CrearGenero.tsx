// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormulariosGeneros } from "./FormulariosGeneros";
import { generoCreacionDTO } from "./generos.model";
import { urlGeneros } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";
import MostrarErrores from "../utils/MostrarErrores";
import { useState } from "react";

export const CrearGenero = () => {
  const history = useNavigate();
  const [errores, setErrores] = useState<string[]>([]);

  async function crear(genero: generoCreacionDTO) {
    try {
      await axios.post(urlGeneros, genero);
      history("/generos");
    } catch (error) {
      console.error(error);
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <div>CrearGenero</div>
      <MostrarErrores errores={errores}/>
      <FormulariosGeneros
        modelo={{ nombre: "" }}
        onSubmit={async (valores) => {
          await crear(valores);
        }}
      />
    </>
  );
};
