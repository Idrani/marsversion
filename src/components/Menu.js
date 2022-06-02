import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Chart as ChartJS, BarElement, LineElement,} from 'chart.js';
 import { Bar, Line } from 'react-chartjs-2';
 import Chart from 'chart.js/auto';
// import {LineChart,XAxis,YAxis,CartesianGrid,Line} from "recharts"
ChartJS.register(
    BarElement,LineElement
  );
export default function Menu(props) {
    const [po,setPo]=useState([   ])
     
    const [pieces,setPieces]=useState([])
    const [users,setUsers]=useState([])
    const [ppdata,setPpdata]=useState({})
    var  data= {
      labels:po.map(x => x.NumOF),
      datasets: [
        {
          label: "Conformity_C",
          backgroundColor: "#3CB8F0",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data:po.map(x => x.Priorité)
        },

        {
          label: "Conformity_NC",
          backgroundColor: "#F5B0B2",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: po.map(x => x.State)
        }
      ]
    }

    var  data1= {
      labels: po.map(x => x.NumOF),
      datasets: [
       

        {
          label: "Advancement",
          backgroundColor: "#50C0C0",
          borderColor: "#50C0C0",
          borderWidth: 3,
          //stack: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: po.map(x => x.Avancement)
        },

        {
          label: "100%",
          borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 3,
          //stack: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: po.map(x => 100)
        }
      ]
    }
    
      var options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }
    

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
                      <div style={{borderBottom:'3px solid black'}}>
                        <h1 class="mt-4">Dashboard</h1>
                       </div>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Dashboard </li>
                        </ol>
                        <div class="row">
                            
                            <div class="col-xl-4 col-md-6">
                                <div class="card  text-black mb-4 " style={{backgroundImage:'linear-gradient(to right, #2193b0 , #6dd5ed)',padding:' 15px 16px',boxShadow:'0 6px 8px 0 rgba(0,0,0,0.5)',}}>
                                <div >
                                    <svg style={{float:'right',color:'#fff'}} xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
<h3>Users</h3></div>
                                    <h1 style={{textAlign:'center'}}>{users.length}</h1>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card  text-black mb-4" style={{backgroundImage:'linear-gradient(to right, #bdc3c7 , #2c3e50)',padding:' 15px 16px',boxShadow:'0 6px 8px 0 rgba(0,0,0,0.5)',transition:'0.3s'}}>
                                    <div ><svg style={{float:'right',color:'#fff'}} xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg><h3>Production Oders</h3></div>
                                    <h1 style={{textAlign:'center'}}>{po.length}</h1>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card text-black mb-4" style={{backgroundImage:'linear-gradient(to right, #000428 , #004e92)',padding:' 15px 16px',boxShadow:'0 6px 8px 0 rgba(0,0,0,0.5)',transition:'0.3s'}}>
                                    <div ><svg style={{float:'right',color:'#fff'}} xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg><h3>Pieces</h3></div>
                                    <h1 style={{textAlign:'center'}}>{pieces.length}</h1>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                        <div  >
                       
                        <div style={{float:'left',height:'600px',width:'650px'}}>
                        <h3 className="chart-heading">Conformity</h3>
                        <Bar
        data={data}
        height={0}
      
      />
      </div>
      <div style={{float:'left',height:'600px',width:'600px',marginLeft:'35px'}}>
      <h3 className="chart-heading">Production Progress</h3>
      <Line
        data={data1}
        height={0}
      
      />
      </div>
                        </div>
                        
                    </div>
                </main>
                
            </div>
        
    
  )
}
