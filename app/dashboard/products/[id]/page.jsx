import React from 'react'
import Image from 'next/image'
import styles from '@/app/dashboard/products/[id]/oneProduct.module.css'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
         <div className={styles.imgContainer}>
            <Image src='/noproduct.jpg' alt='Product' fill />
         </div>
         IPhone
      </div>
      <div className={styles.formContainer}>
         <form action='' className={styles.form}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' placeholder='IPhone 13' />
            <label htmlFor='price'>Price</label>
            <input type='number' name='price' id='price' placeholder='1000' />
            <label htmlFor='stock'>Stock</label>
            <input type='number' name='stock' id='stock' placeholder='23' />
            <label htmlFor='color'>Color</label>
            <input type='text' name='color' id='color' placeholder='red' />
            <label htmlFor='size'>Size</label>
            <textarea type='text' name='size' id='size' placeholder='Many'></textarea>
            <label htmlFor='cat'>Cat</label>
            <select name='cat' id='cat'>
               <option value='kitchen'>Kitchen</option>
               <option value='phone'>Phone</option>
               <option value='computer'>Computer</option>
            </select>
            <label htmlFor='desc'>Description</label>
            <textarea type='text' name='desc' id='desc' rows="5" placeholder='Description'></textarea>
            <button>Update</button>
         </form>
      </div>
    </div>
  )
}

export default SingleProductPage