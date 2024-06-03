// import { useParams } from "react-router-dom"
import { FormulariosGeneros } from "./FormulariosGeneros";

export const EditarGenero = (props: Props) => {

  // const {id}: any = useParams();

  return (
    <>
      <h3>EditarGenero</h3>
      <FormulariosGeneros
        modelo={{ nombre: "Acción" }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(valores);
        }}
      />
    </>
  )
}

interface Props {}