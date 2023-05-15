import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

const FooterBanner = ({ footerBanner: { largeText1, largeText2, smallText, midText, product, buttonText, image, desc } }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img 
          src={urlFor(image).toString()}
          className='footer-banner-image'
        />
      </div>
    </div>
  )
}

export default FooterBanner