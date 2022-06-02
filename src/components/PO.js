import React, { useEffect } from 'react';
import { useState } from 'react';
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import axios from 'axios';
import {Link} from '@material-ui/core';
import { Route } from 'react-router-dom';
import { Router, Switch } from 'react-router-dom';
import { Alert,Button } from 'react-bootstrap';
import Validation from './Validation';
import OF from './OF';


function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

export default function PO(props) {
   
    function AlertDismissibleExample() {
        const [show, setShow] = useState(true);
      
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Can Not update RefPr
              </p>
            </Alert>
          );
        }
        return <Button onClick={() => setShow(true)}>Show Alert</Button>;
      }
    
   const [tableData,setTableData]=useState([   ])
   


   const {nom}=props.name;
   


   const getData=()=>{
    fetch('/PO_followUP').then(resp=>resp.json())
    .then(resp=>setTableData(resp))
    
   }
   useEffect(()=>{
   
      
       
   
    getData()
    
 },[])

   const columns=[{title:"RefPr",field:"RefPr",width:90,validate:rowData=>{
       if(rowData.RefPr===undefined || rowData.RefPr==="" ){
           return "Required"
       }
      
       else if (Number(rowData.RefPr)===true){
        return "no"
    }
       
    return true
   }},{title:"Project",field:"NomPr",width:90 },
   {title:"PO_Num",field:"NumOF",width:70 ,cellStyle: {
    width: 50,
    maxWidth: 20
  },render:rowData=><Link href={`/dashboard${props.name}/PO/OF${rowData.NumOF}`} >{rowData.NumOF}</Link> ,validate:rowData=>{
    if(rowData.NumOF===undefined || rowData.NumOF==="" ){
        return "Required"
    }
  }},{title:"Applicant",field:"StatutPr",width:70},
  {title:"Deadline",field:"cloture",width:70},
   {title:"Conformity_NC",field:"State",width:70},
   {title:"Advancement%",field:"Avancement",width:70},
   {title:"Conformity_C",field:"Priorité",width:70},
   
   

   {title:"Tasks List",width:70,render:rowData=><Link href={`/dashboard${props.name}/tasks/${rowData.NumOF}`} >Tasks List</Link>}




  ]

   
  return (
    
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*',
    <div>
        <main >
                    <div className="container  text-black ">
                    <div style={{borderBottom:'3px solid black'}}>
                        <h1 className="mt-4">PO Follow UP</h1>
                        </div>
                        <ol className="breadcrumb mb-4" style={{marginTop:'5px'}}>
                            
                            <li className="breadcrumb-item active">PO</li>
                        </ol>
                       
                        <div className="card mb-4">
                            
                            <MaterialTable columns={columns} data={tableData} title="List of Production Orders"
                            
                            editable={{
                              // isEditHidden:(row)=>row.
                                onRowAdd:(newData)=>new Promise((resolve,reject)=>{
                                    fetch('/PO_followUP',{
                                        method:"POST",
                                        headers:{'Content-type':"application/json"},
                                        
                                        body:JSON.stringify(
                                          {
                                            "RefPr": newData.RefPr,
                                            "NomPr": newData.NomPr,
                                            "StatutPr": props.name,
                                            "NumOF": newData.NumOF,
                                            "Priorité":newData.Priorité
                                           }
                                        )
                                    }).then(resp=>resp.json())
                                    .then(resp=>console.log("hii",resp))
                                    resolve()
                                    window.location.reload(false);
                                    
                                    ///
                                    fetch('/validationOF',{
                                        method:"POST",
                                        headers:{'Content-type':"application/json"},
                                        
                                        body:JSON.stringify(
                                            {
                                            "NumOF": newData.NumOF,
                                            "NumV": 0,
                                            "valide": 0,
                                            "date1": "2022-04-12",
                                            "date2": "2022-04-12",
                                            "date3": "2022-04-12",
                                            "date4": "2022-04-12",
                                            "date5": "2022-04-12"}
                                        )
                                    })
                                    
                                    
                                    resolve()

                                    window.location.reload(false);
                                }),
                                
                                onRowUpdate:(newData,oldRow)=>new Promise((resolve,reject)=>{
                                     if(newData.RefPr!=oldRow.RefPr){
                                      alert("RefPr Can Not be updated")
                                        return AlertDismissibleExample();

                                    }
                                    fetch('/PO_followUP',{
                                        method:"PATCH",
                                        headers:{'Content-type':"application/json"},
                                        body:JSON.stringify(newData)
                                    }).then(resp=>resp.json())
                                
                                    .then(resp=>{setTableData() 
                                      resolve()
                                    })
                                    window.location.reload(false);
                                })
                                
                            }}
                            
                            options={{
                                rowStyle:(data,index)=>index%2==0?{background:"#f5f5f5"}:null,
                                columnStyle:{width:'50px'},
                                headerStyle:{background:"#1B3449",color:"#fff"},
                                //   fixedColumns: {
                                //       left: 1, 
                                    
                                //     },
                                search:true,
                                tableLayout:40,
                                HorizontalScroll:true,
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
    </div>
    
    
  )
}
