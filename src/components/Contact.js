import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';

export default function Contact() {

        const recaptchaContainerRef = useRef(null);

        useEffect(() => {
        const loadReCaptcha = () => {
            if (
            recaptchaContainerRef.current &&
            typeof window.grecaptcha !== "undefined"
            ) {
            const siteKey = "6Lcgo1MoAAAAAGdaCzpAt95F9Z3U-BRNnWBjlnfw";
    
            if (!recaptchaContainerRef.current.hasChildNodes()) {
                window.grecaptcha.render(recaptchaContainerRef.current, {
                sitekey: siteKey,
                });
            }
            }
        };
    
        if (typeof window.grecaptcha === "undefined") {
            const script = document.createElement("script");
            script.src =
            "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
    
            window.onloadCallback = loadReCaptcha;
        } else {
            loadReCaptcha();
        }
        }, []);

        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('PortfolioSite', 'template_17uv9hh', form.current, 'DmkIqtFP9TZ2_6UAN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
        };

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
                                    <Form className="p-3 mx-auto text-start" ref={form} onSubmit={sendEmail} method="POST">
                                        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="" name="name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="" name="email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="message" />
                                        </Form.Group>
                                        <div ref={recaptchaContainerRef} id="recaptcha-container"></div>
                                        <Button className='w-100 button-black mt-3' variant="dark" type="submit">Submit</Button>
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
