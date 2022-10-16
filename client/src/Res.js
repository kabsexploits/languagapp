import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';


var Res = ({res})=>{
     
             
        return(
              
              <div >
              <h1>result</h1>
               <div>
             {res.Meaning}
           </div>
            </div>
          
        )

}

export default Res;