import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

interface Props {
  campo: string;
  label: string;
  imagenURL?: string;
}

export const FormGroupImagen = ({campo, label, imagenURL = ""}: Props) => {
  const divStyle = { marginTop: "10px" };
  const imgStyle = { width: "450px" };

  const [imagenBase64, setImagenBase64] = useState("");
  const [imagenUrl, setImagenUrl] = useState(imagenURL);
  const { values } = useFormikContext<any>();

  const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const archivo = e.currentTarget.files[0];
      aBase64(archivo)
        .then((imgBase64: string) => setImagenBase64(imgBase64))
        .catch((error) => console.error(error));

      values[campo] = archivo;
      setImagenUrl('');
    }
  };

  const aBase64 = (file: File) => {
    return new Promise<string>((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => res(reader.result as string);
      reader.onerror = (error) => rej(error);
    });
  };

  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <div>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={ManejarOnChange}
          />
          {imagenBase64 ? (
            <div style={divStyle}>
              <div style={imgStyle}>
                <img src={imagenBase64} alt="imagen seleccionada" />
              </div>
            </div>
          ) : null}
          {imagenUrl ? (
            <div style={divStyle}>
              <div style={imgStyle}>
                <img src={imagenUrl} alt="imagen seleccionada" width={350} height={480}/>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
