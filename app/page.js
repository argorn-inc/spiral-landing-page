'use client'
import React, { useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import DownloadApp from '@/components/DownloadApp'
import WaitListModal from '@/components/Waitlist';

export default function Home() {
  const featureRef = useRef(null);
  const footerRef = useRef(null);

  const [isWaitListModalOpen, setIsWaitListModalOpen] = useState(false);
  const [deviceType, setDeviceType] = useState(null);
  const [success, setSuccess] = useState(false);

  const toggleWaitListModal = (deviceType) => {
    setIsWaitListModalOpen((prevState) => !prevState);
    setDeviceType(deviceType)
    setSuccess(false);
  };


  const scrollToSection = (section) => {
    switch (section) {
      case '#feature_section':
        featureRef?.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'footer':
        footerRef?.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };
  return (
    <main className={styles.main}>
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection toggleWaitListModal={toggleWaitListModal} />
      <Feature />
      <DownloadApp toggleWaitListModal={toggleWaitListModal} />
      <Footer />

      <WaitListModal
        isModalOpen={isWaitListModalOpen}
        deviceType={deviceType}
        success={success}
         setSuccess={setSuccess}
        toggleWaitListModal={toggleWaitListModal}
        setIsWaitListModalOpen={setIsWaitListModalOpen}
      />

    </main>
  )
}
