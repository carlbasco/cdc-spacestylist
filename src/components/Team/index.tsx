import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { aboutData } from '../../data'
import Modal from '../Modal'
import { useInView } from 'react-intersection-observer'
import styles from './style.module.scss'

const animateContainer = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
      ease: 'easeInOut',
    },
  },
}

const animateItem = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
}

const Team = () => {
  const [selectProfile, setSelectProfile] = useState('')
  const closeModal = () => {
    setSelectProfile('')
  }

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
      <section id="team">
        <div className={styles.main}>
          <span className={styles.spanTitle}>Our Team</span>
          <div className={styles.sectionTitle}>
            <h2 ref={ref}>Our Team</h2>
          </div>
          <motion.div
            className={styles.flex}
            variants={animateContainer}
            animate={controls}
            initial="hidden"
          >
            {aboutData.map((item, index) => (
              <motion.div layoutId={item.name} key={index}>
                <motion.div
                  className={styles.card}
                  variants={animateItem}
                  whileHover={{ translateY: -15 }}
                  onClick={() => setSelectProfile(item.name)}
                >
                  <motion.img
                    layoutId={item?.image}
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className={styles.cardBody}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.position}>{item.position}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <AnimatePresence>
            {selectProfile && (
              <Modal selectProfile={selectProfile} closeModal={closeModal} />
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

export default Team
