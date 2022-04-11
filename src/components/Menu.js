import React, { useEffect } from 'react';
import { useState } from 'react';
export default function Menu() {
    const [po,setPo]=useState([   ])
    const [pieces,setPieces]=useState([])
    useEffect(()=>{
        getData()
        getPieces()
     },[])
     const getData=()=>{
      fetch('/PO_followUP').then(resp=>resp.json())
      .then(resp=>setPo(resp.length))
      
      
      
     }
      const getPieces=()=>{
         fetch('/List_OF_Pieces').then(resp=>resp.json())
         .then(resp=>setPieces(resp.length))
        
        
        
        }


  return (
    <div>

         
                <main style={{position:'relative',marginTop:'10px'}}>
                    <div class="container text-black">
                        <h1 class="mt-4">Dashboard</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div class="row">
                            <div class="col-xl-4 col-md-6">
                                <div class="card  text-black mb-4 " style={{backgroundColor:'#212529',borderRadius:''}} >
                                    <div class="card-body"><h3>Users</h3></div>
                                    <h1 style={{textAlign:'center'}}>{pieces}</h1>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card  text-black mb-4" style={{backgroundColor:'#212529'}}>
                                    <div class="card-body"><h3>Production Oders</h3></div>
                                    <h1 style={{textAlign:'center'}}>{po}</h1>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card text-black mb-4" style={{backgroundColor:'#212529'}}>
                                    <div class="card-body"><h3>Pieces</h3></div>
                                    <h1 style={{textAlign:'center'}}>{pieces}</h1>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-chart-area me-1"></i>
                                        Area Chart Example
                                    </div>
                                    <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-chart-bar me-1"></i>
                                        Bar Chart Example
                                    </div>
                                    <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </main>
                
            </div>
        
    
  )
}
