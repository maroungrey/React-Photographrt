import React from 'react'
import Banner from '../assets/banner.webp';

export default function Hero() {
  return (
    <section className='hero-block'> 
    <img
        className="d-block w-100"
        src={Banner}
        alt='Hero Image'
    />      
</section>
  )
}
