import axios, { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import confirmar from "./Confirmar";
import { ListadoGenerico } from "./ListadoGenerico";
import Paginacion from "./Paginacion";

interface indiceEntidadProps<T> {
  url: string;
  urlCrear: string;
  children(
    entidades: T[],
    botones: (urlEditar: string, id: number) => ReactElement
  ): ReactElement;
  titulo: string;
  nombreEntidad: string;
}

export default function IndiceEntidad<T>(props: indiceEntidadProps<T>) {
  const [entidades, setEntidades] = useState<T[]>();
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [recordsPorPagina, setRecordsPorPagina] = useState(10);
  const [pagina, setPagina] = useState(1);
  const [idEliminado, setIdEliminado] = useState(0);

  useEffect(() => {
    axios
      .get(props.url, {
        params: { pagina, recordsPorPagina },
      })

      .then((respuesta: AxiosResponse<T[]>) => {
        const totalDeRegistros = parseInt(
          respuesta.headers["cantidadtotalregistros"],
          10
        );
        setTotalDePaginas(Math.ceil(totalDeRegistros / recordsPorPagina));

        setEntidades(respuesta.data);
      });
  }, [pagina, recordsPorPagina, idEliminado]);

  async function borrar(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      setIdEliminado(id);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const botones = (urlEditar: string, id: number) => (
    <>
      <NavLink className="btn btn-success" to={urlEditar}>
        Editar
      </NavLink>
      <Button
        className="btn btn-danger"
        onClick={() => confirmar(() => borrar(id))}
      >
        Borrar
      </Button>
    </>
  );

  return (
    <>
      <h3>{props.titulo}</h3>
      <NavLink className="btn btn-primary" to={props.urlCrear}>
        {props.nombreEntidad}
      </NavLink>

      <div className="form-group" style={{ width: "150px" }}>
        <label>Registros por página</label>
        <select
          className="form-control"
          defaultValue={10}
          onChange={(e) => {
            setPagina(1);
            setRecordsPorPagina(parseInt(e.currentTarget.value, 10));
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <Paginacion
        cantidadTotalDePaginas={totalDePaginas}
        paginaActual={pagina}
        onChange={(nuevaPagina) => setPagina(nuevaPagina)}
      />

      <ListadoGenerico listado={entidades}>
        <table className="table table-striped my-4">
          {props.children(entidades!, botones)}
        </table>
      </ListadoGenerico>
    </>
  );
}
