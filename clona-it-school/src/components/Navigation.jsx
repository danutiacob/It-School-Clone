import React from 'react'
import "../Styles/Navigation.css"

// Bootstrap Components
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'

// Site logo
import Logo from "../assets/itschool-logo.png"


export default function Navigation() {
  return (
    <div>
          <Navbar className='bg'  variant="dark" expand="lg" fixd-top>
              <Container>
                  <Navbar.Brand href="#home">
                    <img className='logo' src={Logo} />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto">
                        <Nav.Link>
                            <Link className='text-decoration-none hoverEfect' to="/"> <b> ACASA </b> </Link>
                        </Nav.Link>
                        <Nav.Link>
                <Link className='text-decoration-none hoverEfect' to="/curses" > <b> CURSURI ONLINE </b> </Link>
                        </Nav.Link>
                          <Dropdown>
                <Dropdown.Toggle className='dropdown hoverEfect'>
                                <b> DESPRE NOI </b>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <Link className='text-decoration-none text-dark' to="/itschool" > <b> IT SCHOOL </b> </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link className='text-decoration-none text-dark' to="/about" > <b> DESPRE NOI </b> </Link>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                          </Dropdown>
                          <Nav.Link>
                <Link className='text-decoration-none hoverEfect' to="/contact" > <b> CONTACT </b> </Link>
                          </Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    </div>
  )
}
