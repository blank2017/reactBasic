import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

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
                to="/"
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                extract={true}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/My-component"
                className="nav-link"
                activeClassName="active"
                aria-current="page"
              >
                Features
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
