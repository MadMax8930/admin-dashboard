import React from 'react'
import Image from 'next/image'
import MenuLink from './menuLink/menuLink'
import {
   MdDashboard,
   MdSupervisedUserCircle,
   MdShoppingBag,
   MdAttachMoney,
   MdWork,
   MdAnalytics,
   MdPeople,
   MdOutlineSettings,
   MdHelpCenter,
   MdLogout,
} from 'react-icons/md'
import { auth, signOut } from '@/app/auth/credentials'
import styles from './sidebar.module.css'

const menuItems = [
   {
      title: "Pages",
      list: [
         {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />,
         },
         {
            title: "Users",
            path: "/dashboard/users",
            icon: <MdSupervisedUserCircle />,
         },
         {
            title: "Products",
            path: "/dashboard/products",
            icon: <MdShoppingBag />,
         },
         {
            title: "Transactions",
            path: "/dashboard/transactions",
            icon: <MdAttachMoney />,
         },
      ]
   },
   {
      title: "Analytics",
      list: [
         {
            title: "Revenue",
            path: "/dashboard/revenue",
            icon: <MdWork />,
         },
         {
            title: "Reports",
            path: "/dashboard/reports",
            icon: <MdAnalytics />,
         },
         {
            title: "Teams",
            path: "/dashboard/teams",
            icon: <MdPeople />,
         },
      ]
   },
   {
      title: "User",
      list: [
         {
            title: "Settings",
            path: "/dashboard/settings",
            icon: <MdOutlineSettings />,
         },
         {
            title: "Help",
            path: "/dashboard/help",
            icon: <MdHelpCenter />,
         },
      ]
   },
]

const Sidebar = async () => {
   const session = await auth();
   // console.log("session", session);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
         <Image className={styles.userImage} src={session.user.img || "/noavatar.png"} alt="No Avatar" width="50" height="50" />
         <div className={styles.userDetail}>
            <span className={styles.username}>{session.user.username}</span>
            <span className={styles.userTitle}>Administrator</span>
         </div>
      </div>
      <ul className={styles.list}>
         {menuItems.map((cat) => (
            <li key={cat.title}>
               <span className={styles.cat}>{cat.title}</span>
               {cat.list.map((item) => (
                  <MenuLink key={item.title} item={item} />
               ))}
            </li>
         ))}
      </ul>
      <form 
         action={async () => {
            "use server";
            await signOut();
         }}
      >
         <button className={styles.logout}>
            <MdLogout /> Logout
         </button>
      </form>
    </div>
  )
}

export default Sidebar