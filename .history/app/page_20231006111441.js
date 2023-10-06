import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WhatWeDo from '@/components/WhatWeDo'
import Footer from '@/components/Footer'
import { Download } from '@mui/icons-material'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
<Download
      <Footer />
    </main>
  )
}
