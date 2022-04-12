import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Validation(props) {

const {id}= useLocation().state.stateparam;


const [cdate,setDate] = useState(); 
const [ctime,setTime] = useState(); 

const [cdate1,setDate1] = useState(); 
const [ctime1,setTime1] = useState(); 

const [cdate2,setDate2] = useState(); 
const [ctime2,setTime2] = useState(); 

const [cdate3,setDate3] = useState(); 
const [ctime3,setTime3] = useState(); 

const [cdate4,setDate4] = useState(); 
const [ctime4,setTime4] = useState(); 


const handelDate = () =>{
  let dt = new Date().toLocaleDateString();
  let tt= new Date().toLocaleTimeString();
  setTime(tt);
  setDate(dt);
}

const handelDate1 = () =>{
  let dt = new Date().toLocaleDateString();
  let tt= new Date().toLocaleTimeString();
  setTime1(tt);
  setDate1(dt);
}

const handelDate2 = () =>{
  let dt = new Date().toLocaleDateString();
  let tt= new Date().toLocaleTimeString();
  setTime2(tt);
  setDate2(dt);
}

const handelDate3 = () =>{
  let dt = new Date().toLocaleDateString();
  let tt= new Date().toLocaleTimeString();
  setTime3(tt);
  setDate3(dt);
}

const handelDate4 = () =>{
  let dt = new Date().toLocaleDateString();
  let tt= new Date().toLocaleTimeString();
  setTime4(tt);
  setDate4(dt);
}

    const numof=1
    const [disable1,setDisable1]=useState(false)
    const [disable2,setDisable2]=useState(true)
    const [disable3,setDisable3]=useState(true)
    const [disable4,setDisable4]=useState(true)
    const [disable5,setDisable5]=useState(true)
    const [disnum,setDisnum]=useState(0)
    const [etat,setEtat]=useState(
       {
        NumOF: id,
        dnum: 1,
        validation:0
      }
    )
    
    const getPieces=()=>{
      fetch('/validationOF').then(resp=>resp.json())
       .then(resp=>resp.map((val)=>{
            if(val.NumOF==id){
             
             setDisnum(val.NumV)
             if(disnum===0){
               setTime(val.date1)
             }
             else if(disnum===1){
              setTime(val.date1)
               setTime1(val.date2)
             }
             else if(disnum===2){
              setTime(val.date1)
              setTime1(val.date2)
               
             }
             
          
         }
       }))
      
  
  }
      



    useEffect(() => {
       
      getPieces();
          
              
             
             
  
         
      
        if(disnum===0){
          
       setDisable1(false)
       setDisable2(true)
       setDisable3(true)
       setDisable4(true)
       setDisable5(true)
       
     }
     else if(disnum===1){
       setDisable1(true)
       setDisable2(false)
       setDisable3(true)
       setDisable4(true)
       setDisable5(true)
       document.getElementById('v1').style.backgroundColor="#9dff9d"


     }
     else if(disnum===2){
      setDisable1(true)
      setDisable2(true)
      setDisable3(false)
      setDisable4(true)
      setDisable5(true)
       document.getElementById('v1').style.backgroundColor="#9dff9d"
       document.getElementById('v2').style.backgroundColor="#9dff9d"

    }
    else if(disnum===3){
      setDisable1(true)
      setDisable2(true)
      setDisable3(true)
      setDisable4(false)
      setDisable5(true)
       document.getElementById('v1').style.backgroundColor="#9dff9d"
       document.getElementById('v2').style.backgroundColor="#9dff9d"
       document.getElementById('v3').style.backgroundColor="#9dff9d"


    }
    else if(disnum===4){
      setDisable1(true)
      setDisable2(true)
      setDisable3(true)
      setDisable4(true)
      setDisable5(false)
       document.getElementById('v1').style.backgroundColor="#9dff9d"
       document.getElementById('v2').style.backgroundColor="#9dff9d"
       document.getElementById('v3').style.backgroundColor="#9dff9d"
       document.getElementById('v4').style.backgroundColor="#9dff9d"



    }
    else if(disnum===5){
      setDisable1(true)
      setDisable2(true)
      setDisable3(true)
      setDisable4(true)
      setDisable5(true)
       document.getElementById('v1').style.backgroundColor="#9dff9d"
       document.getElementById('v2').style.backgroundColor="#9dff9d"
       document.getElementById('v3').style.backgroundColor="#9dff9d"
       document.getElementById('v4').style.backgroundColor="#9dff9d"
       document.getElementById('v5').style.backgroundColor="#9dff9d"




    }

    });
  
   
    var templateParams1 = {
        name: 'aymen',
        notes: 'Check the app http://192.168.1.91:3000/ ',
        email: 'aymeenlassoued@gmail.com'
    };
    var templateParams2 = {
        name: 'adrani',
        notes: 'Check the app http://192.168.1.91:3000/',
        email: 'idranimohamed2@gmail.com'
    };
    var templateParams3 = {
        name: 'hamrouni',
        notes: 'Check the app http://192.168.1.91:3000/',
        email: 'mhamrouni270@gmail.com'
    };
    var templateParams4 = {
        name: 'moatez',
        notes: 'Check the app http://192.168.1.91:3000/',
        email: 'Boukamchamoatez@gmail.com'
    };
    var templateParams = {
        name: 'aymen',
        notes: 'Check the app http://192.168.1.91:3000/',
        email: 'aymeenlassoued@gmail.com'
    };

     
    function sendEmail1(e){
            
            setDisable1(true)
            setDisable2(false)
            setDisnum(1)
            
            // setDisnum(1)
            // axios.PATCH('http://localhost:8000/validation/'+ numof,etat)
              .then((etat)=>{
                console.log(etat)
              })
              .catch((err)=>{
                console.log(err)
              })
             
              
            //  emailjs.send('service_djw7h7l', 'template_u70xzxi', templateParams1,'PSMOy6FSz8kA1SiPu')
            //  .then(function(response) {
            //     console.log('SUCCESS!', response.status, response.text);
            //  }, function(error) {
            //     console.log('FAILED...', error);
            //  }); 
            document.getElementById('v1').style.backgroundColor="#9dff9d"
         
         
             
    }
           
           
 

        function sendEmail2(e){
        
            
                 setDisable2(true)
                 setDisable3(false)
                 setDisnum(2)
                    
                    console.log(disnum)
                    //  emailjs.send('service_djw7h7l', 'template_u70xzxi', templateParams2,'PSMOy6FSz8kA1SiPu')
                    //  .then(function(response) {
                    //     console.log('SUCCESS!', response.status, response.text);
                    //  }, function(error) {
                    //     console.log('FAILED...', error);
                    //  }); 
                    document.getElementById('v2').style.backgroundColor="#9dff9d"
                 
                }
    
        function sendEmail3(e){
           
                setDisable3(true)
                setDisable4(false)
                setDisnum(3)
                   
                   console.log(disnum)
                    // emailjs.send('service_djw7h7l', 'template_u70xzxi', templateParams3,'PSMOy6FSz8kA1SiPu')
                    // .then(function(response) {
                    //    console.log('SUCCESS!', response.status, response.text);
                    // }, function(error) {
                    //    console.log('FAILED...', error);
                    // }); 
                document.getElementById('v3').style.backgroundColor="#9dff9d"
                
               }
    
         function sendEmail4(e){
            
                setDisable4(true)
                setDisable5(false)
                setDisnum(4)
                   
                   console.log(disnum)
                //    emailjs.send('service_djw7h7l', 'template_u70xzxi', templateParams4,'PSMOy6FSz8kA1SiPu')
                //    .then(function(response) {
                //       console.log('SUCCESS!', response.status, response.text);
                //    }, function(error) {
                //       console.log('FAILED...', error);
                //    }); 
                document.getElementById('v4').style.backgroundColor="#9dff9d"
                
               }
    
         function sendEmail5(e){
            
                setDisable5(true)
                
                  
                   console.log(disnum)
                   setDisnum(5)
                //    emailjs.send('service_djw7h7l', 'template_u70xzxi', templateParams,'PSMOy6FSz8kA1SiPu')
                //    .then(function(response) {
                //       console.log('SUCCESS!', response.status, response.text);
                //    }, function(error) {
                //       console.log('FAILED...', error);
                //    }); 
                document.getElementById('v5').style.backgroundColor="#9dff9d"
                
               }
              
               
               
  return (
  
   
    <div class="container my-5" >
        <h1 className="mt-4 text-black">Production Orders  Validation {etat.NumOF}</h1>
        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                            <li className="breadcrumb-item active"><a href="/dashboard/PO">PO</a></li>
                            <li className="breadcrumb-item active"><a href={`/dashbord/PO/OF${id}`}>OF</a></li>
                        </ol>
  <div class="shadow-4 rounded-5 overflow-hidden" style={{marginTop:'100px'}}>
    <table class="table align-middle mb-0 bg-white">
      
      <thead class="bg-light">
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Actions</th>
          <th>Validation Date</th>
        </tr>
      </thead>
      <tbody>
        <tr id="v1">
          <td >
            <div class="d-flex align-items-center">
             
              <div class="ms-3">
                <p class="fw-bold mb-1" >Demandeur</p>
                <p class="text-muted mb-0">john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-bold mb-1" >Demandeur</p>
            
          </td>
          <td>
          <MDBBtn rounded className='mx-2' color='success'  onClick={() => {
          handelDate();
          if(disnum==0){
            sendEmail1();
          }
          
        }}  disabled={disable1}>
        Validate
      </MDBBtn>
      <MDBBtn rounded className='mx-2' color='danger'>
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate}</h5>
          <h5>{ctime}</h5></td>
        </tr>
        <tr id="v2">
          <td >
            <div class="d-flex align-items-center">
             
              <div class="ms-3">
                <p class="fw-bold mb-1">Chef de projet</p>
                <p class="text-muted mb-0">alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-bold mb-1" >Chef de projet</p>
            
          </td>
          
          <td>
          <MDBBtn rounded className='mx-2' color='success'  onClick={() => {
          handelDate1();
          if(disnum==1){
            sendEmail2();
          }
          
        }}  disabled={disable2}>
        Validate
      </MDBBtn>
      <MDBBtn rounded className='mx-2' color='danger'>
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate1}</h5>
          <h5>{ctime1}</h5></td>
        </tr >
        <tr id="v3">
          <td>
            <div class="d-flex align-items-center">
             
              <div class="ms-3">
                <p class="fw-bold mb-1">Resp. validation mécanique</p>
                <p class="text-muted mb-0">kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-bold mb-1" >Resp. validation mécanique</p>
            
          </td>
          
          <td>
          <MDBBtn rounded className='mx-2' color='success'  onClick={() => {
          handelDate2();
          if(disnum==2){
            sendEmail3();
          }
          
        }}  disabled={disable3}>
        Validate
      </MDBBtn>
      <MDBBtn rounded className='mx-2' color='danger'>
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate2}</h5>
          <h5>{ctime2}</h5></td>
        </tr>


        <tr id="v4">
          <td>
            <div class="d-flex align-items-center">
             
              <div class="ms-3">
                <p class="fw-bold mb-1">Resp. Production</p>
                <p class="text-muted mb-0">kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-bold mb-1" >Resp. Production</p>
            
          </td>
          
          <td>
          <MDBBtn rounded className='mx-2' color='success'   onClick={() => {
          handelDate3();
          if(disnum==3){
            sendEmail4();
          }
          
        }}  disabled={disable4}>
        Validate
      </MDBBtn>
      <MDBBtn rounded className='mx-2' color='danger'>
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate3}</h5>
          <h5>{ctime3}</h5></td>
        </tr>


        <tr id="v5">
          <td>
            <div class="d-flex align-items-center">
             
              <div class="ms-3">
                <p class="fw-bold mb-1" >Chef atelier</p>
                <p class="text-muted mb-0">kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-bold mb-1" >Chef atelier</p>
            
          </td>
          
          <td>
          <MDBBtn rounded className='mx-2' color='success'  onClick={() => {
          handelDate4();
          if(disnum==4){
            sendEmail5();
          }
          
        }}  disabled={disable5} >
        Validate
      </MDBBtn>
      <MDBBtn rounded className='mx-2' color='danger'>
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate4}</h5>
          <h5>{ctime4}</h5></td>
        </tr>
      </tbody>

    </table>
    <h3 style={{textAlign:'right',color:'black'}}>{disnum}/5</h3>
  </div>
</div>
  )
}

export default Validation