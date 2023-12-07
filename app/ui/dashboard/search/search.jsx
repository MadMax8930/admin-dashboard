"use client";
import React from 'react'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import styles from './search.module.css'

const Search = ({ placeholder }) => {
   const { replace } = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   const handleSearch = useDebouncedCallback((e) => {
      const params = new URLSearchParams(searchParams);
      params.set("p", 1); // page query

      const searchValue = e.target.value.trim();
      if (searchValue) {
         searchValue.length > 2 && params.set("q", searchValue); // search query
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