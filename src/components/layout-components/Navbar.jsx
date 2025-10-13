import { NavLink } from "react-router-dom";
import paths from "../../assets/data/paths";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-top border-bottom">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {" "}
            {/* Cambiato da ms-auto a me-auto */}
            <li className="nav-item">
              <NavLink className="nav-link" to={paths.HomePage}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={paths.AddTask}>
                Aggiungi Task
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={paths.TaskList}>
                Lista Task
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
