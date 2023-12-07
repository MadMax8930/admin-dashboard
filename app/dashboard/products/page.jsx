import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/search/search'
import Pagination from '@/app/ui/pagination/pagination'
import { fetchProducts } from '@/app/database/fetchData'
import { deleteProduct } from '@/app/database/actions'
import styles from '@/app/dashboard/products/products.module.css'

const ProductsPage = async ({ searchParams }) => {
   const searchQuery = searchParams?.q || "";
   const pageQuery = searchParams?.p || 1;
   const { count, products } = await fetchProducts(searchQuery, pageQuery);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
         <Search placeholder="Search for a product..." />
         <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
         </Link>
      </div>
      <table className={styles.table}>
         <thead>
            <tr>
               <td>Title</td>
               <td>Description</td>
               <td>Price</td>
               <td>Created At</td>
               <td>Stock</td>
               <td>Action</td>
            </tr>
         </thead>
         <tbody>
            {products.map((product) => (
               <tr key={product._id}>
                  <td>
                     <div className={styles.product}>
                        <Image src={product.img || "/noproduct.jpg"} alt="Product" width={40} height={40} className={styles.productImage} />
                        {product.title}
                     </div>
                  </td>
                  <td>{product.desc}</td>
                  <td>${product.price}</td>
                  <td>{product.createdAt?.toString().slice(4, 16)}</td>
                  <td>{product.stock}</td>
                  <td>
                     <div className={styles.buttons}>
                        <Link href={`/dashboard/products/${product._id}`}>
                           <button className={`${styles.button} ${styles.view}`}>View</button>
                        </Link>
                        <form action={deleteProduct}>
                           <input type='hidden' name='id' value={product.id} />
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

export default ProductsPage