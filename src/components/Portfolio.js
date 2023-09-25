import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import pearl from '../assets/pearl.png';
import panoplie from '../assets/panoplie.png';
import purium from '../assets/purium.png';
import eargasm from '../assets/eargasm.png';
import hairsalon from '../assets/hairsalon.png';
import trevor from '../assets/trevor.png';


export default function Portfolio() {
  return (
        <section id='portfolio'>

        <div id='portfolio-bg'>
        <Container className='text-center my-5 py-3 portfolio-wrap'>
            <div className='text-center py-5 '>
                <h1 className='section-title' >Portfolio</h1>
                <p className='section-subtitle'>My Recent Projects</p>
            </div> 
            <Row className='mb-5 pb-5 portfolio-row'>
                <Col sm={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center p-0'>
                    <Image src={trevor} fluid/>
                </Col>
                <Col sm={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center ps-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Cafe Pearl</h4>
                        <p className='text-start'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                        <a className='button-red float-start' href='https://benevolent-macaron-9f152d.netlify.app/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
            </Row>

            <Row className='mb-5 pb-5 portfolio-row'>
                <Col sm={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center ps-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Purium</h4>
                        <p className='text-start'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                        <a className='button-red float-start' href='https://benevolent-macaron-9f152d.netlify.app/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
                <Col sm={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center p-0'>
                    <Image src={trevor} fluid/>
                </Col>
            </Row>

            <Row className='mb-5 pb-5 portfolio-row'>
                <Col sm={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center p-0'>
                    <Image src={trevor} fluid/>
                </Col>
                <Col sm={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center ps-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Panoplie</h4>
                        <p className='text-start'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                        <a className='button-red float-start' href='https://benevolent-macaron-9f152d.netlify.app/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
            </Row>

            <Row className='mb-5 pb-5 portfolio-row'>
                <Col sm={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center ps-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Hair Salon</h4>
                        <p className='text-start'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                        <a className='button-red float-start' href='https://benevolent-macaron-9f152d.netlify.app/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
                <Col sm={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center p-0'>
                    <Image src={trevor} fluid/>
                </Col>
            </Row>

            
            <Row className='my-5 portfolio-row'>
                <Col sm={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center p-0'>
                    <Image src={trevor} fluid/>
                </Col>
                <Col sm={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center ps-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Eargasm</h4>
                        <p className='text-start'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                        <a className='button-red float-start' href='https://benevolent-macaron-9f152d.netlify.app/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
            </Row>
                
            </Container>
        </div>           
        </section>
  )
}
