import React from 'react';
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function MouseOver(event) {
    event.target.style.background = 'transparent';
    event.target.style.color= '#fff';
  }
  function MouseOn(event) {
    event.target.style.background = '#ffcc00';
    event.target.style.color= 'black';
  }
  

export default function Intro() {
    
    const history = useHistory();
  return (
      <div >
   
       <content  >
        

       <div className="container-fluid  w-75 " style={{ marginleft:'150px', marginTop:'100px',color:'black'}} >
           <div className="cont1 align-items: center p-5">
               <h1>Sign Your Production Order</h1>
           </div>
           <div className="cont2 " >
               <h1>Check Your Documents Wherever You Are</h1>
           </div>

           
         
       
        </div>
        <div className="button" >
        <div className="forh2" style={{ display: "flex", justifyContent: "center", marginTop:'200px'}}>
        <Link to="/login"><button size="lg" onMouseOver={MouseOver}  onMouseOut={MouseOn} type="button" class="btn btn-warning btn-lg w-100 "  >Log In</button></Link>
        
        
        
        </div>
        </div> 
     </content>
     </div>
       
  )
}
