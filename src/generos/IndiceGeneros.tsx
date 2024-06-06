import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { urlGeneros } from "../utils/endpoints";
import { generosDTO } from "./generos.model";
import { ListadoGenerico } from "../utils/ListadoGenerico";
import { Button } from "../utils/Button";
import Paginacion from "../utils/Paginacion";

export const IndiceGeneros = () => {
  const [generos, setGeneros] = useState<generosDTO[]>();
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [recordsPorPagina, setRecordsPorPagina] = useState(10);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    axios
      .get(urlGeneros, {
        params: { pagina, recordsPorPagina },
      })

      .then((respuesta: AxiosResponse<generosDTO[]>) => {
        const totalDeRegistros = parseInt(
          respuesta.headers["cantidadtotalregistros"],
          10
        );
        setTotalDePaginas(Math.ceil(totalDeRegistros / recordsPorPagina));

        setGeneros(respuesta.data);
      });
  }, [pagina, recordsPorPagina]);

  return (
    <>
      <h3>Generos</h3>
      <NavLink className="btn btn-primary" to={"/Generos/Crear"}>
        Crear Géneros
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

      <ListadoGenerico listado={generos}>
        <table className="table table-striped my-4">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {generos?.map((genero) => (
              <tr key={genero.id}>
                <td>
                  <NavLink
                    className="btn btn-success"
                    to={`/generos/editar/${genero.id}`}
                  >
                    Editar
                  </NavLink>
                  <Button className="btn btn-danger">Borrar</Button>
                </td>
                <td>{genero.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListadoGenerico>
    </>
  );
};
