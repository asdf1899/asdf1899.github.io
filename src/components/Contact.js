/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';
import github from '../assets/img/github.svg';
import { SocialIcon } from 'react-social-icons';
import Wave from 'react-wavify'

const Contact = () => (
  <FullpageSection>
    <section className="flex h-screen flex-wrap">
      <div className="flex flex-col w-full text-center px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center">
        <br/>
        <h4 className="style-text-white text-center text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl w-full style-home-text pt-12">
          Let's create something brilliant together 💫
        </h4>
        <br/>
        <img 
          src={github} 
          onClick={() => window.open('https://github.com/asdf1899')} 
          className="cursor-pointer style-icon text-center h-6 md:h-10 lg:h-10 xl:h-10" 
        />
      </div>
      <div className="flex w-full justify-center flex-wrap">
        <div className="flex w-full justify-center h-1/4">
          <h4 className="style-text-white text-center mt-6 text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl w-full style-home-text">
            or simply get in touch
          </h4>
        </div>
        <br/><br/>
        <div className="flex w-full justify-center pt-12 px-8 h-3/4">
          <div className="flex w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div className="flex w-1/3 justify-center" >
              <SocialIcon 
                className="style-icon cursor-pointer"
                onClick={() => window.open('https://it.linkedin.com/public-profile/in/anas-araid')}
                network="linkedin"
                bgColor="#ffffff" 
              />
            </div>
            <div className="flex w-1/3 justify-center">
              <SocialIcon 
                className="style-icon cursor-pointer" 
                url="mailto:araid.anas99@gmail.com" 
                bgColor="#ffffff"
              />
            </div>
            <div className="flex w-1/3 justify-center">
              <SocialIcon 
                className="style-icon cursor-pointer"
                network="instagram"
                onClick={() => window.open('https://www.instagram.com/anas.araid/')}
                bgColor="#ffffff"/>
            </div>
          </div>
        </div>
      </div>
      <Wave fill="url(#gradient)"
            paused={false}
            options={{
              height: 30,
              amplitude: 30,
              speed: 0.25,
              points: 3
            }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(0)">
            <stop offset="10%"  stopColor="#ee0979" />
            <stop offset="90%" stopColor="#ff6a00" />
          </linearGradient>
        </defs>
      </Wave>
      <h5 className="style-text-white z-10 p-4 absolute bottom-0 text-sm md:text-md lg:text-md xl:text-md">Built with <a className="cursor-pointer underline " onClick={ () => window.open('https://reactjs.org/')}>React</a> and deployed on <a className="cursor-pointer underline " onClick={ () => window.open('https://github.com/asdf1899/asdf1899.github.io/')}>Github</a>.</h5>
    </section>
  </FullpageSection>
)

export default Contact;