import React from "react";
import { Container, Navbar, Nav, NavLink, Image } from 'react-bootstrap'
import Logo from "../assets/Logo.svg"

const menuData = [
  {
      path:'#about',
      name: 'About Me'
  },
  {
      path:'#services',
      name: 'Services'
  },
  {
      path:'#portfolio',
      name: 'Portfolio'
  },
  {
    path: '#contact',
    name: 'Contact Me'
},
]


export default function AppNavbar() {
  return (
    <header id='header-wrapper'>
    <div className="d-flex justify-content-center">
      <Navbar.Brand href='/' className="mx-auto d-block my-3">
        {/* LOGO */}
        <Image
          src={Logo}
          className="w-100"
          alt="Maroun Grey Logo"
          fluid
        />
      </Navbar.Brand>
    </div>

    <div className="text-center" id="header-navbar">
      {
        menuData.map((item) => (
          <NavLink className="d-inline-block" href={item.path} key={item.name}>
            <div className="list_item fh-link px-2 py-1">{item.name}</div>
          </NavLink>
        ))
      }
    </div>
  </header>
    );
}