import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './style.module.scss'

const aboutImg = '/images/aboutBg.webp'
const animateAboutText = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
}

const animateAboutImg = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
}

const About = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // triggerOnce: true,
  })
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <>
      <section id="about">
        <div className={styles.container}>
          <span className={styles.spanTitle}>
            About us
          </span>
          <div className={styles.sectionTitle}>
            <h2>About Us</h2>
          </div>
          <div className={styles.flex}>
            <motion.div
              className={styles.aboutText}
              ref={ref}
              variants={animateAboutText}
              initial="hidden"
              animate={controls}
            >
              <p>
                CDC Colonia Design Co. Space Stylist is based from Bloomfields
                Subdivision, Novaliches Quezon City. We design, renovate and construct projects
                like Buildings, Residential, Condominium, and Commercial spaces.
                Our Designer and Engineers have a wealth of experiences in
                constructing and redesigning. Our team is composed of a Civil
                Engineer, Electrical Engineer and an Interior Designer. If you
                need a keen eye for design, allow us to help you and share our
                acquired skills, experience and creativity to meet your
                lifestyle needs while avoiding unnecessary expensive mistakes.
              </p>
            </motion.div>
            <motion.img
              className={styles.aboutImg}
              src={aboutImg}
              variants={animateAboutImg}
              initial="hidden"
              animate={controls}
              alt="img"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
