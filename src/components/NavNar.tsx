import React from 'react';
import { Link } from 'react-router-dom';
import './../app.css';

const NavNar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-1 px1">
        <a href="/" className="brand-logo">
          React+TS=Love
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/about">Info</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavNar;
