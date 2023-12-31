import React from 'react';
import { Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
      <div className="container d-flex justify-content-center align-items-center"> {/* Wrap the content in a container */}
        <a className="navbar-brand" href="#">QUIZZ</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Logical Design</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Algorithm Implementation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Class and Database Representation</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
