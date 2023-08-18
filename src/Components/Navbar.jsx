import React, { useState } from 'react';
import {Link} from 'react-scroll';
const Navbar = () => {
  const[nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    }
    else{
      setNav(false);
    }
  }

  window.addEventListener('scroll', changeBackground);


  return (
    <div className="bg-gray-300 p-6">

    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo'>
        <img src="./images/recepcion.png" alt="" />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'> </span>
      </label>
      <ul className='menu'>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="https://beyondhb.com/">Contacto</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar