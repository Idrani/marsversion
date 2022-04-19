import React,{SyntheticEvent, useState} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = () =>{
  const [auth,setAuth]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [name,setName]=useState();


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
          localStorage.setItem('token', res.data.token);
      setAuth (
            true
       ) ;
       
      
      
  })
  .catch(err =>{
      console.log(err)
  })
  console.log(email)
console.log(password)
console.log(name)

};


if (auth) {
return  <Redirect
            to={{
            pathname: "/dashboard",
            state: { name: name }
          }}
        />
  
}


  return(
    
    <div className='container'>
    <form onSubmit={ handleSubmit }>

                

                 <h3>Login</h3>
                 <div className="form-group">
                 <label>Name</label>
                 <input type="text" className="form-control" placeholder = "Name" 
                     onChange = {e => setName(e.target.value)}
                 />
                 </div>
                 <div className="form-group">
                 <label>Email</label>
                 <input type="email" className="form-control" placeholder = "Email" 
                     onChange = {e => setEmail(e.target.value)}
                 />
                 </div>
                
  
                 <div className="form-group">
                 <label>Password</label>
                 <input type="password" className="form-control" placeholder = "Password" 
                     onChange = {e => setPassword(e.target.value)}
                 />
                 </div>
  
                <button className="btn btn-primary btn-block">Login</button>
                 
                 <p className="forgot-password text-right">
                   <Link to={'/forgot'}>Forgot password?</Link>
                 </p>
  
                 
              </form>
    </div>
  )
};
export default Login;