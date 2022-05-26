import {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';





export default function Piece() {
  const [disable,setDisable]=useState(false)
  const [tableValid,setTableValid]=useState([   ])
  const [num,setNum]=useState(false)
  
 
  const { id }=useParams()
  
 
  
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // pdf file onChange state
    const [pdfFile, setPdfFile]=useState(null);
  
    // pdf file error state
    const [pdfError, setPdfError]=useState('');
    // const formData = new FormData();
  
    // handle file onChange event
    const allowedFiles = ['application/pdf'];


    useEffect(() => {
     
      
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
    

    })
    const handleFile = (e) =>{
      
      let selectedFile = e.target.files[0];
      // formData.append(
      //   "myFile",
        
      //   pdfFile,
      //   pdfFile.name
      // );
       console.log(selectedFile.type);
       
      if(selectedFile){
        if(selectedFile&&allowedFiles.includes(selectedFile.type)){
          let reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onloadend=(e)=>{
            setPdfError('');
            setPdfFile(e.target.result);
        // axios.post("/Piéce/SaveFile", formData).then(console.log("success"));

            
          }
        }
        else{
          setPdfError('Not a valid pdf: Please select only PDF');
          setPdfFile('');
        }
      }
      else{
        alert('please select a PDF');
      }
    }

    
	
	// Update the formData object
	
    
  return (
    <div className="container">

    {/* Upload PDF */}
    <form>

      <label><h5>Upload PDF</h5></label>
      <br></br>

      <input disabled={disable} type='file' className="form-control"
      onChange={handleFile}></input>

      {/* we will display error message in case user select some file
      other than pdf */}
      {pdfError&&<span className='text-danger'>{pdfError}</span>}

    </form>

    {/* View PDF */}
    <h5>View PDF</h5>
    <div className="viewer">

      {/* render this if we have a pdf file */}
      {pdfFile&&(
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfFile}
        
           ></Viewer>
        </Worker>
      )}

      {/* render this if we have pdfFile state null   */}
      {!pdfFile&&<>No file is selected yet</>}

    </div>

  </div>
  )
}
