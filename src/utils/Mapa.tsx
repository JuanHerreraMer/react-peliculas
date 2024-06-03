import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { coordenadaDTO } from "./coordenadas.model";
import { useState } from "react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface mapaProps {
  height?: string;
  coordenadas: coordenadaDTO[];
  manejarClickMapa(coordenadas: coordenadaDTO): void;
}

export default function Mapa({
  height = "500px",
  coordenadas,
  manejarClickMapa,
}: mapaProps) {
  const [coords, setCoords] = useState<coordenadaDTO[]>(coordenadas);

  return (
    <>
      <MapContainer
        center={[-34.0662176, -70.7353118]}
        zoom={14}
        style={{ height: height }}
      >
        <TileLayer
          attribution="React Películas"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickMapa
          setPunto={(coordenadas) => {
            setCoords([coordenadas]);
            manejarClickMapa(coordenadas);
          }}
        />
        {coords.map((coord) => (
          <Marcador key={coord.lat + coord.lng} {...coord} />
        ))}
      </MapContainer>
    </>
  );
}

interface clickMapaProps {
  setPunto(coordenadas: coordenadaDTO): void;
}

function Marcador(props: coordenadaDTO) {
  return <Marker position={[props.lat, props.lng]} />;
}

function ClickMapa(props: clickMapaProps) {
  useMapEvent("click", (e) => {
    props.setPunto({ lat: e.latlng.lat, lng: e.latlng.lng });
  });
  return null;
}
