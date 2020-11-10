import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinks = [
    {
      label: 'Movies',
      path: '/movies',
    },
    {
      label: 'Customers',
      path: '/customers',
    },
    {
      label: 'Rentals',
      path: '/rentals',
    },
  ];
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          {navLinks.map(link => (
            <NavLink className="nav-link" to={link.path} key={link.label}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
