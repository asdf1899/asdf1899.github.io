import React from 'react';
import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
 } from 'vertical-timeline-component-react';
import BackgroundBlob from './BackgroundBlob';

const About = () => {
  const customTheme = {
    yearColor: '#ffffff',
    lineColor: '#ff6a00',
    dotColor: '#ffffff',
    borderDotColor: '#ffffff',
    titleColor: '#ffffff',
    subtitleColor: '#ff6a00',
    textColor: '#ffffff',
   };
   return (
      <section className="flex h-screen flex-wrap">
        <BackgroundBlob size="20vh" style={{backgroundImage: 'linear-gradient(to right, #ee0979, #ff6a00)', right: '5%'}}/>
        <BackgroundBlob size="15vh" style={{backgroundImage: 'linear-gradient(to right, #ee0979, #ff6a00)', right: '5%'}}/>
        <BackgroundBlob size="10vh" style={{backgroundImage: 'linear-gradient(to right, #ee0979, #ff6a00)', right: '5%'}} />
     
        <div className="flex flex-wrap w-full mt-24 px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center"> 
          <h4 className="style-text-white text-left text-md md:text-lg lg:text-lg xl:text-lg w-full style-home-text">Education 🎓</h4>  
          <Timeline theme={customTheme} dateFormat='ll'>
            <Container>
              <YearContent startDate='2018' />
              <BodyContent>
                <Section title='University of Trento'>
                  <Description text='BSc in Interfaces and Communication Technologies (HCI - Human Computer Interaction)' />
                </Section>
              </BodyContent>
            </Container>
            <Container>
              <YearContent startDate='2014' endDate="2018" />
              <BodyContent>
                <Section title='ITT Marie Curie Pergine'>
                  <Description text='High school degree in computer science and telecommunications' />
                </Section>
              </BodyContent>
            </Container>
          </Timeline>
        </div>
        <div className="flex flex-wrap w-full px-12 sm:px-8 md:px-24 lg:px-48">
          <h4 className="style-text-white text-left text-md md:text-lg lg:text-lg xl:text-lg w-full style-home-text">Work 🚀</h4>  
          <Timeline theme={customTheme} dateFormat='ll'>
          <Container>
            <YearContent startDate='2020'/>
              <BodyContent>
                <Section title='Intern Web developer'>
                  <Description variant='subtitle' text='Belka Digital' />
                  <Description text='Top secret' />
                </Section>
              </BodyContent>
            </Container>
            <Container>
              <YearContent startDate='2017' endDate="2018" />
              <BodyContent>
                <Section title='Intern NodeJS Developer'>
                  <Description variant='subtitle' text='Informatica e Servizi - I&S' />
                  <Description text='Electron remote control library' />
                </Section>
                <Section title='Intern Ruby on Rails Developer'>
                  <Description variant='subtitle' text='FBK - ict4g unit' />
                  <Description text='BringTheFood' />
                </Section>
                <Section title='Intern .NET Developer'>
                  <Description variant='subtitle' text='Informatica e Servizi - I&S' />
                  <Description text='Refactoring old C libraries' />
                </Section>
                <Section title='Intern .NET Developer'>
                  <Description variant='subtitle' text='Informatica e Servizi - I&S' />
                  <Description text='DBDataExport - A tool that exports shapefiles from geospatial db' />
                </Section>
              </BodyContent>
            </Container>
            <Container>
              <YearContent startDate='2016' endDate="2017" />
              <BodyContent>
                <Section title='Intern Ruby On Rails Developer'>
                  <Description variant='subtitle' text='FBK - ict4g unit' />
                  <Description text='eDOT - Angola tuberculosis monitor webapp' />
                </Section>
              </BodyContent>
            </Container>
          </Timeline>
        </div>
        <div className="flex flex-wrap w-full mt-12 px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center">
          <h4 className="style-text-white text-left text-md md:text-lg lg:text-lg xl:text-lg w-full style-home-text">Hackathons 💻🏆</h4>  
          <Timeline theme={customTheme} dateFormat='ll'>
            <Container>
              <YearContent startDate='2021' />
              <BodyContent>
                <Section title='UX Challenge'>
                  <Description variant='subtitle' text='HIT - Hub Innovazione Trentino' />
                  <Description text="5-days design sprint. We redesigned and tested Active Pager's calendar and shifts feature" />
                </Section>
              </BodyContent>
            </Container>
            <Container>
              <YearContent startDate='2019'/>
              <BodyContent>
                <Section title='NOI Hackathon SFScon Edition'>
                  <Description variant='subtitle' text='NOI Techpark' />
                  <Description text='IoTools - a system that allows the tracking of toolboxes inside the vans of a company using raspberry and rfid.' />
                </Section>
                <Section title='Climathon - first prize'>
                  <Description variant='subtitle' text='Climate-kic and FBK' />
                  <Description text='Eleco - We have found a solution for the Rovereto challenges for sustainable management of waste electrical and electronic equipment (WEEE).' />
                </Section>
              </BodyContent>
            </Container>
            <Container>
              <YearContent startDate='2015' />
              <BodyContent>
                <Section title='Hacking for Southern Africa'>
                  <Description variant='subtitle' text='FBK - ict4g unit' />
                </Section>
              </BodyContent>
            </Container>
          </Timeline>
        </div>

        <div className="flex flex-wrap w-full mt-12 px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center">
          <h4 className="style-text-white text-left text-base md:text-lg lg:text-lg xl:text-lg w-full style-home-text">Projects ⚙️</h4>  
          <ul className="style-text-white mt-6 pl-4 text-left text-base md:text-base lg:text-base xl:text-base w-full style-home-text">
            <li>- <a className="underline cursor-pointer" 
                     onClick={() => window.open('https://anasaraid.me/vvfire-web')} >VVFire</a>
              <ul>
                <li className="pl-6 py-2">- Open source web application made by firefighters for firefighters.</li>
              </ul>
            </li>
            <li>
              - <a className="underline cursor-pointer" 
                     onClick={() => window.open('https://t.me/moview_chatbot')} >Moview</a>
              <ul>
                <li className="pl-6 py-2">- Telegram movie recommendation bot using Dialogflow and ExpressJS.</li>
              </ul>
            </li>
            <li>
              - <a className="underline cursor-pointer" 
                     onClick={() => window.open('https://snowapp.altervista.org')} >s-now</a>
              <ul>
                <li className="pl-6 py-2">- Snowy and frozen roads monitoring webapp.</li>
              </ul>
            </li>
            <li>See more on <a className="cursor-pointer underline" onClick={() => window.open('https://github.com/asdf1899')}>Github</a></li>
          </ul>
        </div>
        <div className="flex flex-wrap w-full my-12 px-12 sm:px-8 md:px-24 lg:px-48 justify-center items-center">
          <h4 className="style-text-white text-left text-md md:text-lg lg:text-lg xl:text-lg w-full style-home-text">Skills 🔧</h4>  
          <ul className="style-text-white mt-6 pl-4 text-left text-base md:text-base lg:text-base xl:text-base w-full style-home-text">
            <li>- React</li>
            <li>- Vue</li>
            <li>- Typescript</li>
            <li>- C#</li>
            <li>- NodeJS</li>
            <li>- PHP</li>
          </ul>
        </div>
        <div className="flex flex-wrap w-full my-12 px-12 sm:px-8 md:px-24 lg:px-48">
          <h4 className="style-text-white text-left text-md md:text-lg lg:text-lg xl:text-lg w-full style-home-text">
            Sometimes I write things <a className="cursor-pointer underline " onClick={ () => window.open('https://anasaraid.me/stuff')}>here</a> 🖊️
            </h4>
        </div>
        <h5 className="style-gradient-text z-10 bottom-0 p-4 text-sm md:text-md lg:text-md xl:text-md">Built with <a className="cursor-pointer underline " onClick={ () => window.open('https://reactjs.org/')}>React</a> and deployed on <a className="cursor-pointer underline " onClick={ () => window.open('https://github.com/asdf1899/asdf1899.github.io/')}>Github</a>.</h5>
      </section>
  )
}

export default About;