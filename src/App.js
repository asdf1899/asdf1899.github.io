import React from 'react';
import { HashRouter as Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import dotenv from 'dotenv';

import Fullpage, { FullPageSections } from '@ap.cx/react-fullpage'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

dotenv.config({ path: '../../.env'});
ReactGA.initialize(process.env.REACT_APP_GA_KEY);

const App = () => (
  <Switch>
    <Route path="/" component={Homepage} exact />
    <Route path="/about" component={AboutPage} />
  </Switch>
);

const Homepage = () => {
  ReactGA.pageview('/');
  return (
    <Fullpage>
      <Navbar/>
      <FullPageSections>
        <Home/>
        <Bio/>
        <Work/>
        <Contact/>
      </FullPageSections>
    </Fullpage>
  );
};

const AboutPage = () => {
  ReactGA.pageview('/about');
  return (
    <div>
      <Navbar/>
      <About/>
    </div>
  );
}
export default App;
