import React from 'react'

import {
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form
} from 'react-bootstrap'

import { Link } from 'react-router-dom'

import Noscript from '../Noscript'

import Logo from '../logo.png'

import cxenoj from '../Okazejoj'

export default class Navbaro extends React.Component {
  constructor(props) {
    super(props)
    this.fiksuLingvon = props.fiksuLingvon
  }
  traktuElekton(k) {
    this.fiksuLingvon(k)
  }
  render() {
    return (
      <Navbar bg='light' expand='lg' variant='light'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>{cxenoj.esperantujo}</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto' />
            <Nav onSelect={k => this.traktuElekton(k)}>
              <NavDropdown
                title={cxenoj.okazejo}
                id='basic-nav-dropdown'
                className='jsonly'
              >
                <NavDropdown.Item eventKey='eo'>Esperanto</NavDropdown.Item>
                <NavDropdown.Item eventKey='en'>English</NavDropdown.Item>
                <NavDropdown.Item eventKey='fr'>Français</NavDropdown.Item>
              </NavDropdown>
              <Link to='/' className='nav-link'>
                {cxenoj.hejmo}
              </Link>
              <Link to='/pri' className='nav-link'>
                {cxenoj.pri}
              </Link>
              <Link to='/kial' className='nav-link'>
                {cxenoj.kial}
              </Link>
              <Form inline>
                <a
                  href='https://lernu.net'
                  className='btn btn-depth btn-primary'
                  target='_blank'
                  style={{
                    marginLeft: '1.1rem'
                  }}
                >
                  {cxenoj.lerni}
                </a>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
