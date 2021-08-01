import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-info">
      <div>
        <Link exact to="/">
          <h1>
            <i className="fa fa-home text-white"></i>
          </h1>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
