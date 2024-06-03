import { useFormikContext } from "formik";
import Mapa from "./Mapa";
import { coordenadaDTO } from "./coordenadas.model";

interface mapaFormularioProps {
  coords?: coordenadaDTO[];
  campoLat: string;
  campoLng: string;
}

export default function MapaFormulario({
  coords = [],
  campoLat,
  campoLng,
}: mapaFormularioProps) {
  const { values } = useFormikContext<any>();

  function actualizarCampos(coordenadas: coordenadaDTO) {
    values[campoLat] = coordenadas.lat;
    values[campoLng] = coordenadas.lng;
  }

  return <Mapa coordenadas={coords} manejarClickMapa={actualizarCampos} />;
}
