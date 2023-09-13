import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';



import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
        <header>
            <AppNavbar />
        </header>

        <Hero />
        <About />
        <Portfolio />
        <Contact />

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}