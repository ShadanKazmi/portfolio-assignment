import React from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 shadow-md">
      <div className="flex-1">
        <img src={logo} alt="logo" className="object-contain" style={{ height: "100%", width: "15rem" }} />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <button
              className="text-lg font-medium text-white hover:text-yellow-300 transition-colors duration-300"
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="text-lg font-medium text-white hover:text-yellow-300 transition-colors duration-300"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="text-lg font-medium text-white hover:text-yellow-300 transition-colors duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
