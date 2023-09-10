import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function AppFooter() {
  return (
    <div>
        <Container className="d-flex flex-column align-items-center">

            <Row className="py-2">
              <Col><a href='/about'className="footer-link"><div>About</div></a></Col>
              <Col><a href='/contact' className="footer-link"><div >Contact</div></a></Col>
            </Row>
            <Row className="py-2">
              <Col className="m-1"><a href='#'><i class="fa-brands fa-facebook-f"></i></a></Col>
              <Col className="m-1"><a href='#'><i class="fa-brands fa-instagram"></i></a></Col>
              <Col className="m-1"><a href='#'><i class="fa-brands fa-twitter"></i></a></Col>
              <Col className="m-1"><a href='#'><i class="fa-brands fa-tiktok"></i></a></Col>
            </Row>
            <Row>© {new Date().getFullYear()} --Template--. All rights reserved.</Row>
        </Container>
    </div>
  )
}