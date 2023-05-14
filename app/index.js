import React from 'react';

import { client } from '@/lib/client';
import { Product, HeroBanner, FooterBanner } from '@/components';

const Home = async () => {
  const data = await (getData());
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Stainedglass magic</p>
      </div>

      <div className='products-container'>
        {data.products?.map((product) => product.name)}
      </div>

      <FooterBanner />
    </>
  )
};


export const getData = async () => {
  const sanityData = {
    products: [],
    bannerData: []
  }

  const query = '*[_type == "product"]';
  const products = await client.fetch(query)
  .then((data) => sanityData.products = data);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)
  .then((data) => sanityData.bannerData = data);

  return sanityData;
};

export default Home