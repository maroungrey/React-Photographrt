import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function AppFooter() {
  return (
    <footer>
        <Container className="d-flex flex-column align-items-center">
            <Row className='py-1'>© {new Date().getFullYear()} MarounGrey. All rights reserved.</Row>
        </Container>
    </footer>
  )
}