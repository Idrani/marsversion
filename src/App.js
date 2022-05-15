
import './App.css';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import { Route,Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';

import PO from './components/PO';
import OF from './components/OF';
import Head from './components/Head';
import Content from './components/Content';
import Nav from './components/Nav';
import Validation from './components/Validation';
import Piece from './components/Piece';
import Tasks from './components/Tasks';
import Timer from './components/Timer';
import { Side } from './components/side';
import ProtectedRoutes from './components/ProtectedRoutes';
import Forgot from './components/Forgot';
import Home from './components/Home';
import About from './components/About';
import Help from './components/Help';
import Contact from './components/Contact';


function App() {
  const a='adrani'
  return (
    
<Router>
      
      <div className='App'>
        
     
      
      
      
      
        
        
        
        
        <Switch>
       
        <Route exact path="/" render={props =>
  <div>
   <Head/>
   <Switch>
     <Route  path="/" component={Content}/>
        
   </Switch>
    
   
  </div>
}  />
          <Route  path="/home" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/help" component={Help}/>
          <Route  path="/contact" component={Contact}/>
          <Route  path="/login" component={Login} ></Route>
          <Route  path="/forgot" component={Forgot} ></Route>

          <Route  path="/dashboard:id" component={Side}  ></Route>

          
    
         
  {/* // <div>
   
  //  <Side {...props}/>
   
  //  <Route exact path="/dashboard" component={Menu}/>
    
  //   <Route exact path="/dashboard/PO" component={PO}/>
  //   <Route  path="/dashboard/validate/:id" component={Validation}/>
  //   <Route path="/dashboard/tasks" component={Tasks}/>
  //   <Route path="/dashboard/tasks/:id" component={Timer}/>
  //   {/* ay 7aja f  dashbord tetzed hne */}
    
          
  {/* // </div> */} 
  
  



<div>
   
<ProtectedRoutes/>
    
     
   
    </div> 

    
   
   


 
    
   
   


   

    

          
          
          </Switch> 
            
       
          
          
          
            
          
  
          
  
      </div>
  
  
      </Router>
        
        
        
          
        

        

   
  );
}

export default App;
