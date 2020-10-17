import React, {useState} from 'react';
import Navbar from '../components/MainPage/Navbar';
import Sidebar from '../components/MainPage/Sidebar';
import HeroSection from '../components/MainPage/HeroSection';
import InfoSection from '../components/MainPage/InfoSection';
import InfoCards from '../components/MainPage/InfoCards';

import {
  AboutObject,
  HowObject,
  CompanyObject, SsweObject, KlarObject 
} from '../Data/InfoSection';
import { DevTeam } from '../Data/InfoCards';
import Footer from '../components/MainPage/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...AboutObject} />
      <InfoCards {...DevTeam}>
        <InfoSection {...SsweObject}/>
        <InfoSection {...KlarObject}/>
      </InfoCards>
      <InfoSection {...HowObject} />
      <Footer />
    </>
  );
}

export default Home
