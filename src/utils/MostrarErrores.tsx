interface Props {
    errores?: string[];
}

export default function MostrarErrores({errores}: Props) {

    const style = {color: 'red'};

  return (
   <>
       { errores ? <ul style={style}>
        { errores.map((error, indice) => <li key={indice}>{ error }</li> )}
       </ul> : null}
   </>
  )
}