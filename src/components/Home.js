import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage'
//import Navbar from './Navbar';

const Home = () => (
  <FullpageSection>
    <section className="flex bg-whit h-screen">
      <div className="flex w-1/2 text-center justify-center align-middle items-center">
        <div>
          <h1 className="text-gray-800 justify-center align-middle">Hi!</h1>
        </div>
      </div>

      <div className="flex w-1/2 text-right justify-end">

      </div>
    </section>
  </FullpageSection>
)

export default Home;