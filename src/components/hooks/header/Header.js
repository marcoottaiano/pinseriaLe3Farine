import { Navbar, Nav, Container, Col, Image } from 'react-bootstrap'
import logo from '../../../assets/images/logo.jpg'
import { useNavigate } from 'react-router-dom'
import SCREENS from '../../../route/routes'

function Header() {

  return (
    <Navbar className="navbar" sticky="top" expand='md'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            className="logo"
            alt="Pinsera le 3 Farine"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
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