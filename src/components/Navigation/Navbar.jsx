import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav_bar'>
        <div className='nav_links'>
          <Link to="about">О сайте</Link>
          <Link to='posts'>Посты</Link>
        </div>
      </div>
    );
};

export default Navbar;