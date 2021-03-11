import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './style.module.scss'

const animateContainer = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      ease: 'easeInOut',
    },
  },
}

const animateItem = {
  hidden: { opacity: 0, x: -50, y: 50 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
}

const Service = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
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
      <section id="services">
        <div className={styles.main}>
          <div className={styles.container}>
            <span className={styles.spanTitle}>Our Services</span>
            <div className={styles.sectionTitle}>
              <h2>Our Services</h2>
            </div>
            <motion.div
              className={styles.grid}
              ref={ref}
              variants={animateContainer}
              initial="hidden"
              animate={controls}
            >
              <motion.ul variants={animateItem}>
                <li>Design Development</li>
                <li>Furniture Designs</li>
                <li>Interior Planning</li>
                <li>House Staging</li>
                <li>Renovation</li>
              </motion.ul>
              <motion.ul variants={animateItem}>
                <li>Purchasing and Project Management Design</li>
                <li>Commercial Interior Design</li>
                <li>Condominium /Apartment</li>
                <li>Cabinetry Designs</li>
              </motion.ul>
              <motion.ul variants={animateItem}>
                <li>Color Consultation</li>
                <li>Window Coverings</li>
                <li>Room Makeovers </li>
                <li>Space Planning</li>
                <li>Accessorizing</li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
