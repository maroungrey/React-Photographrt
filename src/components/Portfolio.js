import React from 'react';
import { Container, Button } from 'react-bootstrap';
import a1 from '../assets/a1.webp';
import a2 from '../assets/a2.webp';
import a3 from '../assets/a3.webp';
import a4 from '../assets/a4.webp';
import a5 from '../assets/a5.webp';
import a6 from '../assets/a6.webp';
import b1 from '../assets/b1.webp';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.webp';
import b4 from '../assets/b4.webp';
import b5 from '../assets/b5.webp';
import b6 from '../assets/b6.webp';


export default function Portfolio() {
  return (
    <div>
        <section id='portfolio'>
            <Container className='text-center'>
                <h1 className='py-4'>Portfolio</h1>
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                        src={b1}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Boat on Calm Water"
                        />

                        <img
                        src={a1}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={a2}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Mountains in the Clouds"
                        />

                        <img
                        src={b2}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Boat on Calm Water"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={b3}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Waves at Sea"
                        />

                        <img
                        src={a3}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Yosemite National Park"
                        />
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                        src={b4}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Boat on Calm Water"
                        />

                        <img
                        src={a4}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={a5}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Mountains in the Clouds"
                        />

                        <img
                        src={b5}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Boat on Calm Water"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={b6}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Waves at Sea"
                        />

                        <img
                        src={a6}
                        class="w-100 shadow-1-strong mb-4"
                        alt="Yosemite National Park"
                        />
                        
                    </div>
                </div>
                <a href='https://www.instagram.com/'><Button variant="dark">See more</Button></a>
            </Container>
        </section>
    </div>
  )
}
