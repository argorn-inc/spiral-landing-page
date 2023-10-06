import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      {/* <HeroSection /> */}
      <Feature />

      <Footer />
    </main>
  )
}
