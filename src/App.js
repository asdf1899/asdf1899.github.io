import React from 'react';
import Fullpage, { FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Fullpage>
      <Navbar/>
      <FullpageNavigation/>
      <FullPageSections>
        <Home/>
        <Bio/>
        <Work/>
        <Contact/>
      </FullPageSections>
    </Fullpage>
  );
}

export default App;
