import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/css/style.scss'
function Header() {
  return (
    <header>
        <div className="container header py-3">
            <Navbar expand="lg">
                <Navbar.Brand href="/" className='logo'><span>Const</span>ructo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="/" className='nav-link'>Accueil</Nav.Link>
                  <Nav.Link href="/about" className='nav-link'>À Propos</Nav.Link>
                  <Nav.Link href="/services" className='nav-link'>Services</Nav.Link>
                  <Nav.Link href="/projects" className='nav-link'>Projets</Nav.Link>
                  <Nav.Link href="/contactUs" className='nav-link'>Contactez-Nous</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
  )
}

export default Header