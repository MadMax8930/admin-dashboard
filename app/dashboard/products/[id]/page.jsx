import React from 'react'
import Image from 'next/image'
import { fetchOneProduct } from '@/app/database/fetchData'
import { updateProduct } from '@/app/database/actions'
import styles from '@/app/dashboard/products/[id]/oneProduct.module.css'

const SingleProductPage = async ({ params }) => {
   const { id } = params;
   const product = await fetchOneProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
         <div className={styles.imgContainer}>
            <Image src={product.img || '/noproduct.jpg'} alt='Product' fill />
         </div>
         {product.title}
      </div>
      <div className={styles.formContainer}>
         <form action={updateProduct} className={styles.form}>
            <input type='hidden' name='id' value={product.id} />
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' defaultValue={product.title} />
            <label htmlFor='price'>Price</label>
            <input type='number' name='price' id='price' defaultValue={product.price} />
            <label htmlFor='stock'>Stock</label>
            <input type='number' name='stock' id='stock' defaultValue={product.stock} />
            <label htmlFor='color'>Color</label>
            <input type='text' name='color' id='color' defaultValue={product.color} />
            <label htmlFor='size'>Size</label>
            <textarea type='text' name='size' id='size' defaultValue={product.size} />
            <label htmlFor='cat'>Cat</label>
            <select name='cat' id='cat'>
               <option value='kitchen'>Kitchen</option>
               <option value='phone'>Phone</option>
               <option value='computer'>Computer</option>
            </select>
            <label htmlFor='desc'>Description</label>
            <textarea type='text' name='desc' id='desc' rows="5" defaultValue={product.desc} />
            <button>Update</button>
         </form>
      </div>
    </div>
  )
}

export default SingleProductPage