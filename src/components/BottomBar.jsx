import React from 'react';
import logo from '../assets/logo.png';

const BottomBar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 shadow-md">
      <div className="flex-1 justify-end">
        <img src={logo} alt="logo" className="object-cover" style={{ height: "100%", width: "15rem" }} />
      </div>
    </div>
  );
}

export default BottomBar;
