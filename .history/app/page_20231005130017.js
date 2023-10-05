import Image from 'next/image'
import styles from '...module.css'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  )
}
