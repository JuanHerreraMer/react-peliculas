import { NavLink } from "react-router-dom"

export const IndiceCines = (props: Props) => {
  return (
    <>
    <h3>Indice Cine !!!</h3>
    <NavLink to={'/Cines/Crear'}>Crear nuevo Cine</NavLink>
    </>
  )
}

interface Props {}
