import "./SelectorMultiple.css";

interface Props {
  seleccionados: selectorMultipleModel[];
  noSeleccionados: selectorMultipleModel[];
  onChange(
    seleccionados: selectorMultipleModel[],
    noSeleccionados: selectorMultipleModel[]
  ): void;
}

export interface selectorMultipleModel {
  llave: number;
  valor: string;
}

export default function SelectorMultiple({
  seleccionados,
  noSeleccionados,
  onChange,
}: Props) {
  function seleccionar(item: selectorMultipleModel) {
    const listSeleccionados = [...seleccionados, item];
    const listNoSeleccionados = noSeleccionados.filter(
      (valor) => valor !== item
    );
    onChange(listSeleccionados, listNoSeleccionados);
  }

  function deselccionar(item: selectorMultipleModel) {
    const listSeleccionados = seleccionados.filter((valor) => valor !== item);
    const listNoSeleccionados = [...noSeleccionados, item];
    onChange(listSeleccionados, listNoSeleccionados);
  }

  function seleccionarTodo() {
    console.log('selecciona todo')
    const listSeleccionados = [...seleccionados, ...noSeleccionados];
    const listNoSeleccionados: selectorMultipleModel[] = [];
    onChange(listSeleccionados, listNoSeleccionados);
  }

  function deseleccionarTodo() {
    const listSeleccionados: selectorMultipleModel[] = [];
    const listNoSeleccionados = [...seleccionados, ...noSeleccionados];
    onChange(listSeleccionados, listNoSeleccionados);
  }

  return (
    <div className="selector-multiple">
      <ul>
        {noSeleccionados.map((item) => (
          <li key={item.llave} onClick={() => seleccionar(item)}>
            {item.valor}
          </li>
        ))}
      </ul>
      <div className="selector-multiple-botones">
        <button type="button" onClick={seleccionarTodo} className="btn btn-primary btn-sm">
          {">>"}
        </button>
        <button type="button" onClick={deseleccionarTodo} className="btn btn-danger btn-sm">
          {"<<"}
        </button>
      </div>
      <ul>
        {seleccionados.map((item) => (
          <li key={item.llave} onClick={() => deselccionar(item)}>
            {item.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}
