import React from 'react';
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.brand}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" aria-controls="navbarNav"
           aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" 
                aria-current="page" 
                to={props.links[0].path}>
                    {props.links[0].label}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={props.links[1].path}>
                    {props.links[1].label}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={props.links[2].path}>
                    {props.links[2].label}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;