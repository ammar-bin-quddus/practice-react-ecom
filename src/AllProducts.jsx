import React, { useState, useEffect } from 'react'
import ProductCart from './components/ProductCart'

const AllProducts = () => {
    
    const [product, setProduct] = useState([])

    useEffect(() => {
      fetch("/products.json")
      .then(res => res.json())
      .then(data => setProduct(data))
    }, [])

  return (
    <div className='w-2/3'>
        <h1>AllProducts</h1>
        <div>
            {
                product.map((product) => <ProductCart product={product} />)
            }
        </div>
    </div>
  )
}

export default AllProducts