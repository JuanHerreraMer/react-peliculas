// import { useNavigate } from "react-router-dom";
import { FormulariosGeneros } from "./FormulariosGeneros";

export const CrearGenero = () => {
  // const history = useNavigate();

  return (
    <>
      <div>CrearGenero</div>
      <FormulariosGeneros
        modelo={{ nombre: "" }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(valores);
        }}
      />
    </>
  );
};

