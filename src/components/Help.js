import React from 'react'
import Head from './Head'
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';


const Help = () => {
  return (
    <div >
      <Head/>
      <div >
      <div class="card" style={{textAlign:'center'}}>
  <h5 class="card-header">Help</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   
  </div>
</div>

      </div>
    </div>
  )
}

export default Help;