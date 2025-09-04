import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'

function AppMenu(){
  const auth = useSelector(s => s.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => { dispatch(logout()); navigate('/login') }

  return (
    <Navbar bg="light" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Ejemplo Redux</Navbar.Brand>
        <Nav>
          {auth.user ? (
            <>
              <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/population">Population</Nav.Link>
              <Nav.Link as={Link} to="/countries">Countries</Nav.Link>
              <Nav.Link as={Link} to="/age">Age</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppMenu
