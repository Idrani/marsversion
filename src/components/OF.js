import React,{ useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Side } from './side';




export default function (props) {
   

    const { id }=useParams()
   

    const [tablePieces,setTablePieces]=useState([   ])
    const [tableValid,setTableValid]=useState([   ])
    const [con,setCon]=useState(0)
    const [ncon,setNCon]=useState(0)



    
    const [numof,setNumof]=useState()
    var c=0

    
    const send= ()=>{
       tablePieces.map((pie)=>{
           
       
        fetch('/PO_followUP',{
     method:"PATCH",
     headers:{'Content-type':"application/json"},
     body:JSON.stringify(
       {
        
         "NumOF": id,
         
         "State":pie.Conformité_C,
         "Priorité":pie.N
     }
       )
     
   })
  })
       
     }

    const getData=()=>{
        fetch('/validationOF').then(resp=>resp.json())
        .then(resp=>resp.map((piece)=>{
          if(piece.NumOF==id){
              if(piece.valide==0){
                  setTableValid(piece)
                  
                  
              }
             
             
             
        
        
       }
     }))
    
    }

   
    const getPieces=()=>{
        fetch('/List_OF_Pieces').then(resp=>resp.json())
        .then(resp=>resp.map((piece)=>{
             if(piece.NumOF==id){
                
                tablePieces.push(piece)
                
              setTablePieces([...tablePieces])
              setCon(Prevcon=>Prevcon + parseInt(piece.Conformité_C))
              setNCon(Prevncon=>Prevncon + parseInt(piece.Conformité_NC))

           
          }
        }))
        
        
       
    
    }
   


   useEffect(()=>{

    getData();
      getPieces();
      
    
   },[])

  
   

     
    

    const columns=[{title:"Index",field:"Index" ,render: rowData => rowData.tableData.id + 1
    // ,validate:rowData=>{
    //     if(rowData.NumOF===undefined || rowData.NumOF==="" ){
    //         return "Required"
    //     }
       
        
    //  return true
    // }
},{title:"NumOF",field:"NumOF",initialEditValue:id},
    {title:"Qté",field:"Qte",editable: ( row  ) =>  row.NumOF != tableValid.NumOF,validate:rowData=>{
        if(rowData.Qte===undefined || rowData.Qte==="" ){
            return "Required"
        }
      }},{title:"Réf",field:"Ref",editable: ( row  ) =>  row.NumOF != tableValid.NumOF,validate:rowData=>{
        if(rowData.Ref===undefined || rowData.Ref==="" ){
            return "Required"
        }
      }},{title:"Désignation",field:"Désignation",editable: ( row  ) =>  row.NumOF != tableValid.NumOF,validate:rowData=>{
        if(rowData.Désignation===undefined || rowData.Désignation==="" ){
            return "Required"
        }
      }},
   {title:"Matiére",field:"Matiére",editable: ( row  ) =>  row.NumOF != tableValid.NumOF,validate:rowData=>{
    if(rowData.Matiére===undefined || rowData.Matiére==="" ){
        return "Required"
    }
  }},{title:"Dimension",field:"Dimension"},{title:"Qual",field:"Qual",editable: ( row  ) =>  row.NumOF != tableValid.NumOF},{title:"Prévu(h)",field:"Prévu_h"},
   {title:"Réalisé(h)",field:"Réalisé_h"},{title:"Restant(h)",field:"Rest"},{title:"Conformité(C)",field:"Conformité_C"},{title:"Conformité(NC)",field:"Conformité_NC"},{title:"Plan2D",field:"plan",render:rowData=><Link to={`/dashboard${props.name}/PO/OF/piece${id + rowData.id_piéce}`} >piece</Link>}]
  return (

    <div  >
      
        <main >
                    <div className="container  text-black mt-5 " >
                        <h1 className="mt-4">Numero {ncon} OF: {id}</h1>
                        <ol className="breadcrumb mb-4">
                            
                            <li className="breadcrumb-item active"><a href={`/dashboard${props.name}/PO`}>PO</a></li>
                            <li className="breadcrumb-item active">OF</li>
                        </ol>
                        <div className="card mb-5 " >
                            <div className="card-body">
                                This Table Contain The List of Pieces {tableValid.NumOF}
                                .
                            </div>
                        </div>
                        
                        <div className="card mb-5 ofcard" >
                            
                            
                        <MaterialTable columns={columns} data={tablePieces} 
                            editable={{
                                
                                 //isEditable:(row)=>row.NumOF==tableValid.NumOF,
                                 
                                onRowAdd:(newData)=>new Promise((resolve,reject)=>{
                                    
                                    fetch('/List_OF_Pieces',{
                                        method:"POST",
                                        headers:{'Content-type':"application/json"},
                                        
                                        body:JSON.stringify( {
                                            "id_piéce": newData.id_piéce,
                                            "NumOF": newData.NumOF,
                                            "Qte": newData.Qte,
                                            "Ref": newData.Ref,
                                            "statut": newData.statut,
                                            "Désignation":newData.Désignation,
                                            "Matiére": newData.Matiére,
                                            "Dimension": newData.Dimension,
                                            "Qual": newData.Qual,
                                            "Prévu_h": newData.Prévu_h,
                                            "Réalisé_h": newData.Réalisé_h,
                                            "Conformité_C": newData.Conformité_C,
                                            "Conformité_NC": newData.Conformité_NC ,
                                            "Conf_C": null,
                                            "NConf_C": null,
                                            "Conf_NC": null,
                                            "NConf_NC": null,
                                            "Rest": newData.Rest,
                                            "avancement": newData.avancement
                                        })
                                    }).then(resp=>resp.json())
                                    
                                    resolve()
                                    window.location.reload(false);
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
                                    window.location.reload(false);
                                    
                                    
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
                                  }],

                                 
                                
                            }}
                            
                            
                            />
                           
                          
                           
                                
                         





                            
                        </div>
                       
                       
                    </div>

                    </main>
                    
                     
<div style={{marginTop:'500px',marginLeft:'45%'}}>
<Link to={{
    pathname:`/dashboard${props.name}/validate/${id}`, state:{stateparam: {id} }
}}><MDBBtn rounded color='success' style={{height:'40px' ,width:'20%'}}  >
        Validate
      </MDBBtn></Link>
</div>
    </div>
    
    
  )
  
}
