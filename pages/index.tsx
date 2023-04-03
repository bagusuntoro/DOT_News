import Head from 'next/head'
import { Inter } from 'next/font/google'

import Navigation from '../components/Header/navigation'
import Carousel from '../components/carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navigation />
      <Carousel />
      <h1>Hello Bagus Untoro</h1>
    </>
  )
}
