import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/css/style.scss'
function Header() {
  return (
    <header>
        <div className="container py-3">
            <Navbar expand="lg">
                <Navbar.Brand href="#home" className='logo'><span>Const</span>ructo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="#home" className='nav-link'>Accueil</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>À Propos</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>Projets</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>Blog</Nav.Link>
                  <Nav.Link href="#link" className='nav-link'>Contactez-Nous</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
  )
}

export default Header