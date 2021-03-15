import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'


const logo = '/images/nav-logo.png'
const Navbar = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollValue = window.scrollY < 120
      if (scrollValue !== isTop) {
        setIsTop(!isTop)
      }
    })
  }, [isTop])

  return (
    <div className={isTop ? styles.navbar : styles.navbarBgPrimary}>
      <div className={styles.main}>
        <Link href="/">
          <a className={styles.navbarBrand}>
            <img src={logo} alt="cdc" width="40" height="33" />
            CDC Space Stylist
          </a>
        </Link>

        <nav className={styles.navLink}>
          <ul>
            <li className={styles.linkWrapper}>
              <Link href="/#about">
                <a>About Us</a>
              </Link>
            </li>
            <li className={styles.linkWrapper}>
              <Link href="/#team">
                <a>Team</a>
              </Link>
            </li>
            <li className={styles.linkWrapper}>
              <Link href="/#services">
                <a>Services</a>
              </Link>
            </li>
            <li className={styles.linkWrapper}>
              <Link href="/#projects">
                <a>Project</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
