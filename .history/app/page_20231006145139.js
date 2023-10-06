import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

import Footer from '@/components/Footer'
import DownloadApp from '@/components/DownloadApp'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      {/* <WhatWeDo /> */}
      <DownloadApp />
      <Footer />
    </main>
  )
}
