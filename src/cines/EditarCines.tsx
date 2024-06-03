import { FormularioCines } from "./FormularioCines"

export const EditarCines = (props: Props) => {
  return (
    <>
      <h3>Editar Cine</h3>
      <FormularioCines 
        modelo={{nombre: 'Cinemark', latitud:-33.415765, longitud: -70.541799}}
        onSubmit={valores => console.log(valores)}
      />
    </>
  )
}

interface Props {}  