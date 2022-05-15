import React from 'react'
import Head from './Head'
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div >
      <Head/>
      <div >
      <div class="card">
  <h5 class="card-header">About</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   <Link to={'/'}> <a  class="btn btn-primary">Go somewhere</a></Link>
  </div>
</div>

      </div>
    </div>
  )
}

export default About;