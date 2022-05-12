import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Validation(props) {

const {id}= useLocation().state.stateparam;
const {taille}= useLocation().state.table;



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
        "NumOF": id,
        "NumV": 0,
        "valide": 0,
        "date1": "2022-04-12",
        "date2": "2022-04-12",
        "date3": "2022-04-12",
        "date4": "2022-04-12",
        "date5": "2022-04-12"
           
      }
    )
    const [tableValid,setTableValid]=useState([   ])
    const [lenght,setLenght]=useState()

    const getPiece=()=>{
      fetch('/List_OF_Pieces').then(resp=>resp.json())
      .then(resp=>resp.map((piece)=>{
           if(piece.NumOF==id){
              tableValid.push(piece)
            setTableValid([...tableValid])
            
            if(tableValid.length==0){
                
              setDisable1(true)
              
            }
           
            
          
        }
      }))
  
  };
    
    const getPieces=()=>{
      fetch('/validationOF').then(resp=>resp.json())
      
       .then(resp=>resp.map((val)=>{

            if(val.NumOF==id){
             
             setDisnum(val.NumV)
             
              if(disnum===1){
                setDate(val.date1);
                
             }
             else if(disnum===2){
              setDate(val.date1);
              setDate1(val.date2);
               
             }
             else if(disnum===3){
              setDate(val.date1);
              setDate1(val.date2);
              setDate2(val.date3);

               
             }
             else if(disnum===4){
              setDate(val.date1);
              setDate1(val.date2);
              setDate2(val.date3);
              setDate3(val.date4);

               
             }
             else if(disnum===5){
              setDate(val.date1);
              setDate1(val.date2);
              setDate2(val.date3);
              setDate3(val.date4);
              setDate4(val.date5);

               
             }
             
          
         }
       }))
      
  
  }
      



    useEffect(() => {
      getPiece();
      
      
     
     
              
             
             
  
         
      
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
      let dt = new Date().toLocaleDateString();
      let tt= new Date().toLocaleTimeString();
            setDisable1(true)
            setDisable2(false)
            setEtat(prevState => ({
              prevState,
              NumV: 1
          }));
          const someData = {
            "NumOF": id,
            "NumV": 1,
            "valide": 0,
            "date1": dt+'||'+tt,
            "date2": "2022-04-12",
            "date3": "2022-04-12",
            "date4": "2022-04-12",
            "date5": "2022-04-12"
           }
            
               
            
           
             
              
            //  emailjs.send('service_djw7h7l', 'template_u70xzxi', templateParams1,'PSMOy6FSz8kA1SiPu')
            //  .then(function(response) {
            //     console.log('SUCCESS!', response.status, response.text);
            //  }, function(error) {
            //     console.log('FAILED...', error);
            //  }); 
            document.getElementById('v1').style.backgroundColor="#9dff9d"
            
             

              fetch('/validationOF/' + id ,{
               method:"PUT",
               headers:{'Content-type':"application/json"},
               body:JSON.stringify(
                  {
                 "NumOF": someData.NumOF,
                 "NumV": 1,
                 "valide": 0,
                 "date1": dt+'||'+tt,
                "date2": "2022-04-12",
                "date3": "2022-04-12",
                 "date4": "2022-04-12",
                "date5": "2022-04-12"
                })
               
           }).then(resp=>resp.json())
           .then(resp=>{setEtat(resp) })
         
             console.log(dt)
    }
    
           
    

        function sendEmail2(e){
        
          let dt = new Date().toLocaleDateString();
          let tt= new Date().toLocaleTimeString();
                 setDisable2(true)
                 setDisable3(false)
                 const someData = {
                  "NumOF": id,
                  "NumV": 1,
                  "valide": 0,
                  "date1": "2022-04-12",
                  "date2": "2022-04-12",
                  "date3": "2022-04-12",
                  "date4": "2022-04-12",
                  "date5": "2022-04-12"
                 }
                 fetch('/validationOF/' + id ,{
                  method:"PUT",
                  headers:{'Content-type':"application/json"},
                  body:JSON.stringify({
                   "NumOF": someData.NumOF,
                   "NumV": 2,
                   "valide": 0,
                   "date1": cdate,
                  "date2": dt+'||'+tt,
                  "date3": "2022-04-12",
                   "date4": "2022-04-12",
                  "date5": "2022-04-12"
                  })
              }).then(resp=>resp.json())
              .then(resp=>{setEtat(resp) })
                    
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
          let dt = new Date().toLocaleDateString();
          let tt= new Date().toLocaleTimeString();
                setDisable3(true)
                setDisable4(false)
                const someData = {
                  "NumOF": id,
                  "NumV": 1,
                  "valide": 0,
                  "date1": "2022-04-12",
                  "date2": "2022-04-12",
                  "date3": "2022-04-12",
                  "date4": "2022-04-12",
                  "date5": "2022-04-12"
                 }
                fetch('/validationOF/' + id ,{
                  method:"PUT",
                  headers:{'Content-type':"application/json"},
                  body:JSON.stringify({
                   "NumOF": someData.NumOF,
                   "NumV": 3,
                   "valide": 0,
                   "date1": cdate,
                  "date2": cdate1,
                  "date3": dt+'||'+tt,
                   "date4": "2022-04-12",
                  "date5": "2022-04-12"
                  })
              }).then(resp=>resp.json())
              .then(resp=>{setEtat(resp) })
                   
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
          let dt = new Date().toLocaleDateString();
          let tt= new Date().toLocaleTimeString();
                setDisable4(true)
                setDisable5(false)
                const someData = {
                  "NumOF": id,
                  "NumV": 1,
                  "valide": 0,
                  "date1": "2022-04-12",
                  "date2": "2022-04-12",
                  "date3": "2022-04-12",
                  "date4": "2022-04-12",
                  "date5": "2022-04-12"
                 }
                fetch('/validationOF/' + id ,{
                  method:"PUT",
                  headers:{'Content-type':"application/json"},
                  body:JSON.stringify({
                   "NumOF": someData.NumOF,
                   "NumV": 4,
                   "valide": 0,
                   "date1": cdate,
                  "date2": cdate1,
                  "date3": cdate2,
                   "date4": dt+'||'+tt,
                  "date5": "2022-04-12"
                  })
              }).then(resp=>resp.json())
              .then(resp=>{setEtat(resp) })
                   
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
                let dt = new Date().toLocaleDateString();
                let tt= new Date().toLocaleTimeString();
                const someData = {
                  "NumOF": id,
                  "NumV": 1,
                  "valide": 0,
                  "date1": "2022-04-12",
                  "date2": "2022-04-12",
                  "date3": "2022-04-12",
                  "date4": "2022-04-12",
                  "date5": "2022-04-12"
                 }
                   console.log(disnum)
                   fetch('/validationOF/' + id ,{
                    method:"PUT",
                    headers:{'Content-type':"application/json"},
                    body:JSON.stringify({
                     "NumOF": someData.NumOF,
                     "NumV": 5,
                     "valide": 1,
                     "date1": cdate,
                    "date2": cdate1,
                    "date3": cdate2,
                     "date4": cdate3,
                    "date5": dt+'||'+tt
                    })
                }).then(resp=>resp.json())
                .then(resp=>{setEtat(resp) })
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
        <h1 className="mt-4 text-black">Production Orders  Validation {id}</h1>
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
      <MDBBtn   onClick={() => {
          document.getElementById('v1').style.backgroundColor="#FA5F55"
          
        }}  rounded className='mx-2' color='danger' >
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate}</h5>
          </td>
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
      <MDBBtn onClick={() => {
          document.getElementById('v2').style.backgroundColor="#FA5F55"
          
        }} rounded className='mx-2' color='danger'>
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate1}</h5>
          </td>
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
      <MDBBtn rounded className='mx-2' color='danger' onClick={() => {
          document.getElementById('v3').style.backgroundColor="#FA5F55"
          
        }}>
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate2}</h5>
          </td>
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
      <MDBBtn rounded className='mx-2' color='danger' onClick={() => {
          document.getElementById('v4').style.backgroundColor="#FA5F55"
          
        }}>
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate3}</h5>
          </td>
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
      <MDBBtn rounded className='mx-2' color='danger' onClick={() => {
          document.getElementById('v5').style.backgroundColor="#FA5F55"
          
        }}>
        Invalidate
      </MDBBtn>
          </td>
          <td><h5>{cdate4}</h5>
          </td>
        </tr>
      </tbody>

    </table>
    <h3 style={{textAlign:'right',color:'black'}}>{disnum}/5</h3>
  </div>
</div>
  )
}

export default Validation