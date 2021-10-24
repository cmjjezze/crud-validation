import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          Contacts
        </a>
        <ul className="nav justify-content-end">
          <Link className="nav-link" to="/">
            List
          </Link>
          <Link className="nav-link" to="/contacts/add">
            Add User
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
