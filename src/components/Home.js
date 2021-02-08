import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage'
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import { Blob } from 'react-blob'

const Home = () => (
  <FullpageSection>
    <section className="flex h-3/4">
      <BackgroundBlob size="90vh" />
      <BackgroundBlob size="80vh" />
      <div className="flex flex-col w-full text-left justify-center items-center px-12 lg:px-48 sm:px-8 md:px-24">
        <h4 className="style-text-white text-3xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-6xl w-full style-home-text">Hi!<span className="wave">👋</span></h4>
        <h4 className="style-text-white text-3xl md:text-6xl lg:text-6xl xl:text-6xl w-full style-home-text">I&apos;m Anas,</h4>
        <TypistLoop style="text-left w-full" interval={1000}>
          {[
            'a developer',
            'an UX designer',
            'a firefighter',
          ].map(text => 
            <Typist 
              className="text-left w-full style-text-white text-3xl md:text-6xl lg:text-6xl xl:text-6xl style-home-text" 
              key={text}
              cursor={{element: '_'}}
              startDelay={500}
            >
              <span className="inline-block">{text}</span>
              <Typist.Backspace count={text.length} delay={1000} />
            </Typist>
          )}
        </TypistLoop>
        <h4 className="style-text-white text-3xl md:text-6xl lg:text-6xl xl:text-6xl w-full style-home-text">
          based in <a onClick={() => window.open("https://goo.gl/maps/6fnYAANFEEsi1Mce7", "_blank")} className="style-gradient-text cursor-pointer">Trento</a>⛰️
        </h4>
      </div>
     
    </section>
    <section className="flex h-1/4 flex-col w-full text-center align-bottom">
      <div className="text-center">
        <svg className="h-10 w-full arrow-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </section>
  </FullpageSection>
  )
const BackgroundBlob = ({size, style, props}) => (
  <Blob 
    size={size}
    className="style-gradient-bg"
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