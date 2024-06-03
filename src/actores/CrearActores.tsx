import { FormularioActores } from "./FormularioActores";

export const CrearActores = (props: Props) => {
  return (
    <>
      <h3>Crear Actores</h3>
      <FormularioActores
        modelo={{ nombre: "", fechaNacimiento: undefined }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
};

interface Props {}
