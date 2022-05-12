import React from 'react'
import { Link } from 'react-router-dom'
import PO from './PO'
import OF from './OF'
import Menu from './Menu'
import { Route,Switch } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Sidebar(props) {
   
   
   
    useEffect(()=>{
        
        getData()
        
        
    },[])
    const getData=()=>{
      axios.get('')
        .then(res=>{console.log(res);})
      }

      
  return (
   
    


        <div id="layoutSidenav" >
            
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            
                            <Link className="nav-link" to="/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            
                            

                            <Link className="nav-link" to="/dashboard/PO">
                                <div className="sb-nav-link-icon"><i className="bi bi-archive-fill"></i></div>
                                PO Follow Up
                            </Link>

                            <Link className="nav-link" to="/dashboard/tasks">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Tasks List
                            </Link>
                            <Link className="nav-link" to="/dashboard/history">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Production History
                            </Link>

                            <Link className="nav-link" to="/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Modification History
                            </Link>

                            <Link className="nav-link" to="/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Access Control
                            </Link>

                            
                            
                            
                            
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        
                    </div>
                </nav>
            </div>
            
            
                <Route  exact path="dashboard/PO" component={PO}  /> 
                
                
          
    </div>
    
  )
}
