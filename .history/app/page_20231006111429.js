import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WhatWeDo from '@/components/WhatWeDo'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <WhatWeDo />

      <Footer />
    </main>
  )
}
