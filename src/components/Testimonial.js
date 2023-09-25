import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import Roy from '../assets/testimonials/roy.jpg'
import Lamara from '../assets/testimonials/lamara.jpg'
import David from '../assets/testimonials/david.jpg'

export default function Testimonial() {
  return (
<section id='testimonial'>
    <Container className='py-5'>
      <div className='text-center py-3 mt-5'>
          <h1 className='section-title'>Testimonials</h1>
          <p className='section-subtitle'>What my clients say about me</p>
      </div>
    
      <Carousel className="py-5">

        <Carousel.Item>
          <div className='mx-auto text-center w-50'>
              <Image src={Roy} fluid roundedCircle />
              <h3 className='pt-3'>Roy S.</h3>
              <h6>Web Developer</h6>
              <p>I've had the pleasure of working with Maroun on multiple projects. He has a great eye for design, a deep understanding of the technical side of things, and able to communicate effectively.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='mx-auto text-center w-50'>
              <Image src={Lamara} fluid roundedCircle />
              <h3 className='pt-3'>Lamara S.</h3>
              <h6>Graphic Designer</h6>
              <p>Maroun took the time to understand our business needs and delivered a website that perfectly reflects our brand. He works fast and have a great communication skills.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='mx-auto text-center w-50'>
              <Image src={David} fluid roundedCircle />
              <h3 className='pt-3'>Davis H.</h3>
              <h6>Entrepreneur</h6>
              <p>Working with Maroun was a fantastic experience. His attention to detail, ability to problem-solve, and willingness to go the extra mile made him an invaluable asset to our team.</p>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </Container>
</section>
  )
}
