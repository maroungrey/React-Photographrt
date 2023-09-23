import React from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import Banner from '../assets/maroun-3.jpg'

export default function Contact() {
  return (
    <section id='contact'>
        <Container className='mx-auto my-5 text-center'>
            <h1 className='py-4'>Contact Me</h1>
            <Row>
                <Col lg={6}>
                    <Image src={Banner} fluid />
                </Col>

                <Col lg={6} >
                    <Form className="w-75 py-3 mx-auto text-start">
                        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                        <Form.Label>Details</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className='w-100' variant="dark">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
