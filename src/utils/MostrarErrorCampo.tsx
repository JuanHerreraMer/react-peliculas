export const MostrarErrorCampo = ({ mensaje }: Props) => {
  return <div className="text-danger">{mensaje}</div>;
};

interface Props {
  mensaje: string;
}
