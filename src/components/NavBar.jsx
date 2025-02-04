import React from 'react';
import { Link } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go'; // Importing the left arrow icon

function NavBar({ title, route }) {
  return (
    <div className="nav-bar">
      {route && (
        <Link to={route} className="back-btn">
          <GoChevronLeft />
        </Link>
      )}
      <h1>{title}</h1>
    </div>
  );
}

export default NavBar;
