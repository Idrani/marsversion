import React from 'react'
import Head from './Head'
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Container,Card,ListGroup,ListGroupItem ,Row ,Col,Button} from "react-bootstrap";
import bg from './bg.jpg'
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import aymen from './aymen.jpeg';
import adrani from './adrani.jpg'


import { BsTelephoneFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div >
      <Head/>
      <div  >
      <div class="card" style={{textAlign:'center'}} >
  <h4 class="card-header">Contact Us</h4>
  <div class="card-bodyy" >
 

 {/* -------------- */}
 <div class="card-group" style={{marginLeft:'20%'}}>
 
 <div className="parent" style={{float:'right'}}> 
<Card border="warning warning m-5"  style={{ width: '30rem' ,height:'25rem' ,borderRadius:'15px'}}> 
  
  <Card.Body >
      <></>
      <div style={{width:'30%',float:'left'}}>
      <img src={aymen} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
      </div>
      <div style={{marginTop:'15px',height:'100px',width:'300px'}} >
      <h5 >Lassoued Aymen</h5>
    
    <h5  style={{color:'peru'}}>
      Back-End 
    </h5>
        {/* <li style={{listStyle:'none'}}>< BsLinkedin style={{width:'30%',marginTop:'10px',color:'blue'}}/>adrani-mohamed</li>
        <li style={{listStyle:'none'}}><BsTelephoneFill style={{width:'30%',marginTop:'10px'}}/></li>
        <li style={{listStyle:'none'}}><BsLinkedin style={{width:'30%',marginTop:'10px'}}/></li> */}

      </div>
      <div style={{margin:'30px'}}>
    
     
     <li style={{listStyle:'none'}}><div style={{width:'10%',height:'40px',float:'left'}}><GrLinkedin style={{width:'100%',height:'40px',color:'#0e76a8'}} /></div> </li>
     <h4 style={{width:'60%',height:'40px',float:'left',marginTop:'5px'}}>adrani mohamed</h4>
    
    </div>
    <br/>
    <div style={{margin:'30px'}}>
    
     
     <li style={{listStyle:'none'}}><div style={{width:'10%',height:'40px',float:'left'}}><MdEmail style={{width:'100%',height:'40px',color:'#0e76a8'}} /></div> </li>
     <h4 style={{width:'90%',height:'40px',float:'left',marginTop:'5px'}}>Idranimohamed2@gmail.com</h4>
    
    </div>
    <div style={{margin:'30px'}}>
    
     
     <li style={{listStyle:'none'}}><div style={{width:'10%',height:'40px',float:'left'}}><BsTelephone style={{width:'100%',height:'40px',color:'#0e76a8'}} /></div> </li>
     <h4 style={{width:'90%',height:'40px',float:'left',marginTop:'5px'}}>+216 96877652</h4>
    
    </div>
    
  </Card.Body>
</Card>
  </div> 

  <div className="parent" style={{float:'right'}}> 
<Card border="warning warning m-5"  style={{ width: '30rem' ,height:'25rem' ,borderRadius:'15px'}}> 
  
  <Card.Body >
      <></>
      <div style={{width:'30%',float:'left'}}>
      <img src={adrani} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
      </div>
      <div style={{marginTop:'15px',height:'100px',width:'300px'}} >
      <h5 >Idrani Mohamed</h5>
    
    <h5  style={{color:'peru'}}>
      Front-End
    </h5>
        {/* <li style={{listStyle:'none'}}>< BsLinkedin style={{width:'30%',marginTop:'10px',color:'blue'}}/>adrani-mohamed</li>
        <li style={{listStyle:'none'}}><BsTelephoneFill style={{width:'30%',marginTop:'10px'}}/></li>
        <li style={{listStyle:'none'}}><BsLinkedin style={{width:'30%',marginTop:'10px'}}/></li> */}

      </div>
      <div style={{margin:'30px'}}>
    
     
     <li style={{listStyle:'none'}}><div style={{width:'10%',height:'40px',float:'left'}}><GrLinkedin style={{width:'100%',height:'40px',color:'#0e76a8'}} /></div> </li>
     <h4 style={{width:'60%',height:'40px',float:'left',marginTop:'5px'}}>adrani mohamed</h4>
    
    </div>
    <br/>
    <div style={{margin:'30px'}}>
    
     
     <li style={{listStyle:'none'}}><div style={{width:'10%',height:'40px',float:'left'}}><MdEmail style={{width:'100%',height:'40px',color:'#0e76a8'}} /></div> </li>
     <h4 style={{width:'90%',height:'40px',float:'left',marginTop:'5px'}}>Idranimohamed2@gmail.com</h4>
    
    </div>
    <div style={{margin:'30px'}}>
    
     
     <li style={{listStyle:'none'}}><div style={{width:'10%',height:'40px',float:'left'}}><BsTelephone style={{width:'100%',height:'40px',color:'#0e76a8'}} /></div> </li>
     <h4 style={{width:'90%',height:'40px',float:'left',marginTop:'5px'}}>+216 96877652</h4>
    
    </div>
    
  </Card.Body>
</Card>
  </div> 
 
 
</div>
 {/* -------------- */}


   <Link to={'/'}> <a style={{marginBottom:'140px',marginTop:'50px'}}  class="btn btn-warning">Back</a></Link>
  </div>
</div>

      </div>
    </div>
  )
}

export default Contact;