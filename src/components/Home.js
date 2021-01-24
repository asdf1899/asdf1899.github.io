import React, { useState } from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage'
//import Navbar from './Navbar';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

const Home = () => {
  const [text] = useState('an UX designer');
  /*const changeText = () => {
    setText('a developer');
    console.log(text)
  }*/
  console.log(text)
  return (
    <FullpageSection>
      <section className="flex h-screen">
        <div className="flex flex-col w-full text-left justify-center items-center px-12 lg:px-48 sm:px-8 md:px-24">
          <h4 className="text-gray-800 text-3xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-6xl w-full style-home-text">Hi!<span className="wave">👋</span></h4>
          <h4 className="text-gray-800 text-3xl md:text-6xl lg:text-6xl xl:text-6xl w-full style-home-text">I&apos;m Anas,</h4>
          <TypistLoop style="text-left w-full" interval={1000}>
            {[
              'an UX designer',
              'a developer',
              'a firefighter',
            ].map(text => <Typist className="text-left w-full text-gray-800 text-3xl md:text-6xl lg:text-6xl xl:text-6xl style-home-text" key={text} startDelay={500}>
              {text}
              <Typist.Backspace count={text.length} delay={1000} />
            </Typist>)}
          </TypistLoop>
          <h4 className="text-gray-800 text-3xl md:text-6xl lg:text-6xl xl:text-6xl w-full style-home-text">
            based in <a onClick={() => window.open("https://goo.gl/maps/6fnYAANFEEsi1Mce7", "_blank")} className="style-gradient-text cursor-pointer">Trento</a>⛰️
          </h4>
        </div>
      </section>
    </FullpageSection>
  )
}

export default Home;