import { NavLink, Navigate } from "react-router-dom"

export const IndiceGeneros = (props: Props) => {
  return (
    
    <>
    <h3>Indice Generos</h3>
      <NavLink to={'/Generos/Crear'}>Crear Géneros</NavLink>
    </>
    
  )
}

interface Props {}