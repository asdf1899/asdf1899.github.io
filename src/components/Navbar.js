import React from 'react';
const Navbar = () => (
  <header className="p-6 flex h-10 bg-white w-full" style={{position: 'fixed',zIndex:'1000',top: '0'}}>
    <div className="w-1/3 text-center">
      <h3 className="text-gray-800">Anas Araid</h3>
    </div>
    <div className="w-1/3 text-center p-2">
      <h2 className="text-lg text-gray-700"></h2>
    </div>
    <div className="w-1/3 text-right flex justify-end">

    </div>
  </header>
)

export default Navbar;