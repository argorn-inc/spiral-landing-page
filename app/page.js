'use client'
import React, { useRef } from 'react';
import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import DownloadApp from '@/components/DownloadApp'

export default function Home() {
  const featureRef = useRef(null);
  const footerRef = useRef(null);

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
      <Navbar scrollToSection={scrollToSection}/>
      <HeroSection />
      <Feature />
      <DownloadApp />
      <Footer  />
    </main>
  )
}
