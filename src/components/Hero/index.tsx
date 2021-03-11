import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './style.module.scss'

const animateContainer = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.6,
      ease: 'easeInOut',
    },
  },
}

const animateItem = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
}

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <text className={styles.dream}>
            <tspan x="-120" y="-90">
              Dream
            </tspan>
          </text>
        </svg>
        <div className={styles.main}>
          <motion.div
            className={styles.heroText}
            variants={animateContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={animateItem}>You Dream</motion.h1>
            <motion.h1 variants={animateItem} className={styles.h2}>
              We Create
            </motion.h1>
            <motion.p variants={animateItem}>
              Colonia Design Co. Space Stylist is a design and construction firm
              that creates and makes your dreams come true.
            </motion.p>
            <motion.div variants={animateItem}>
              <Link href="/#projects">
                <a className={styles.btnProject}>See Our Projects</a>
              </Link>
              <Link href="/#footer">
                <a className={styles.btnFooter}>Contact Us</a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero
