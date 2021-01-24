import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Fullpage>
      <Navbar/>
      <FullpageNavigation/>
      <FullPageSections>
        <Home/>
        <FullpageSection>
        </FullpageSection>
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
