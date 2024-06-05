import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { urlGeneros } from "../utils/endpoints"
import { generosDTO } from "./generos.model";

export const IndiceGeneros = () => {
  useEffect(() => {
    axios
      .get(urlGeneros)
      .then((respuesta: AxiosResponse<generosDTO[]>) => {
        console.log(respuesta.data);
      });
  }, []);

  return (
    <>
      <h3>Generos</h3>
      <NavLink className="btn btn-primary" to={"/Generos/Crear"}>Crear Géneros</NavLink>
    </>
  );
};
