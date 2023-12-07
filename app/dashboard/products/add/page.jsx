import React from 'react'
import { addProduct } from '@/app/database/actions'
import styles from '@/app/dashboard/products/add/addProduct.module.css'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
         <input type='text' placeholder='Title' name='title' required />
         <select name='cat' id='cat'>
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
         </select>
         <input type='number' placeholder='Price' name='price' />
         <input type='number' placeholder='Stock' name='stock' />
         <input type='text' placeholder='Color' name='color' />
         <input type='text' placeholder='Size' name='size' />
         <textarea name="desc" id="desc" rows="16" placeholder='Description'></textarea>
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage