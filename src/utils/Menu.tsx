import { NavLink, Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          React Películas
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/Generos" className="nav-link">
                Géneros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Peliculas/filtro" className="nav-link">
                Filtrar Peliculas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Actores" className="nav-link">
                Actores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Cines" className="nav-link">
                Cines
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Peliculas/Crear" className="nav-link">
                Crear Películas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
