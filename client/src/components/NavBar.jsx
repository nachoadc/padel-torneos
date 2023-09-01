import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/admin"}>Inicio</Link>
        </li>
        <li>
          <Link to={"create-tournament"}>Crear Torneo</Link>
        </li>
        <li>
          <Link to={"inscription"}>Inscripcion</Link>
        </li>
      </ul>
    </nav>
  );
};
