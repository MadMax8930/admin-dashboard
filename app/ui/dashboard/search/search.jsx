"use client";
import React from 'react'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import styles from './search.module.css'

const Search = ({ placeholder }) => {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const { replace } = useRouter();

   const handleSearch = useDebouncedCallback((e) => {
      const params = new URLSearchParams(searchParams);

      const searchValue = e.target.value.trim();
      if (searchValue) {
         searchValue.length > 1 && params.set("q", searchValue);
      } else {
         params.delete("q");
      }

      replace(`${pathname}?${params}`);
   }, 500);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} 
         className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Search