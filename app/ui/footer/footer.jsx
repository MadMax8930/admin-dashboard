import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Max Admin</div>
      <div className={styles.copyright}>© All right reserved.</div> 
    </div>
  )
}

export default Footer