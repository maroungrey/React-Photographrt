import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'



export default function Testimonial() {
  return (
<section>
    <h1 className='text-center'>Testimonial</h1>
<div>
     <Carousel fade>
      <Carousel.Item>
        <div className='mx-auto text-center'>
            <Image src="https://placehold.co/600x300"  fluid/>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='mx-auto text-center'>
            <Image src="https://placehold.co/600x300" fluid/>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='mx-auto text-center'>
            <Image src="https://placehold.co/600x300" fluid/>
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </div>
</section>
  )
}
