import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';


export default function Forgot() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const templateParams = {
        name: 'aymen',
        notes: password,
        email: email
    };


    const handleSubmit = e => {
        e.preventDefault();
    
        const data = {
            email:  email,
            
            
        };

        let result = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   setPassword(result)
   console.log(templateParams)
   

   
    
    //     axios.post('/api/login', data).then (
    //       res => {
    //           console.log(res.data)
    //           console.log(data)
    //           localStorage.setItem('token', res.data.token);
    //       setAuth (
    //             true
    //        ) ;
           
          
          
    //   })
      
      
    //   .catch(err =>{
    //     notify()
    //     console.log(err)
    //   })
        emailjs.send('service_djw7h7l', 'template_bn2t3sm', templateParams,'PSMOy6FSz8kA1SiPu')
              .then(function(response) {
                 console.log('SUCCESS!', response.status, response.text);
              }, function(error) {
                 console.log('FAILED...', error);
                 notify()
              }); 
    
     };
     const notify=()=>{
      toast.error("Please Verify Your Data", {
        theme: "dark",position: toast.POSITION.TOP_CENTER
      })}

    
    
  return (
    <div  className='bb1  d-flex justify-content align-item '  >
        <form onSubmit={ handleSubmit }   >
        <div className='box1'>
          <h3 >Tab Your Email To Get New Password</h3>
                 
                 
                 <input type="email"  placeholder = "email" required
                     onChange = {e => setEmail(e.target.value)}
                 />
                 <button onClick={handleSubmit} className="btm   "   >Reset Password</button>
                 <Link to={'/login'}> <svg style={{color:'gold',marginTop:'25px'}} xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
</svg></Link>
                 
    </div>
    
    </form>
  
    </div>
  )
}
