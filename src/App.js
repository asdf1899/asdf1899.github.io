import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Fullpage>
      <Navbar/>
      <FullpageNavigation/>
      <FullPageSections>
        <Home/>
        <About/>
        <FullpageSection style={{
          backgroundColor: 'firebrick',
          padding: '1em',
        }}>3
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

export default App;
