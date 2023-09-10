import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


export default function HomePage() {
  return (
    <div>
        <header>
            <AppNavbar />
        </header>

        <section className='hero-block'> 
            {/* <div className='p-5 text-center bg-image hero-image'>
            </div>         */}
            <img
                className="d-block w-100"
                src={'https://placehold.co/1200x400'}
                alt='Hero Image'
            />
        </section>
<Button>Click</Button>
        <Container>
            {/* Quote */}
            <div className='my-1'>
                <Row>
                    <Col>
                        <div className='mx-auto my-5 text-center'>
                            <h1>homepage</h1>
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