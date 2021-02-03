import React from 'react';
import { Link } from "react-router-dom";
import { FullpageSection } from '@ap.cx/react-fullpage';
import logoBelka from '../assets/img/belka.svg'
import logoFbk from '../assets/img/fbk.svg'
import logoIes from '../assets/img/ies.svg'

const Work = () => (
  <FullpageSection>
    <section className="flex h-screen flex-wrap">
      <div className="flex flex-col w-full text-center mt-6 px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center">
        <h4 className="style-text-white text-left text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl w-full style-home-text">I worked for 🚀</h4>  
      </div>
      <div className="flex flex-wrap w-full">
        <div className="flex w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 justify-center md:justify-end lg:justify-end xl:justify-end" >
          <img src={logoBelka} 
               className="style-icon cursor-pointer text-center h-16 md:h-24 lg:h-24 xl:h-24"
               onClick={() => window.open('https://belkadigital.com')} 
          />
        </div>
        <div className="flex w-full pt-3 sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 justify-center">
          <img src={logoFbk} 
               className="style-icon cursor-pointer text-center w-full h-16 md:h-24 lg:h-24 xl:h-24"
               onClick={() => window.open('https://www.fbk.eu/en/')} 
            />
        </div>
        <div className="flex w-full pt-3 md:pt-6 lg:pt-6 xl:pt-6 sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 justify-center md:justify-start lg:justify-start xl:justify-start text-left">
          <img src={logoIes} 
               className="style-icon cursor-pointer text-center h-12 md:h-16 lg:h-16 xl:h-16" 
               onClick={() => window.open('https://www.ies.it/')} 
          />
        </div>
      </div>
      <div className="flex flex-col w-full text-center px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center">
        <h4 className="style-text-white text-center text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl w-full style-home-text">
          <Link to='/about'
                onClick={() => window.scrollTo(0,0)}
                className="cursor-pointer underline" >
            See more
          </Link>
        </h4>  
      </div>
    </section>
  </FullpageSection>
)


export default Work;