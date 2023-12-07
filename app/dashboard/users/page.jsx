import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/search/search'
import Pagination from '@/app/ui/pagination/pagination'
import { fetchUsers } from '@/app/database/fetchData'
import { deleteUser } from '@/app/database/actions'
import styles from '@/app/dashboard/users/users.module.css'

const UsersPage = async ({ searchParams }) => {
   const searchQuery = searchParams?.q || "";
   const pageQuery = searchParams?.p || 1;
   const { count, users } = await fetchUsers(searchQuery, pageQuery);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
         <Search placeholder="Search for a user..." />
         <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
         </Link>
      </div>
      <table className={styles.table}>
         <thead>
            <tr>
               <td>Name</td>
               <td>Email</td>
               <td>Create At</td>
               <td>Role</td>
               <td>Status</td>
               <td>Action</td>
            </tr>
         </thead>
         <tbody>
            {users.map((user) => (
               <tr key={user._id}>
                  <td>
                     <div className={styles.user}>
                        <Image src={user.img || "/noavatar.png"} alt="User" width={40} height={40} className={styles.userImage} />
                        {user.username}
                     </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.createdAt?.toString().slice(4, 16)}</td>
                  <td>{user.isAdmin ? "Admin" : "Client"}</td>
                  <td>{user.isActive ? "active" : "passive"}</td>
                  <td>
                     <div className={styles.buttons}>
                        <Link href={`/dashboard/users/${user._id}`}>
                           <button className={`${styles.button} ${styles.view}`}>View</button>
                        </Link>
                        <form action={deleteUser}>
                           <input type='hidden' name='id' value={user.id} />
                           <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                        </form>
                     </div>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
      <Pagination totalItems={count} />
    </div>
  )
}

export default UsersPage