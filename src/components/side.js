import React from 'react'
import { useState } from 'react';
import { Router, Switch } from 'react-router-dom';
import logo from './logo.png';
import logoo from './logoC.png';
import login from './login.gif';
import Menu from './Menu';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PO from './PO';
import Validation from './Validation';
import OF from './OF';
import Piece from './Piece';
import Tasks from './Tasks';
import { Valide } from './Valide';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import { useParams } from 'react-router-dom';
import avatar from './avatar.jpeg'


export const Side = (props) => {
   const { id } = useParams();

  
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Dashboard", src: "Chart_fill" },
      { title: "Inbox", src: "Chat" },
      { title: "Accounts", src: "User", gap: true },
      { title: "Schedule ", src: "Calendar" },
      { title: "Search", src: "Search" },
      { title: "Analytics", src: "Chart" },
      { title: "Files ", src: "Folder", gap: true },
      { title: "Setting", src: "Setting" },
    ];
    
    useEffect(()=>{
      console.log(id)
      
      
    },[])
   
    

  return (
    <div className="flex">

    <div style={{backgroundColor:'#1B3449',height:'auto',display:'table-cell'}}
      className={` ${
        open ? "w-72" : "w-20 "
      }  h-screen   pt-8 relative duration-300`}
    >
     
      <svg  style={{backgroundColor:'white',marginLeft:'92%' ,borderRadius:'100%' ,width:'40px',height:'40px',borderColor:'#081A51' }} className={`absolute cursor-pointer -right-3 top-9 w-10 border-dark-purple backgroundColor-light 
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
</svg>
     <a href='/'> <div className="flex gap-x-4 items-center ml-3 mt-10">
       <img style={{height:'50px',width:'180px'}}
         src={logoo }
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <img src={logo } style={{height:'40px',width:'250px',marginRight:'90px'}}
          className={` origin-left  duration-200 ${
            !open && "scale-0"
          }`}
        >
           
        </img>
      </div> </a>
      <ul className="pt-6" >
       
      <Link  to={`/dashboard${id}`}>   <li style={{fontSize:'x-large',marginLeft:'-25px',width:'95%'}}
            
            className={`flex  rounded-md p-2 mt-5 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
             `}
             
          >
            <svg  xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
</svg>
            <span className={`${!open && "hidden"} origin-left duration-200 ` }>
            DASHBOARD
            </span>
          </li> </Link>

          <Link to={`/dashboard${id}/PO`}> <li style={{fontSize:'x-large',marginLeft:'-25px',width:'95%'}}
            
            className={`flex  rounded-md p-2 mt-5 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
             `}
          >
            
<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
</svg>
            <span className={`${!open && "hidden"} origin-left duration-200 `}>
            PO FOLLOW UP
            </span>
          </li> </Link>
        
          <Link  to={`/dashboard${id}/Valid`}>   <li style={{fontSize:'x-large',marginLeft:'-25px',width:'95%'}}
            
            className={`flex  rounded-md p-2 mt-5 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
             `}
             
          >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
            <span className={`${!open && "hidden"} origin-left duration-200 ` }>
            Validated PO
            </span>
          </li> </Link>


          <Link  to="/">   <li style={{fontSize:'x-large',marginLeft:'-25px',width:'95%'}}
            
            className={`flex  rounded-md p-2 mt-5 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
             `}
             
          >
         <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
            <span className={`${!open && "hidden"} origin-left duration-200 ` }>
            Logout
            </span>
          </li> </Link>

            <li style={{fontSize:'x-large',marginLeft:'-25px',width:'95%'}}
            
            className={`flex  rounded-md p-2 mt-5 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
             `}
             
          >
        <div className='pic' style={{float:'left'}}>
          <img src={avatar}/>
        </div>
            <span className={`${!open && "hidden"} origin-left duration-200 ` } style={{color:'#fff',textTransform:'uppercase'}} >
          <i>{id}</i> 
            </span>
          </li> 
         
      </ul>
      {/* <div style={{height:'200px',marginTop:'50px',marginLeft:'100px'}}>
        <div className='pic' style={{float:'left'}}>
          <img src={avatar}/>
        </div>
        <div style={{height:'100px',width:'80%',float:'left',marginLeft:'-20px'}}>
      <p style={{marginTop:'25%',color:'#fff',fontSize:'22px'}} > - {id} -</p>
      </div>
      </div> */}
    </div>
    <div className="h-screen flex-1 ">
    
    <Switch>
    
    <Route exact path="/dashboard:id"> <Menu name={id}/> </Route> 
    {/* <ProtectedRoutes path="/dashboard" component={Menu} auth={true}/> */}
    <Route exact path="/dashboard:id/PO"> <PO name={id}/></Route>
    <Route  path="/dashboard:id/PO/OF:id"> <OF name={id} /></Route> 
    <Route  path="/dashboard:id/PO/OF/piece:id"> <Piece name={id}/></Route>
    <Route path="/dashboard:id/tasks/:id"> <Tasks name={id}/></Route>
    <Route  path="/dashboard:id/validate/:id"><Validation name={id}/></Route> 
    <Route  path="/dashboard:id/valid" ><Valide name={id}/></Route>

    
    
    
    </Switch>   
      
      </div>
  </div>

  )
}

