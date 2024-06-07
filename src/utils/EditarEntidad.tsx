import axios, { AxiosResponse } from "axios";
import { useState, useEffect, ReactElement } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MostrarErrores from "./MostrarErrores";
import Cargando from "./Cargando";

interface editarEntidadProps<TCreacion, TLectura> {
  url: string;
  urlIndice: string;
  nombreEntidad: string;
  children(
    entidad: TCreacion,
    editar: (entidad: TCreacion) => void
  ): ReactElement;
  transformar?(entidad: TLectura): TCreacion;
}

export default function EditarEntidad<TCreacion, TLectura>({
  url,
  urlIndice,
  nombreEntidad,
  children,
  transformar = (entidad: any) => entidad,
}: editarEntidadProps<TCreacion, TLectura>) {
  const { id }: any = useParams();
  const [entidad, setEntidad] = useState<TCreacion>();
  const [errores, setErrores] = useState<string[]>([]);
  const history = useNavigate();

  useEffect(() => {
    axios.get(`${url}/${id}`).then((respuesta: AxiosResponse<TLectura>) => {
      setEntidad(transformar(respuesta.data));
    });
  }, []);

  async function editar(entidadEditar: TCreacion) {
    try {
      await axios.put(`${url}/${id}`, entidadEditar);
      history(urlIndice);
    } catch (error) {
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <h3>Editar {nombreEntidad}</h3>
      <MostrarErrores errores={errores} />
      {entidad ? children(entidad, editar) : <Cargando />}
    </>
  );
}
