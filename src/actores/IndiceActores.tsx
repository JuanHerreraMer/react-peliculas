import { NavLink } from "react-router-dom"

export const IndiceActores = (props: Props) => {
  return (
    <>
    <h3>Actores</h3>
    <NavLink to={'/Actores/Crear'}>Crear Actor</NavLink>
    </>
  )
}

interface Props {}  