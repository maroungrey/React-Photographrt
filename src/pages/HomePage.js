import React from 'react'

import AppFooter from '../components/footer';



import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import SkillsLine from '../components/SkillsLine';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>     
      <Hero />
      <About />
      <Services/>
      {/* <SkillsLine /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <AppFooter />
    </div>
  )
}