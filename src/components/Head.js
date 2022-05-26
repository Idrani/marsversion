import React from "react";
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import { CgMenuMotion } from 'react-icons/cg';
import logo from './logoo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Content from "./Content";
import { Router } from "react-router-dom";


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
      <div >
        
     <>
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
             <Nav.Link as={Link} to="/" onMouseOver={MouseOn}  onMouseOut={MouseOver} className="forh"  >Home</Nav.Link>
             <Nav.Link as={Link} to="/about" onMouseOver={MouseOn}  onMouseOut={MouseOver} className="forh" href="#">About</Nav.Link>
             <Nav.Link as={Link} to="/help" onMouseOver={MouseOn}  onMouseOut={MouseOver} className="forh" href="#"> Help</Nav.Link>
             <Nav.Link as={Link} to="/contact" onMouseOver={MouseOn}  onMouseOut={MouseOver} className="forh" href="#"> Contact</Nav.Link>
           </Nav>
         </Navbar.Collapse>
         </Container>
       </Navbar>
       </>
       <div>
         
        
         
       </div>
      
       </div>
      
      
     );
}
 
export default Head;