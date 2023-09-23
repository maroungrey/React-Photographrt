import React from 'react';
import { Container, Button } from 'react-bootstrap';
import pearl from '../assets/pearl.png';
import panoplie from '../assets/panoplie.png';
import purium from '../assets/purium.png';
import eargasm from '../assets/eargasm.png';
import hairsalon from '../assets/hairsalon.png';
import trevor from '../assets/trevor.png';


export default function Portfolio() {
  return (
        <section id='portfolio'>
            <Container className='text-center'>
            <div className='text-center py-3'>
                <h1 className='section-title' >Portfolio</h1>
                <p className='section-subtitle'>My Recent Projects</p>
            </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        
                        <div className='position-relative portfolio-card-wrap mb-4'>
                            <a href='https://benevolent-macaron-9f152d.netlify.app/' target='_blank'>
                                <img
                                src={pearl}
                                className="w-100 portfolio-card"
                                alt="cafe website template"
                                />
                                <div class="overlay">
                                    <div class="text">Hello World</div>
                                </div>
                            </a>
                        </div>


                        <div className='position-relative portfolio-card-wrap mb-4'>
                            <a href='https://eargasm.com/' target='_blank'>
                                <img
                                src={eargasm}
                                className="w-100 portfolio-card"
                                alt="earplugs store website"
                                />
                                <div class="overlay">
                                    <div class="text">Hello World</div>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={hairsalon}
                        className="w-100 shadow-1-strong mb-4"
                        alt="hairsalon website template"
                        />

                        <img
                        src={purium}
                        className="w-100 shadow-1-strong mb-4"
                        alt="food supplements store website"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={panoplie}
                        className="w-100 shadow-1-strong mb-4"
                        alt="furniture store website"
                        />

                        <img
                        src={trevor}
                        className="w-100 shadow-1-strong mb-4"
                        alt="Yosemite National Park"
                        />
                        
                    </div>
                </div>
            </Container>
        </section>
  )
}
