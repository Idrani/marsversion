import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState ,useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify';

export const Valide = (props) => {
    const [tableValid,setTableValid]=useState([   ])
    let a
    const b='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    const [icon,setIcon]=useState()
    const [priorité,setPriorité]=useState();
    const { id }=useParams()

    

   
    const getData=()=>{
        fetch('/validationOF').then(resp=>resp.json())
        .then(resp=>resp.map((piece)=>{
          if(piece.valide==1){
             
             tableValid.push(piece)
             
           setTableValid([...tableValid])
        
       }
     }))
        
       
    
    }
    
        
        
    



        useEffect(()=>{
            getData()
            tableValid.map((of)=>{
              if(of.NumV===5){
                
             
           }
           else{
             setIcon(a)
           }
           
         })
         
         
            
         },[])
  return (
    <div>
        <div class="container my-5" >
          <div style={{borderBottom:'3px solid black'}}>
        <h1 className="mt-4 text-black"> Validated Production Orders   </h1>
        </div>
        <ol className="breadcrumb mb-4" style={{marginTop:'5px'}}>
                            
                            <li className="breadcrumb-item active"><a href={`/dashboard${props.name}/PO`}>PO</a></li>
                           
                        </ol>
  <div class="shadow-4 rounded-5 overflow-hidden" style={{marginTop:'10px'}}>
    <table class="table align-middle mb-0 bg-white">
      
      <thead class="bg-light">
        <tr>
         <th>Index</th>
          <th>PO Number</th>
          <th>Validation Date</th>
          <th>Priority</th>
          <th>Set Priority</th>


          
        </tr>
      </thead>
      <tbody>
      {tableValid.map((val,index)=>(
          <tr key={index}>
        
          <td>{index+1}</td> 
          
          <td >
            <div class="d-flex align-items-center">
             {val.NumOF}
              
            </div>
          </td>
          <td >
            {val.date5}
           
           
          </td>
          <td>{val.pri}</td>
          <td><input id='val.NUmOF' value={val.Priorité} style={{border:'2px solid black',padding:'12px',width:'50px',height:'30px'}} onChange = {e => setPriorité(e.target.value)}  /> <Button style={{height:'30px'}} onClick={(e) => { if(id=='adranimed'){fetch('/validationOF',{
          method:"PATCH",
          headers:{'Content-type':"application/json"},
          body:JSON.stringify(
            {
              
              "NumOF": val.NumOF,
              "NumV": val.NumV,
              "valide": val.valide,
              "date1": val.date1,
              "date2": val.date2,
              "date3": val.date3,
              "date4": val.date4,
              "date5": val.date5,
              "pri": priorité
            }
          )})}
          else{
            toast.error("only Mr amine daami has access", {
              theme: "dark",position: toast.POSITION.TOP_CENTER
            })
          }
          }}>set</Button> 
          <svg style={{float:'right',color:'#9dff9d'}} xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></td>
          </tr>

      ))}
       


        
      </tbody>

    </table>
    <h3 style={{textAlign:'right',color:'black'}}></h3>
  </div>
</div>
  
    </div>
  )
}
