import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="p-6 flex h-10 w-full" style={{position: 'fixed',zIndex:'1000',top: '0'}}>
    <div className="w-1/3 text-left">
      <Link to='/' className="text-gray-800 cursor-pointer" onClick={() => window.scrollTo(0,0)}>Anas Araid</Link>
    </div>
    <div className="w-1/3 text-center p-2">
    </div>
    <div className="w-1/3 text-right flex justify-end">
      <h2 className="text-lg text-gray-700">
        <Link to='/about'
              className="cursor-pointer underline">
          About
        </Link>
      </h2>
    </div>
  </header>
)

export default Navbar;