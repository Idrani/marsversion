import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState ,useEffect} from 'react'

export const Valide = () => {
    const [tableValid,setTableValid]=useState([   ])
   
    const getData=()=>{
        fetch('/validationOF').then(resp=>resp.json())
        .then(resp=>resp.map((of)=>{
            if(of.NumV===5){
               tableValid.push(of)
             setTableValid([...tableValid])
           
         }
         
       }))
       .then(console.log(tableValid))
    
    }
    
        
        
    



        useEffect(()=>{
            getData()
            
         },[])
  return (
    <div>
        <div class="container my-5" >
        <h1 className="mt-4 text-black">List of Validated Production Orders   </h1>
        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                            <li className="breadcrumb-item active"><a href="/dashboard/PO">PO</a></li>
                           
                        </ol>
  <div class="shadow-4 rounded-5 overflow-hidden" style={{marginTop:'100px'}}>
    <table class="table align-middle mb-0 bg-white">
      
      <thead class="bg-light">
        <tr>
         <th>Index</th>
          <th>PO Number</th>
          <th>Validation Date</th>
          
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
            <svg style={{float:'right',color:'#9dff9d'}} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </td>
          </tr>

      ))}
       


        
      </tbody>

    </table>
    <h3 style={{textAlign:'right',color:'black'}}></h3>
  </div>
</div>
  )
    </div>
  )
}
