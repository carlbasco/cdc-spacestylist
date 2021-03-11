import { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import { aboutData } from '../../data'
import styles from './style.module.scss'

interface iModal {
  selectProfile: string
  closeModal: Dispatch<SetStateAction<string>>
}

const Modal = ({ selectProfile, closeModal }: iModal) => {
  const profile = aboutData.find((item) => item.name === selectProfile)
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <div className="modal">
        <motion.div className="modal-content" layoutId={profile?.name}>
          <span onClick={() => closeModal('')} className="close">
            &times;
          </span>
          <div className="modal-body">
            <div className={styles.grid}>
              <div className={styles.profileSection}>
                <motion.img
                  className={styles.profileImg}
                  layoutId={profile?.image}
                  src={profile?.image}
                  alt={profile?.name}
                />
                <h5>{profile?.name}</h5>
                <h6>{profile?.position}</h6>
              </div>
              <div className={styles.profileBio}>
                <p>{profile?.bio}</p>
                {profile?.membersof && (
                  <>
                    <p className="pt-2">Members Of:</p>
                    <ul className="pl-3">
                      {profile.membersof.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {profile?.seminar && (
                  <>
                    <p className="pt-2">Seminar:</p>
                    <ul className="pl-3">
                      {profile.seminar.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Modal
