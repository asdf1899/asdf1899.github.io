import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage'
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import { Blob } from 'react-blob'

const Home = () => (
  <FullpageSection>
    <section className="flex h-screen">
      <BackgroundBlob size="90vh" style={{backgroundImage: 'linear-gradient(to right, #acb6e5, #86fde8)'}}/>
      <BackgroundBlob size="80vh" style={{backgroundImage: 'linear-gradient(to right, #acb6e5, #86fde8)'}} />
      <div className="flex flex-col w-full text-left justify-center items-center px-12 lg:px-48 sm:px-8 md:px-24">
        <h4 className="text-gray-700 text-3xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-6xl w-full style-home-text">Hi!<span className="wave">👋</span></h4>
        <h4 className="text-gray-700 text-3xl md:text-6xl lg:text-6xl xl:text-6xl w-full style-home-text">I&apos;m Anas,</h4>
        <TypistLoop style="text-left w-full" interval={1000}>
          {[
            'a developer',
            'an UX designer',
            'a firefighter',
          ].map(text => <Typist className="text-left w-full text-gray-700 text-3xl md:text-6xl lg:text-6xl xl:text-6xl style-home-text" key={text} startDelay={500}>
            {text}
            <Typist.Backspace count={text.length} delay={1000} />
          </Typist>)}
        </TypistLoop>
        <h4 className="text-gray-700 text-3xl md:text-6xl lg:text-6xl xl:text-6xl w-full style-home-text">
          based in <a onClick={() => window.open("https://goo.gl/maps/6fnYAANFEEsi1Mce7", "_blank")} className="style-gradient-text cursor-pointer">Trento</a>⛰️
        </h4>
      </div>
    </section>
  </FullpageSection>
  )
const BackgroundBlob = ({size, style, props}) => (
  <Blob size={size}
    style={{
        position: 'absolute',
        top: '-15%',
        right: '-15%',
        zIndex: -1,
        color: 'white',
        fontSize: '50vh',
        ...style
    }}
    {...props}
  />
)
export default Home;