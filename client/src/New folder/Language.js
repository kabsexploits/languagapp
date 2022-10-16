import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';


var Language = ()=>{
     const [False,setFlase]=useState(false)
    const [language,setlanguage]=useState([])
    const [languages,setlanguages]=useState([])
      let context={}
    const [Result,setResult]=useState([])

    const [check,setcheck]=useState('')
      const [compare,setcompare]=useState([])
      const [f,setf]=useState()
       const Language = async ()=>{
       
              const response = await fetch(`http://127.0.0.1:8000/lan`)
                const data = await response.json()
                setlanguage(data)
         
              }

              
            
     
        console.log('this')
      useEffect(()=>{
                 Language()
                 
              },[])


        const getdata=(e)=>{
            const search = e.target.value
            setResult(search)
            const filterdata = language.filter(data=>data.Text.includes(search))

            console.log(search.endsWith('k'))

            setcheck(search)
           
                console.log(check,'ch')
               setlanguages(filterdata)
        }
             
        return(
              
              <div >
              <h1>language</h1>
             <input onChange={(e)=>{getdata(e)}} 
                type="text" placeholder="type here" />
                <div>
             {check &&languages.map((ln,id)=>{return (<h1 key={id}>{ln.Meaning}</h1>)})}
                
               </div>
           </div>
          
        )

}

export default Language;