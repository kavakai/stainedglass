import React from 'react';

import { client } from '@/lib/client';
import { Product, HeroBanner, FooterBanner } from '@/components';

const Home = async ({ products, bannerData }) => {
  const data = await (getData());
  return (
    <>
    {console.log(data, "in component")}
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Stainedglass magic</p>
      </div>

      <div className='products-container'>
        {data?.map((product) => product.name)}
      </div>

      <FooterBanner />
    </>
  )
};


export const getData = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)
  .then((data) => data);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)
  .then((data) => data);

  console.log(products, "prods")


  return products;
};

export default Home