import { Link } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const HomeNavBar =()=>{
    return(
        <>
        
   
        {[ 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" p-4 mb-3">
          <Container fluid>
            <Navbar.Brand href="#" style={{fontWeight:'bold'}} className="text-white">Learner</Navbar.Brand>
            <Navbar.Toggle   />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className='bg-dark'
            >
              <Offcanvas.Header className="bg-light" closeButton>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center  flex-grow-1 pe-2 pt-2">
                  <Link to='/'>
                  <Nav.Link className="text-white pe-5" href="#action1">Home</Nav.Link>
                  </Link>
                  <Link to='news'>
                  <Nav.Link href="#action1" className="text-white pe-5">News</Nav.Link>
                  </Link>
                  <Link to='about-us'><Nav.Link href="#action1" className="text-white pe-5"> About  </Nav.Link></Link>
            
                </Nav>
                <Form className="d-flex">
                  <Button variant="primary text-white">ENROLL NOW</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </>
    )
}

export default HomeNavBar