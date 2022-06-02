import {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Import Worker
import { Button, Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';










export default function Piece() {
  const [disable,setDisable]=useState(false)
  const [tableValid,setTableValid]=useState([   ])
  const [num,setNum]=useState(false)
  const [index,setindex]=useState(false)

  
 
  const { id }=useParams()
  
 
  const sleep = ms => new Promise(res => setTimeout(res, ms));
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // pdf file onChange state
    const [pdfFile, setPdfFile]=useState(null);
    const [select, setSelect]=useState(null);
    const [url, setUrl]=useState(null);


  //dzvvt9nip
  //adraniaymen
  //CLOUDINARY_URL=cloudinary://585243671338116:WCQtzY6IFGYTA4lCPtyEs0sgK-Q@dzvvt9nip
    // pdf file error state
    const [pdfError, setPdfError]=useState('');
    // const formData = new FormData();
  
    // handle file onChange event
    const allowedFiles = ['application/pdf'];


    useEffect(() => {
     
      const two = String(id).slice(7);
      setindex(Number(two))
      const one = String(id).slice(0, 7);
      setNum(Number(one))
       fetch('/validationOF').then(resp=>resp.json())
       .then(resp=>resp.map((piece)=>{
         if(piece.NumOF==num){
             if(piece.valide==1){
                 setDisable(true)
                
                
             }
    
      }
    }))

    fetch('/List_OF_Pieces').then(resp=>resp.json())
    .then(resp=>resp.map((piece)=>{
      if((piece.id_piéce==index)&&(piece.lien!='..')){
         
         setUrl(piece.lien)}
         else {
           console.log('failed')
         }
         
      
    

    }))
  })
   const send=()=>{
    
    fetch(`/List_OF_Pieces/${index}`,{
           method:"PATCH",
           headers:{'Content-type':"application/json"},
           body:JSON.stringify(
             {
           
              "id_piéce": index,
               "NumOF": num,
               "id_plan": id,
              "lien": url
             
           }
             )
        
         })
         .then(res=>console.log(res))
   } 
const upload=()=>{
  
      console.log(index)
const form=new FormData()
form.append('file',select)
form.append('upload_preset','adraniaymen')
axios.post("https://api.cloudinary.com/v1_1/dzvvt9nip/upload",form)
.then(result=>setUrl(result.data.secure_url))

//   .then(resp=>fetch(`/List_OF_Pieces/${index}`,{
//     method:"PATCH",
//     headers:{'Content-type':"application/json"},
//     body:JSON.stringify(
//       {
     
//         "NumOF": num,
//         "id_plan": id,
//        "lien": resp
       
//     }
//       )
  
//   }))
}

    const handleFile = (e) =>{
       
      //  const formData=new FormData()
      
      //  formData.append(
      //    "myFile",
      //    pdfFile,
        
      //  );
      let selectedFile = e.target.files[0];
       setSelect(selectedFile)
       
       console.log(select)
      
        // let reader = new FileReader();
        //    reader.readAsDataURL(selectedFile[0]);
        //    reader.onloadend=(e)=>{
        //      setPdfError('');
        //      setPdfFile(e.target.result);}
       
      // if(selectedFile){
        // if(selectedFile&&allowedFiles.includes(selectedFile.type)){
        //   let reader = new FileReader();
        //   reader.readAsDataURL(selectedFile);
        //   reader.onloadend=(e)=>{
        //     setPdfError('');
        //     setPdfFile(e.target.result);
         //axios.post("/Piéce/SaveFile", formData).then(result=>console.log(result));

            
        //   }
        // }
        // else{
        //   setPdfError('Not a valid pdf: Please select only PDF');
        //   setPdfFile('');
        // }
      // }
      // else{
      //   alert('please select a PDF');
      // }
    }

    
	
	// Update the formData object
	
    
  return (
    <div className="container">

    {/* Upload PDF */}
    <form>

      
      <br></br>

      <input disabled={disable} type='file'   className="form-control"
      onChange={handleFile}></input>
      

      {/* we will display error message in case user select some file
      other than pdf */}
      {pdfError&&<span className='text-danger'>{pdfError}</span>}

    </form>

    {/* View PDF */}
   
    <div style={{display:'flex',marginTop:'25px'}}>
<div style={{width:'100px',marginRight:'50px'}} >
    <Button onClick={() => {
          upload();
          
         
          
        }} >upload</Button>
        </div>
        <div>
        <Button style={{marginLeft:'50px'}}  onClick={() => {
          send();
          
         
          
        }} >send</Button></div>

        <a style={{marginLeft:'100px',color:'green'}} href={url}><h3>url</h3></a>

</div>
    <div>
    <div className="viewer" style={{marginTop:'20px'}}>

      {/* render this if we have a pdf file */}
      {url&&(
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <Viewer fileUrl={url}
        
           ></Viewer>
        </Worker>
      )}

      {/* render this if we have pdfFile state null   */}
      {!url&&<>No file is selected yet</>}

    </div>
    </div>
  </div>
  )
}
