import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Fullpage, { FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

const App = () => (
  <Switch>
    <Route path="/" component={Homepage} exact />
    <Route path="/about" component={AboutPage} />
  </Switch>
);

const Homepage = () => (
  <Fullpage>
    <FullpageNavigation/>
    <Navbar/>
    <FullPageSections>
      <Home/>
      <Bio/>
      <Work/>
      <Contact/>
    </FullPageSections>
  </Fullpage>);

const AboutPage = () => (
  <div>
    <Navbar/>
    <About/>
  </div>
)
export default App;
