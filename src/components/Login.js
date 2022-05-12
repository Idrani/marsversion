import React,{SyntheticEvent, useState} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Side } from './side';
import { Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';





toast.configure()
const Login = () =>{
  const [auth,setAuth]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [name,setName]=useState();
  const [status, setStatus] = useState(false);


  const handleSubmit = e => {
    e.preventDefault();

    const data = {
        email:  email,
        password: password,
        name:name
        
    };

    axios.post('/api/login', data).then (
      res => {
          console.log(res.data)
          console.log(data)
          localStorage.setItem('token', res.data.token);
      setAuth (
            true
       ) ;
       
      
      
  })
  
  
  .catch(err =>{
    notify()
    console.log(err)
  })
  

};

const notify=()=>{
  toast.error("Please Verify Your Data", {
    theme: "dark",position: toast.POSITION.TOP_CENTER
  })
 
}
if (auth) {
 return  <Redirect
             to={{
             pathname: `/dashboard${name}`,
            
             
             
           }}
          
         />
        }
    
     


  return(
    
    <div className='all'>
    <div className='bb  d-flex justify-content align-item '  >
    
    <form onSubmit={ handleSubmit } className='box'  >

                

                 <h1 >Login</h1>
                 
                 
                 <input type="text"  placeholder = "Name" 
                     onChange = {e => setName(e.target.value)}
                 />
                 
                 
                
                 <input type="email"  placeholder = "Email" 
                     onChange = {e => setEmail(e.target.value)}
                     
                 />
                 
                
  
                 
                 
                 <input type="password" placeholder = "Password" 
                     onChange = {e => setPassword(e.target.value)}
                 />
                
                  
                <button className="btm   "   >Login</button>
                 
                 <p className="forgot-password text-right">
                   <Link to={'/forgot'}>Forgot password?</Link>
                 </p>
  
                 
              </form>
              
    </div>
    </div>
  )
};
export default Login;