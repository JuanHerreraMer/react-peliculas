import { FormularioCines } from "./FormularioCines"

export const CrearCines = (props: Props) => {
  return (
    <>
      <h3>Crear Cine</h3>
      <FormularioCines 
        modelo={{nombre: ''}}
        onSubmit={valores => console.log(valores)}
      />
    </>
  )
}

interface Props {}