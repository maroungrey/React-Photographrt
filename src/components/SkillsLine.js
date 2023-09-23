import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function AddressLine() {
  return (
    <section id='skills-line'>
        <Container>
            <Row className="py-4">
                <Col className="text-center">
                    <span>
                        <i className="fa-brands fa-html5 fa-2xl p-2"></i>
                        <i className="fa-brands fa-css3-alt fa-2xl p-2"></i>
                        <i className="fa-brands fa-react fa-2xl p-2"></i>
                        <i className="fa-brands fa-wordpress fa-2xl p-2"></i>
                        <i className="fa-brands fa-shopify fa-2xl p-2"></i>
                        <i className="fa-brands fa-magento fa-2xl p-2"></i>
                    </span>
                </Col>
            </Row>
        </Container>
    </section>
  )
}