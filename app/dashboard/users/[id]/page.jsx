import React from 'react'
import Image from 'next/image'
import styles from '@/app/dashboard/users/[id]/oneUser.module.css'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
         <div className={styles.imgContainer}>
            <Image src='/noavatar.png' alt='Avatar' fill />
         </div>
         John Doe
      </div>
      <div className={styles.formContainer}>
         <form action='' className={styles.form}>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' id='username' placeholder='John Doe' />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='johndoe@gmail.com' />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
            <label htmlFor='phone'>Phone</label>
            <input type='text' name='phone' id='phone' placeholder='+12345678' />
            <label htmlFor='address'>Address</label>
            <textarea type='text' name='address' id='address' rows="3" placeholder='New York'></textarea>
            <label htmlFor='isAdmin'>Is Admin?</label>
            <select name='isAdmin' id='isAdmin'>
               <option value={false}>No</option>
               <option value={true}>Yes</option>
            </select>
            <label htmlFor='isActive'>Is Active?</label>
            <select name='isActive' id='isActive'>
               <option value={false}>No</option>
               <option value={true}>Yes</option>
            </select>
            <button>Update</button>
         </form>
      </div>
    </div>
  )
}

export default SingleUserPage