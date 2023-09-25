import React from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'

const servicesData = [
  {
      id: 1,
      icon: "fa-solid fa-table",
      title: 'Web Design',
      description: "Crafting stunning, user-friendly websites tailored to your brand's unique needs and goals",
      color: "#dbdbdb"
  },
  {
      id: 2,
      icon: "fa-solid fa-laptop",
      title: 'Web Development',
      description: "Building robust backends and seamless front-ends to bring your custom digital products to life.",
      color: "#dbdbdb"
  },
  {
      id: 3,
      icon: "fa-solid fa-magnifying-glass",
      title: 'SEO Marketing',
      description: "Optimizing your website to boost visibility, organic traffic, and conversions.",
      color: "#dbdbdb"
  },
  {
      id: 4,
      icon: "fa-solid fa-image",
      title: 'Copywriting',
      description: "Producing compelling copy that informs, engages, and convinces your audience to take action.",
      color: "#dbdbdb"
  }
]

export default function Services() {
  return (
    <section id='#services'>   
        <div className='text-center pt-5'>
          <h1 className='section-title'>Services</h1>
          <p className='section-subtitle'>What do I do</p>
        </div>

        <div id='services-bg'>
        <Container className='pb-5'>
            <Row className='py-5'>
                {
                    servicesData.map(services => {
                        return (
                            <Col sm={12} lg={6} className='px-4' key={services.id}>
                                <div className='d-flex justify-content-center m-2 services-card p-4' style={{backgroundColor: services.color}}>
                                  <div className='d-flex justify-content-center services-icon'>
                                    <i className={services.icon + ' align-items-center d-flex'}></i>
                                  </div>
                                  <div >
                                    <h5 className='services-title'>{services.title}</h5>
                                    <p>{services.description}</p>
                                  </div>  
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
          </Container>
        </div>
    </section>
  )
}
