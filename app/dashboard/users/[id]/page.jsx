import React from 'react'
import Image from 'next/image'
import { fetchOneUser } from '@/app/database/fetchData'
import { updateUser } from '@/app/database/actions'
import styles from '@/app/dashboard/users/[id]/oneUser.module.css'

const SingleUserPage = async ({ params }) => {
   const { id } = params;
   const user = await fetchOneUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
         <div className={styles.imgContainer}>
            <Image src={user.img || '/noavatar.png'} loading="eager" alt='Avatar' fill />
         </div>
         {user.username}
      </div>
      <div className={styles.formContainer}>
         <form action={updateUser} className={styles.form}>
            <input type='hidden' name='id' value={user.id} />
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' id='username' defaultValue={user.username} />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' defaultValue={user.email} />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' placeholder='******' />
            <label htmlFor='phone'>Phone</label>
            <input type='text' name='phone' id='phone' defaultValue={user.phone} />
            <label htmlFor='address'>Address</label>
            <textarea type='text' name='address' id='address' rows="3" defaultValue={user.address} />
            <label htmlFor='isAdmin'>Is Admin?</label>
            <select name='isAdmin' id='isAdmin' defaultValue={user.isAdmin}>
               <option value={false}>No</option>
               <option value={true}>Yes</option>
            </select>
            <label htmlFor='isActive'>Is Active?</label>
            <select name='isActive' id='isActive' defaultValue={user.isActive}>
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