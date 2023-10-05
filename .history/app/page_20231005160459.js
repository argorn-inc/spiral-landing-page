import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WhatWeDo from '@/components/WhatWeDo'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
    </main>
  )
}
