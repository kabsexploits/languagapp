import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";


const Pics=({pic})=>{
    
      return(<div className='imageview'>

        <img src={pic} />
        

        </div>)
}


export default Pics;