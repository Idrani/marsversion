import React,{SyntheticEvent, useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () =>{
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  
  return(
    <div className='container'>
    <form >
      <h1 className='h3 nb-3 fw-normale '>Log In</h1>
      <input type="email" className="form-control" placeholder="Email address" required
        onChange={e=> setEmail(e.target.value)}
      ></input>
      <input type="password" className="form-control" placeholder="Password" required
      onChange={e=> setPassword(e.target.value)}
      ></input>
<Link to="/dashboard"><button className='w-100 btn btn-lg btn-primary'>Log In</button></Link>
    </form>
    </div>
  )
};
export default Login;