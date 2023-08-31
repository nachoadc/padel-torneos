import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul className="bg-blue-300 hidden sm:flex text-lg">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/create-tournament"}>Crear Torneo</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};
