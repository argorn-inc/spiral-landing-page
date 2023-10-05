import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
    </main>
  )
}
