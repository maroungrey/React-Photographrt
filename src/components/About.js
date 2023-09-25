import React from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import Photo from '../assets/about.webp'

export default function About() {
  return (
    <section id='about'>
        <div className='pt-5 text-center'>
        <h1 className='section-title'>About Me</h1>
        <p className='section-subtitle'>My formal details</p>
        </div>
    <Container className='pb-5'> 
            <Row>
                <Col sm={12} lg={6} className='d-flex align-items-center justify-content-center'>
                    <Image src={Photo} fluid/>
                </Col>
                <Col sm={12} lg={6} className='d-flex align-items-center justify-content-center p-3'>
                    <div className='about-text'>
                        <h4 className="text-center text-lg-left services-title">I'm a Freelance Front-end Developer with over 3 years of experience.</h4>
                        <p className="about-me-description text-center text-lg-left">I'm a freelance web developer with 3 years of experience building custom websites. I have created multiple ecommerce sites using Magento 2, WordPress, React and Shopify, and am experienced with building non-ecommerce sites as well. Whether you need an online store built from scratch, your existing site rebuilt, or a completely custom web solution, I have the skills to make it happen. I'm available for hire to help businesses and individuals create the website they envision, no matter the industry or complexity. Let's work together to build your ideal web presence.</p>
                        <a className='about-button button-red' href='https://maroun-barqawi.tiiny.site/' target='_blank'><Button className=''>View Resume</Button></a>
                    </div>
                </Col>
            </Row>
    </Container>
</section>
  )
}
