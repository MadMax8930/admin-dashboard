import React from 'react'
import Sidebar from '../ui/sidebar/sidebar'
import Navbar from '../ui/navbar/navbar'
import Footer from '../ui/footer/footer'
import styles from './dashboard.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
         <Sidebar />
      </div>
      <div className={styles.content}>
         <Navbar />
         {children}
         <Footer />
      </div>
    </div>
  )
}

export default Layout