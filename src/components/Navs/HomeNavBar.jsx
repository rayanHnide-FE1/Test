import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const HomeNavBar =()=>{
    return(
        <>
        
   
<Navbar expand="lg" className=" bg-info">
      <Container>
        <Navbar.Brand href="#home">
        <Link  style={{textDecoration:"none",color:'black'}} to='/'>
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
            <Link  style={{textDecoration:"none",color:'black'}} to='/teachers'>
            Teachers
          </Link>
            </Nav.Link>
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </>
    )
}

export default HomeNavBar