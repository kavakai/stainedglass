import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>J.Ryan Studios</Link>
      </p>
      <button type='button' className='cart-icon' >
        <AiOutlineShopping />
        <span className='cart-item-qty'>2</span>
      </button>
    </div>
  )
}

export default Navbar