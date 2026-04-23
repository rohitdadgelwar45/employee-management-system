import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>

          {/* Fix 1: Use as={Link} */}
          <Navbar.Brand as={Link} to="/">
            <strong>Employee Management System</strong>
          </Navbar.Brand>

          <Nav>
            {/* Fix 2: Correct as syntax */}
            <Nav.Link as={Link} to="/" className='nav-link'>
              Employees
            </Nav.Link>

            <Nav.Link as={Link} to="/employee" className='nav-link'>
              Post Employee
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>
  )
}

export default Header