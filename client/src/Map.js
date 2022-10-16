import "./App.css";
import "./index.css";
import Iframe from 'react-iframe'
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from "axios"



const Test = ()=>{
    useEffect(()=>{
      
    
    



    },[])
      
const fun = async()=>{
      
         await axios.get("https://maps.google.com/maps?q=4.868329999999999,-2.24139&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed")
      .then(response => {
        console.log(response.data);
        
      })
     
    }
   return(

    <>
       
    </>



   )

}

export default Test;