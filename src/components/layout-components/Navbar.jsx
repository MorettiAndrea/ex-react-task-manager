import paths from "../../assets/data/paths";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to={paths.HomePage}>
                Torna alla home
              </NavLink>
              <NavLink className="nav-link" to={paths.AddTask}>
                Addtask
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={paths.TaskList}>
                TaskList
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
