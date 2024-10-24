import React, { useState, useEffect } from 'react'
import ProductCart from './components/ProductCart'

const AllProducts = ({handleShowCart}) => {
    
    const [product, setProduct] = useState([])

    useEffect(() => {
      fetch("/products.json")
      .then(res => res.json())
      .then(data => setProduct(data))
    }, [])

  return (
    <div className='w-2/3'>
        <h1>AllProducts</h1>
        <div className='mt-8'>
            {
                product.map((product) => <ProductCart handleShowCart={handleShowCart} key={product.title} product={product} />)
            }
        </div>
    </div>
  )
}

export default AllProducts