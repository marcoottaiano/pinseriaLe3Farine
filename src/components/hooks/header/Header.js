import { Navbar, Nav, Container, Col, Image } from 'react-bootstrap'
import './header.scss'
import logo from '../../../assets/images/logo.jpg'
import { useNavigate } from 'react-router-dom'
import SCREENS from '../../../route/routes'

function Header() {

  return (
    <Navbar bg='dark' className="position-absolute w-100 bg-transparent" sticky="top" expand='md'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top rounded-circle"
            alt="Pinsera le 3 Farine"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' style={{ color: 'white' }} />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="me-auto">
            <Nav.Link href={SCREENS.home} className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#link">Menú</Nav.Link>
            <Nav.Link href="#link">Aziende</Nav.Link>
            <Nav.Link href="#link">Chi siamo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header