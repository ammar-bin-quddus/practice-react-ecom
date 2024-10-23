import React from 'react'
import Nav from './Nav'
import AllProducts from './AllProducts'
import CartContainer from './CartContainer'

const App = () => {
  return (
    <>
      <Nav />
      <div className='w-11/12 mt-8 mx-auto flex'>
        <AllProducts />
        <CartContainer />
      </div>
    </>
  )
}

export default App