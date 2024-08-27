import React from 'react'
import Filter from './Filter'
import Product from './Product'
import "../styles/ProductContainer.css"

const ProductContainer = () => {
  return (
    <div className='filter-product'>
        <Filter/>
        <Product/>
    </div>
  )
}

export default ProductContainer