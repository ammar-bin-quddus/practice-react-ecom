import React from 'react'

const Nav = () => {
  return (
    <div className='w-full bg-blue-100 py-8'>
        <div className='w-11/12 mx-auto flex justify-between items-center'>
            <div className='font-bold text-2xl'><p>Logo</p></div>
            <div>
                <ul className='flex justify-center items-center gap-8'>
                    <li>Home</li> 
                    <li>Products</li>
                    <li>Cart 0</li>
                    <li>$ 0</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav