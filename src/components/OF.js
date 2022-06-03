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
    const [realiseT,setrealiseT]=useState(0)
    const [restT,setrestT]=useState(0)



    
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
         
         "State":ncon,
         "Priorité":con,
         "Realise_T":realiseT,
         "Rest_T":restT,
         "Avancement":parseInt((realiseT / (realiseT+restT))*100) 
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
              setrealiseT(prevrealiseT=>prevrealiseT +  parseInt(piece.Réalisé_h))
              setrestT(prevrestT=>prevrestT +  parseInt(piece.Rest))

        
              

           
          }
        }))
        
        
        
        
       
    
    }
   


   useEffect(()=>{
    console.log(props.name)
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
},{title:"PO_Num",field:"NumOF",initialEditValue:id},
    {title:"Quantity",field:"Qte",editable: ( row  ) =>  row.NumOF != tableValid.NumOF,validate:rowData=>{
        if(rowData.Qte===undefined || rowData.Qte==="" ){
            return "Required"
        }
      }},{title:"Ref",field:"Ref",editable: ( row  ) =>  row.NumOF != tableValid.NumOF,validate:rowData=>{
        if(rowData.Ref===undefined || rowData.Ref==="" ){
            return "Required"
        }
      }},{title:"Designation",field:"Désignation",editable: ( row  ) =>  row.NumOF != tableValid.NumOF,validate:rowData=>{
        if(rowData.Désignation===undefined || rowData.Désignation==="" ){
            return "Required"
        }
      }},
   {title:"Material",field:"Matiére",editable: ( row  ) =>  row.NumOF != tableValid.NumOF,validate:rowData=>{
    if(rowData.Matiére===undefined || rowData.Matiére==="" ){
        return "Required"
    }{console.log(con)}
  }},{title:"Dimension",field:"Dimension"},{title:"Qual",field:"Qual",editable: ( row  ) =>  row.NumOF != tableValid.NumOF},{title:"intended(h)",field:"Prévu_h"},
   {title:"realized(h)",field:"Réalisé_h"},{title:"Restant(h)",field:"Rest"},{title:"Conformity(C)",field:"Conformité_C"},{title:"Conformity(NC)",field:"Conformité_NC"},{title:"Plan2D",field:"plan",render:rowData=><Link to={`/dashboard${props.name}/PO/OF/piece${id + rowData.id_piéce}`} ><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
 </svg></Link>}]
  return (

    <div  >
      
        <main >
                    <div className="container  text-white mt-5 " >
                      <div style={{backgroundImage:'linear-gradient(to right, #778491 , #004e92)',width:'300px',height:'120px',padding:'0px 10px',border:'3px solid black',borderRadius:'12px',marginBottom:'15px'}}>
                        <h3 className="mt-4">PO  Num: {id}</h3>
                        </div>
                        <ol className="breadcrumb mb-4">
                            
                            <li className="breadcrumb-item active"><a href={`/dashboard${props.name}/PO`}>PO</a></li>
                            <li className="breadcrumb-item active">OF</li>
                        </ol>
                       
                        
                
                        <div className="card mb-5 ofcard" >
                            
                            
                        <MaterialTable columns={columns} data={tablePieces}  title="List of Pieces"
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
                                    
                                    window.location.reload(false)
                                    
                                    
                                    
                                    
                                })
                            }}
                            
                            options={{ 
                                rowStyle:(data,index)=>index%2==0?{background:"#f5f5f5"}:null,
                                headerStyle:{background:"#1B3449",color:"#fff"},
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
                    
                     
<div style={{marginTop:'500px',marginLeft:'35%'}}>
<Link to={{
    pathname:`/dashboard${props.name}/validate/${id}`, state:{stateparam: {id} }
}}><MDBBtn rounded color='success' style={{height:'40px' ,width:'20%'}}  >
        Validate
      </MDBBtn></Link>
      <MDBBtn rounded color='warning' style={{height:'40px' ,width:'20%',marginLeft:'20px'}} onClick={send} >
        send
      </MDBBtn>
</div>

    </div>
    
    
  )
  
}
