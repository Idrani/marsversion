
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

function App() {
  return (
    
<Router>
      
      <div className='App'>
        
     
      
      
      
      
        
        
        
        
        <Switch>
       
        <Route exact path="/" render={props =>
  <div>
   <Head/>
    <Content/>
  </div>
}  />
          <Route  path="/login" component={Login}></Route>
          
          <Route  path="/dashboard" render={props =>
  <div>
    <Nav/>
   <Sidebar {...props}/>
   
   <Route exact path="/dashboard" component={Menu}/>
    
    <Route exact path="/dashboard/PO" component={PO}/>
    <Route  path="/dashboard/validate/:id" component={Validation}/>
    {/* ay 7aja f  dashbord tetzed hne */}
    
          
  </div>
}  />

<div>
   <Nav/>
   <Sidebar/>
    <Route  path="/dashbord/PO/OF:id" component={OF}/>
   
    </div> 

    <div>
    
   
    </div> 


 
    
   
   


   

    

          
          
          </Switch> 
            
       
          
          
          
            
          
  
          
  
      </div>
  
  
      </Router>
        
        
        
          
        

        

   
  );
}

export default App;
