import React from 'react';
import { Redirect } from 'react-router-dom';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Nav() {
  const logout=()=>{
    fetch('/api/logout',{
      method:"POST",
      headers:{'Content-type':"application/json"},
      
     
  }).then(res=>console.log(res))
  .then(Redirect)
  }
  return (
    <div>
         <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
           
            <a class="navbar-brand ps-3" href="/"><img src={logo } width="150px" /></a>
            
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            
            <div class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown"  href="/"   aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    
                </li>
            </ul>
            </div>
            
            
        </nav>
    </div>
  )
}
