"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './menuLink.module.css'

const MenuLink = ({ item }) => {
   const { title, path, icon } = item;
   const pathname = usePathname();
   
  return (
    <Link href={path} 
      className={`${styles.container} ${pathname === path && styles.active}`}>
      {icon} {title}
    </Link>
  )
}

export default MenuLink