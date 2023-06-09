import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 J.Ryan Studios all rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiFillFacebook />
      </p>
    </div>
  )
}

export default Footer