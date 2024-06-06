import { useEffect, useState } from "react";

interface Props {
  paginaActual: number;
  cantidadTotalDePaginas: number;
  radio?: number;
  onChange(pagina: number): void;
}

interface modeloLink {
  pagina: number;
  habilitado: boolean;
  texto: string;
  activo: boolean;
}

export default function Paginacion({ paginaActual, cantidadTotalDePaginas, radio = 3, onChange }: Props) {
  const [listadoLinks, setListadoLinks] = useState<modeloLink[]>([]);

  useEffect(() => {
    const paginaAnteriorHabilitada = paginaActual !== 1;
    const paginaAnterior = paginaActual - 1;
    const links: modeloLink[] = [];

    links.push({
      texto: "Anterior",
      habilitado: paginaAnteriorHabilitada,
      pagina: paginaAnterior,
      activo: false,
    });

    for (let i = 1; i <= cantidadTotalDePaginas; i++) {
      if (
        i >= paginaActual - radio &&
        i <= paginaActual + radio
      ) {
        links.push({
          texto: `${i}`,
          activo: paginaActual === i,
          habilitado: true,
          pagina: i,
        });
      }
    }

    const paginaSiguienteHabilitada =
      paginaActual !== cantidadTotalDePaginas &&
      cantidadTotalDePaginas > 0;
    const paginaSiguiente = paginaActual + 1;
    links.push({
      texto: "Siguiente",
      pagina: paginaSiguiente,
      habilitado: paginaSiguienteHabilitada,
      activo: false,
    });

    setListadoLinks(links);
  }, [paginaActual, cantidadTotalDePaginas, radio]);

  function obtenerClase(link: modeloLink) {
    if (link.activo) return "active pointer";

    if (!link.habilitado) return "disabled";

    return "pointer";
  }

  function seleccionarPagina(link: modeloLink) {
    if (link.pagina === paginaActual) return;

    if (!link.habilitado) return;

    onChange(link.pagina);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {listadoLinks.map((link) => (
          <li
            key={link.texto}
            onClick={() => {
              seleccionarPagina(link);
            }}
            className={`page-item cursor ${obtenerClase(link)}`}
          >
            <span className="page-link">{link.texto}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
