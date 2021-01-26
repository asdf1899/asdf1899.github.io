import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';
import logoBelka from '../assets/work/belka.svg'
import logoFbk from '../assets/work/fbk.svg'
import logoIes from '../assets/work/ies.svg'
//import BackgroundBlob from './BackgroundBlob';
//<BackgroundBlob size="60vh" style={{backgroundImage: 'linear-gradient(to right, #acb6e5, #86fde8)', top: '55%', right: '25%'}}/>

const Work = () => (
  <FullpageSection>
    <section className="flex h-screen flex-wrap">
      <div className="flex flex-col w-full text-center px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center">
        <h4 className="text-gray-700 text-left text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl w-full style-home-text">I worked for</h4>  
      </div>
      <div className="flex flex-wrap w-full">
        <div className="flex w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 justify-center md:justify-end lg:justify-end xl:justify-end" >
          <img src={logoBelka} className="text-center h-16 md:h-24 lg:h-24 xl:h-24" />
        </div>
        <div className="flex w-full pt-3 sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 justify-center">
          <img src={logoFbk} className="text-center w-full h-16 md:h-24 lg:h-24 xl:h-24"  />
        </div>
        <div className="flex w-full pt-3 md:pt-6 lg:pt-6 xl:pt-6 sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 justify-center md:justify-start lg:justify-start xl:justify-start text-left">
          <img src={logoIes} className="text-center h-12 md:h-16 lg:h-16 xl:h-16" />
        </div>
      </div>
    </section>
  </FullpageSection>
)


export default Work;