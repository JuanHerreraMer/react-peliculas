import "./App.css";
import { Menu } from "./utils/Menu";
import { Route, Routes } from "react-router-dom";
import {rutas} from "./route-config";

function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <Routes>
          {rutas.map(({ path, componente: Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          ))}
          {/* <Route path="*" element={<Navigate to={'/'}/>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
