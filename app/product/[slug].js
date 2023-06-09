import React from 'react';

import { client, urlFor } from '@/lib/client';

export const ProductDetails = () => {

  const data = await (getStaticProps());
console.log(data, "data")
  const { name, image, details, price } = product;

  return (
    <div>
      {console.log("I work")}
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(image && image[0]).toString()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const data = {
    products: [],
    product: []
  }

  const query = `*[_type == "product" && slug.current == '${slug.toLowerCase()}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return (data)
}