import React from 'react';
import { Link } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go';
import { FaHeart } from 'react-icons/fa';
import '../style/NavBar.css';

function NavBar({ title, route }) {
  return (
    <div className="nav-bar">
      <div className='left'>
      {route && (
        <Link to={route} className="back-btn">
          <GoChevronLeft />
        </Link>
      )}
      <h1>{title}</h1>
      </div>
      <Link to="/favorites" className="fav-link">
          <FaHeart />
      </Link>
    </div>
  );
}

export default NavBar;
