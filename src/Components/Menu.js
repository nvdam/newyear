import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        <h1> Welcome {props.name} </h1>
      </Link>
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
      <div className="collapse navbar" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/questions">
              Questions?
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/review">
              Write a Review
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
