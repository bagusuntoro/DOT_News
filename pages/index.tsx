import Head from 'next/head'
import { Inter } from 'next/font/google'

import Navigation from '../components/Header/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navigation />
      <h1>Hello Bagus Untoro</h1>
    </>
  )
}
