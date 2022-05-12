import React from "react";
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import { CgMenuMotion } from 'react-icons/cg';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function MouseOver(event) {
  event.target.style.background = 'transparent';
  event.target.style.color= '#fff';
}
function MouseOn(event) {
  event.target.style.background = '#ffcc00';
  event.target.style.color= 'black';
}

const Head = () => {
    return ( 
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  className="color-nav">
         <Container>
         <Navbar.Brand href="/"><img src={logo } width="150px" /></Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{backgroundColor:'gold'}} >
         <CgMenuMotion  style={{color:'white',height:'25px',width:'40px'}}/>
         </Navbar.Toggle>
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
            
            
           </Nav>
           <Nav    >
             <Nav.Link exact to="/" onMouseOver={MouseOn}  onMouseOut={MouseOver} className="forh"  >Home</Nav.Link>
             <Nav.Link onMouseOver={MouseOn}  onMouseOut={MouseOver} className="forh" href="#">About</Nav.Link>
             <Nav.Link onMouseOver={MouseOn}  onMouseOut={MouseOver} className="forh" href="#"> Help</Nav.Link>
             <Nav.Link onMouseOver={MouseOn}  onMouseOut={MouseOver} className="forh" href="#"> Contact</Nav.Link>
           </Nav>
         </Navbar.Collapse>
         </Container>
       </Navbar>
       
      
      
     );
}
 
export default Head;