"use client";

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import styles from './pagination.module.css'

const Pagination = ({ totalItems }) => {
   const { replace } = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   const ITEM_PER_PAGE = 2;
   const page = searchParams.get("p") || 1;
   
   const hasPrev = ITEM_PER_PAGE * (parseInt(page)-1) > 0;
   const hasNext = ITEM_PER_PAGE * (parseInt(page)-1) + ITEM_PER_PAGE < totalItems;
   
   const handleChangePage = (type) => {
      const params = new URLSearchParams(searchParams);
      type == "prev" ? params.set("p", parseInt(page) - 1) : params.set("p", parseInt(page) + 1);
      replace(`${pathname}?${params}`);
   };

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>Previous</button>
      <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>Next</button>
    </div>
  )
}

export default Pagination