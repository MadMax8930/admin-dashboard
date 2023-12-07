import React from 'react'
import Card from '../ui/card/card'
import Rightbar from '../ui/rightbar/rightbar'
import Transactions from '../ui/transactions/transactions'
import Chart from '../ui/chart/chart'
import styles from './dashboard.module.css'

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
         <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
         </div>
         <Transactions />
         <Chart />
      </div>
      <div className={styles.side}>
         <Rightbar />
      </div>
    </div>
  )
}

export default DashboardPage