import { useEffect } from 'react'
import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import { About, Hero, Project, Service, Team } from '../components'

const Home = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4e500f" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#4e500f" />
        <meta
          name="description"
          content="CDC Colonia Design Co Space Stylist is a design and construction firm based in Bloomfields Subdivision, 
          Novaliches Quezon City that creates and makes your dreams come true. We offer Interior Design, Renovation and Construct 
          projects like Buildings, Residential, Condominium, and Commercial spaces. Our Designer and Engineers 
          have a wealth of experiences in constructing and redesigning. "
        />
        <meta
          name="Keywords"
          content="Colonia Design Co, SpaceStylist, Construction, Interior Design, Room Makeovers, Commercial Interrior Design, Condominium/ Apartment, 
          Furniture Design, Cabinetry Design, Window Design, Color Consultation, Accessorizing, Space Planning, Window 
          Covering, Bloomfields Subdivision, Novaliches Quezon City"
        />
        <title>CDC Space Stylist</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <AnimateSharedLayout type="crossfade">
        <Hero />
        <About />
        <Team />
        <Service />
        <Project />
      </AnimateSharedLayout>
    </>
  )
}

export default Home
