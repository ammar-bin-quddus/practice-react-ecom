import React from 'react'

const ProductCart = ({product, handleShowCart}) => {
    const {image, title, description, price, isCategory} = product;
  return (
    <div className='w-3/2 border-2 p-4 mb-5 text-center flex flex-col gap-4'>
      <div><img className='w-full h-96 object-contain' src={image} alt="" /></div>
      <p>{title}</p>
      <p>{description}</p>
      <p>$ {price}</p>
      <p>{isCategory ? 'Fetured Category' : 'No Category'}</p>
      <button onClick={()=> handleShowCart(product)} className='bg-emerald-800 text-white text-lg py-2'>Add to Cart</button>
    </div>
  )
}

export default ProductCart