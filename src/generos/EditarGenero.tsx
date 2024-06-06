import { useNavigate, useParams } from "react-router-dom";
import { FormulariosGeneros } from "./FormulariosGeneros";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlGeneros } from "../utils/endpoints";
import { generoCreacionDTO, generosDTO } from "./generos.model";
import Cargando from "../utils/Cargando";
import MostrarErrores from "../utils/MostrarErrores";

export const EditarGenero = (props: Props) => {
  const { id }: any = useParams();
  const [genero, setGenero] = useState<generosDTO>();
  const [errores, setErrores] = useState<string[]>([]);
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`${urlGeneros}/${id}`)
      .then((respuesta: AxiosResponse<generosDTO>) => {
        setGenero(respuesta.data);
      });
  });

  async function editar(generoEditar: generoCreacionDTO) {
    try {
      await axios.put(`${urlGeneros}/${id}`, generoEditar);
      history("/generos");
    } catch (error) {
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <h3>EditarGenero</h3>
      <MostrarErrores errores={errores} />
      {genero ? (
        <FormulariosGeneros
          modelo={genero}
          onSubmit={async (valores) => {
            await editar(valores);
          }}
        />
      ) : (
        <Cargando />
      )}
    </>
  );
};

interface Props {}
