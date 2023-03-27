import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import dynamic from 'next/dynamic'

const Game = dynamic(() => import('@/components/Game'), { ssr: false });

export default function Home() {
  return (
    <main >
      
      <Game></Game>
       </main>
  )
}
