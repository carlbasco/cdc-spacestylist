import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Footer, Navbar } from '../components'
import * as gtag from '../lib/gtag'
import 'font-awesome/css/font-awesome.min.css'
import '../scss/main.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isTop, setIsTop] = useState(true)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollValue = window.scrollY < 300
      if (scrollValue !== isTop) {
        setIsTop(!isTop)
      }
    })
  }, [isTop])
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <button
        className={isTop ? 'hide-scrollTop' : 'scrollTop'}
        onClick={() => scrollTop()}
      >
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
      <Footer />
    </>
  )
}

export default MyApp
