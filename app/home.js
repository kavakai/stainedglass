import React from 'react';

import { client } from '@/lib/client';
import { Product, HeroBanner, FooterBanner } from '@/components';

const Home = ({ products, bannerData }) => {
  return (
  <>
    <HeroBanner />

    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Stainedglass magic</p>
    </div>

    <div className='products-container'>
      {console.log(products, "products")}
      { products?.map((product) => product.name) }
    </div>

    <FooterBanner />
  </>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  console.log(products, "prod")

  return {
    props: { products, bannerData }
  }
};

export default Home