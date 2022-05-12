import React from 'react'
import { Table ,Button,Alert} from 'react-bootstrap'
import { useState ,useEffect} from 'react'



export default function Tasks() {
  const [tablePieces,setTablePieces]=useState([   ])
  const [ttwo,setTtwo] = useState(); 
const [tone,setTone] = useState(); 
const [etat,setEtat]=useState()
const [time,setTime] = useState(); 

  
  

  const getData=()=>{
    fetch('/List_OF_Pieces').then(resp=>resp.json())
    .then(resp=>{setTablePieces(resp)
      resp.map((item)=>{
        
        console.log(item.statut)
        if(item.statut=="Encours"){
          console.log(item.Ref)
          document.getElementById(item.Ref).style.backgroundColor="#9dff9d"
          document.getElementById(item.Ref+'2').disabled = false;
          document.getElementById(item.Ref+'1').disabled = true;

    
         }
        else if(item.statut==="Terminé"){
          console.log(item.Ref)
          document.getElementById(item.Ref).style.backgroundColor="#F4D03F"
          document.getElementById(item.Ref+'1').disabled = true;
          document.getElementById(item.Ref+'2').disabled = true;
         document.getElementById(item.Ref+'3').disabled = true;
    
         }
         else if(item.statut==="Interupté"){
          console.log(item.Ref)
          document.getElementById(item.Ref).style.backgroundColor="#EC7063"
          document.getElementById(item.Ref+'2').disabled = true;
          document.getElementById(item.Ref+'1').disabled = false;

    
         }
      })
    })

  }
  
   useEffect(()=>{
    
    getData();
    
   
   
    
    
    
 },[])
 


    

  return (
    <div className=' container' style={{marginTop:'10%'}}>
    
       
        <Table striped bordered hover  style={{height:'300px'}}>
  <thead backgroundColor='dark'>
    <tr>
      <th>Index</th>
      <th>Refference</th>
      <th>Qualification</th>
      <th>% Complete</th>
      <th>Statut</th>
      <th>Temps Prévu</th>
      <th>Temps Réaliser</th>
      <th>Démarrer Tâche</th>
      <th>interrompre Tâche</th>
      <th>terminer Tâche</th>
      <th>Commentaire</th>





    </tr>
  </thead>
  <tbody>
   {tablePieces.map((pi,index)=>(
     
      <tr key={index}>
        
       <td>{index+1}</td> 
      <td >{pi.Ref}</td>
      <td>{pi.Qual}</td>
      <td>0%</td>
      <td id={pi.Ref}>{pi.statut}</td>
      
      <td>{pi.Prévu_h}</td>
      <td id={pi.Ref+pi.Réalisé_h}>{Math.floor(pi.Réalisé_h/3600 )+'h'+Math.floor((pi.Réalisé_h%3600)/60)+'m'+Math.floor((pi.Réalisé_h%3600)%60)+'s'}</td>
      <td><Button  id={pi.Ref+'1'} variant="outline-success"   onClick={() => {
        
           document.getElementById(pi.Ref).innerHTML="Encours"
           
           document.getElementById(pi.Ref).style.backgroundColor="#9dff9d"
           
      

           setTone(new Date())
           setEtat('Encours')
           
          document.getElementById(pi.Ref+'1').disabled=true;
          document.getElementById(pi.Ref+'2').disabled=false;
          fetch('/List_OF_Pieces' ,{
            method:"PATCH",
            headers:{'Content-type':"application/json"},
            body:JSON.stringify(
               {
                
                "id_piéce": pi.id_piéce,
        "NumOF": pi.NumOF,
        "Qte": pi.Qte,
        "Ref": pi.Ref,
        "statut": "Encours",
        "Désignation": pi.Désignation,
        "Matiére": pi.Matiére,
        "Dimension": pi.Dimension,
        "Qual": pi.Qual,
        "Prévu_h": pi.Prévu_h,
        "Réalisé_h":pi.Réalisé_h,
        "Conformité_C": pi.Conformité_C,
        "Conformité_NC": pi.Conformité_NC
                
             })
            
        }).then(resp=>resp.json())
          
        


           

          
        }} >Démarrer</Button  ></td>
      <td>  <Button variant="outline-danger" id={pi.Ref+'2'} onClick={() => {
        
        setTtwo(new Date())
        console.log(ttwo)
        document.getElementById(pi.Ref+pi.Réalisé_h).innerHTML=  Math.trunc(((ttwo.getTime() - tone.getTime())/1000)/3600)+'h'+Math.trunc((((ttwo.getTime() - tone.getTime())/1000)%3600)/60)+'m'+Math.trunc((((ttwo.getTime() - tone.getTime())/1000)%3600)%60)+'s'

           document.getElementById(pi.Ref).innerHTML="Interupté"
           document.getElementById(pi.Ref).style.backgroundColor="#EC7063"

           document.getElementById(pi.Ref+'1').disabled = false;
           document.getElementById(pi.Ref+'2').disabled = true;
          
          fetch('/List_OF_Pieces' ,{
            method:"PATCH",
            headers:{'Content-type':"application/json"},
            body:JSON.stringify(
               {
                
                "id_piéce": pi.id_piéce,
        "NumOF": pi.NumOF,
        "Qte": pi.Qte,
        "Ref": pi.Ref,
        "statut": "Interupté",
        "Désignation": pi.Désignation,
        "Matiére": pi.Matiére,
        "Dimension": pi.Dimension,
        "Qual": pi.Qual,
        "Prévu_h": pi.Prévu_h,
        "Réalisé_h": Math.trunc((ttwo.getTime() - tone.getTime())/1000) + pi.Réalisé_h,
        "Conformité_C": pi.Conformité_C,
        "Conformité_NC": pi.Conformité_NC
                
             })
            
        }).then(resp=>resp.json())
        .then(window.location.reload(false))
        
        

           
           
          
        }} >Interrompre </Button></td>
      <td>  <Button variant="outline-warning" id={pi.Ref+'3'}  onClick={() => {
        
           document.getElementById(pi.Ref).innerHTML="Terminé"
           document.getElementById(pi.Ref).style.backgroundColor="#F4D03F"
           document.getElementById(pi.Ref+pi.Réalisé_h).innerHTML=Math.floor(pi.Réalisé_h/3600 )+'h'+Math.floor((pi.Réalisé_h%3600)/60)+'m'+Math.floor((pi.Réalisé_h%3600)%60)+'s'
            document.getElementById(pi.Ref+'1').disabled=true;
            document.getElementById(pi.Ref+'2').disabled=true;
            document.getElementById(pi.Ref+'3').disabled=true;

          
          
          fetch('/List_OF_Pieces' ,{
            method:"PATCH",
            headers:{'Content-type':"application/json"},
            body:JSON.stringify(
               {
                
                "id_piéce": pi.id_piéce,
        "NumOF": pi.NumOF,
        "Qte": pi.Qte,
        "Ref": pi.Ref,
        "statut": "Terminé",
        "Désignation": pi.Désignation,
        "Matiére": pi.Matiére,
        "Dimension": pi.Dimension,
        "Qual": pi.Qual,
        "Prévu_h": pi.Prévu_h,
        "Réalisé_h": pi.Réalisé_h,
        "Conformité_C": pi.Conformité_C,
        "Conformité_NC": pi.Conformité_NC
                
             })
            
        }).then(resp=>resp.json())
        
        
          
           
          
        }} >Terminer</Button></td>
      <td><input type="text"></input></td>

    </tr>
   ))}
  </tbody>
</Table>
</div>

  )
}
