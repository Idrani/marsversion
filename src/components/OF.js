import React,{ useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}


export default function () {
    const { id }=useParams()
    const [tablePieces,setTablePieces]=useState([   ])
   

   
    const getPieces=()=>{
        fetch('/List_OF_Pieces').then(resp=>resp.json())
        .then(resp=>resp.map((piece)=>{
             if(piece.NumOF==id){
                tablePieces.push(piece)
              setTablePieces([...tablePieces])
            
          }
        }))
    
    }

   useEffect(()=>{
      getPieces()
     
        
       
       
      
   },[])
   

     
    

    const columns=[{title:"Index",field:"Index" ,render: rowData => rowData.tableData.id + 1
    // ,validate:rowData=>{
    //     if(rowData.NumOF===undefined || rowData.NumOF==="" ){
    //         return "Required"
    //     }
       
        
    //  return true
    // }
},{title:"NumOF",field:"NumOF",initialEditValue:id},
    {title:"Qté",field:"Qte"},{title:"Désignation",field:"Désignation"},
   {title:"Matiére",field:"Matiére"},{title:"Dimension",field:"Dimension"},{title:"Qual",field:"Qual"},{title:"Prévu(h)",field:"Prévu_h"},
   {title:"Réalisé(h)",field:"Réalisé_h"},{title:"Conformité(C)",field:"Conformité_C"},{title:"Conformité(NC)",field:"Conformité_NC"},{title:"Plan2D",field:"plan",render:rowData=><Link to={`/dashbord/PO/OF/piece${id + rowData.id_piéce}`} >piece</Link>}]
  return (

    <div  >
      
        <main >
                    <div className="container  text-black mt-5 " >
                        <h1 className="mt-4">Numero OF: {id}</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                            <li className="breadcrumb-item active"><a href="/dashboard/PO">PO</a></li>
                            <li className="breadcrumb-item active">OF</li>
                        </ol>
                        <div className="card mb-5 " >
                            <div className="card-body">
                                This Table Contain The List of Pieces
                                .
                            </div>
                        </div>
                        
                        <div className="card mb-5 ofcard" >
                            
                            
                        <MaterialTable columns={columns} data={tablePieces} 
                            editable={{
                                onRowAdd:(newData)=>new Promise((resolve,reject)=>{
                                    fetch('/List_OF_Pieces',{
                                        method:"POST",
                                        headers:{'Content-type':"application/json"},
                                        
                                        body:JSON.stringify(newData)
                                    }).then(resp=>resp.json())
                                    
                                    resolve()
                                    
                                }),
                                onRowUpdate:(newData,oldRow)=>new Promise((resolve,reject)=>{
                                    fetch('/List_OF_Pieces',{
                                        method:"PATCH",
                                        headers:{'Content-type':"application/json"},
                                        
                                        body:JSON.stringify(newData)
                                    }).then(resp=>resp.json())
                                    .then(resp=>{setTablePieces() 
                                      resolve();
                                    })
                                    
                                })
                            }}
                            
                            options={{
                                rowStyle:(data,index)=>index%2==0?{background:"#f5f5f5"}:null,
                                headerStyle:{background:"#212529",color:"#fff"},
                                search:true,
                                paging:true,
                                filtering:true,
                                columnsButton:true,
                                
                                
                                exportMenu: [{
                                    label: 'Export PDF',
                                    exportFunc: (cols, datas) => ExportPdf(cols, datas, 'myPdfFileName')
                                  }, {
                                    label: 'Export CSV',
                                    exportFunc: (cols, datas) => ExportCsv(cols, datas, 'myCsvFileName')
                                  }]
                                
                                
                            }}
                            
                            
                            />
                           
                          
                           
                                
                         





                            
                        </div>
                       
                       
                    </div>

                    </main>
                    
                     
<div style={{marginTop:'420px',marginLeft:'45%'}}>
<Link to={{
    pathname:`/dashboard/validate/${id}`, state:{stateparam: {id}}
}}><MDBBtn rounded color='success' style={{height:'40px' ,width:'20%'}} >
        Validate
      </MDBBtn></Link>
</div>
    </div>
    
  )
}
