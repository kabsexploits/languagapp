import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Pics from "./Pic"

var Start = ({Run})=>{
  const [getAllphotos,setgetAllphotos]=useState([])
  const [getids,setgetids]=useState(null)
  const [getpicid,setgetpicid]=useState([])
  
  const [img,setimg]=useState(null)

     const Getallpics = async ()=>{
       
              const response = await fetch('http://127.0.0.1:8000')
                const data = await response.json()
                setgetAllphotos(data)
                console.log(data)
              
                   
            
     }

    


     const Getallpic = async(getids)=>{
       
             const id = getids
                const response = await fetch(`http://127.0.0.1:8000/View_Photo/${id}`)
                const data = await response.json()
                 setimg(data.image)
                console.log(data.id + " just for fun")
                  
            
     }
            useEffect(()=>{
                 if(getids){
                   Getallpic(getids)
                 }
                 Getallpics()
                 
              },[getids])
        return(
              
              <div >
            {getAllphotos.map((product,id)=>(<div key={id}>
               
            <Link to={'/aa'}>
             <img src={product.image} className='smallee'/>
             </Link>
                 <div>
                   
                  <button onClick={()=>{setgetids(product.id)}}>Onclick</button>
                  
                      </div>
              </div>))}

             {img && <img src={img} className='smallee'/>}
              <Pics pic={img}/>
      
           Let build something alsome....
          
           </div>
          
        )

}

export default Start;