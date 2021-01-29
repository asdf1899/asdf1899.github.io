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
import './App.css';

const App = () => (
  <Switch>
    <Route path="/" component={Homepage} exact />
    <Route path="/about" component={About} />
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

const About = () => (
  <Fullpage>
    <FullpageNavigation/>
    <Navbar/>
    <FullPageSections>
      <Contact/>
    </FullPageSections>
  </Fullpage>
)
export default App;
