import { LandingPage } from "./LandingPage";
import { CrearActores } from "./actores/CrearActores";
import { EditarActores } from "./actores/EditarActores";
import { IndiceActores } from "./actores/IndiceActores";
import { CrearCines } from "./cines/CrearCines";
import { EditarCines } from "./cines/EditarCines";
import { IndiceCines } from "./cines/IndiceCines";
import { CrearGenero } from "./generos/CrearGenero";
import { EditarGenero } from "./generos/EditarGenero";
import { IndiceGeneros } from "./generos/IndiceGeneros";
import { CrearPeliculas } from "./peliculas/CrearPeliculas";
import { EditarPeliculas } from "./peliculas/EditarPeliculas";
import { FiltroPeliculas } from "./peliculas/FiltroPeliculas";
import { RedireccionarLanding } from "./utils/RedireccionarLanding";

export const rutas = [
    // { to: '/Generos/Crear', path: 'Generos/Crear', Component: CrearGenero, name:'Crear' },
    { path: '/Generos/Crear', componente: CrearGenero },
    { path: '/Generos/Editar/:id', componente: EditarGenero },
    { path: '/Generos', componente: IndiceGeneros },

    { path: '/Actores/Crear', componente: CrearActores },
    { path: '/Actores/Editar/:id', componente: EditarActores },
    { path: '/Actores', componente: IndiceActores },

    { path: '/Cines/Crear', componente: CrearCines },
    { path: '/Cines/Editar/:id', componente: EditarCines },
    { path: '/Cines', componente: IndiceCines },

    { path: '/Peliculas/Crear', componente: CrearPeliculas },
    { path: '/Peliculas/Editar/:id', componente: EditarPeliculas },
    { path: '/Peliculas/filtro', componente: FiltroPeliculas },

    { path: '/', componente: LandingPage },

    { path: '*', componente: RedireccionarLanding }

];

interface Route {
    to: string;
    path: string;
    Component: () => JSX.Element;
    name: string;
}