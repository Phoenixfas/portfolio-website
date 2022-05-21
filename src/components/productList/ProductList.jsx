import React from 'react'
import './productList.css'
import Product from '../product/Product'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's Lama</h1>
            <p className="pl-desc">
                We are a creative agency located in the heart of the city of New York. We believe in the power of design and love to help people express themselves through art.
            </p>
        </div>
        <div className="pl-list">
          {products.map(product => <Product key={product.id} img={product.img} link={product.link} />)}
        </div>
    </div>
  )
}

export default ProductList