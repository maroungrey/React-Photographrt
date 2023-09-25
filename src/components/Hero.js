import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';
import AppNavbar from '../components/navbar';
import ProfileImg from '../assets/profile.webp'
import Shape from '../assets/shape.png'

export default function Hero() {
  return (
    <section className='bg-image'>
      <AppNavbar />
      <Container>
        <Row>
          <Col sm={12} md={6} className='py-3 d-flex justify-content-center align-items-center text-center text-md-left'>
            <div className='w-100'>
              <div className='hero-icons py-2'>
                <a href='https://www.linkedin.com/in/maroungrey/' target='_blank'><i className="fa-brands fa-linkedin fa-xl py-2 pe-3"></i></a>
                <a href='https://github.com/maroungrey' target='_blank'><i className="fa-brands fa-github fa-xl py-2 pe-3"></i></a>
                <a href='https://www.instagram.com/maroungrey/' target='_blank'><i className="fa-brands fa-instagram fa-xl py-2 pe-3"></i></a>
              </div>
              <div className='py-1'>
                <h2 className='hero-text'>Hello, I'm <span id='maroun'>MAROUN</span></h2>
              </div>
              <div>
                <h3 className='hero-text font-hermit'>
                <TypeAnimation
                    sequence={[
                      'Software Engineer',
                      1500, 
                      'Full Stack Developer',
                      1500,
                      'E-Commerce Developer',
                      1500,
                      'Web Developer',
                      1500,

                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  />
                </h3>
              </div>
              <p className='hero-text'>Based in Los Angeles, California.</p>
              <div>
                <a className='pe-3 button-red' href='#contact'><Button>Get in Touch</Button></a>
                <a className='pe-3 button-red'href='#portfolio'><Button>View Portfolio</Button></a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className='d-flex align-items-bottom'>
            <Image src={ProfileImg} fluid/>
          </Col>
        </Row>
      </Container>
      <div className="footer-container">
        <div className="footer-parent">
          <Image src={Shape} alt="Maroun" />
        </div>
      </div>
    </section>
  )
}
