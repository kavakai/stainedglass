import React from 'react'
import { Product, HeroBanner, FooterBanner } from '@/components'

const Home = () => {
  return (
  <>
    HeroBanner

    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Stainedglass magic</p>
    </div>

    <div className='products-container'>
      {['Product 1', 'Product 2'].map((prod) => prod)}
    </div>

    Footer
  </>
  )
}

export default Home