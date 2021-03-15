import styles from './style.module.scss'

const logo = '/images/footer-logo.png'
const Footer = () => {
  return (
    <>
      <footer className={styles.footer} id="footer">
        <div className={styles.footerBody}>
          <div className={styles.main}>
            <div>
              <img className={styles.logo} src={logo} alt="cdc" width="100" height="84"/>
              <h4>Colonia Design Co.</h4>
              <h5>Space Stylist</h5>
            </div>
            <div>
              <ul className={styles.contacts}>
                <li>
                  <i className="fa fa-map-marker"></i>
                  Blk 5 Lot 36 Mayflower St. Bloomfields Subdivision, Barangay
                  Pasong Putik, Novaliches Quezon City
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <a href="tel:+63 920 972 7828">0920 972 7828 </a> /&nbsp;
                  <a href="tel:+63 918 488 7225">0918 488 7225 </a> /&nbsp;
                  <a href="tel:+63 966 447 0435">0966 447 0435 </a>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:cdcdesignco2020@gmail.com">cdcdesignco2020@gmail.com</a>
                </li>
              </ul>
              <div className={styles.socialDiv}>
                <p>Follow us on:</p>
                <ul className={styles.socialNav}>
                  <li>
                    <a
                      className={styles.facebook}
                      href="https://www.facebook.com/Colonia-Design-Co-106070318109163/"
                      title="Facebook"
                      rel="nofollow"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.twitter}
                      href="https://twitter.com/cdcdesign"
                      title="Twitter"
                      rel="nofollow"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.instagram}
                      href="https://www.instagram.com/idesignurspace/"
                      title="Instagram"
                      rel="nofollow"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            Copyright &copy; 2021 &nbsp;<a href="/"> CDC Space Stylist </a>
            &nbsp;All rights reserved
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
