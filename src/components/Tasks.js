import React from 'react'
import { Table ,Button,Alert} from 'react-bootstrap'
import { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Prev } from 'react-bootstrap/esm/PageItem'




export default function Tasks(props) {
  const { id }=useParams()
  const [tablePieces,setTablePieces]=useState([   ])
  const [ttwo,setTtwo] = useState(); 
const [tone,setTone] = useState(); 
const [etat,setEtat]=useState()
const [time,setTime] = useState(); 
const [realise,setRealise]=useState(0); 
const [rest,setRest]=useState(0); 




  const send= ()=>{

     fetch('/PO_followUP',{
  method:"PATCH",
  headers:{'Content-type':"application/json"},
  body:JSON.stringify(
    {
     
      "NumOF": id,
      
      "Avancement": (realise / (rest+realise))*100
  }
    )
  
})
    
  }
  

  const getData= async ()=>{
   await fetch('/List_OF_Pieces').then(resp=>resp.json())
    .then(resp=>resp.map((piece)=>{
      if(piece.NumOF==id){
         
         tablePieces.push(piece)
         
      setTablePieces([...tablePieces])

      
      setRealise(Prevrealise=>Prevrealise + piece.Réalisé_h)
      setRest(Prevrest=>Prevrest + piece.Rest)

 
      


       console.log(piece.statut)
       if(piece.statut=="Encours"){
        console.log(piece.Ref)
        document.getElementById(piece.Ref).style.backgroundColor="#9dff9d"
        document.getElementById(piece.Ref+'2').disabled = false;
        document.getElementById(piece.Ref+'1').disabled = true;
  
  
       }
      else if(piece.statut==="Terminé"){
        console.log(piece.Ref)
        document.getElementById(piece.Ref).style.backgroundColor="#F4D03F"
        document.getElementById(piece.Ref+'1').disabled = true;
        document.getElementById(piece.Ref+'2').disabled = true;
       document.getElementById(piece.Ref+'3').disabled = true;
  
       }
       else if(piece.statut==="Interupté"){
        console.log(piece.Ref)
        document.getElementById(piece.Ref).style.backgroundColor="#EC7063"
        document.getElementById(piece.Ref+'2').disabled = true;
        document.getElementById(piece.Ref+'1').disabled = false;

  
       }
       
    
   }
 }))

   

  } 
  
   useEffect(()=>{
     
    
    getData();
   
    
   
    
   
   
    
    
    
 },[1000])
 


    

  return (

    <div>
        <div class="container " style={{marginLeft:' 50px'}} >
        <h1 className="mt-4 text-black">PO : {id} Tasks List  </h1>
        <ol className="breadcrumb mb-4">
                            
               <li className="breadcrumb-item active"><a href={`/dashboard${props.name}/PO`}>PO</a></li>
              <li className="breadcrumb-item active">Tasks</li>
          </ol>
  <div class="shadow-4 rounded-5 " style={{marginTop:'100px'}}>
    <table class="table align-middle mb-0 bg-white">
      
      <thead class="bg-light">
        <tr>
     <th>Index</th>
     <th>Refference</th>
     <th>Qualification</th>
     <th>Quantité</th>
     <th>% Complete</th>
     <th>Statut</th>
     <th>Temps Prévu</th>
     <th>Temps Réaliser</th>
     <th>Temps Restant</th>
     <th>Démarrer Tâche</th>
     <th>interrompre Tâche</th>
     <th>terminer Tâche</th>
     





   </tr>
      </thead>
      <tbody style={{width:'90%'}}>
    {tablePieces.map((pi,index)=>(
     
       <tr key={index}>
        
        <td>{index+1}</td> 
       <td >{pi.Ref}</td>
       <td>{pi.Qual}</td>
       <td>{pi.Qte}</td>
       <td>{pi.Réalisé_h / (pi.Réalisé_h + pi.Rest)*100}%</td>
       <td id={pi.Ref}>{pi.statut}</td>
      
       <td>{pi.Prévu_h}</td>
     
     
       { <td id={pi.Ref+pi.Réalisé_h}>{Math.floor(pi.Réalisé_h/3600 )+'h'+Math.floor((pi.Réalisé_h%3600)/60)+'m'+Math.floor((pi.Réalisé_h%3600)%60)+'s'}</td> }
      <td>{pi.Rest}</td>
       <td><Button  id={pi.Ref+'1'} variant="outline-success"   onClick={() => {
        
            document.getElementById(pi.Ref).innerHTML="Encours"
           
            document.getElementById(pi.Ref).style.backgroundColor="#9dff9d"
           
      
 console.log(realise)

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
         "Réalisé_h":pi.Réalisé_h / 3600,
         "Conformité_C": pi.Conformité_C,
         "Conformité_NC": pi.Conformité_NC
                
              })
            
         }).then(resp=>resp.json())
          
        


           

          
         }} >Démarrer</Button  ></td>
       <td>  <Button variant="outline-danger" id={pi.Ref+'2'} onClick={() => {
        
         setTtwo(new Date())

          
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
            
         })
         document.getElementById(pi.Ref).innerHTML="Interupté"
         document.getElementById(pi.Ref).style.backgroundColor="#EC7063"

         document.getElementById(pi.Ref+'1').disabled = false;
         document.getElementById(pi.Ref+'2').disabled = true;
        
      document.getElementById(pi.Ref+pi.Réalisé_h).innerHTML=  Math.trunc(((ttwo.getTime() - tone.getTime())/1000)/3600)+'h'+Math.trunc((((ttwo.getTime() - tone.getTime())/1000)%3600)/60)+'m'+Math.trunc((((ttwo.getTime() - tone.getTime())/1000)%3600)%60)+'s'
       
        
         window.location.reload(false)
        
        

           
          
          
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
        
        
            send();
           
          
         }} >Terminer</Button></td>
      

     </tr>
    ))}
   </tbody>

    </table>
    
  </div>
</div>
  
  </div>


  )
}