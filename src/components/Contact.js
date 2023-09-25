import React from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';

export default function Contact() {
  return (
    <section id='contact'>
        <div className='mx-auto pt-5 text-center'>
            <div className='contact-section py-3'>
                <div className='contact-bg pt-4'>
                    <div className='text-center'>
                        <h1 className='section-title-white'>Contact Me</h1>
                        <p className='section-subtitle-white mb-0'>Let's Keep in Touch</p>
                    </div>
                    <div className='contact-container'>
                        <div className='px-3 d-flex align-items-center justify-content-center'>
                                <div className='p-3'>
                                    <h3 className='contact-title'>
                                    <TypeAnimation
                                        sequence={[
                                        'Get in Touch',
                                        1500, 
                                        'Contact Me',
                                        1500,
                                        'Send an Email',
                                        1500,
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    />
                                    </h3>
                                    <div className='py-2 contact-title'>
                                        <h6>I would love to hear from you!</h6>
                                    </div>
                                    <div className='hero-icons pb-2'>
                                        <a href='https://www.linkedin.com/in/maroungrey/' target='_blank'><i className="fa-brands fa-linkedin fa-xl py-2 pe-3"></i></a>
                                        <a href='https://github.com/maroungrey' target='_blank'><i className="fa-brands fa-github fa-xl py-2 pe-3"></i></a>
                                        <a href='https://www.instagram.com/maroungrey/' target='_blank'><i className="fa-brands fa-instagram fa-xl py-2 pe-3"></i></a>
                                    </div>

                                <div className='email-image'></div>
                                </div>
                            </div>

                            <div className='p-3' >
                                <div className='email-form'>
                                    <Form className="p-3 mx-auto text-start">
                                        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                        <Button className='w-100 button-black' variant="dark">Submit</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
