import React from 'react'
import { authenticateUser } from '../database/actions'
import styles from './login.module.css'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={authenticateUser} className={styles.form}>
         <h1>Login</h1>
         <input type='text' placeholder='username' name='username' />
         <input type='password' placeholder='password' name='password' />
         <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage