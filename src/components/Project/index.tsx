import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projectData } from '../../data'
import styles from './style.module.scss'

interface item2 {
  title: string | null
  images: string[]
}

const animateContainer = {
  // hidden: { opacity: 0, scale: 0 },
  visible: {
    // scale: 1,
    // opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
      ease: 'easeInOut',
    },
  },
}

const animateItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
}

const Project = () => {
  const [zoomImg, setZoomImg] = useState('')

  const clearState = () => {
    setZoomImg('')
  }

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
      <section id="projects">
        <div className={styles.container}>
          <span className={styles.spanTitle}>Our Projects</span>
          <div className={styles.sectionTitle}>
            <h2>Our Projects</h2>
          </div>
          <motion.div
            ref={ref}
            className={styles.cardProj}
            variants={animateContainer}
            animate={controls}
          >
            <motion.div variants={animateItem}>
              <div className={styles.projectContent}>
                <p>
                  Six Storey Residential/Office Bldg. & Two Storey Machine Shop
                  Warehouse
                </p>
                <div className={styles.projectDetails}>
                  <p>Designed & Construction</p>
                  <p>Mapulang Lupa, Valenzuela, Bulacan</p>
                </div>
              </div>
              <div className={styles.projectContent}>
                <p>Kesaria Food Kiosk</p>
                <div className={styles.projectDetails}>
                  <p>Designed & Construction</p>
                  <p>Greenbelt II Legaspi Village, Makati City</p>
                </div>
              </div>
              <div className={styles.projectContent}>
                <p>Southpeak Filinvest</p>
                <div className={styles.projectDetails}>
                  <p>
                    Designed & Construction Interior Finishing /Gate & Fence
                  </p>
                  <p>San Pedro Laguna</p>
                </div>
              </div>
              <div className={styles.projectContent}>
                <p>Avida Altaraza</p>
                <div className={styles.projectDetails}>
                  <p>Designed & Construction Gate & Fence</p>
                  <p>San Jose Del Monte Bulacan</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={animateItem}>
              <div className={styles.projectContent}>
                <p>M&H Food Corporation</p>
                <p>General Renovation & Finishing Works</p>
                <div className={styles.projectDetails}>
                  <p>Henlin Outlets, Supermarket & Food Court</p>
                  <p>Landmark Trinoma North Triangle , Quezon City</p>
                </div>
                <div className={styles.projectDetails}>
                  <p>Tomato and Cheese Outlet</p>
                  <p>Unit-104 Santana Grove Sucat Road, Paranaque City</p>
                  <p>
                    Unit-101 Fast Bytes North Gate, Alabang, Muntinlupa City
                  </p>
                </div>
                <div className={styles.projectDetails}>
                  <p>Henlin Outlets</p>
                  <p>Panay Ave. corner EDSA Quezon City</p>
                  <p>Sucat Road corner Furtunata Village, Paranaque City</p>
                  <p>Ali mall Food Court, Araneta Center, Cubao, Quezon City</p>
                  <p>G/F Festival Mall, Alabang, Muntinlupa City</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {projectData.map((item, index) => (
            <div className={styles.dataContent} key={index}>
              <h3>{item.title}</h3>

              {item.data.map((item2: item2, index: number) => (
                <div key={index}>
                  <p>{item2?.title}</p>

                  <div className={styles.flex}>
                    {item2.images.map((item3, index: number) => (
                      <motion.div
                        className={styles.cardImgProj}
                        key={index}
                        onClick={() => setZoomImg(item3)}
                        layoutId={item3}
                      >
                        <Image
                          className={styles.imgProj}
                          src={item3}
                          alt="img"
                          width={280}
                          height={280}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <AnimatePresence>
            {zoomImg && (
              <motion.div exit={{ opacity: 0, transition: { duration: 0.15 } }}>
                <motion.div className="modal" layoutId={zoomImg}>
                  <span
                    className={styles.spanClose}
                    onClick={() => clearState()}
                  >
                    &times;
                  </span>
                  <motion.img
                    className={styles.zoomImg}
                    alt="zoom"
                    src={zoomImg}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

export default Project
