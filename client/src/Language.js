import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';


var Language = ()=>{
  const [currentMessage, setcurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [see, setsee] = useState(false);

     const [False,setFlase]=useState(false)
    const [language,setlanguage]=useState([])
    const [languages,setlanguages]=useState([])
      let context={}
    const [Result,setResult]=useState([])

    const [check,setcheck]=useState(false)
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
                  setsee(false)
                 
              },[Result])


        const getdata=(e)=>{
            const search = e.target.value
            setResult(search.toLowerCase())
            const filterdata = language.filter(data=>data.Text.toLowerCase().includes(search.toLowerCase()))
              setcheck(true)
            console.log(search.endsWith('k'))

            setcheck(search)
           
                console.log(check,'ch')
               setlanguages(filterdata)
        }
             const sendMessage=(event)=>{
                  setsee(true)
             }
        return(
              
              <div>
                 <h1>ENGLISH TO &#9658; NZEMA</h1>
  
                 <h1>Language Translator</h1>

              {check && <h1>Searching....</h1>}
              
             <input onChange={(e)=>{getdata(e)}} 
              onKeyPress={(event) => {
            event.key === "Enter" && sendMessage(event);
          }}
               
                type="text" placeholder="type here" />
                <div>
             {check &&languages.map((ln,id)=>{
               if(ln.Text==Result){
                  
                 return(see && <h1 key={id}>{ln.Meaning}</h1>)
                      
                  
             }})}
          
        {check && <button onClick={sendMessage}>Translate &#9658;</button>}
                
               </div>
           </div>
          
        )

}

export default Language;