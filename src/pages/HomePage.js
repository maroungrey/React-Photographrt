import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function HomePage() {
  return (
    <div>
        <header>
            <AppNavbar />
        </header>

{/* HERO IMAGE */}
        <section className='hero-block'> 
            {/* <div className='p-5 text-center bg-image hero-image'>
            </div>         */}
            <img
                className="d-block w-100"
                src={'https://placehold.co/1200x400'}
                alt='Hero Image'
            />
        </section>

        <section>
            <Container>
                <Row className="py-4">
                    <Col className="text-center"><span><i class="fa-solid fa-location-dot p-1"></i>999 Marouns Ave, Los Marounes CA 99999</span></Col>
                </Row>
            </Container>
        </section>

{/* PARALLAX */}
        <section className="position-relative d-flex justify-content-center"> 
            <ParallaxProvider>
                <ParallaxBanner 
                            layers={[
                                { image: 'https://placehold.co/1000x400', speed: -20 },
                            ]}
                            className=""
                style={{ height: '500px' }} />
                <div className="text-center vertical-center p-4 parallax-card mx-5">
                    <h1>LOREM IPSUM</h1>
                    <div className="mx-auto">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a href="/about"><Button>Read More</Button></a>
                    </div>
                </div>
            </ParallaxProvider>
        </section>


        <Container>
            {/* Quote */}
            <div className='my-1'>
                <Row>
                    <Col>
                        <div className='mx-auto my-5 text-center'>
                            <h1>Lorem Ipsum</h1>
                            <br></br>
                            <div className="w-75 mx-auto">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}