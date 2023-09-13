import React from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'

export default function About() {
  return (
    <section>
    <Container>
       
        <div className='my-1'>
            <Row>
                <Col>
                    <div className='mx-auto my-5 text-center'>
                        <h1>About Me</h1>
                        <div className="w-75 mx-auto">
                            <p>Hello, I'm Trevor, a passionate photographer dedicated to capturing life's most captivating moments through the lens. With a keen eye for detail and a commitment to artistic excellence, I strive to create images that tell unique stories and evoke powerful emotions. Whether it's a candid shot in the midst of a bustling city or a breathtaking landscape in the great outdoors, I believe in the magic of photography to freeze time and preserve memories. Explore my portfolio to witness my journey and the world through my camera's perspective. Join me in celebrating the beauty of life one click at a time.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
</section>
  )
}
