import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoCards from '../components/InfoCards';

import {
  AboutObject,
  HowObject,
  CompanyObject 
} from '../components/InfoSection/Data';
import { DevTeam } from '../components/InfoCards/Data';
import Footer from '../components/Footer';

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
      <InfoSection {...HowObject} />
      <InfoSection {...CompanyObject} />
      <InfoCards {...DevTeam} />
      <Footer />
    </>
  );
}

export default Home
