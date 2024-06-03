import { FormularioActores } from "./FormularioActores";

export const EditarActores = (props: Props) => {
  return (
    <>
      <div>EditarActores</div>
      <FormularioActores
        modelo={{
          nombre: "Tom Holland",
          biografia: `# Tom
Ha nacido **tom**`,
          fechaNacimiento: new Date("1996-06-01T00:00:00"),
          fotoURL:
            "https://es.web.img2.acsta.net/pictures/23/05/30/13/16/0004762.jpg",
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
};

interface Props {}
