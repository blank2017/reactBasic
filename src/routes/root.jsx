import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Root() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href={"#"}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to="/"
                className="nav-link"
                aria-current="page"
                default
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to="/My-component"
                className="nav-link"
                aria-current="page"
              >
                My Example
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to="/users"
                className="nav-link"
                aria-current="page"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
