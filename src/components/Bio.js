import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';
import { Blob } from 'react-blob';

const Bio = () => (
  <FullpageSection>
    <section className="flex h-screen flex-wrap">
      <div className="flex flex-col w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-2/3 md:h-full lg:h-full xl:h-full text-left px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center">
        <h4 className="style-text-white text-lg md:text-xl lg:text-2xl xl:text-2xl w-full style-home-text">
          I’m currently a BSc student at <a onClick={() => window.open("https://unitn.it", "_blank")} className="style-gradient-text cursor-pointer">University of Trento</a> and <a onClick={() => window.open("https://belkadigital.com", "_blank")} className="style-gradient-text cursor-pointer">@belkadigital</a> developer intern.
        </h4><br/>
        <h4 className="style-text-white text-lg md:text-xl lg:text-2xl xl:text-2xl w-full style-home-text">
          I have always been passionate about everything related to technology, especially on software development and how the look & feel of a digital product affects the way we perceive it and what we feel just by looking at it.
        </h4>
      </div>
      <div className="flex flex-col w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-1/3 lg:h-full xl:h-full text-center px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center">
        <Blob size="28vh" style={{backgroundImage: 'linear-gradient(to right, #ee0979, #ff6a00)'}}>
          <Avatar src="https://anasaraid.me/hosting/portfolio/avatar.jpeg" alt="me"/>
        </Blob>     
      </div>
    </section>
  </FullpageSection>
)
const Avatar = ({src, alt}) => (
  <Blob size="170px" src={src} alt={alt}/>
);

export default Bio;