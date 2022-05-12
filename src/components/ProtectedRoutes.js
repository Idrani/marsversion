import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { Side } from './side';

 const ProtectedRoutes = ({...rest}) => {
 return(
    <Route {...rest} 
    render={({props,location})=>{
        localStorage.getItem('token') ? 
       (<Side {...props}/>):
       (<Redirect to={{path:'/login',state:{from:props.location}}}/>)
    }}/>
 );
}
export default ProtectedRoutes;
