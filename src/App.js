import React from 'react';
import Fullpage, { FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import './App.css';

function App() {
  return (
    <Fullpage>
      <Navbar/>
      <FullpageNavigation/>
      <FullPageSections>
        <Home/>
        <About/>
        <Work/>
      </FullPageSections>
    </Fullpage>
  );
}

export default App;
