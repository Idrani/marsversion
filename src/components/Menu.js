import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import {LineChart,XAxis,YAxis,CartesianGrid,Line} from "recharts"
import { Pie,PieChart,ComposedChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

export default function Menu(props) {
    const [po,setPo]=useState([   ])
     
    const [pieces,setPieces]=useState([])
    const [users,setUsers]=useState([])
    const [ppdata,setPpdata]=useState({})


    useEffect(()=>{
       console.log(props.name)
       console.log(pieces)
        getData()
        getPieces()
        getusers()
     },[])

     const getData=()=>{
      fetch('/PO_followUP').then(resp=>resp.json())
      .then(resp=>setPo(resp))
      
      
      
     }
      const getPieces=()=>{
         fetch('/List_OF_Pieces').then(resp=>resp.json())
         .then(resp=>setPieces(resp))
    //      .then(pieces.map((p)=>{
            

    //         setPpdata({
    //           name: pieces.Numof,
    //           student: 13,
    //           fees: 10
    //         })  
        
       
    //  }))
        
        
        
        }
        const getusers=()=>{
            fetch('/api/getusers').then(resp=>resp.json())
            .then(resp=>setUsers(resp))
            
            
            
           }

          
        //    ---------------------
       



  return (
    <div>

         
                <main style={{position:'relative',marginTop:'10px'}}>
                    <div class="container text-black">
                        <h1 class="mt-4">Dashboard</h1>
                       
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Dashboard </li>
                        </ol>
                        <div class="row">
                            
                            <div class="col-xl-4 col-md-6">
                                <div class="card  text-black mb-4 " style={{backgroundColor:'#1B3449',padding:' 15px 16px',boxShadow:'0 6px 8px 0 rgba(0,0,0,0.5)',}}>
                                <div >
                                    <svg style={{float:'right',color:'#fff'}} xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
<h3>Users</h3></div>
                                    <h1 style={{textAlign:'center'}}>{users.length}</h1>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card  text-black mb-4" style={{backgroundColor:'#1B3449',padding:' 15px 16px',boxShadow:'0 6px 8px 0 rgba(0,0,0,0.5)',transition:'0.3s'}}>
                                    <div ><svg style={{float:'right',color:'#fff'}} xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg><h3>Production Oders</h3></div>
                                    <h1 style={{textAlign:'center'}}>{po.length}</h1>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card text-black mb-4" style={{backgroundColor:'#1B3449',padding:' 15px 16px',boxShadow:'0 6px 8px 0 rgba(0,0,0,0.5)',transition:'0.3s'}}>
                                    <div ><svg style={{float:'right',color:'#fff'}} xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg><h3>Pieces</h3></div>
                                    <h1 style={{textAlign:'center'}}>{pieces.length}</h1>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                        <h1 className="chart-heading">Line Chart</h1>
                        <ComposedChart width={1200} height={250} data={po}>
  <XAxis dataKey="NumOF" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="State"  fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="Priorité" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="statut" stroke="#ff7300" />
</ComposedChart>
                       
<PieChart width={730} height={250}>
  <Pie data={po} dataKey="Conformité_C" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={pieces} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
                        </div>
                        
                    </div>
                </main>
                
            </div>
        
    
  )
}
